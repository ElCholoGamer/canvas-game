import Game from './game';

abstract class Attack {
	public constructor(
		protected readonly game: Game,
		public readonly duration: number
	) {}

	public abstract start(): void;
	public abstract stop(): void;
}

export default Attack;
