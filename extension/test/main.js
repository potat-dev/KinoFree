// TEST CODE! Not working! //

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