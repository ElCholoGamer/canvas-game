import Player from '../objects/player';
import Attack from './attack';
import ControlManager from './player/control-manager';
import GameObject from './object/game-object';
import Scheduler from './scheduler';
import SpriteManager from './sprite-manager';

type AttackConstructor = new (game: Game) => Attack;

class Game {
	private _player: Player | null = null;
	public readonly controls = new ControlManager();
	public readonly scheduler = new Scheduler();
	public readonly sprites = new SpriteManager();

	private readonly attacks: AttackConstructor[] = [];
	private _objects: GameObject[] = [];

	public constructor(public readonly canvas: HTMLCanvasElement) {
		this.update = this.update.bind(this);
	}

	public start() {
		const { width, height } = this.canvas;
		this._player = this.instantiate(Player, width / 2, height / 2);

		const offset = this._player.SIZE / 2;
		this._player.x -= offset;
		this._player.y -= offset;

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
		const sorted = this._objects.sort(
			(a, b) => (a.options.layer || 0) - (b.options.layer || 0)
		);
		ctx.clearRect(0, 0, width, height);

		for (const obj of sorted) {
			obj.render(ctx);
		}

		requestAnimationFrame(this.update);
	}

	private nextAttack() {
		if (!this.attacks.length || !this._player) return;

		const ctor = this.attacks[Math.floor(Math.random() * this.attacks.length)];
		const attack = new ctor(this);

		this._player.mode = attack.mode;
		attack.start();

		this.scheduler.schedule(() => {
			attack.stop();
			this.scheduler.schedule(() => this.nextAttack(), 60);
		}, attack.duration);
	}

	public instantiate<T extends GameObject, A extends any[]>(
		ctor: new (game: Game, ...args: A) => T,
		x: number,
		y: number,
		...args: A
	): T {
		const obj = new ctor(this, ...args);
		obj.x = x;
		obj.y = y;

		this._objects.push(obj);
		return obj;
	}

	public addAttack(ctor: AttackConstructor) {
		this.attacks.push(ctor);
	}

	public removeObject(obj: GameObject) {
		this._objects = this._objects.filter(o => o !== obj);
	}

	public get objects(): ReadonlyArray<GameObject> {
		return this._objects;
	}

	public get player() {
		return this._player;
	}
}

export default Game;
