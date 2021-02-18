import Game from '../structures/game';
import GameObject from '../structures/game-object';
import HurtAudio from '../assets/sound/hurt.mp3';
import HorizontalBone from './horizontal-bone';
import RectBounds from '../structures/rect-bounds';

class Player extends GameObject {
	private readonly SIZE = 25;
	private readonly SPEED = 4;

	private readonly sprite;
	private readonly hurtAudio = new Audio(HurtAudio);

	private vulnerable = true;

	public constructor(game: Game) {
		super(game, 10);

		const { width, height } = game.canvas;
		this.x = width / 2 - this.SIZE / 2;
		this.y = height / 2 - this.SIZE / 2;

		const heart = game.sprites.get('heart');
		if (!heart) throw new Error('Heart sprite missing');

		this.sprite = heart;
	}

	public tick() {
		const { controls, canvas } = this.game;

		const up = controls.isKeyDown('ArrowUp') || controls.isKeyDown('w');
		const left = controls.isKeyDown('ArrowLeft') || controls.isKeyDown('a');
		const down = controls.isKeyDown('ArrowDown') || controls.isKeyDown('s');
		const right = controls.isKeyDown('ArrowRight') || controls.isKeyDown('d');

		if (up) this.y -= this.SPEED;
		if (left) this.x -= this.SPEED;
		if (down) this.y += this.SPEED;
		if (right) this.x += this.SPEED;

		this.x = Math.clamp(this.x, 0, canvas.width - this.SIZE);
		this.y = Math.clamp(this.y, 0, canvas.height - this.SIZE);

		// Check bone collisions
		if (this.vulnerable) {
			const bounds = this.getBounds();

			for (const obj of this.game.objects) {
				if (
					!(obj instanceof HorizontalBone) ||
					!obj.getBounds().collide(bounds)
				)
					continue;

				this.vulnerable = false;
				this.hurtAudio.play();
				this.game.scheduler.schedule(() => {
					this.vulnerable = true;
				}, 30);

				break;
			}
		}
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(this.sprite, this.x, this.y, this.SIZE, this.SIZE);
	}

	public getBounds() {
		return new RectBounds(this.x, this.y, this.SIZE, this.SIZE);
	}
}

export default Player;
