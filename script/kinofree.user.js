// ==UserScript==
// @name         KinoFree
// @namespace    kinofree
// @version      0.2.1
// @description  Бесплатный доступ к фильмам и сериалам КиноПоиска
// @author       DenCoder
// @match        *://www.kinopoisk.ru/*/*
// @grant        none
// ==/UserScript==

// original name:    Kinopoisk-Watch
// original author:  Kirlovon
// original repo:    https://github.com/Kirlovon/Kinopoisk-Watch

// Link to the viewer page
const kinopoiskWatchLink = 'https://4h0y.gitlab.io/#';

// Image of the banner
const bannerImage = `
<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 128 512" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(128,512,-2048,512,0,0)">
      <stop offset="0" style="stop-color:rgb(248,12,101);stop-opacity:1"/>
      <stop offset="1" style="stop-color:rgb(247,88,27);stop-opacity:1"/>
    </linearGradient>
  </defs>
  <path id="Banner" d="M128,0L0,0L0,512L64,480L128,512L128,0Z" style="fill:url(#_Linear1);"/>
  <path d="M 54.481998443603516 308.0162353515625 L 45.341373443603516 317.8599853515625 L 45.341373443603516 342.2349853515625 L 27.763248443603516 342.2349853515625 L 27.763248443603516 256.9224853515625 L 45.341373443603516 256.9224853515625 L 45.341373443603516 295.5943603515625 L 53.075748443603516 284.9888916015625 L 74.81402969360352 256.9224853515625 L 96.43512344360352 256.9224853515625 L 66.14215469360352 294.8326416015625 L 97.31402969360352 342.2349853515625 L 76.39606094360352 342.2349853515625 Z" transform="matrix(0, -1, 1, 0, -236.234375, 480.140625)" style="fill: rgb(255, 255, 255); white-space: pre;"/>
</svg>
`;

// Get id, type & title of current movie
function getMovieData() {
    const url = window.location.href;
    const splitted = url.split('/');
    const id = splitted[4];
    const type = splitted[3];
    const title = document.querySelector('meta[property="og:title"]')?.content;
    return { id, type, title };
}

// Open page with Kinopoisk Watch player
function openPlayer(id) {
  window.open(kinopoiskWatchLink + id, '_blank').focus();
}

// Mount Kinopoisk Watch banner to the page
function mountBanner(id, title) {
    const banner = document.createElement('div');
    banner.id = 'kinofree';
    banner.innerHTML = bannerImage;
    banner.style.width = '32px';
    banner.style.height = '128px';
    banner.style.top = '-128px';
    banner.style.left = '8px';
    banner.style.outline = 'none';
    banner.style.cursor = 'pointer';
    banner.style.position = 'fixed';
    banner.style.zIndex = '9999999999';
    banner.style.transition = 'top 0.2s ease';

    setTimeout(() => {
        banner.style.top = '-32px';
        banner.addEventListener('click', () => openPlayer(id, title));
        banner.addEventListener('mouseover', () => { banner.style.top = '0px' });
        banner.addEventListener('mouseout', () => { banner.style.top = '-32px' });
    }, 100);

    document.body.appendChild(banner);
}

// Initialize script
function init() {
    const { id, type, title } = getMovieData();
    if (type === 'film' || type === 'series') mountBanner(id, title);
}

// Init on load
window.addEventListener('load', init);
