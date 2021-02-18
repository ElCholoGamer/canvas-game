import Game from '../structures/game';
import GameObject from '../structures/object/game-object';
import HurtAudio from '../assets/sound/hurt.mp3';
import RectBounds from '../structures/object/rect-bounds';
import GameMode from '../structures/player/game-mode';
import Tag from '../structures/object/tag';

class Player extends GameObject {
	public readonly SPEED = 4;
	public readonly SIZE = 25;

	private readonly sprite;
	private readonly hurtAudio = new Audio(HurtAudio);

	private vulnerable = true;
	private transparent = false;

	public mode = GameMode.RED;

	public constructor(game: Game) {
		super(game, { layer: 10 });

		const { width, height } = game.canvas;
		this.x = width / 2 - this.SIZE / 2;
		this.y = height / 2 - this.SIZE / 2;

		const heart = game.sprites.get('heart');
		if (!heart) throw new Error('Heart sprite missing');

		this.sprite = heart;
	}

	public tick() {
		this.mode.controller.tick(this);

		// Check bone collisions
		if (this.vulnerable) {
			const bounds = this.getBounds();

			for (const obj of this.game.objects) {
				if (
					obj.options.tag !== Tag.ENEMY ||
					!obj.getBounds().collide(bounds, 3)
				)
					continue;

				this.vulnerable = false;
				this.transparent = true;
				this.hurtAudio.play();

				const { scheduler } = this.game;

				const id = scheduler.scheduleInterval(() => {
					this.transparent = !this.transparent;
				}, 10);

				scheduler.schedule(() => {
					scheduler.cancelInterval(id);

					this.vulnerable = true;
					this.transparent = false;
				}, 60);

				break;
			}
		}
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.imageSmoothingEnabled = false;

		ctx.filter = `hue-rotate(${this.mode.hue}deg)`;

		if (this.transparent) ctx.globalAlpha = 0.5;

		ctx.drawImage(this.sprite, this.x, this.y, this.SIZE, this.SIZE);

		ctx.filter = 'none';
		ctx.globalAlpha = 1;
	}

	public getBounds() {
		return new RectBounds(this.x, this.y, this.SIZE, this.SIZE);
	}
}

export default Player;
