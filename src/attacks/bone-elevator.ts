import HorizontalBone from '../objects/horizontal-bone';
import Attack from '../structures/attack';
import Game from '../structures/game';

class BoneElevator extends Attack {
	private readonly BONE_SPEED = 3.5;

	private timer: number | null = null;

	public constructor(game: Game) {
		super(game, 600);
	}

	public start() {
		this.timer = this.game.scheduler.scheduleInterval(
			() => this.addBones(),
			40
		);
	}

	private addBones() {
		const BONE_WIDTH = 200;

		const half = this.game.canvas.width / 2;

		const downBone = new HorizontalBone(
			this.game,
			half - BONE_WIDTH,
			this.BONE_SPEED
		);
		this.game.addObject(downBone);

		const upBone = new HorizontalBone(this.game, half, -this.BONE_SPEED);
		this.game.addObject(upBone);
	}

	public stop() {
		if (this.timer) {
			this.game.scheduler.cancelInterval(this.timer);
		}
	}
}

export default BoneElevator;
