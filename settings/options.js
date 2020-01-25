/** Get blocked sites info from local storage */
function getBlockedSites() {
  return JSON.parse(localStorage.blockedSites)
}

/** Create a table listing all the blocked site info */
function displayBlockedSites(blockedSites) {
  const blockedSitesSelector = 'blocked-sites'
  const fields = { siteName: 'Name', typeOfSite: 'Reason', registration: 'Origin' }

  let sitesDisplay = document.getElementById(blockedSitesSelector)

  // create header
  let header = document.createElement('tr')

  Object.keys(fields).forEach(field => {
    let element = document.createElement('th')
    element.textContent = fields[field]
    header.append(element)
  })

  sitesDisplay.append(header)

  // add a row per site
  blockedSites.forEach(site => {
    let row = document.createElement('tr')

    Object.keys(fields).forEach(field => {
      let element = document.createElement('td')
      element.textContent = site[field]
      row.append(element)
    })

    sitesDisplay.append(row)
  });
}

function updateBlockedSitesCount(blockedSites) {
  let blockedSitesCountSelector = "site-count"
  document.getElementById(blockedSitesCountSelector).textContent = blockedSites.length
}

blockedSites = getBlockedSites()

displayBlockedSites(blockedSites)
updateBlockedSitesCount(blockedSites)