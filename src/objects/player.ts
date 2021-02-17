import Game from '../structures/game';
import GameObject from '../structures/game-object';
import Heart from '../assets/heart.png';

class Player extends GameObject {
	private readonly SIZE = 30;
	private readonly SPEED = 4.5;

	private readonly sprite = new Image();
	private x: number;
	private y: number;

	public constructor(private readonly game: Game) {
		super();

		const { width, height } = game.canvas;
		this.x = width / 2 - this.SIZE / 2;
		this.y = height / 2 - this.SIZE / 2;

		this.sprite.src = Heart;
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
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(this.sprite, this.x, this.y, this.SIZE, this.SIZE);
	}
}

export default Player;
