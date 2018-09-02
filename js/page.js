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

	var beforeFirstLinePattern = "Ahoj,"; 
	var firstLinePattern = "Jde TERMS a potká CURRENT_TERM. A CURRENT_TERM říká: 'TERMS' můžu s váma?";
	var iterLinePattern = " A oni, že jo. Takže jde TERMS a potká CURRENT_TERM. A CURRENT_TERM říká: 'TERMS' můžu s váma?";
	var afterLastLinePattern = "A oni, že ne. :-(";

	var result = generate(pastries, spreads, beforeFirstLinePattern, firstLinePattern, iterLinePattern, afterLastLinePattern);
	return result;
}

