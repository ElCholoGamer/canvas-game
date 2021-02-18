import Player from '../../objects/player';

abstract class ModeController {
	public abstract tick(player: Player): void;
}

export default ModeController;
