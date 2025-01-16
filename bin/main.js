import Sheet from "sheet.js"
import Sonic from "sonic.js"

const sonic = new Sonic;
const sprite = new Sheet;
const ram_usage = System.getMemoryStats();

function test() {
	let sonicIdle = sprite.Sprite("sonic/idle_sheet.png", 0, 0, 24, 32, 320, 244, 1);	
}

test();

os.setInterval(() => {
	print(ram_usage.used);
	Screen.clear();	
		test();
	Screen.flip();
}, 0)
