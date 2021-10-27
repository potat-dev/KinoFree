var url2 = "";
var btn_text = "Детали";

if (Array.from(document.querySelectorAll('button')).find(e => e.textContent === btn_text) === undefined) {
  alert("Выберите фильм");
  window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");
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