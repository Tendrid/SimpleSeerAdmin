/**
 * Loads the extention into the Chrome
 * Dev Tools only if SimpleSeer is present
 * in the current tab's DOM.
 */

chrome.devtools.inspectedWindow.eval(
	"window.SimpleSeer.name",
	function(result, isException) {
		if(result != undefined) {
			chrome.devtools.panels.create(
				"SeerAdmin",
				"static/img/application.png",
				"seer-admin.html",
				function(panel) {
					console.log("hello from callback");
				}
			);
		}
	}
);
                          