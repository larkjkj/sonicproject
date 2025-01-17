import Sprite from "sprite.js"

let x = 320;
let y = 224;

let sprite = new Sprite;

const pad = Pads.get();
const color_white = Color.new(255, 255, 255, 128);


export class Player {
	constructor(x, y, direction) {
		this.x === undefined ? x : 320;
		this.y === undefined ? y : 224;

		this.direction === undefined ? 1 : -1
	}
		
	move() {
		pad.update();
		
		if (pad.pressed(Pads.LEFT)) {
			print("esquerda")
			x -= 1;
			sprite.Frame("sonic/idle_0.png", 0, 0, 24, 32, x, y, 0)
		}
		
		if (pad.pressed(Pads.RIGHT)) {
			print("direita")
			x += 1;
			sprite.Frame("sonic/idle_0.png", 0, 0, 24, 32, x, y, 0)
		}

		if (pad.pressed(Pads.CROSS)) {
			sprite.Frame("sonic/idle_sheet.png", 0, 0, 99, 99, x, y, 0)
		}
	}
}
