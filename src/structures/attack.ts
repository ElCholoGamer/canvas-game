import Game from './game';
import GameMode from './player/game-mode';

export interface AttackOptions {
	duration: number;
	mode: GameMode;
}

abstract class Attack {
	public readonly duration: number;
	public readonly mode: GameMode;

	public constructor(protected readonly game: Game, options: AttackOptions) {
		this.duration = options.duration;
		this.mode = options.mode;
	}

	public abstract start(): void;
	public abstract stop(): void;
}

export default Attack;
