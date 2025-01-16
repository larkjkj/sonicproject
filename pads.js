export default class Input {
	updateInput() {
		const pad = Pads.get();	
		pad.update();
		
		if (pad.pressed(Pads.CROSS)) {
			print("Saída");
			System.exitToBrowser();
		}
	}
}
