import Sprite from "sprite.js"

let x;
let y;
let xpos;
let ypos;
let direction;

const pad = Pads.get();

let sprite = new Sprite; 

const color_white = Color.new(255, 255, 255, 128);
const acc = 1;
const mtop = 6;
const frc = acc;

export default class Sonic {
	constructor(x, y, direction) {
		x = xpos;
		y = ypos;

		this.x = x;
		this.y = y;
		this.direction = direction;
	}
	moveset() {
		if (pad.pressed(Pads.LEFT)) {
			if (x > -mtop) {
				this.x -= this.acc;
				this.direction = this.width * -1;
				print("esquerda");
			}
		}
		if (pad.pressed(Pads.RIGHT)) {
			if (x < mtop) {
				this.x += acc;
				this.direction = this.width * 1;
				print("direita");
			}
		}
	}
	createSelf() {
		if (this.x === 0) {
			sprite.Frame("sonic/idle_0.png", 0, 0, 24, 32, this.x, this.y, direction);
		}
	}
}
