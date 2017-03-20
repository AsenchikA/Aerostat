$(document).ready(function(){

//подгрузка шрифтов
  loadFont(
    'FiraSans',                      // название шрифта
    '/css/font_firasans_woff.css?v=1',   // откуда тянуть CSS с закодированным в base64 форматом WOFF
    '/css/font_firasans_woff2.css?v=1'   // откуда тянуть CSS с закодированным в base64 форматом WOFF2
  );

  // бургер в header
  var toggler = document.getElementById('toggler');
  toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');

  document.getElementById('nav').classList.toggle('main-nav--visible');
}
});
