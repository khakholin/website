$(window).load(function(){
      $('.menu-phone').on('click', function(){
            $('.navigation-bar').toggleClass('navigation-bar_active');
            $('.menu-link-open').toggleClass('menu-link-open_active');
            $('.menu-link-close').toggleClass('menu-link-close_active');

            $('.bar1').toggleClass('bar1_click');
            $('.bar2').toggleClass('bar2_click');
            $('.bar3').toggleClass('bar3_click');
            $('.bar4').toggleClass('bar4_click');
            $('.bar5').toggleClass('bar5_click');
      });

      var menu = $('.menu');
      var menuTop = menu.offset().top;
      $(window).bind('scroll', function() {
            var windowTop = $(this).scrollTop();
            if (windowTop > menuTop) {
                  menu.css({'position':'fixed', 'top':'0'});
                  $('.title').css({'padding-top':'175px'});
                  if (windowTop-menuTop > 50){
                        menu.css({'padding-top':'5px', 'padding-bottom':'5px'});
                  }
                  else{
                        menu.css({'padding-top':'12px', 'padding-bottom':'12px'}); 
                  }
            }
            else{
                  menu.css({'position':'relative'});
                  $('.title').css({'padding-top':'100px'})
            }
 
      });
    /*
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".navigation_active"); // тут указываем ID элемента
		if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.navigation').toggleClass('navigation_active');
            $('.menu-link-open').toggleClass('menu-link-open_active');
            $('.menu-link-close').toggleClass('menu-link-close_active');
		}
	})*/
});