export default class sheet() {
	constructor(width, height) {
		this.width = width;
		this.height = height;
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

