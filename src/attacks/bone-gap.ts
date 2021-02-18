import VerticalBone from '../objects/vertical-bone';
import Attack from '../structures/attack';
import Game from '../structures/game';
import GameMode from '../structures/player/game-mode';

class BoneGap extends Attack {
	private readonly BONE_SPEED = 5;

	private timer: number | null = null;

	public constructor(game: Game) {
		super(game, { duration: 300, mode: GameMode.BLUE });
	}

	public start() {
		this.timer = this.game.scheduler.scheduleInterval(
			() => this.createBones(),
			45
		);
	}

	private createBones() {
		const topPosition = 0;
		const bottomPosition = this.game.canvas.height - 40;

		const leftTop = new VerticalBone(this.game, this.BONE_SPEED);
		leftTop.y = topPosition;

		const leftBottom = new VerticalBone(this.game, this.BONE_SPEED);
		leftBottom.y = bottomPosition;

		const rightTop = new VerticalBone(this.game, -this.BONE_SPEED);
		rightTop.y = topPosition;

		const rightBottom = new VerticalBone(this.game, -this.BONE_SPEED);
		rightBottom.y = bottomPosition;

		this.game.addObject(leftTop);
		this.game.addObject(leftBottom);
		this.game.addObject(rightTop);
		this.game.addObject(rightBottom);
	}

	public stop() {
		if (this.timer) {
			this.game.scheduler.cancelInterval(this.timer);
		}
	}
}

export default BoneGap;
