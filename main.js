import { Player } from "player.js";
import { Solid } from "collision.js";

const color_grey = Color.new(50, 50, 50, 128);

const memory = System.getMemoryStats();
const pad = Pads.get();
const player = new Player();
const player2 = new Player();
const solid = new Solid();

while (true) {
  Screen.clear(color_grey);

  pad.update();
  // Simulate collision
  if (pad.pressed(Pads.LEFT)) {
    player2.move(1);
  }

  if (pad.pressed(Pads.RIGHT)) {
    player2.move(-1);
  }

  print(memory.used);
  player.draw();
  if (pad.pressed(Pads.LEFT)) {
    player.move(-1);
  }
  if (pad.pressed(Pads.RIGHT)) {
    player.move(1);
  }

  solid.createself(320, 224, 32, 32);
  player2.draw();
  Screen.flip();
}
