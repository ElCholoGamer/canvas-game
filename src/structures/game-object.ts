import Game from './game';
import RectBounds from './rect-bounds';

abstract class GameObject {
	public readonly LAYER: number;
	public x: number;
	public y: number;

	public constructor(game: Game);
	public constructor(game: Game, layer: number);
	public constructor(game: Game, x: number, y: number);
	public constructor(game: Game, x: number, y: number, layer: number);
	public constructor(game: Game, x: number, y: number, layer: number);
	public constructor(
		public readonly game: Game,
		xOrLayer?: number,
		y?: number,
		LAYER?: number
	) {
		if (LAYER !== undefined) {
			this.x = xOrLayer || 0;
			this.y = y || 0;
			this.LAYER = LAYER;
			return;
		}

		if (y !== undefined) {
			this.x = xOrLayer || 0;
			this.y = y || 0;
			this.LAYER = 0;
			return;
		}

		this.x = 0;
		this.y = 0;
		this.LAYER = xOrLayer || 0;
	}

	public abstract tick(game: Game): void;
	public abstract render(ctx: CanvasRenderingContext2D): void;
	public abstract getBounds(): RectBounds;

	public destroy() {
		this.game.removeObject(this);
	}
}

export default GameObject;
