# PageID-Fetcher
This is a pageID fetcher for unr.edu

Good news everyone,

The PageID project is now actually working. It seems to be bug free. I’ll add some extra functionality later on, but right now it works. On any UNR page, simply press “Ctrl-Shift-Z”. It’ll copy the XID and put it in a window which you can then easily take to search the CMS with later. Other interns may benefit from this project (especially the journalists) and I’ll compile an easy to install Chrome addon for that purpose next week. For now, go ahead and look at the code if you would like. 

(If you want to add extra features or have suggested features, please let me know. We might have a powerful toolkit here – addons can modify page elements, which may help us detect problems with the website.)

Files required for successful Google Chrome compilation from the Github link:
manifest.json // basically a Google Chrome make file
pageid.html // an HTML file that is displayed upon clicking the addon button
pageidsearch.js // the Javascript which controls the information gathering logic
mystyles.css // a blank CSS file so Chrome doesn’t cry
