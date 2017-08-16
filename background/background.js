var fnf = "[Fake News Filter] - ";

function browserButtonHandler() {
	log("Pressed browser button");
	browser.browserAction.setIcon({
		path: "icons/logo-active.svg"
	});
}

browser.browserAction.onClicked.addListener(browserButtonHandler);

function log(message) {
	console.log(fnf + message);
}
