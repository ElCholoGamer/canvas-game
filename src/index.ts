import Game from './structures/game';
import BoneElevator from './attacks/bone-elevator';
import BoneSprite from './assets/img/bone.png';
import HeartSprite from './assets/img/heart.png';
import './index.css';

Math.clamp = function (n, min, max) {
	return Math.max(min, Math.min(n, max));
};

const canvas = document.getElementById('game') as HTMLCanvasElement;

canvas.oncontextmenu = e => {
	e.preventDefault();
	e.stopPropagation();
};

const game = new Game(canvas);
game.addAttack(BoneElevator);

(async () => {
	await game.sprites.load('heart', HeartSprite);
	await game.sprites.load('horizontalBone', BoneSprite);

	game.start();
})();
