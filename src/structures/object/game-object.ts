import Game from '../game';
import RectBounds from './rect-bounds';
import Tag from './tag';

export interface ObjectOptions {
	layer?: number;
	tag?: Tag;
}

abstract class GameObject {
	public x = 0;
	public y = 0;

	public constructor(
		public readonly game: Game,
		public readonly options: Readonly<ObjectOptions> = {}
	) {}

	public abstract tick(): void;
	public abstract render(ctx: CanvasRenderingContext2D): void;
	public abstract getBounds(): RectBounds;

	public destroy() {
		this.game.removeObject(this);
	}
}

export default GameObject;
