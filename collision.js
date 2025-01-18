let x, y, w, h;

export class Solid {}

export class Rigid {
  gravity() {
    this.y -= 1;
  }
}
