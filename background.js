chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['main.js'],
  }, () => chrome.runtime.lastError); // ignoring the error
});