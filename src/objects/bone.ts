import Game from '../structures/game';
import GameObject from '../structures/object/game-object';
import Tag from '../structures/object/tag';

abstract class Bone extends GameObject {
	public speed = 0;

	public constructor(game: Game) {
		super(game, { tag: Tag.ENEMY });
	}

	public tick() {
		this.move();

		const bounds = this.getBounds();
		const p = this.game.player;

		if (p?.getBounds().collide(bounds, 3)) {
			p.hit();
		}
	}

	protected abstract move(): void;
}

export default Bone;
