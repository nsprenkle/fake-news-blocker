/* global alert */
var FNB_LOG_PREFIX = '[Fake News Blocker] - '
var BLOCKER_ACTIVE_KEY = 'fakeNewsBlockerActive'

// Run blocker if active
browser.storage.local.get(BLOCKER_ACTIVE_KEY).then(function (setting) {
  var active = setting[BLOCKER_ACTIVE_KEY]

  if (active) {
    log('Blocker enabled - Running...')
    blockFakeNews()
  } else {
    log('Blocker disabled.')
  }
})

// All blocker scripts here, currently just check domain against blacklist
function blockFakeNews () {
  var hostname = window.location.hostname
  isPageFakeNews(hostname)
}

// Check if page matches search criteria and alert on positive match
function isPageFakeNews (url) {
  var matchedIndex = -1

  log('Is ' + url + ' fake news?')

  matchedIndex = getMatchedSiteIndex(url)

  if (matchedIndex > -1) {
    var reason = getReasonForSiteMatch(matchedIndex)
    alert('Fake News Blocker\n\nWarning, ' + url + ' has been identified as ' + reason.toLowerCase() + '.\nContinue at your own risk.')
  }
}

// Search for match in blocked site list, returns matched index or -1l
function getMatchedSiteIndex (hostname) {
  var site = null

  log('Searching for a match.')

  for (var i = 0; i < filterData.data.length; i++) {
    site = new RegExp(filterData.data[i][siteName] + '$', 'i')

    if (hostname.match(site)) {
      log('Match detected!')
      return i
    }
  }

  log('No match detected.')
  return -1
}

// Get type of site data for a site index
function getReasonForSiteMatch (index) {
  return filterData.data[index][typeOfSite]
}

// Specially formatted log for Fake News Blocker
function log (message) {
  console.log(FNB_LOG_PREFIX + message)
}

// Find if blocker is enabled, create storage key if not found
function isBlockerEnabled () {
  var isActive = localStorage.getItem(BLOCKER_ACTIVE_KEY)

  log('Is active? ' + isActive)

  if (isActive == null) {
    localStorage.setItem(BLOCKER_ACTIVE_KEY, true)
    isActive = true
  }

  return isActive
}

// When blocker state is toggled, run some page scripts
browser.storage.onChanged.addListener(handleStorageChange)

// Check new blocker state, re-run blocker if newly enabled
function handleStorageChange (changes, area) {
  var active = changes[BLOCKER_ACTIVE_KEY].newValue

  if (active) {
    log('Blocker enabled - Running...')
    blockFakeNews()
  } else {
    log('Blocker disabled.')
  }
}
