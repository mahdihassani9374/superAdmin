$(function () {

    new WOW().init();

    // start menu responsive

    $('.header__menu').on('click', function (event) {
        event.stopPropagation();
        $('.sidebar').addClass('toggled');
        $('body').addClass('aside-toggled');
    })

    $('.sidebar').on('click', function (event) {
        event.stopPropagation();
    })

    $(window).click(function (event) {
        $('.sidebar').removeClass('toggled');
        $('body').removeClass('aside-toggled');
    });

    // end menu responsive

    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $('.header').addClass('header--scrolled');
        } else {
            $('.header').removeClass('header--scrolled');
        }
    })

    // show / hide sub menu

    $('.sidebar__navigation__item').on('click', function (event) {
        event.stopPropagation();
        //var active = $(this).find('.sidebar__navigation__item__link').addClass('active');
        var subMenu = $(this).find('ul.sidebar__navigation-sub').slideToggle();
    })

    // show / hide sub menu

    // scroll bar 

    $(".scroll-panel").mCustomScrollbar({
        scrollButtons: {
            enable: true,
            scrollType: "stepped"
        },
        keyboard: {
            scrollType: "stepped"
        },
        mouseWheel: {
            scrollAmount: 188,
            normalizeDelta: true
        },
        theme: "rounded-dark",
        autoExpandScrollbar: true,
        snapAmount: 188,
        snapOffset: 65

    });
})