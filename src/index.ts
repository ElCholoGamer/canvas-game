import './index.css';
import Player from './objects/player';
import Game from './structures/game';

Math.clamp = function (n, min, max) {
	return Math.max(min, Math.min(n, max));
};

const canvas = document.getElementById('game') as HTMLCanvasElement;
const game = new Game(canvas);
game.start();

game.addObject(new Player(game));
