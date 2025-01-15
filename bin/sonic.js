let x;
let y;
let xpos;
let ypos;
let direction;

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
		sprite.Sprite("sonic/idle_sheet.png", 0, 0, 24, 12, this.x, this.y, 1)
	}
	moveLeft() {	
		if (x > -mtop) {
			this.x -= this.acc;
			this.direction = this.width * -1;
		}
		sprite.Sprite("sonic/idle_sheet.png", 0, 0, 24, 12, this.x, this.y, 1)
	}
	moveRight() {
		if (x < mtop) {
			this.x += acc;
			this.direction = this.width * 1;
		}
		sprite.Sprite("sonic/idle_sheet.png", 0, 0, 24, 12, this.x, this.y, 1)
	}
}
