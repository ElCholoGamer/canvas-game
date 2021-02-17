interface Math {
	clamp(n: number, min: number, max: number): number;
}

declare module '*.png' {
	declare const url: string;
	export default url;
}
