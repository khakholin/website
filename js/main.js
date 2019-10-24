$(window).load(function(){
    $('.menu__nav_phone').on('click', function(){
        $('.navigation').toggleClass('navigation_active');
        $('.menu-link-open').toggleClass('menu-link-open_active');
        $('.menu-link-close').toggleClass('menu-link-close_active');
    });

});