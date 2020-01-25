/** Get blocked sites info from local storage */
function getBlockedSites () {
  return JSON.parse(localStorage.blockedSites)
}

/** Create a table listing all the blocked site info */
function displayBlockedSites (blockedSites) {
  const blockedSitesSelector = 'blocked-sites'
  const fields = { siteName: 'Name', typeOfSite: 'Reason', registration: 'Origin' }

  const sitesDisplay = document.getElementById(blockedSitesSelector)

  // create header
  const header = document.createElement('tr')

  Object.keys(fields).forEach(field => {
    const element = document.createElement('th')
    element.textContent = fields[field]
    header.append(element)
  })

  sitesDisplay.append(header)

  // add a row per site
  blockedSites.forEach(site => {
    const row = document.createElement('tr')

    Object.keys(fields).forEach(field => {
      const element = document.createElement('td')
      element.textContent = site[field]
      row.append(element)
    })

    sitesDisplay.append(row)
  })
}

function updateBlockedSitesCount (blockedSites) {
  const blockedSitesCountSelector = 'site-count'
  document.getElementById(blockedSitesCountSelector).textContent = blockedSites.length
}

blockedSites = getBlockedSites()

displayBlockedSites(blockedSites)
updateBlockedSitesCount(blockedSites)
