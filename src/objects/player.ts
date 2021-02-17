import Game from '../structures/game';
import GameObject from '../structures/game-object';
import Heart from '../assets/heart.png';

class Player extends GameObject {
	private readonly SIZE = 50;
	private readonly SPEED = 5.5;

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

		const w = controls.isKeyDown('w');
		const a = controls.isKeyDown('a');
		const s = controls.isKeyDown('s');
		const d = controls.isKeyDown('d');

		if (w) this.y -= this.SPEED;
		if (a) this.x -= this.SPEED;
		if (s) this.y += this.SPEED;
		if (d) this.x += this.SPEED;

		this.x = Math.clamp(this.x, 0, canvas.width - this.SIZE);
		this.y = Math.clamp(this.y, 0, canvas.height - this.SIZE);
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = 'red';

		ctx.imageSmoothingEnabled = false;

		ctx.drawImage(this.sprite, this.x, this.y, this.SIZE, this.SIZE);
	}
}

export default Player;
