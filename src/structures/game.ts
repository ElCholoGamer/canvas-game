import Player from '../objects/player';
import Attack from './attack';
import ControlManager from './control-manager';
import GameObject from './game-object';
import Scheduler from './scheduler';
import SpriteManager from './sprite-manager';

type AttackConstructor = new (game: Game) => Attack;

class Game {
	public readonly controls = new ControlManager();
	public readonly scheduler = new Scheduler();
	public readonly sprites = new SpriteManager();

	private readonly attacks: AttackConstructor[] = [];
	private _objects: GameObject[] = [];

	public constructor(public readonly canvas: HTMLCanvasElement) {
		this.update = this.update.bind(this);
	}

	public start() {
		this.addObject(new Player(this));

		requestAnimationFrame(this.update);
		this.scheduler.schedule(() => this.nextAttack(), 60);
	}

	private update() {
		this.scheduler.tick();

		// Tick objects
		for (const obj of this._objects) {
			obj.tick(this);
		}

		const { width, height } = this.canvas;
		const ctx = this.canvas.getContext('2d')!;

		// Render objects
		const sorted = this._objects.sort((a, b) => a.LAYER - b.LAYER);
		ctx.clearRect(0, 0, width, height);

		for (const obj of sorted) {
			obj.render(ctx);
		}

		requestAnimationFrame(this.update);
	}

	private nextAttack() {
		if (!this.attacks.length) return;

		const ctor = this.attacks[Math.floor(Math.random() * this.attacks.length)];
		const attack = new ctor(this);

		attack.start();
		this.scheduler.schedule(() => {
			attack.stop();
			this.scheduler.schedule(() => this.nextAttack(), 60);
		}, attack.duration);
	}

	public addAttack(ctor: AttackConstructor) {
		this.attacks.push(ctor);
	}

	public addObject(obj: GameObject) {
		this._objects.push(obj);
	}

	public removeObject(obj: GameObject) {
		this._objects = this._objects.filter(o => o !== obj);
	}

	public get objects(): ReadonlyArray<GameObject> {
		return this._objects;
	}
}

export default Game;
