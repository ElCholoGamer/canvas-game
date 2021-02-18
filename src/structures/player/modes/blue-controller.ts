import Player from '../../../objects/player';
import ModeController from '../mode-controller';

class BlueController extends ModeController {
	private readonly GRAVITY = 0.3;
	private readonly JUMP_FORCE = 6;
	private readonly MAX_JUMP_TICKS = 15;

	private verticalSpeed = 0;
	private grounded = false;
	private jumpTicksLeft = 0;

	public tick(player: Player) {
		const {
			game: { controls, canvas },
			SPEED,
			SIZE,
		} = player;

		const up = controls.isKeyDown('ArrowUp') || controls.isKeyDown('w');
		const left = controls.isKeyDown('ArrowLeft') || controls.isKeyDown('a');
		const right = controls.isKeyDown('ArrowRight') || controls.isKeyDown('d');

		if (left) player.x -= SPEED;
		if (right) player.x += SPEED;

		if (!this.grounded) {
			this.verticalSpeed += this.GRAVITY;
		}

		player.y += this.verticalSpeed;

		if (player.y >= canvas.height - SIZE) {
			this.grounded = true;
		}

		if (up) {
			if (this.grounded) {
				this.jumpTicksLeft = this.MAX_JUMP_TICKS;
				this.grounded = false;
			}

			if (this.jumpTicksLeft > 0) {
				this.verticalSpeed = -this.JUMP_FORCE;
				this.jumpTicksLeft--;
			}
		} else if (this.jumpTicksLeft > 0) {
			this.verticalSpeed = -(this.MAX_JUMP_TICKS - this.jumpTicksLeft) * 0.6;
			this.jumpTicksLeft = 0;
		}

		player.x = Math.clamp(player.x, 0, canvas.width - SIZE);
		player.y = Math.clamp(player.y, 0, canvas.height - SIZE);
	}
}

export default BlueController;
