import VerticalBone from '../objects/vertical-bone';
import Attack from '../structures/attack';
import Game from '../structures/game';
import GameObject from '../structures/object/game-object';
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

		const topLeft = this.game.instantiate(VerticalBone, 0, topPosition);
		topLeft.speed = this.BONE_SPEED;
		topLeft.x = -topLeft.WIDTH;

		const bottomLeft = this.game.instantiate(
			VerticalBone,
			topLeft.x,
			bottomPosition
		);
		bottomLeft.speed = this.BONE_SPEED;

		const leftSide = this.game.canvas.width;

		const rightTop = this.game.instantiate(VerticalBone, leftSide, topPosition);
		rightTop.speed = -this.BONE_SPEED;

		const bottomRight = this.game.instantiate(
			VerticalBone,
			leftSide,
			bottomPosition
		);
		bottomRight.speed = -this.BONE_SPEED;
	}

	public stop() {
		if (this.timer) {
			this.game.scheduler.cancelInterval(this.timer);
		}
	}
}

export default BoneGap;
