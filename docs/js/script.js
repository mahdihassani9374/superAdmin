$(function(){

    new WOW().init();

    // start menu responsive

    $('.header__menu').on('click',function(event){
        event.stopPropagation();
        $('.sidebar').addClass('toggled');
        $('body').addClass('aside-toggled');
    })

    $('.sidebar').on('click',function(event){
        event.stopPropagation();
    })

    $(window).click(function(event) {
        $('.sidebar').removeClass('toggled');
        $('body').removeClass('aside-toggled');
    });

    // end menu responsive

    $(window).scroll(function(){
        if($(this).scrollTop() > 30) {
            $('.header').addClass('header--scrolled');
        }
        else {
            $('.header').removeClass('header--scrolled');
        }
    })
    
})