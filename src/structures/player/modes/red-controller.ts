import Player from '../../../objects/player';
import ModeController from '../mode-controller';

class RedController extends ModeController {
	public tick(player: Player) {
		const {
			game: { controls, canvas },
			SPEED,
			SIZE,
		} = player;

		const up = controls.isKeyDown('ArrowUp') || controls.isKeyDown('w');
		const left = controls.isKeyDown('ArrowLeft') || controls.isKeyDown('a');
		const down = controls.isKeyDown('ArrowDown') || controls.isKeyDown('s');
		const right = controls.isKeyDown('ArrowRight') || controls.isKeyDown('d');

		if (up) player.y -= SPEED;
		if (left) player.x -= SPEED;
		if (down) player.y += SPEED;
		if (right) player.x += SPEED;

		player.x = Math.clamp(player.x, 0, canvas.width - SIZE);
		player.y = Math.clamp(player.y, 0, canvas.height - SIZE);
	}
}

export default RedController;
