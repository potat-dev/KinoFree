chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['main.js'],
  }, () => chrome.runtime.lastError); // ignoring the error
});

/* currently not working
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['banner.js'],
    }, () => chrome.runtime.lastError);
  }
}) */ 