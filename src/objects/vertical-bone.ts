import Game from '../structures/game';
import RectBounds from '../structures/object/rect-bounds';
import Bone from './bone';

class VerticalBone extends Bone {
	public readonly HEIGHT = 200;
	public readonly WIDTH;

	private readonly sprite: HTMLImageElement;

	public constructor(game: Game) {
		super(game);

		const sprite = game.sprites.get('verticalBone');
		if (!sprite) throw new Error('Vertical bone sprite missing');

		this.WIDTH = sprite.width * (this.HEIGHT / sprite.height);

		this.sprite = sprite;
	}

	public move() {
		this.x += this.speed;

		if (
			(this.x < -this.WIDTH && this.speed < 0) ||
			(this.x > this.game.canvas.width && this.speed > 0)
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

export default VerticalBone;
