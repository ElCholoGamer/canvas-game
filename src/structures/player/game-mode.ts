import ModeController from './mode-controller';
import RedController from './modes/red-controller';
import BlueController from './modes/blue-controller';

class GameMode {
	public static RED = new GameMode(0, new RedController());
	public static BLUE = new GameMode(240, new BlueController());

	private constructor(
		public readonly hue: number,
		public readonly controller: ModeController
	) {}
}

export default GameMode;
