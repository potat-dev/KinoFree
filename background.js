chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['iconClicked.js'],
  }, () => chrome.runtime.lastError); // ignoring the error
});