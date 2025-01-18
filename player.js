import { Rigid } from "collision.js";

let x;
let y;

const mtop = 15;
const acc = 0.5;
const ysp = 0.5;

const rigid = new Rigid();
const pad = Pads.get();

function acceleration(speed) {
  if (speed >= acc) {
    speed += mtop;
  }
  if (-speed <= -acc) {
    speed -= mtop;
  }
}

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

  moveX(direction) {
    this.x += acc * direction;
    acceleration(this.x);
  }
  moveY(direction) {
    this.y += acc * direction;
  }
}
