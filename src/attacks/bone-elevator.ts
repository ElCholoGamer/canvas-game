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
		const { width, height } = this.game.canvas;

		const bottomBone = this.game.instantiate(HorizontalBone, 0, height);
		bottomBone.x = width / 2 - bottomBone.WIDTH;
		bottomBone.speed = -this.BONE_SPEED;

		const topBone = this.game.instantiate(
			HorizontalBone,
			width / 2,
			-bottomBone.HEIGHT
		);
		topBone.speed = this.BONE_SPEED;
	}

	public stop() {
		if (this.timer) {
			this.game.scheduler.cancelInterval(this.timer);
		}
	}
}

export default BoneElevator;
