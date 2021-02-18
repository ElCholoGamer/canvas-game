import Game from '../structures/game';
import GameObject from '../structures/game-object';
import RectBounds from '../structures/rect-bounds';
import Tag from '../structures/tag';

class VerticalBone extends GameObject {
	public readonly HEIGHT = 200;
	public readonly WIDTH;

	private readonly sprite: HTMLImageElement;

	public constructor(game: Game, public readonly SPEED: number) {
		super(game, { tag: Tag.ENEMY });

		const bone = game.sprites.get('verticalBone');
		if (!bone) throw new Error('Vertical bone sprite missing');

		this.WIDTH = bone.width * (this.HEIGHT / bone.height);

		this.x = SPEED < 0 ? game.canvas.width : -this.WIDTH;

		this.sprite = bone;
	}

	public tick() {
		this.x += this.SPEED;

		if (
			(this.x < -this.WIDTH && this.SPEED < 0) ||
			(this.x > this.game.canvas.width && this.SPEED > 0)
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
