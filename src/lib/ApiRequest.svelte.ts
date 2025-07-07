import { bytesToMegabytes } from './utils.svelte';
import { createId } from '@paralleldrive/cuid2';

const APIs: Record<
	string,
	{
		url: string;
		headers?: string;
		maxSize?: number;
	}
> = {
	imgur: {
		url: '',
		headers: ''
	},
	imgbb: {
		url: 'https://api.imgbb.com/1/upload?key=cfc22cdc2086db1cfde408ec032cefe7',
		// url: 'https://httpbin.org/post',
		maxSize: 1048576
	},
	freeimage: {
		url: ''
	},
	base64: {
		url: 'this just here so I dont have to make a new type'
	}
};

export class ApiRequest {
	progress = $state<number>(0);
	completed = $state<boolean>(false);
	uploading = $state<boolean>(false);
	error = $state<any>(null);
	file = $state<File>();
	website = $state<keyof typeof APIs>('base64');

	Location = $derived(APIs[this.website]);

	submit(cb: (result: string) => void) {
		this.error = null;
		this.uploading = false;
		this.completed = false;
		this.progress = 0;

		if (!this.file) {
			this.error = 'You must provide an image to upload.';
			return;
		}

		const payload = new FormData();
		payload.append('image', this.file, createId());

		if (this.Location.maxSize && this.file.size > this.Location.maxSize) {
			this.error = `Image is too large. Max size: ${bytesToMegabytes(this.Location.maxSize)}MB`;
			console.error(
				`[BDEditor] ${this.file.name} is too large for ${this.website}.\n`,
				`Your image size: ${this.file.size}\n`,
				`${this.website} max file size: ${this.Location.maxSize}`
			);
			return;
		}

		const req = new XMLHttpRequest();

		req.open('POST', this.Location.url);

		if (this.Location.headers) {
			Object.entries(this.Location.headers).forEach(([Key, value]) => {
				req.setRequestHeader(Key, value);
			});
		}

		req.upload.addEventListener('progress', (e) => {
			this.progress = (e.loaded / e.total) * 100;
		});
		req.addEventListener('load', () => {
			if (!req.status.toString().startsWith('20')) {
				this.error = 'An error has occured when uploading the image.';
				console.error('[BDEditor]', req.response);
				return;
			}

			if (this.website === 'imgbb') {
				const { success, data } = JSON.parse(req.response);
				if (success) cb(data.url);
			}

			this.uploading = false;
			this.completed = true;
		});

		req.send(payload);
		this.uploading = true;
	}
}
