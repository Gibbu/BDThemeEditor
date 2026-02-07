interface Font {
	family: string;
	category: string;
}

class FontStore {
	fonts = $state<Font[]>([]);

	async get() {
		if (this.fonts.length > 0) return;

		const req = await fetch(
			'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBBCnH2fXw3fderLDDtio7CYXaJH0TAqyk'
		);
		const res = (await req.json()) as { items: Font[] };

		this.fonts = res.items.map((el) => ({
			family: el.family,
			category: el.category
		}));
	}
}

export const FONTS = new FontStore();
