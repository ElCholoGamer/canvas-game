import Game from '../structures/game';
import GameObject from '../structures/game-object';
import Heart from '../assets/heart.png';

class Player extends GameObject {
	private readonly SIZE = 40;
	private readonly SPEED = 4.5;

	private readonly sprite = new Image();
	private x = 0;
	private y = 0;

	public constructor() {
		super();
		this.sprite.src = Heart;
	}

	public tick(game: Game) {
		const { controls } = game;

		const w = controls.isKeyDown('w');
		const a = controls.isKeyDown('a');
		const s = controls.isKeyDown('s');
		const d = controls.isKeyDown('d');

		if (w) this.y -= this.SPEED;
		if (a) this.x -= this.SPEED;
		if (s) this.y += this.SPEED;
		if (d) this.x += this.SPEED;
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = 'red';

		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(this.sprite, this.x, this.y, this.SIZE, this.SIZE);
	}
}

export default Player;
