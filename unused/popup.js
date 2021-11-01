var btn = document.getElementById("play_btn");

btn.addEventListener("click", async () => {
  var [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: main,
  });
});

// - Алгоритм:
// - ищем ссылку на фильм
// - если нет ссылки:
//     - нажимаем на кнопку детали
// - снова ищем ссылку
// - если не находим
//     - просим пользователя выбрать фильм
//     - пробуем снова через 5 сек
//     - выводим уведомление если находим

function main() {
  var url2 = "";
  var btn_text = "Детали";

  if (Array.from(document.querySelectorAll('button')).find(e => e.textContent === btn_text) === undefined) {
    alert("Выберите фильм");
  } else {
    Array.from(document.querySelectorAll('button')).find(e => e.textContent === btn_text).click();

    setTimeout(function () {
      var urls = [];
      for (var i = document.links.length; i-- > 0;)
        if (document.links[i].href.includes("www.kinopoisk.ru/film/"))
          urls.push(document.links[i].href);
          
      if (urls === []) { } else {
        var url = urls[0];
        url2 = url.replace(/www\.kinopoisk\.ru\/(film|series)\//gi, '4h0y.gitlab.io/#');
        console.log(url, url2);
        window.open(url2, "_blank");
      }
    }, 850);
  }
};
