/**
	* The generator of "Jde chleba a potká ..."
	* m@rtlin, 22.8.2018
	*
	*/

exports.generate = function (pastries, spreads) {
	return generate(pastries, spreads);
};


function generate(pastries, spreads) {
	var result = "";
	
	var count = pastries.length * spreads.length;
	for (var i = 0; i < count; i++) {
			var pastryIndex = i / spreads.length;
			var spreadIndex = i % spreads.length;

			var pastriesAlreadyIn = alreadyIn(pastries, pastryIndex);
			var lastSpreadsAlreadyIn = alreadyIn(spreads, spreadIndex);

			var listStr = list(pastriesAlreadyIn, spreads, lastSpreadsAlreadyIn);
			result += listStr + "\n";
	}
	
	return result;
}

///////////////////////////////////////////////////////////

function list(pastries, allSpreads, lastSpreads) {
	var result = "";
	for (var i = 0; i < pastries.length; i++) {
		var pastry = pastries[i];

		var spreads;
		if (i + 1 < pastries.length) {
			spreads = allSpreads;
		} else {
			spreads = lastSpreads;
		}
		for (var j = 0; j < spreads.length; j++) {
			var spread = spreads[j];
			
			var term = createTerm(pastry, spread);
			result += term + ", ";
		}
	}

	return result;
}

function createTerm(pastry, spread) {
	if (spread != "") {
		return pastry + " " + spread;
	} else {
		return pastry;
	}
}

///////////////////////////////////////////////////////////

function alreadyIn(items, index) {
	return items.slice(0, index + 1);
}

function current(items, index) {
	return items[index];
}
///////////////////////////////////////////////////////////



