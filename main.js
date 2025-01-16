import Sonic from "sonic.js"

const pad = Pads.get();

const sonic = new Sonic;
const ram_usage = System.getMemoryStats();

os.setInterval(() => {
	pad.update();

	print(ram_usage.used);
	Screen.clear();
		sonic.createSelf();
	Screen.flip();
})
