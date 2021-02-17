import ControlManager from './control-manager';
import GameObject from './game-object';

class Game {
	public readonly controls = new ControlManager();

	private readonly objects: GameObject[] = [];

	public constructor(public readonly canvas: HTMLCanvasElement) {}

	public start() {
		this.update();
	}

	private update() {
		const { width, height } = this.canvas;
		const ctx = this.canvas.getContext('2d')!;
		ctx.clearRect(0, 0, width, height);

		console.log('Ticking');
		for (const obj of this.objects) {
			obj.tick(this);
			obj.render(ctx);
		}

		requestAnimationFrame(() => this.update());
	}

	public addObject(obj: GameObject) {
		this.objects.push(obj);
	}
}

export default Game;
