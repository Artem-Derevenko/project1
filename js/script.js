$(document).ready(function() {


function setHeiHeight() {

  $('#carousel-1 > li > div, .menu').css('min-height', $(window).height());

  if ( $(window).width() > 1300 ) {
    var marginMenu = ( $(window).height() - $('.menu .menu-contacts').innerHeight() - $('.menu .menu-social-network').innerHeight() - $('.menu .nav-menu').innerHeight() ) / 2;
    $('.menu .nav-menu').css('top', marginMenu);
  }

  else {
    var marginMenu = ( $(window).height() - $('.menu .menu-contacts').innerHeight() - $('.menu .nav-menu').innerHeight() ) / 2;
    $('.menu .nav-menu').css('top', marginMenu);
  }

} 
setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна

// показ меню по нажатию на кнопку
$('.button-menu-inactive').on('click',function() {
  $('.menu').fadeIn(400);
  $(".button-menu-active").show(300);
  $(".button-menu-inactive").hide(300);
});

// скрытие меню по нажатию на кнопку
$('.button-menu-active').on('click',function() {
  $('.menu').fadeOut(400);
  $(".button-menu-inactive").show(300);
  $(".button-menu-active").hide(300);
});


var Carusels_header = [];
$('.carousel-head').each(function (index, elem) {
    Carusels_header.push($(elem).owlCarousel({ 
      items : 1,
      autoPlay : 6000,
      singleItem : true,
      addClassActive : true,
      transitionStyle : "fade"
    }));     
});

var Carusels_news = [];
$('.carousel-new').each(function (index, elem) {
    Carusels_news.push($(elem).owlCarousel({ 
      items : 1,
      autoPlay : 6000,
      singleItem : true,
      addClassActive : true,
      navigation: false,
      pagination: true,
      transitionStyle : "fade"
    }));     
});

var Carusels_news = [];
$('#honors-carousel').each(function (index, elem) {
    Carusels_news.push($(elem).owlCarousel({ 
      items : 4,
      itemsDesktop : [1285,2],
      itemsDesktopSmall : [980,2],
      itemsTablet: [767,1],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
      autoPlay : false,
      addClassActive : true,
      navigation: false,
      pagination: true,
      transitionStyle : "fade"
    }));     
});

var Carusels_news = [];
$('#news-gallery-carousel').each(function (index, elem) {
    Carusels_news.push($(elem).owlCarousel({ 
      items : 3,
      itemsDesktop : [1285,3],
      itemsDesktopSmall : [980,2],
      itemsTablet: [767,1],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
      autoPlay : false,
      addClassActive : true,
      navigation: false,
      pagination: true,
      transitionStyle : "fade"
    }));     
});



// добавляем класс-анимацию для кнопок переключателей слайдов
$('.owl-controls.clickable').addClass('fadeIn animated');



// фиксирование header при скролинге
$(window).scroll(function(){
  if ( $(this).scrollTop() > 20 ) {
        $('.wrapper-nav > a#logo').addClass('fixedlogo');  
        $('header.head').addClass('fixedmenu');
        $('.button-menu-inactive, .button-menu-active').addClass('fixedbutton');
        $('.header-info').addClass('fixedinfo');
    }

  if ( $(this).scrollTop() < 20 ) {
        $('.wrapper-nav > a#logo').removeClass('fixedlogo');  
        $('header.head').removeClass('fixedmenu');
        $('.button-menu-inactive, .button-menu-active').removeClass('fixedbutton');
        $('.header-info').removeClass('fixedinfo');       
    }
});

// подключение табов 
$("ul.tabs").jTabs({content: ".tabs_content", animate: true, effect:"fade"});

//подключение сортировки проектов

$('#button-year').on('click',function() {
  $('.sort-subcategory > ul').hide(); 
  $('.button-sorting > li').removeClass('active');
  $(this).addClass('active');
  $("#year").fadeIn(300);
});

$('#button-type-work').on('click',function() {
  $('.sort-subcategory > ul').hide();
  $('.button-sorting > li').removeClass('active');
  $(this).addClass('active');
  $("#type-work").fadeIn(300);
});

$('#button-tags').on('click',function() {
  $('.sort-subcategory > ul').hide();
  $('.button-sorting > li').removeClass('active');
  $(this).addClass('active');
  $("#tags").fadeIn(300);
});


$('#year > li > span').on('click',function() {
  $('#year > li > span').removeClass('active');
  $(this).addClass('active');
  var yearValue = $(this).text();
  $('#input-year').val(yearValue);
});

$('#type-work > li > span').on('click',function() {
  $('#type-work > li > span').removeClass('active');
  $(this).addClass('active');
  var yearValue = $(this).text();
  $('#input-type').val(yearValue);
});

$('#tags > li > span').on('click',function() {
  $('#tags > li > span').removeClass('active');
  $(this).addClass('active');
  var yearValue = $(this).text();
  $('#input-tags').val(yearValue);
});


// Проверка email на правильность
function isValidEmailAddsess(emailAddress) {
  var pattern = new RegExp(/^(?:[a-z0-9]+(?:[-_.]?[a-z0-9]+)?@[a-z0-9_.-]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i);
  return pattern.test(emailAddress);
}

//Отправки всех полей сообщения 
$('#form-feedback-button').on('click',function() { 
  
  var fio = $("#name").val();
  var email = $("#email").val();
  var msg = $("#text-message").val();

    // Проверка ФИО

    if ( fio == "" || fio.length > 70 ) {

       $("#wrapper-name").css("borderColor", "#db001b");
       send_fio = '0';
    }

    else {

       $("#wrapper-name").css("borderColor", "#000000");
       send_fio = '1';
    }

    // Проверка email

    if ( isValidEmailAddsess(email) == false ) {

       $("#wrapper-email").css("borderColor", "#db001b");
       send_email = '0';
    }

    else {

       $("#wrapper-email").css("borderColor", "#000000");
       send_email = '1';
    }

    // Проверка Сообщения

    if ( msg == "" ) {

       $("#form-feedback-message").css("borderColor", "#db001b");
       send_msg = '0';
    }

    else {

       $("#form-feedback-message").css("borderColor", "#000000");
       send_msg = '1';
    }

    if (send_fio == '1' && send_email == '1' && send_msg == '1') {

      // Отправляем запрос для отправки писем
      $.ajax({
            type: 'POST',
            url: 'send.php',
            data: 'name='+ fio + '&email='+ email + '&msg='+ msg,
            success: function(data){

              $("#name").val('');
              $("#email").val('');
              $("#text-message").val('');
      
            }
        });
    }
      return false;
});


// подключение модальных окон с изображениями
$(".fancybox").fancybox({
  'transitionIn'  : 'fade',
  'transitionOut' : 'fade',
  'speedIn'   : 600, 
  'speedOut'    : 200, 
  'overlayShow' : false
});

// подключение модальных окон с изображениями
$(".fancybox-kapets").fancybox({
  'transitionIn'  : 'fade',
  'transitionOut' : 'fade',
  'speedIn'   : 600, 
  'speedOut'    : 200, 
  'overlayShow' : false
});


//вывод названия награды при наведении на нее
$('div.honors-slide > div > a > img').mouseenter(function(){
  var honors = $(this).attr("alt");
  $('#input-honors').val(honors);
});

//очистка полей при потере фокуса
$('div.honors-slide > div > a > img').mouseout(function() {
  $('#input-honors').val('');
});


//вывод ФИО и должности при наведении на фото сотрудника
$('div.wrapp-employees > div > img.img-hover').mouseenter(function(){
  var fio = $(this).attr("alt");
  var profession = $(this).attr("title");
  $('.employee-name').text(fio);
  $('.employee-profession').text(profession);
});

//очистка полей при потере фокуса
$('div.wrapp-employees > div > img.img-hover').mouseout(function() {
  $('.employee-name, .employee-profession').text("");
});


});