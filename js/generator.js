/**
	* The generator of "Jde chleba a potká ..."
	* m@rtlin, 22.8.2018
	*
	*/
 
if (typeof exports !== 'undefined') {
 
	exports.generate = function (pastries, spreads) {
		return generate(pastries, spreads);
	};

}

function generate(pastries, spreads) {
	var result = "";
	
	var count = pastries.length * spreads.length;
	for (var i = 0; i < count; i++) {
			var pastryIndex = i / spreads.length;
			var spreadIndex = i % spreads.length;

			var pastriesAlreadyIn = alreadyIn(pastries, pastryIndex);
			var lastSpreadsAlreadyIn = alreadyIn(spreads, spreadIndex);

			var terms = generateTerms(pastriesAlreadyIn, spreads, lastSpreadsAlreadyIn);
			var termsStr = stringifyTerms(terms);
			result += termsStr + "\n";
	}
	
	return result;
}

///////////////////////////////////////////////////////////

function generateTerms(pastries, allSpreads, lastSpreads) {
	var result = [];
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
			result.push(term);
		}
	}

	return result;
}

function createTerm(pastry, spread) {
	return { 'pastry': pastry, 'spread': spread };
}

///////////////////////////////////////////////////////////

function stringifyTerms(listOfTerms) {
	var result = "";
	for (var i = 0; i < listOfTerms.length; i++) {
		var term = listOfTerms[i];
		var termStr = stringifyTerm(term);
		
		result += termStr;
		if (i + 1 < listOfTerms.length) {
			result += ", ";
		}
		//TODO else " a "
	}

	return result;
}

function stringifyTerm(term) {
	var pastry = term['pastry'];
	var spread = term['spread'];

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



