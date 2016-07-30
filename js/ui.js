$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

$(document).on('click', '.js-hamburger', function(){
    if($(this).hasClass('is-active')){
        $(this).removeClass('is-active');
        $('nav').css('top', -356);
        return false;
    }
    $(this).addClass('is-active');
    $('nav').css('top', 56);

    return false;

});





