$(window).load(function(){
    $(".before-after").twentytwenty({
        before_label: 'С Автокомпасом',
        after_label: 'Без Автокомпаса'
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
        $('.menu-button__lines').toggleClass('menu-button__lines_active');
    });
    $('.select_checked').on('click', function(){
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function(){  
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -150 + "px"});
        return false;
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
    /*Отображение карты в момент докрутки*/
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function() {
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A89090f0b70c4125f48bb99429c8745a495cd5abb4cf5c6dcc789494dcbfaaccb&amp;width=100%25&amp;height=410&amp;lang=ru_UA&amp;scroll=false"></script>')
            $(window).unbind('scroll');
        }
    });
});
for (let i = 0; i < 6; i++) {
    let imageBlock = document.getElementsByClassName('car-park-card__image')[i];
    let curImage = imageBlock.getElementsByTagName('img')[0];
    imageBlock.onmouseover = imageBlock.onmouseout = handler;
    function handler(event) {
        if (event.type == 'mouseover') {
            curImage.src = 'img/car-park/'+ (i+1) + '.1.jpg';
        }
        if (event.type == 'mouseout') {
            curImage.src = 'img/car-park/'+ (i+1) + '.jpg';
        }
    }
}