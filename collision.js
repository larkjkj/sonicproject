// Every object in this game will need to a child of theses classes
// Solid represents an solid object, that CANNOT BE MOVED, only collidable
// Rigid represents an movable object, that can be moved, have self gravity, and physics

export class Solid {
  constructor(x, y, collision_width, collision_height, alpha) {
    x = 0;
    y = 0;
    collision_width = 0;
    collision_height = 0;
    alpha = 0;

    this.x = x;
    this.y = y;
    this.w = collision_width;
    this.h = collision_height;
    this.alpha = alpha;
  }

  circle(x, y, radius, visible = 1) {
    if (visible) {
      Draw.circle(x, y, radius, Color.new(255, 40, 40, 255));
    }
  }

  square(x, y, w, h, visible = 1) {
    if (visible) {
      Draw.square(x, y, w, h, Color.new(255, 40, 40, 255));
    }
  }

  line(x, y, x2, x2, visible = 1) {
    if (visible) {
      Draw.line(x, y, x2, y2, Color.new(255, 40, 40, 255));
    }
  }
}

export class Rigid {
  constructor(x, y, collision_width, collision_height, grv) {
    x = 0;
    y = 0;
    collision_width = 0;
    collision_height = 0;
    alpha = 0;

    this.x = x;
    this.y = y;
    this.w = collision_width;
    this.h = collision_height;
    this.grv = grv;
  }

  circle(x, y, w, h, alpha) {
    Draw.square(x, y, w, h, Color.new(255, 40, 40, alpha));
  }

  square(x, y, w, h, alpha) {
    Draw.square(x, y, w, h, Color.new(255, 40, 40, alpha));
  }

  line(x, y, x2, x2, alpha) {
    Draw.line(x, y, x2, y2, Color.new(255, 40, 40, alpha));
  }
}
