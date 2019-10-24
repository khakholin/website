$(window).load(function(){
    /* обработка нажатия на кнопку закрытия (работает и без нее, т.к. она не является частью навигации)
    $('.menu__nav_phone').on('click', function(){
        $('.navigation').toggleClass('navigation_active');
        $('.menu-link-open').toggleClass('menu-link-open_active');
        $('.menu-link-close').toggleClass('menu-link-close_active');
    });
    */
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".navigation_active"); // тут указываем ID элемента
		if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.navigation').toggleClass('navigation_active');
            $('.menu-link-open').toggleClass('menu-link-open_active');
            $('.menu-link-close').toggleClass('menu-link-close_active');
		}
	});
});