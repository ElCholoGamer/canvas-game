import Game from './game';

abstract class GameObject {
	public abstract tick(game: Game): void;

	public abstract render(ctx: CanvasRenderingContext2D): void;
}

export default GameObject;
