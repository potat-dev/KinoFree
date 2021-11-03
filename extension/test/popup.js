var btn = document.getElementById("play_btn");

btn.addEventListener("click", async () => {
  var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: main,
  });
});

// -- func definitions -- //

function button_click(text) {
  Array.from(document.querySelectorAll('button')).find(e => e.textContent === text).click()
};

function get_url() {
  var urls = [];
  for (var i = document.links.length; i-->0;)
    if (document.links[i].href.includes("www.kinopoisk.ru/film/"))
      urls.push(document.links[i].href);
  return urls[0];
};

function get_button(text) {
  return Array.from(document.querySelectorAll('button')).find(e => e.textContent === text);
};

function open_url(url) {
  chrome.tabs.executeScript({
    target: { tabId: tab.id },
    function: function() {
      window.open(url, '_blank').focus();
    }
  });
};

// - Алгоритм:
// - ищем ссылку на фильм
// - если нет ссылки:
//     - нажимаем на кнопку детали
// - снова ищем ссылку
// - если не находим
//     - просим пользователя выбрать фильм
//     - пробуем снова через 5 сек
//     - выводим уведомление если находим

const process_url = url => {
  return url.replace(/www\.kinopoisk\.ru\/(film|series)\//gi, '4h0y.gitlab.io/#');
}


function main() {
  var url2 = "";
  var btn_text = "Детали";

  if (Array.from(document.querySelectorAll('button')).find(e => e.textContent === btn_text) === undefined) {
    alert("Выберите фильм");
  } else {
    Array.from(document.querySelectorAll('button')).find(e => e.textContent === btn_text).click();

    setTimeout(function() {
      var urls = [];
      for (var i = document.links.length; i-->0;)
        if (document.links[i].href.includes("www.kinopoisk.ru/film/"))
          urls.push(document.links[i].href);

      if (urls === []) { } else {
        var url = urls[0];
        url2 = url.replace(/www\.kinopoisk\.ru\/(film|series)\//gi, '4h0y.gitlab.io/#');
        console.log(url, url2);
        window.open(url2, "_blank");
      }
    }, 850);
    /*
    chrome.tabs.executeScript({
      target: { tabId: tab.id },
      function: function() {
        window.open(url2, '_blank').focus();
      }
    });
    */
  }
};

// TEST CODE! Not working! //

/*
if (get_button("Детали") === undefined) {
  alert("Выберите фильм");
} else {
  get_button("Детали").click();

  while (has_urls() == 0) { };
  var urls = get_urls();

  if (urls.length == 0) {
    alert("Ссылка не найдена");
  } else {
    window.open(url_replace(urls[0]), "_blank");
  }
}
*/

// -- old code -- //

/*
// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
*/