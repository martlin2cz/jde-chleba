/**
	* The "Jde chleba ..." web page script
	* m@rtlin, 22.8.2018
	*
	*/

function generateButtonOnClick() {
	var generated = doGenerate();
	var element = document.getElementById('generated');

	element.innerText = generated;
}



function doGenerate() {
	var pastries = ["Lorem", "Ipsum", "Dolor"];
	var spreads =  ["", "foo", "bar"];

	return generate(pastries, spreads);
}

