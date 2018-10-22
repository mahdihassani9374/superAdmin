$(function(){

    // start menu responsive

    $('.header__menu').on('click',function(event){
        event.stopPropagation();
        $('.sidebar').addClass('toggled');
    })

    $('.sidebar').on('click',function(event){
        event.stopPropagation();
    })

    $(window).click(function(event) {
        $('.sidebar').removeClass('toggled');
    });

    // end menu responsive
    
})