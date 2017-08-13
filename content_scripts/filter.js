var fnf = "[Fake News Filter] - ";

log("Loaded fake news filter");
isPageFakeNews(window.location.hostname);

function isPageFakeNews(url) {
	log("Is " + url + " fake news?");

	var matchedIndex = getMatchedSiteIndex(url);

	if(matchedIndex > -1) {
		var reason = getReasonForSiteMatch(matchedIndex);
		alert("Fake News Filter\n\nWarning, " + url + " has been identified as " + reason.toLowerCase() + ".\nContinue at your own risk.");
	}
}

function getMatchedSiteIndex(hostname) {
	log("Searching for a match.");

	var searchString = new RegExp("^" + hostname + "$", "i");

	for(var i = 0; i < filterData.data.length; i++) {
		if(filterData.data[i][siteName].match(searchString)) {
			log("MATCH!");
			return i;
		}
	}

	log("No match.");
	return -1;
}

function getReasonForSiteMatch(index) {
	return filterData.data[index][typeOfSite];
}

function log(message) {
	console.log(fnf + message);
}
