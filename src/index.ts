import Game from './structures/game';
import BoneElevator from './attacks/bone-elevator';
import HorizontalBoneSprite from './assets/img/horizontal-bone.png';
import VerticalBoneSprite from './assets/img/vertical-bone.png';
import HeartSprite from './assets/img/heart.png';
import BoneGap from './attacks/bone-gap';
import BoneCurve from './attacks/bone-curve';
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
game.addAttack(BoneGap);
game.addAttack(BoneCurve);

(async () => {
	await game.sprites.load('heart', HeartSprite);
	await game.sprites.load('horizontalBone', HorizontalBoneSprite);
	await game.sprites.load('verticalBone', VerticalBoneSprite);

	game.start();
})();
