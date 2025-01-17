let width;
let height;

let startx;
let starty;

let endx;
let endy;

//
// Need some more attention
// Proablly re writing from zero, but working from now on :)
//

export default class Sprite {
  constructor(width, height, startx, starty, endx, endy) {
    this.width = width;
    this.height = height;

    this.startx = startx;
    this.starty = starty;

    this.endx === undefined ? 999 : 0;
    this.endy === undefined ? 999 : 0;
  }
  Frame(
    sheetpath,
    receivedX,
    receivedY,
    receivedW,
    receivedH,
    positionX,
    positionY,
    direction,
  ) {
    this.sheet = new Image(sheetpath, RAM);

    this.sheet.startx = receivedX;
    this.sheet.starty = receivedY;

    this.sheet.endx === receivedW ? receivedW : width;
    this.sheet.endy === receivedH ? receivedH : height;

    this.sheet.width = receivedW;
    this.sheet.height = receivedH;

    this.direction = width * this.direction;
  }
  /* DONT USE IT (IN PROGRESS)
	Animation(frames) {
		let numbers = Array.from({length: frames}, (_, i) => i).map(i => print(i))

		print(numbers);
	}
	*/
}
