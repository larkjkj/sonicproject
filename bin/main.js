import Sheet from "sheet.js"
import Sonic from "sonic.js"

const sonic = new Sonic;
const sprite = new Sheet;
const ram_usage = System.getMemoryStats();

function createSonic() {
	let sonicIdle = sprite.Sprite("sonic/idle_sheet.png", 320, 244, 24, 32, 320, 244, 1);	
	sonic.moveset();
}

os.setInterval(() => {
	print(ram_usage.used);
	Screen.clear();	
		createSonic();
	Screen.flip();
}, 0)
