$ (function () {

  $('.signup-show').click(function () {
    $('#signup-modal').fadeIn();
    
  });
  $('#close-modal').click(function() {
    $('#signup-modal').fadeOut();
  });

  $('.login').click(function () {
    $('#login-modal').fadeIn();
    
  });
  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
  });

  // ハンバーガー
  $(function(){
    $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('is-active');
    });
  });
  $('.menu__item a[href]').on('click', function(event) {
    $('.menu-btn').trigger('click');
});
  // ハンバーガーここまで

  // スムーススクロール
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  // スムーススクロールここまで
  });
});