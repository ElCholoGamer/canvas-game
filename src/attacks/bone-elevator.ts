import HorizontalBone from '../objects/horizontal-bone';
import Attack from '../structures/attack';
import Game from '../structures/game';
import GameMode from '../structures/player/game-mode';

class BoneElevator extends Attack {
	private readonly BONE_SPEED = 3.5;

	private timer: number | null = null;

	public constructor(game: Game) {
		super(game, { duration: 600, mode: GameMode.RED });
	}

	public start() {
		this.timer = this.game.scheduler.scheduleInterval(
			() => this.createBones(),
			40
		);
	}

	private createBones() {
		const half = this.game.canvas.width / 2;

		const downBone = new HorizontalBone(this.game, this.BONE_SPEED);
		downBone.x = half - downBone.WIDTH;
		this.game.addObject(downBone);

		const upBone = new HorizontalBone(this.game, -this.BONE_SPEED);
		upBone.x = half;
		this.game.addObject(upBone);
	}

	public stop() {
		if (this.timer) {
			this.game.scheduler.cancelInterval(this.timer);
		}
	}
}

export default BoneElevator;
