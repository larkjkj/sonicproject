// Every object in this game will need to a child of theses classes
// Solid represents an solid object, that CANNOT BE MOVED, only collidable
// Rigid represents an movable object, that can be moved, have self gravity, and physics

export class Rigid {
  constructor(x, y, w, h, grv) {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    a = 0;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.grv = grv;
  }

  circle(x, y, radius, visible) {
    if (visible) {
      Draw.circle(x, y, radius, Color.new(255, 40, 40, 64));
    }
  }

  square(x, y, w, h, visible) {
    if (visible) {
      Draw.square(x, y, w, h, Color.new(255, 40, 40, 64));
    }
  }

  line(x, y, x2, x2, visible, rx) {
    if (visible) {
      Draw.line(x, y, x2, y2, Color.new(255, 40, 40, 64));
    }
  }
}

export class Solid {
  constructor(x, y, w, h, a) {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    a = 0;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.alpha = a;
  }

  circle(x, y, radius, visible = 1) {
    if (visible) {
      Draw.circle(x, y, radius, Color.new(255, 40, 40, 64));
    }
  }

  square(x, y, w, h, visible = 1) {
    if (visible) {
      Draw.square(x, y, w, h, Color.new(255, 40, 40, 64));
    }
  }

  line(x, y, x2, x2, visible = 1) {
    if (visible) {
      Draw.line(x, y, x2, y2, Color.new(255, 40, 40, 64));
    }
  }
}

const solid = new Solid();
const rigid = new Rigid();

if (
  rigid.x < solid.x + solid.w &&
  rigid.x + rigid.w > solid.x &&
  rigid.y < solid.y + solid.h &&
  rigid.y + rigid.h > solid.y
) {
  print("colidiu");
}
