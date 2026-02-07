import { createId } from '@paralleldrive/cuid2';
import { bytesToMegabytes } from './utils.svelte';

export class ImageAPI {
	uploading = $state<boolean>(false);
	completed = $state<boolean>(false);
	progress = $state<number>(0);
	error = $state<any>();
	file = $state<File | null>(null);
	website = $state<string>('base64');
	result = $state<string | null>(null);

	#url = '';
	#payload = new FormData();
	#headers: Record<string, string> = {};
	#maxSize = 0;

	send = (cb: (result: string) => void) => {
		this.error = null;

		const map = {
			imgbb: this.imgbb,
			imghippo: this.imghippo,
			imgur: this.imgur
		};

		map[this.website as keyof typeof map]();

		if (!this.checkSize()) return;

		const req = new XMLHttpRequest();
		req.open('POST', this.#url);

		if (Object.keys(this.#headers).length > 0) {
			Object.entries(this.#headers).forEach(([key, value]) => {
				req.setRequestHeader(key, value);
			});
		}

		req.upload.addEventListener('progress', (e) => {
			this.progress = (e.loaded / e.total) * 100;
		});

		req.addEventListener('load', () => {
			if (req.status === 403 || req.status === 429) {
				this.error = `${this.website} has rate limted the API key. Try another hosting service.`;
				console.error(
					'[BDEditor - API_RATE_LIMIT]',
					`${this.website} has rate limited the API key.`
				);
				this.reset();
				return;
			} else if (!req.status.toString().startsWith('20')) {
				this.error = 'An error has occured when uploading the image.';
				console.error('[BDEditor - API_UPLOAD_FAIL]', JSON.parse(req.response));
				console.error(
					'[BDEditor] If this error persists, join my Discord server: https://discord.gg/ZHthyCw',
					'with a screenshot of the error above.'
				);
				this.reset();
				return;
			}

			const { success, data } = JSON.parse(req.response);
			if (!success) {
				this.error = 'An error has occured.';
				console.error('[BDEditor - API_SUCCESS_FAIL]', JSON.parse(req.response));
				return;
			}

			cb(data.url);
			this.result = data.url;

			this.completed = true;
			this.uploading = false;
		});

		this.uploading = true;
		req.send(this.#payload);
	};

	reset = () => {
		this.uploading = false;
		this.completed = false;
		this.progress = 0;

		this.#payload = new FormData();
		this.#headers = {};
	};

	checkFile = (file: File | null): file is File => {
		if (!file) {
			this.error = 'You must provide an image.';
			return false;
		}
		return true;
	};
	checkSize = () => {
		if (!this.checkFile(this.file)) return false;

		if (this.#maxSize && this.file.size > this.#maxSize) {
			this.error = `Image is too large. Max size: ${bytesToMegabytes(this.#maxSize)}MB`;
			console.error(
				'[BDEditor - IMAGE_TOO_LARGE]\n',
				`Your image size: ${this.file.size}\n`,
				`Max image size: ${this.#maxSize}`
			);

			return false;
		}

		return true;
	};

	imgbb = () => {
		if (!this.checkFile(this.file)) return;
		this.reset();

		this.#url = 'https://api.imgbb.com/1/upload?key=cfc22cdc2086db1cfde408ec032cefe7';
		this.#payload.append('image', this.file, createId());
		this.#maxSize = 1048576;
	};

	imghippo = () => {
		if (!this.checkFile(this.file)) return;
		this.reset();

		this.#url = 'https://api.imghippo.com/v1/upload';
		this.#payload.append('file', this.file);
		this.#payload.append('api_key', 'c71f5060dfd6bd373629e02deaba0575');
	};

	imgur = () => {
		if (!this.checkFile(this.file)) return;
		this.reset();

		this.#url = 'https://api.imgur.com/3/image';
		this.#payload.append('image', this.file);
		this.#headers = {
			Authorization: 'Client-ID df424f857adea47'
		};
	};
}
