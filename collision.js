export class Solid {
  constructor(x, y, width, height, passtrough) {
    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    passtrough = this.passtrough;
  }

  createself(px, py, rw, rh) {
    Draw.rect(px, py, rw, rh, Color.new(255, 255, 255, 128));
  }
}
