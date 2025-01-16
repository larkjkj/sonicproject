let x;
let y;
let xpos;
let ypos;
let direction;

let pad = Pads.get();

const acc = 1;
const mtop = 6;
const frc = acc;

export default class Sonic {
	constructor(x, y) {
		x = xpos;
		y = ypos;

		this.x = x;
		this.y = y;

		this.acc = acc;
		this.mtop = mtop;
		this.direction = direction;
	}
	moveset() {
		if (pad.pressed(Pads.LEFT)) {
			if (x > -mtop) {
				this.x -= this.acc;
				this.direction = this.width * -1;
			}
		}
		if (pad.pressed(Pads.RIGHT)) {
			if (x < mtop) {
				this.x += acc;
				this.direction = this.width * 1;
			}
		}
	}
}
