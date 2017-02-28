var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
    toggle = !toggle;
    if (toggle) {
        chrome.browserAction.setIcon({ path: "blue.png", tabId: tab.id });
        chrome.tabs.executeScript(tab.id, { file: "bundle.js" });
    } else {
        chrome.browserAction.setIcon({ path: "red.png", tabId: tab.id });
    }
});