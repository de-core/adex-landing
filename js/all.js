$(document).ready(function(){

// // Open hidden part
  $('.reviews button').click(function(){
    if ($(this).hasClass('reviews-open')){
      $('.reviews .reviews-hidden.hidden').first().removeClass('hidden');
      if (!$('.reviews .reviews-hidden').hasClass('hidden')){
        $('.reviews .reviews-open').removeClass('reviews-open').addClass('reviews-close').text('Свернуть');
      }
    } else {
      console.log('click')
      $('.reviews .reviews-close').removeClass('reviews-close').addClass('reviews-open').text('Посмотреть еще отзывы');
      $('.reviews .reviews-hidden').addClass('hidden');
      $(window).scrollTop(1050);
    }
  });

// Datepicker
$('.input-range-group').each(function(){
  var start = $(this).find('.date-in');
  var end = $(this).find('.date-out');
  // var newDate = new Date();
  // var d = newDate.getDate(newDate);
  // var m = newDate.getMonth(newDate);
  // var y = newDate.getFullYear(newDate);
  // $(this).find('.date-in, .date-out').attr('placeholder', d+'.'+ m+1 +'.'+  y)
  $(this).datepicker({
    startDate: Date(),
    language:'ru',
    autoclose: 'true',
    format: 'dd.mm.yyyy',
    orientation: 'top left',
    inputs: [start, end]
  }).on('show', function(e){
    $('.datepicker .selected').eq(1).css({background: 'red'});
  });
});

// Inputmask
  $('input[data-input="mobile"]').inputmask("+9(999)999-99-99");

// Yandex Map
  ymaps.ready(init);
  var myMap;

  function init(){     
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.90],
        zoom: 11
    });

    myPlacemark = new ymaps.Placemark([55.76, 37.64], { content: 'Москва!' });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
  }
});
