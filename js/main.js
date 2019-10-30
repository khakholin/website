function showNav(){
      $('.navigation-bar').addClass('navigation-bar_active');
      $('.navigation-menu-open').addClass('navigation-menu-open_active');
      $('.navigation-menu-close').addClass('navigation-menu-close_active');
      $('.bar1').addClass('bar1_click');
      $('.bar2').addClass('bar2_click');
      $('.bar3').addClass('bar3_click');
      $('.bar4').addClass('bar4_click');
      $('.bar5').addClass('bar5_click');
      $('.navigation-top').css({'box-shadow':'none'});
};
function hideNav(){
      $('.navigation-bar').removeClass('navigation-bar_active');
      $('.navigation-menu-open').removeClass('navigation-menu-open_active');
      $('.navigation-menu-close').removeClass('navigation-menu-close_active');
      $('.bar1').removeClass('bar1_click');
      $('.bar2').removeClass('bar2_click');
      $('.bar3').removeClass('bar3_click');
      $('.bar4').removeClass('bar4_click');
      $('.bar5').removeClass('bar5_click');
      $('.navigation-top').css({'box-shadow':'0 5px 4px -4px rgba(0, 0, 0, 0.5)'});
}
$(window).load(function(){
      $('.navigation-menu ').click(function(event){
            event.stopPropagation();
            if(!$('.navigation-bar').hasClass('navigation-bar_active')) {
                  showNav();
            }
            else {
                  hideNav();
            }
      });
      $('.navigation-bar').click(function(event) {
        event.stopPropagation();
      });
      $(window).click(function(event) {
            hideNav();
      });
      $('.navigation-bar-block__link').click(hideNav);
      var menuTop = $('.menu').offset().top;
      var navTop =  $('.navigation-top').offset().top;
      $(window).bind('scroll', function() {
            var windowTop = $(this).scrollTop();
            if (windowTop > menuTop) {
                  $('.menu').css({'position':'fixed', 'top':'0'});
                  $('.title').css({'padding-top':'74px'});
                  if (windowTop-menuTop > 50){
                        $('.menu').css({'padding-top':'8px', 'padding-bottom':'8px'});
                  }
                  else{
                        $('.menu').css({'padding-top':'12px', 'padding-bottom':'12px'}); 
                  }
            }
            else{
                  $('.menu').css({'position':'relative'});
                  $('.title').css({'padding-top':'10px'});
            }
            if (windowTop > navTop) {
                  $('.navigation').css({'position':'fixed', 'top':'0'});
                  $('.title').css({'padding-top':'74px'});
                  if (windowTop-navTop > 50){
                        $('.navigation-top').css({'padding-top':'8px', 'padding-bottom':'8px'});
                  }
                  else{
                        if ($(window).width() <= '426'){
                              $('.navigation-top').css({'padding':'20px 0'}); 
                        }
                        else{
                              $('.navigation-top').css({'padding':'20px 12px'}); 
                        }
                  }
            }
            else{
                  $('.navigation').css({'position':'relative'});
                  $('.title').css({'padding-top':'10px'});
            }
      });
});