import './index.css';
import Player from './objects/player';
import Game from './structures/game';

const canvas = document.getElementById('game') as HTMLCanvasElement;
const game = new Game(canvas);
game.start();

game.addObject(new Player());
