import { Player } from "player.js"

const ram_usage = System.getMemoryStats();
const color_white = Color.new(255, 255, 255, 128);

let player = new Player;
let pad = Pads.get();

os.setInterval(() => {
	Screen.clear();

	print(ram_usage.used);
	player.move();
	
	Screen.flip();
})
