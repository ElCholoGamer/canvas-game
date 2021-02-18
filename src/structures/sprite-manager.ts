class SpriteManager {
	private readonly sprites = new Map<string, HTMLImageElement>();

	public load(key: string, src: string) {
		return new Promise<HTMLImageElement>((resolve, reject) => {
			const sprite = new Image();
			sprite.src = src;

			sprite.onload = () => {
				this.sprites.set(key, sprite);
				resolve(sprite);
			};
			sprite.onerror = e => reject(e);
		});
	}

	public get(key: string) {
		return this.sprites.get(key);
	}
}

export default SpriteManager;
