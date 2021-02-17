import ControlManager from './control-manager';
import GameObject from './game-object';

class Game {
	public readonly controls = new ControlManager();

	private readonly objects: GameObject[] = [];

	public constructor(private readonly canvas: HTMLCanvasElement) {}

	public start() {
		setInterval(() => this.update(), 1000 / 60);
	}

	private update() {
		const { width, height } = this.canvas;
		const ctx = this.canvas.getContext('2d')!;
		ctx.clearRect(0, 0, width, height);

		for (const obj of this.objects) {
			obj.tick(this);
			obj.render(ctx);
		}
	}

	public addObject(obj: GameObject) {
		this.objects.push(obj);
	}
}

export default Game;
