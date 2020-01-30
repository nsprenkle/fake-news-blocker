const BLOCKER_ACTIVE_KEY = 'fakeNewsBlockerActive'
const BLOCKED_SITES_KEY = 'blockedSites'

const defaultSettings = {
  fakeNewsBlockerActive: true
}

// Get settings on startup
let gettingStoredSettings = browser.storage.local.get()
gettingStoredSettings.then(checkStoredSettings).catch(reason => {
  console.error(reason)
})

// Initialize settings and update icon to match state
function checkStoredSettings (storedSettings) {
  let isActive = storedSettings[BLOCKER_ACTIVE_KEY]

  // load the default settings if not initiated
  if (isActive == null) {
    browser.storage.local.set(defaultSettings)
  }

  let blockedSites = storedSettings[BLOCKED_SITES_KEY]

  // load the default blocked sites if not initiated
  if(!blockedSites) {
    browser.storage.local.set({blockedSites: JSON.stringify(defaultBlacklist)})
    console.log(`Loaded default blacklist with ${JSON.parse(localStorage.blockedSites).length} sites`)
  }

  updateBrowserButtonUi(isActive)
}

// Set the icon to active or inactive icon
function updateBrowserButtonUi (active) {
  if (active == true) {
    browser.browserAction.setIcon({
      path: 'icons/logo-active.svg'
    })
    browser.browserAction.setTitle({
      title: 'Disable Fake News Blocker'
    })
  } else {
    browser.browserAction.setIcon({
      path: 'icons/logo-inactive.svg'
    })
    browser.browserAction.setTitle({
      title: 'Enable Fake News Blocker'
    })
  }
}

// Toggle the blocker state and icon
function toggleBlockerState (item) {
  let oldState = item.fakeNewsBlockerActive
  let newState

  if (oldState == null || oldState == undefined) {
    oldState = true
  }

  newState = !oldState

  console.log(newState == true ? 'Blocker enabled' : 'Blocker disabled')

  browser.storage.local.set({ fakeNewsBlockerActive: newState })

  updateBrowserButtonUi(newState)
}


function browserButtonHandler () {
  const getBlockerIsActive = browser.storage.local.get(BLOCKER_ACTIVE_KEY)
  getBlockerIsActive.then(toggleBlockerState).catch(reason => {
    console.error(reason)
  })
}

browser.browserAction.onClicked.addListener(browserButtonHandler)
