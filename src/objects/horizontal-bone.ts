import GameObject from '../structures/object/game-object';
import Game from '../structures/game';
import RectBounds from '../structures/object/rect-bounds';
import Tag from '../structures/object/tag';

class HorizontalBone extends GameObject {
	public readonly WIDTH = 200;
	public readonly HEIGHT;

	private readonly sprite: HTMLImageElement;

	public constructor(game: Game, private readonly SPEED: number) {
		super(game, { tag: Tag.ENEMY });

		const bone = game.sprites.get('horizontalBone');
		if (!bone) throw new Error('Horizontal bone sprite missing');

		this.sprite = bone;

		this.HEIGHT = bone.height * (this.WIDTH / bone.width);

		this.y = SPEED < 0 ? game.canvas.height : -this.HEIGHT;
	}

	public tick() {
		this.y += this.SPEED;

		if (
			(this.y < -this.HEIGHT && this.SPEED < 0) ||
			(this.y > this.game.canvas.height && this.SPEED > 0)
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
