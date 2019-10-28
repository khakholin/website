$(window).load(function(){
      $('.menu__nav_phone').on('click', function(){
            $('.navigation').toggleClass('navigation_active');
            $('.menu-link-open').toggleClass('menu-link-open_active');
            $('.menu-link-close').toggleClass('menu-link-close_active');

            $('.bar1').toggleClass('bar1_click');
            $('.bar2').toggleClass('bar2_click');
            $('.bar3').toggleClass('bar3_click');
            $('.bar4').toggleClass('bar4_click');
            $('.bar5').toggleClass('bar5_click');
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