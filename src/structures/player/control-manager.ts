class ControlManager {
	private readonly keys = new Map<string, boolean>();

	public constructor() {
		document.addEventListener('keydown', e => this.handleKeyPress(e));
		document.addEventListener('keyup', e => this.handleKeyUp(e));
		window.addEventListener('blur', () => this.handleBlur());
	}

	public isKeyDown(key: string): boolean {
		return this.keys.get(key) ?? false;
	}

	private handleKeyPress(e: KeyboardEvent) {
		this.keys.set(e.key, true);
	}

	private handleKeyUp(e: KeyboardEvent) {
		this.keys.set(e.key, false);
	}

	private handleBlur() {
		this.keys.clear();
	}
}

export default ControlManager;
