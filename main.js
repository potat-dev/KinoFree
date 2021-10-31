// const kp_reg = /https:\/\/www\.kinopoisk\.ru.*/g;
// const kp_hd_reg = /https:\/\/hd\.kinopoisk\.ru.*/g;

var url = window.location.toString()

if (/https:\/\/www\.kinopoisk\.ru.*/g.test(url)) { // кинопоиск
  console.log(url, "kinopoisk")
} else if (/https:\/\/hd\.kinopoisk\.ru.*/g.test(url)) { // кинопоиск ХД
  console.log(url, "kinopoisk hd")
} else { // любой другой сайт
  console.log(url, "unknown")
}


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

// if (get_button("Детали") === undefined) {
//   alert("Выберите фильм");
// } else {
//   get_button("Детали").click();

//   while (has_urls() == 0) { };
//   var urls = get_urls();

//   if (urls.length == 0) {
//     alert("Ссылка не найдена");
//   } else {
//     window.open(url_replace(urls[0]), "_blank");
//   }
// }


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

function has_urls() {
  for (var i = document.links.length; i-- > 0;)
    if (document.links[i].href.includes("www.kinopoisk.ru/film/")) return 1;
  return 0;
}