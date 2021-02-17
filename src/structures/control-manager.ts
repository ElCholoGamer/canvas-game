class ControlManager {
	private readonly keys = new Map<string, boolean>();

	public constructor() {
		document.addEventListener('keydown', e => this.handleKeyPress(e));
		document.addEventListener('keyup', e => this.handleKeyUp(e));
	}

	private handleKeyPress(e: KeyboardEvent) {
		this.keys.set(e.key, true);
	}

	private handleKeyUp(e: KeyboardEvent) {
		this.keys.set(e.key, false);
	}

	public isKeyDown(key: string): boolean {
		return this.keys.get(key) ?? false;
	}
}

export default ControlManager;
