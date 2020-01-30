/* global alert */
var BLOCKER_ACTIVE_KEY = 'fakeNewsBlockerActive'

/** Load blocked site list from config */
function loadBlockedSiteList() {
  return new Promise(resolve => {
    browser.storage.local.get('blockedSites').then((data) => {
      let blockedSites = JSON.parse(data.blockedSites)
      console.debug(`Filter got ${blockedSites.length} blocked sites from config`)
      resolve(blockedSites)
    })
  })
}

/** Check storage to see if the blocker is active */
function getBlockerActive() {
  return new Promise(resolve => {
    browser.storage.local.get(BLOCKER_ACTIVE_KEY).then(setting => {
      resolve(setting[BLOCKER_ACTIVE_KEY])
    })
  })
}

/** Main loop
 * 1. Check if blocker active
 * 2. Load block list
 * 3. Check site against block list
 */
function blockFakeNews() {
  getBlockerActive().then(active => {
    if (active) {
      loadBlockedSiteList().then(blockedSites => {

        let matchedSite = getSiteFromBlacklist(window.location.hostname, blockedSites)

        if (matchedSite) {
          alert(`Fake News Blocker\n\nWarning, ${matchedSite.siteName} has been identified as ${matchedSite.typeOfSite.toLowerCase()}.\nContinue at your own risk.`)
        } else {
          console.debug(`${window.location.hostname} not found on blacklist`)
        }
      })
    } else {
      console.debug(`-- Fake news blocker is disabled --`)
    }
  }).catch(reason => {
    console.error(reason)
  })
}

/** Search for match in blocked site list
 * @returns Site or null
 */
function getSiteFromBlacklist(hostname, blockedSites) {
  for (var i = 0; i < blockedSites.length; i++) {
    let site = new RegExp(blockedSites[i].siteName + '$', 'i')

    if (hostname.match(site)) { return blockedSites[i] }
  }

  return null
}

/** Check new blocker state, re-run blocker if newly enabled */
function handleStorageChange(changes) {
  var active = changes[BLOCKER_ACTIVE_KEY].newValue
  if (active) { blockFakeNews() }
}

// When blocker state is toggled, run some page scripts
browser.storage.onChanged.addListener(handleStorageChange)

// Run extension
blockFakeNews()