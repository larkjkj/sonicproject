import Draw from "draw.js"
import Sonic from "sonic.js"

const sonic = new Sonic;
const draw = new Draw;
const ram_usage = System.getMemoryStats();

function createSonic() {
	draw.Sprite("sonic/idle_sheet", 0, 0, 24, 32, sonic.this.x, sonic.this.y, 0);
	sonic.moveset();
}

os.setInterval(() => {
	print(ram_usage.used);
	Screen.clear();	
		createSonic();
	Screen.flip();
}, 0)
