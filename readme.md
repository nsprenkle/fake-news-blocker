# Fake News Blocker
An addon to flag fake news sites.

## Run as temporary Add-on (Beta)
This extension is still in beta and therefore not officially published to any extension/add-on stores. To run this extension as a temporary add-on:

### Firefox
1. Get the source code (download as zip & unpack or git clone)
2. Goto [about:debugging](about:debugging) and click "Load Temporary Add-on"
3. Open the extension's parent folder (with manifest.json) and load

*Theoretically compatible (but not officially tested) with Chrome or Edge*

## Resources
Blacklist from [Politifact Fake News Almanac](http://www.politifact.com/punditfact/article/2017/apr/20/politifacts-guide-fake-news-websites-and-what-they/)


## Changelog
0.0.4 - Saves enabled/disabled state in localStorage

0.0.3 - Toggle state by clicking browser browser

0.0.2 - Matching now works regardless of subdomains

0.0.1 - Changed branding to "Fake News Blocker", added button to browser bar

0.0.0 - Initial development, alerts user if hostname matches a blacklist of fake news sites
