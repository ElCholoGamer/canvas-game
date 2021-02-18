class RectBounds {
	public endX: number;
	public endY: number;

	public constructor(
		public x: number,
		public y: number,
		public width: number,
		public height: number
	) {
		this.endX = x + width;
		this.endY = y + height;
	}

	public collide(rect: RectBounds) {
		const isLeft = this.endX < rect.x;
		const isRight = this.x > rect.endX;
		const isAbove = this.endY < rect.y;
		const isBelow = this.y > rect.endY;

		return !isLeft && !isRight && !isAbove && !isBelow;
	}
}

export default RectBounds;
