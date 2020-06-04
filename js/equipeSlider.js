$(function() {

    var delay = 5000;
    var curIndex = 0;
    var amount = $('.sobre-autor').length;


    initSlider();
    autoPlay();

    function initSlider() {
        var sizeContainer = 100 * amount;
        var sizeBoxSingle = 100 / amount;

        $('.sobre-autor').css('width', sizeBoxSingle + '%');
        $('.scroll-wrapper').css('width', sizeContainer + '%');

        for (var i = 0; i < amount; i++) {
            if (i == 0) {
                $('.slider-bullets').append('<span style="background-color:#835FA7;"></span>')
            } else {
                $('.slider-bullets').append('<span></span>')
            }
        }

    }

    function autoPlay() {
        setInterval(function() {
            curIndex++;
            if (curIndex == amount)
                curIndex = 0;
            goToSlider(curIndex);
        }, delay)
    }

    function goToSlider(curIndex) {
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wrapper').offset().left;
        $('.slider-bullets span').css('background-color', 'rgb(255,255,255)');
        $('.slider-bullets span').eq(curIndex).css('background-color', '#835FA7');
        $('.scrollEquipe').stop().animate({ 'scrollLeft': offSetX + 'px' });
    }

    $(window).resize(function() {
        $('.scrollEquipe').stop().animate({ 'scrollLeft': offSetX = 0 })
    })

})