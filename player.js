let x;
let y;

let acc = 0.5;

const pad = Pads.get();

function mvdirection(direction) {
  switch (direction) {
    case -1: {
      this.x -= acc;
    }
    case 1: {
      this.x += acc;
    }
  }
}

export class Player {
  constructor(x, y) {
    x = 320;
    y = 240;

    this.x = x;
    this.y = y;
  }

  move(direction) {
    this.x += acc * direction;
  }

  detectCollision() {}

  draw() {
    Draw.circle(this.x, this.y, 32, Color.new(255, 255, 255, 128));
  }
}
