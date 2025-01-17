import { Rigid } from "collision.js";

let x;
let y;

let acc = 0.5;

const pad = Pads.get();

export class Player {
  constructor(x, y) {
    x = 320;
    y = 240;

    this.x = x;
    this.y = y;
  }

  draw() {
    Draw.circle(this.x, this.y, 32, Color.new(255, 255, 255, 128));
  }
  move(direction) {
    this.x += acc * direction;
  }
}
