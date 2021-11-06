# KinoFree Extension

## Что это такое?

Это браузерное расширение, которое поможет вам посмотреть практически любой фильм или сериал абсолютно бесплатно. Сейчас реализована поддержка только фильмов и сериалов с КиноПоиска, но в дальнейшем будут добавлены и другие крупные площадки (IMDB, ivi, Netflix)

Планы по разработке проекта приведены в файле ROADMAP (в дальнейшем будет организована удобная wiki)

## Рекомендации:

Перед установкой желательно установить расширение **Обход блокировок Рунета.** Оно бесплатное, не имеет рекламы и поможет вам избавиться от проблем, связанных с блокировками пиратских сайтов нашим любимым Роскомнадзором

Если используется версия - скрипт для Tampermonkey, то логично, что у вас должен быть установлен Tampermonkey. Для установки скрипта Tampermonkey можно просто перейти по [ссылке](https://github.com/DenCoder618/KinoFree/raw/main/script/script.user.js)

Есть возможность быстрого запуска с помощью хоткея `Alt + R`  
Его можно запомнить как `Alt + русская К(инопоиск)`  
Изменить хоткей можно на странице chrome://extensions/shortcuts


## Зависимости:

Для бесплатного онлайн просмотра фильмов используется агрегатор [Yohoho](https://github.com/4h0y/4h0y.github.io) - [yohoho.cc](https://yohoho.cc/)

Для инъекции баннера на страницу используется код скрипта [Kinopoisk-Watch](https://github.com/Kirlovon/Kinopoisk-Watch)

Для получения данных о фильме используется сервис [Kinopoisk Api Unofficial](https://kinopoiskapiunofficial.tech)

## Алгоритм работы

### На сайте КиноПоиск (kinopoisk.ru)
* Если мы находимся на странице фильма и сериала:
  + Просто открываем этот фильм на пиратском сайте
* Если мы на другой странице:
  + Парсим все поддерживаемые ссылки на странице и показываем пользователю это список
  + Если найдена всего одна ссылка то сразу открываем
* Если ничего не можем найти, то просто игнорируем
  + Но если пользователь делает 3 попытки, то показываем предупреждение, что фильмов не найдено

### На сайте КиноПоиск HD (hd.kinopoisk.ru)
> Здесь получить прямую ссылку на фильм можно только на вкладке `О фильме > Детали`

* Если на странице есть кнопка "Детали"
  + Нажимаем её
  + Ждем окончания анимации
  + Находим ссылку и открываем её
* Если нет ни кнопки не прямых ссылок:
  + Говорим пользователю что нужно выбрать фильм

### На любом другом сайте
* Пытаемся найти поддерживаемые ссылки
  + Из каждой ссылки вытаскиваем айди
  + Важно: если на странице найдено несколько ссылок с одинаковым айди, то удаляем дубликаты
* Если реально смогли найти:
  + Нашли несколько ссылок
    * Получаем данные о фильмах через API
    * Показываем пользователю
  + Нашли всего одну - сразу открываем
* Если ничего не нашли:
  + Говорим юзеру что фильмов не найдено
