let width;
let height;

//
// Need some more attention
// Proablly re writing from zero, but working from now on :)
//

export default class Sprite {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	Frame(sheetpath, receivedX, receivedY, receivedW, receivedH, positionX, positionY, direction) {
		this.sheet = new Image(sheetpath, RAM);

		this.sheet.startx = receivedX;
		this.sheet.starty = receivedY;

		this.sheet.endx = receivedW;
		this.sheet.endy = receivedH;		

		this.sheet.width = receivedW;
		this.sheet.height = receivedH;

		this.direction = this.width * this.direction;
		
		this.sheet.draw(positionX, positionY);
		
		let loaded = this.sheet.ready();

		if (loaded) {
			print("Desenhado");
			return 0;
		}
		return 0;
	}
	// DONT USE IT (IN PROGRESS)
	Animation(sheetpath, frames, receivedX, receivedY, receivedW, receivedH, positionX, positionY, direction) {
		let numbers = Array.from({length: frames}, (_, i) => i).map(i => print(i)))
	}
}

