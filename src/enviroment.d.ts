interface Math {
	clamp(n: number, min: number, max: number): number;
}

declare module '*.png' {
	declare const url: string;
	export default url;
}

declare module '*.mp3' {
	declare const url: string;
	export default url;
}
