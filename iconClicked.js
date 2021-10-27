// - Алгоритм:
// - ищем ссылку на фильм
// - если нет ссылки:
//     - нажимаем на кнопку детали
// - снова ищем ссылку
// - если не находим
//     - просим пользователя выбрать фильм
//     - пробуем снова через 5 сек
//     - выводим уведомление если находим

if (get_button("Детали") === undefined) {
  alert("Выберите фильм");
} else {
  get_button("Детали").click();
  
  setTimeout(function () {
    var urls = get_urls();
    if (urls === []) { alert("Ссылка не найдена"); } else {
      window.open(url_replace(urls[0]), "_blank");
    }
  }, 850);
}


function get_button(text) {
  return Array.from(document.querySelectorAll('button')).find(e => e.textContent === text);
}

function url_replace(url) {
  return url.replace(/www\.kinopoisk\.ru\/(film|series)\//gi, '4h0y.gitlab.io/#');
}

function get_urls() {
  var urls = [];
    for (var i = document.links.length; i-- > 0;)
      if (document.links[i].href.includes("www.kinopoisk.ru/film/"))
        urls.push(document.links[i].href);
  return urls
}