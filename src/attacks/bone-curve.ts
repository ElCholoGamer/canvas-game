import VerticalBone from '../objects/vertical-bone';
import Attack from '../structures/attack';
import Game from '../structures/game';
import GameMode from '../structures/player/game-mode';

class BoneCurve extends Attack {
	private readonly GAP_SIZE = 75;
	private readonly BONE_SPEED = 6;
	private readonly ATTACKS: ReadonlyArray<number> = [
		0,
		0,
		20,
		40,
		60,
		70,
		80,
		80,
		80,
		80,
		70,
		50,
		30,
		10,
		-10,
		-10,
		0,
		20,
		40,
		50,
		30,
		10,
		-10,
		-30,
		-40,
		-50,
		-50,
		-50,
		-40,
		-60,
		-60,
		-60,
	];

	private timer: number | null = null;
	private boneIndex = 0;

	public constructor(game: Game) {
		super(game, { duration: 300, mode: GameMode.RED });
	}

	public start() {
		this.timer = this.game.scheduler.scheduleInterval(() => this.nextBone(), 8);
	}

	private nextBone() {
		const center = this.game.canvas.height / 2 - this.ATTACKS[this.boneIndex];

		const x = this.game.canvas.width;
		const bottomBone = this.game.instantiate(
			VerticalBone,
			x,
			center + this.GAP_SIZE / 2
		);
		bottomBone.speed = -this.BONE_SPEED;

		const topBone = this.game.instantiate(
			VerticalBone,
			x,
			center - bottomBone.HEIGHT - this.GAP_SIZE / 2
		);
		topBone.speed = -this.BONE_SPEED;

		this.boneIndex++;
	}

	public stop() {
		if (this.timer) {
			this.game.scheduler.cancelInterval(this.timer);
		}
	}
}

export default BoneCurve;
