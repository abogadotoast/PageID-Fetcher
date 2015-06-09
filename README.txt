# PageID-Fetcher
This is a pageID fetcher for UNR.edu. On any unr.edu webpage, simply press Ctrl-Shift-Z and you should be able to fetch the pageID. This improves the workflow of editing articles in our CMS, so I strongly recommend sharing this addon.
Let me know what you guys think of the code and if you want, please submit changes that improve it.

Changes for 1.2.1:
1. Now includes *.unr.edu as well as https:// for connection protocols, giving versatility and security to the addon. nees.unr.edu and tts.unr.edu are now supported.
2. Includes a new XID search function for older pages. It's a bit inefficient, but the addon is still responsive. This allows www.unr.edu/nevada-today pages to be parsed for XIDs. 


Files required for successful Google Chrome compilation from the Github link:
manifest.json // basically a Google Chrome make file
pageid.html // an HTML file that is displayed upon clicking the addon button
pageidsearch.js // the Javascript which controls the information gathering logic
mystyles.css // a blank CSS file so Chrome doesn’t cry
