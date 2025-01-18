import { Player } from "player.js";

const color_grey = Color.new(50, 50, 50, 128);

const memory = System.getMemoryStats();
const pad = Pads.get();

const player = new Player();

while (true) {
  Screen.clear(color_grey);

  pad.update();

  print(memory.used);
  player.draw();

  if (pad.pressed(Pads.LEFT)) {
    player.moveX(-1);
  }
  if (pad.pressed(Pads.RIGHT)) {
    player.moveX(1);
  }

  if (pad.pressed(Pads.UP)) {
    player.moveY(-1);
  }
  if (pad.pressed(Pads.DOWN)) {
    player.moveY(1);
  }

  Screen.flip();
}
