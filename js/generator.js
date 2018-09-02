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
/*
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
*/

function generate(pastries, spreads, beforeFirstLinePattern, firstLinePattern, iterLinePattern, afterLastLinePattern) {
	var result = "";
	
	var line = renderLine(beforeFirstLinePattern, null, terms);
	result += line + "\n";
	
	var count = pastries.length * spreads.length;
	for (var i = 0; i < count; i++) {
			var currentTerm = generateTerm(pastries, spreads, i);
			var terms = generateTerms(pastries, spreads, i);

			
			var linePattern;
			if (i == 0) {
				linePattern = firstLinePattern;
			} else {
				linePattern = iterLinePattern;
			}

			var line = renderLine(linePattern, currentTerm, terms);
			result += line + "\n";
	}
	
	var line = renderLine(afterLastLinePattern, null, terms);
	result += line + "\n";
	return result;
}

function renderLine(linePattern, currentTerm, terms) {
	var result = linePattern;
	
	if (currentTerm) {
		var currentTermStr = stringifyTerm(currentTerm);
		result = result.replace(/CURRENT\_TERM/g, currentTermStr);
	}
	
	if (terms) {
		var termsStr = stringifyTerms(terms);
		result = result.replace(/TERMS/g, termsStr);
	}
	
	return result;
}

///////////////////////////////////////////////////////////

function generateTerms(pastries, spreads, count) {
	var result = [];
	for (var i = 0; i < count; i++) {
		var term = generateTerm(pastries, spreads, i);
		result.push(term);
	}

	return result;
}

function generateTerm(pastries, spreads, index) {
	var pastryIndex = Math.floor(index / spreads.length);
	var spreadIndex = index % spreads.length;


	var pastry = pastries[pastryIndex];
	var spread = spreads[spreadIndex];
console.log(pastryIndex, spread);
	return createTerm(pastry, spread);
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



