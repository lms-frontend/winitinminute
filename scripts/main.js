var slider;
var headerHeight;
// $(window).resize(function(){
//   setTimeout(function(){
//     destroyslider();
//     hofslider();
//   });
// });
$(document).ready(function(){
  smoothScroll();
  // hofslider();
  imgWidth();
  stickyHeader();
  navActive();
  feedbackSlider();
});
function hofslider() {
  var viewport = $(window).width();
  function slideno(){
    if(viewport >= 1024){
      return 4;
    }
    else if (viewport <= 1024 && viewport >= 768) {
      return 3;
    }
    else if (viewport < 768 && viewport > 420) {
      return 2;
    }
    else{
      return 1;
    }
  }
 slider = $('.hof-slider').bxSlider({
    slideWidth: 265,
    minSlides: slideno(),
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 20
    });


}
function imgWidth() {
  setTimeout(function(){
    var imgWidth = $('.hof-slide').find('img').outerWidth();
    $('.hof-slide').find('.slide-content').css('width', imgWidth);
  }, 200);
}
function destroyslider(){
  slider.destroySlider();
}
$(window).scroll(function(){
  if($(window).scrollTop()==0){
    headerHeight = ($('nav.main-navigation').height())+100;
  }else {
    headerHeight = $('nav.main-navigation').height();
  }
  // console.log(headerHeight);
});
function smoothScroll(){
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);

      // console.log(headerHeight);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      // console.log(target);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 1000);
        return false;
      }
    }
  });
}
function stickyHeader() {
    $(window).scroll(function() {
      if($(window).scrollTop() > 180){
        $('body').addClass('stickyHeader');
        $('nav.main-navigation').addClass('animated slideInDown')
      }
      else {
          $('body').removeClass('stickyHeader');
          $('nav.main-navigation').removeClass('animated slideInDown')
      }
    });
}
function navActive(){
  // $('.main-navigation').find('ul > li > a').click(function(){
  //   $('.main-navigation ul li a').removeClass('active');
  //   $(this).addClass('active');
  // });
  $(window).scroll(function() {
      $('.main-navigation').find('ul > li > a').each(function(){
        var currA = $(this);
        var getid = $(this).attr('href');
        var currentEle = $(getid);
        var winTop = $(window).scrollTop() + 120;
        if(currentEle.position().top <= winTop && currentEle.position().top + currentEle.height() > winTop){
          $('.main-navigation ul li a').removeClass('active');
          currA.addClass('active');
        }
        // else{
          // $('.main-navigation').find('ul > li > a').removeClass('active');
        // }
      });
  });
}
function feedbackSlider() {
  var currentIndex = 0,
  items = $('.feedback-wrap li'),
  itemAmt = items.length;
  function cycleItems() {
    items.fadeOut(500);
    var item = $('.feedback-wrap li').eq(currentIndex);
    setTimeout(function(){item.fadeIn(500);},500)
  }
  setInterval(function() {
  cycleItems();
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
 }, 3000);
}
