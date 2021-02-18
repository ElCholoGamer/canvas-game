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

	public collide(rect: RectBounds, margin?: number): boolean {
		if (margin !== undefined) {
			const self = new RectBounds(
				this.x + margin,
				this.y + margin,
				this.width - margin * 2,
				this.height - margin * 2
			);
			const other = new RectBounds(
				rect.x + margin,
				rect.y + margin,
				rect.width - margin * 2,
				rect.height - margin * 2
			);

			return self.collide(other);
		}

		const isLeft = this.endX < rect.x;
		const isRight = this.x > rect.endX;
		const isAbove = this.endY < rect.y;
		const isBelow = this.y > rect.endY;

		return !isLeft && !isRight && !isAbove && !isBelow;
	}
}

export default RectBounds;
