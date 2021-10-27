function button_click(text) {
  Array.from(document.querySelectorAll('button')).find(e => e.textContent === text).click()
};

function get_url() { // ---
  var urls = [];
  for (var i = document.links.length; i-->0;)
    if (document.links[i].href.includes("www.kinopoisk.ru/film/"))
      urls.push(document.links[i].href);
  return urls[0];
};

function get_button(text) {
  return Array.from(document.querySelectorAll('button')).find(e => e.textContent === text);
};

// function process_url(url) {
//   return url.replace(/www\.kinopoisk\.ru\/(film|series)\//gi, '4h0y.gitlab.io/#')
// };

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

    // chrome.tabs.executeScript({
      // target: { tabId: tab.id },
      // function: function() {
        // window.open(url2, '_blank').focus();
      // }
    // });
  }
};
