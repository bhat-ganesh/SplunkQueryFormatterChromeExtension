chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    if (tab.url.indexOf("https://www.stb.bskyb.com/splunk/") != -1) { // Inspect whether the place where user clicked matches with our list of URL
        chrome.tabs.executeScript(tab.id, {
            "file": "sqf.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });
    }
});