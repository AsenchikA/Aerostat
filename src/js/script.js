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
  };

  $('#gallery__slider').owlCarousel({
    loop: true,
    nav: true,
    navClass: ['gallery__arrows gallery__arrows--prev','gallery__arrows gallery__arrows--next'],
    navText: ['',''],
    responsive : {
      0 : {
        items: 1,
      },
      1200 : {
        items: 4,
      }
    }
  });

  var deadline = '2017-12-31';
  setInterval(function(){
   parseTime_bv(deadline);
  }, 1000);

  function parseTime_bv(timestamp){
    var t = Date.parse(timestamp) - Date.parse(new Date());
    var secs = Math.floor( (t/1000) % 60 );
    var mins = Math.floor( (t/1000/60) % 60 );
    var hour = Math.floor( (t/(1000*60*60)) % 24 );
    var day = Math.floor( t/(1000*60*60*24) );
    var left_hour = Math.floor( (t - day*24*60*60) / 60 / 60 );
    $('span.counter__counting--day').text(day);
    $('span.counter__counting--hours').text(hour);

    if(String(mins).length > 1)
      $('span.counter__counting--mins').text(mins);
    else
      $('span.counter__counting--mins').text("0" + mins);
    if(String(secs).length > 1)
      $('span.counter__counting--secs').text(secs);
    else
      $('span.counter__counting--secs').text("0" + secs);
  }
});

