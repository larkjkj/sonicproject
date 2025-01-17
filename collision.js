let x, y, w, h;

export class Solid {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
  }
}

export class Rigid {
  gravity() {
    this.y -= 1;
  }
}
