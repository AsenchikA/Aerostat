$(document).ready(function(){

  //плавная прокрутка страницы

  function anchorScroll(boxAnchorLink){

    $(boxAnchorLink + ' a').on('click', function(e){
      e.preventDefault();
      var attr = $(this).attr('href').substring(1);
      var currentPosition = $(document).scrollTop();
      var idPosition = $('#'+attr).offset().top;
      var scrollTime = Math.abs(currentPosition - idPosition) / 3;
      $('body,html').animate({'scrollTop':idPosition},scrollTime);
    });

};


anchorScroll('#page-header');
anchorScroll('#page-footer');
anchorScroll('#promo');

  // бургер в header

  var toggler = document.getElementById('toggler');
  toggler.onclick = function(e){
    e.preventDefault();
    toggler.classList.toggle('toggler--close');

    document.getElementById('nav-header').classList.toggle('main-nav--visible');
  };

  //галерея

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

    $('#reviews__slider').owlCarousel({
    loop: true,
    nav: true,
    navClass: ['reviews__arrows reviews__arrows--prev','reviews__arrows reviews__arrows--next'],
    navText: ['',''],
    responsive : {
      0 : {
        items: 1,
      },
      1200 : {
        items: 2,
      }
    }
  });

  //счетчик "До ближайшего полета осталось:"

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

  //раскрытие блоков вопросов при нажатии

  $('.questions__item').click(function(){
    $(this).toggleClass('questions__item--open');
    $(this).children().toggleClass('questions__description--open');
  });
});

