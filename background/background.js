var FNB_LOG_PREFIX = "[Fake News Blocker] - ",
	BLOCKER_ACTIVE_KEY = "fakeNewsBlockerActive",
	defaultSettings = {
		fakeNewsBlockerActive: true
	};

// Get settings on startup
var gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(checkStoredSettings, onError);

// Initialize settings and update icon to match state
function checkStoredSettings(storedSettings) {
	var isActive = storedSettings[BLOCKER_ACTIVE_KEY];

	if (isActive == null) {
		browser.storage.local.set(defaultSettings);
	}

	updateBrowserButtonUi(isActive);
}

// Generic error logger
function onError(e) {
  console.error(e);
}

// Set the icon to active or inactive icon
function updateBrowserButtonUi(active) {
	if(active == true) {
		browser.browserAction.setIcon({
			path: "icons/logo-active.svg"
		});
		browser.browserAction.setTitle({
			title: "Disable Fake News Blocker"
		});
	} else {
		browser.browserAction.setIcon({
			path: "icons/logo-inactive.svg"
		});
		browser.browserAction.setTitle({
			title: "Enable Fake News Blocker"
		});
	}
}

// Toggle the blocker state and icon
function toggleBlockerState(item) {
	var oldState = item.fakeNewsBlockerActive,
		newState;

	if(oldState == null || oldState == undefined) {
		oldState = true;
	}

	newState = !oldState;

	log(newState == true ? "Blocker enabled" : "Blocker disabled");

	browser.storage.local.set({"fakeNewsBlockerActive": newState});

	updateBrowserButtonUi(newState);
}

function onError(error) {
	console.log(`Error: ${error}`);
}

function browserButtonHandler() {

	let getBlockerIsActive = browser.storage.local.get("fakeNewsBlockerActive");
	getBlockerIsActive.then(toggleBlockerState, onError);
}

browser.browserAction.onClicked.addListener(browserButtonHandler);

function log(message) {
	console.log(`${FNB_LOG_PREFIX}${message}`);
}
