let x = 0f;
let y = 0f;

let pad = Pads.get();

let width = 0f;
let height = 0f;

let hsp = 0f;
let ysp = 0f;
let angle = 0f;
let direction = 0;

const acc = 2.646875f;
const dec = 0.5f;
const fri = acc;
const mtop = 13.0f;

let xpos = 320.0f;
let ypos = 224.0f;

const color_white = Color.new(255, 255, 255, 128);

class SpriteSheet {
	constructor(width, height, sheet, x, y, direction) {
		this.x = x;
		this.y = y;

		this.width = width;
		this.height = height;

		this.direction = direction;
	}
	Sprite(sheetpath, receivedX, receivedY, receivedW, receivedH, positionX, positionY, direction) {
		this.sheet = new Image(sheetpath, RAM);

		this.sheet.startx = receivedX;
		this.sheet.starty = receivedY;

		this.sheet.endx = receivedW;
		this.sheet.endy = receivedH;		

		this.sheet.width = receivedW;
		this.sheet.height = receivedH;

		this.direction = width * this.direction;
				
		print("Sprite colocado!");
		
		this.sheet.draw(positionX, positionY);
		return 0;
	}
	// DONT USE IT (IN PROGRESS)
	Animation(frames, sheetpath, receivedX, receivedY, receivedW, receivedH) {
		for(let i = 0; i < frames; i ++) {
			this.sheet = new Image(sheetpath, RAM);

			this.sheet.x = receivedX;
			this.sheet.y = receivedY;
			this.sheet.width = receivedW;
			this.sheet.height = receivedH;
	
			this.sheet.draw(x, y);
		}
	}
}

const sprite = new SpriteSheet;

class Sonic {
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
		if (pad.pressed(Pads.LEFT)) {
			sonic.moveLeft();
		}
		if (pad.pressed(Pads.RIGHT)) {
			sonic.moveRight();
		}
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
const sonic = new Sonic;

os.setInterval(() => {
	Screen.clear();		
	const ram_usage = System.getMemoryStats();
	 
	print(ram_usage.used);

	sonic.moveset();
	Screen.flip();
})
