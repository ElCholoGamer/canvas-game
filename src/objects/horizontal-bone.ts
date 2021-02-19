import Game from '../structures/game';
import RectBounds from '../structures/object/rect-bounds';
import Bone from './bone';

class HorizontalBone extends Bone {
	public readonly WIDTH = 200;
	public readonly HEIGHT;

	private readonly sprite: HTMLImageElement;

	public constructor(game: Game) {
		super(game);

		const sprite = game.sprites.get('horizontalBone');
		if (!sprite) throw new Error('Horizontal bone sprite missing');

		this.sprite = sprite;

		this.HEIGHT = sprite.height * (this.WIDTH / sprite.width);
	}

	public move() {
		this.y += this.speed;

		if (
			(this.y < -this.HEIGHT && this.speed < 0) ||
			(this.y > this.game.canvas.height && this.speed > 0)
		) {
			this.destroy();
		}
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(this.sprite, this.x, this.y, this.WIDTH, this.HEIGHT);
	}

	public getBounds() {
		return new RectBounds(this.x, this.y, this.WIDTH, this.HEIGHT);
	}
}

export default HorizontalBone;
