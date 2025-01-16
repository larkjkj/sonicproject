import Sprite from "sprite.js"
import Sonic from "sonic.js"

const sonic = new Sonic;
const draw = new Draw;
const ram_usage = System.getMemoryStats();

function createSonic() {	
	sonic.moveset();
}

os.setInterval(() => {
	print(ram_usage.used);
	Screen.clear();	
		sonic.moveset()
	Screen.flip();
}, 0)
