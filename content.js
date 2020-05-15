var isDarkMode = false;
var style;
chrome.storage.local.get(['key'], function (result) {
  if (result.key == undefined || result.key == "0") {
    darkModeOn();
  }
});

chrome.storage.onChanged.addListener(function (changes, areaName) {
  if (isDarkMode) {
    document.getElementById("darkmode").remove();
    isDarkMode = false;
  } else {
    darkModeOn();
  }
})

function darkModeOn() {
  style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.id = 'darkmode';
  style.href = chrome.extension.getURL('darkmode.css');
  (document.head || document.documentElement).appendChild(style);
  isDarkMode = true;
}