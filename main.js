// const kp_reg = /https:\/\/www\.kinopoisk\.ru.*/g;
// const kp_hd_reg = /https:\/\/hd\.kinopoisk\.ru.*/g;

var url = window.location.toString()

if (/https:\/\/www\.kinopoisk\.ru.*/g.test(url)) { // кинопоиск
  console.log(url, "kinopoisk");
  kp_parse();
} else if (/https:\/\/hd\.kinopoisk\.ru.*/g.test(url)) { // кинопоиск ХД
  console.log(url, "kinopoisk hd");
  kphd_parse();
} else { // любой другой сайт
  console.log(url, "unknown")
  unknown_parse();
}

// different parse methods //

function kp_parse() {
  let data = window.location.toString().match(/https:\/\/www\.kinopoisk\.ru\/(film|series)\/(\d{5,7})\/.*/);
  alert(`type: ${data[1]}, id: ${data[2]}`);
}

function kphd_parse() {
  if (get_button("Детали") === undefined) {
    alert("Выберите фильм");
  } else {
    get_button("Детали").click();
    setTimeout(function () {
      var urls = get_urls();
      if (urls === []) { alert("Ссылка не найдена"); } else {
        window.open(url_replace(urls[0]), "_blank");
      }
    }, 500);
  }
}

function unknown_parse() {
  // alert("[неизвестный сайт]: Упс! эта часть кода еще не реализована :(");
  alert(get_urls().join('\n\n'))
}

// useful functions //

function get_button(text) {
  return Array.from(document.querySelectorAll('button')).find(e => e.textContent === text);
}

function url_replace(url) {
  return url.replace(/www\.kinopoisk\.ru\/(film|series)\//gi, '4h0y.gitlab.io/#');
}

function get_urls() {
  var urls = [];
    for (var i = document.links.length; i-- > 0;)
      if (document.links[i].href.startsWith("https://www.kinopoisk.ru/film/") || document.links[i].href.startsWith("https://www.kinopoisk.ru/series/"))
        urls.push(document.links[i].href);
  return urls
}

function has_urls() {
  for (var i = document.links.length; i-- > 0;)
    if (document.links[i].href.startsWith("https://www.kinopoisk.ru/film/") || document.links[i].href.startsWith("https://www.kinopoisk.ru/series/")) return 1;
  return 0;
}
