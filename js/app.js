if (typeof jQuery === 'undefined') {
    throw new Error('Requires jQuery')
}
$(window).on('load', function () {
    $('body').removeClass('hidden-body');
    $('#sum-loading').fadeOut();
});
$(document).ready(function(){

    var options = {
        // aspectRatio: '16:9',
        fluid: true,
        controls: true,
        loop: false,
        controlBar: {
            fullscreenToggle: false
        }
    };

    
    var autoPlayVideo_2 = videojs('video-section-2-auto', options, function () {});
    var clickPlayVideo_2 = videojs('video-section-2-click', options, function () {});
    var autoPlayVideo_3 = videojs('video-section-3-auto', options, function () {});
    var clickPlayVideo_3 = videojs('video-section-3-click', options, function () {});

    function hideElemWhenAutoPlayVideo(){
        $('footer').fadeOut();
        $('#fp-nav').fadeOut();
    }

    function showElemAfterAutoPlayVideo(){
        $('footer').fadeIn();
        $('#fp-nav').fadeIn();
    }

    var toutAutoSection2, toutAutoSection3;
    var elemVideoAuto2 = $('#video-section-2-auto');
    var elemVideoClick2 = $('#video-section-2-click');
    var elemVideoAuto3 = $('#video-section-3-auto');
    var elemVideoClick3 = $('#video-section-3-click');
    $('#fullpage').fullpage({
        // verticalCentered: false,
        // fixedElements: '#pos-header',
        anchors: ['','story', 'secret','feeling', 'discover', 'register'],
        menu: '#menu-sum',
        navigation: true,
        navigationPosition: 'left',
        scrollOverflow: true,
        onLeave: function(index, nextIndex, direction){
            if(nextIndex != 1){
                $('#pos-header').addClass('on');
            }else{
                $('#pos-header').removeClass('on');
            }
            if(nextIndex != 2){
                clearTimeout(toutAutoSection2);
                autoPlayVideo_2.pause();
                autoPlayVideo_2.currentTime(0);
            }else{
                $('.br-section-2').fadeIn();
                $('.col-right-section-2').removeClass('opaque');
                elemVideoClick2.fadeOut();
                clickPlayVideo_2.pause();
                clickPlayVideo_2.currentTime(0);
            }
            if(nextIndex != 3){
                clearTimeout(toutAutoSection3);
                autoPlayVideo_3.pause();
                autoPlayVideo_3.currentTime(0);
            }else{
                $('.br-section-3').fadeIn();
                $('.col-left-section-3').removeClass('opaque');
                elemVideoClick3.fadeOut();
                clickPlayVideo_3.pause();
                clickPlayVideo_3.currentTime(0);
            }
        },
        afterLoad: function(anchorLink, index){
            if(index == 2){
                toutAutoSection2 = setTimeout(function(){
                    $('.br-section-2').fadeOut();
                    $('.col-right-section-2').addClass('opaque');
                    $('#play-section-2').fadeOut();
                    hideElemWhenAutoPlayVideo();
                    autoPlayVideo_2.play();
                    $('#video-section-2-auto').fadeIn();
                }, 2500);
            }else{
                elemVideoAuto2.fadeOut();
                autoPlayVideo_2.pause();
                autoPlayVideo_2.currentTime(0);
                $('#play-section-2').fadeIn();
            }

            if(index == 3){
                toutAutoSection3 = setTimeout(function(){
                    $('.br-section-3').fadeOut();
                    $('.col-left-section-3').addClass('opaque');
                    $('#play-section-3').fadeOut();
                    hideElemWhenAutoPlayVideo();
                    autoPlayVideo_3.play();
                    elemVideoAuto3.fadeIn();
                }, 2500);
            }else{
                elemVideoAuto3.fadeOut();
                autoPlayVideo_3.pause();
                autoPlayVideo_3.currentTime(0);
                $('#play-section-3').fadeIn();
            }
        },
        afterRender: function(anchorLink, index, slideAnchor, slideIndex){
        }
    });

    autoPlayVideo_2.on('ended', function() {
        showElemAfterAutoPlayVideo();
        $('.br-section-2').fadeIn();
        $('.col-right-section-2').removeClass('opaque');
        $('#play-section-2').fadeIn();
        elemVideoAuto2.fadeOut();
        autoPlayVideo_2.pause();
        autoPlayVideo_2.currentTime(0);
    });

    clickPlayVideo_2.on('ended', function() {
        showElemAfterAutoPlayVideo();
        $('.br-section-2').fadeIn(300);
        $('.col-right-section-2').removeClass('opaque');
        $('#play-section-2').fadeIn();
        elemVideoClick2.fadeOut();
        clickPlayVideo_2.pause();
        clickPlayVideo_2.currentTime(0);
    });

    $('#play-section-2').click(function () {
        hideElemWhenAutoPlayVideo();
        $('#play-section-2').fadeOut();
        $('.br-section-2').fadeOut();
        $('.col-right-section-2').addClass('opaque');
        elemVideoClick2.fadeIn();
        clickPlayVideo_2.play();
        clearTimeout(toutAutoSection2);
        elemVideoAuto2.fadeOut();
        autoPlayVideo_2.pause();
        autoPlayVideo_2.currentTime(0);
    });

    autoPlayVideo_3.on('ended', function() {
        showElemAfterAutoPlayVideo();
        $('.br-section-3').fadeIn(300);
        $('.col-left-section-3').removeClass('opaque');
        $('#play-section-3').fadeIn(300);
        elemVideoAuto3.fadeOut();
        autoPlayVideo_3.pause();
        autoPlayVideo_3.currentTime(0);
    });

    clickPlayVideo_3.on('ended', function() {
        showElemAfterAutoPlayVideo();
        $('.br-section-3').fadeIn(300);
        $('.col-left-section-3').removeClass('opaque');
        $('#play-section-3').fadeIn(300);
        elemVideoClick3.fadeOut();
        clickPlayVideo_3.pause();
        clickPlayVideo_3.currentTime(0);
    });

    $('#play-section-3').click(function () {
        hideElemWhenAutoPlayVideo();
        $('.br-section-3').fadeOut();
        $('#play-section-3').fadeOut();
        $('.col-left-section-3').addClass('opaque');
        elemVideoClick3.fadeIn();
        clickPlayVideo_3.play(0);
        clearTimeout(toutAutoSection3);
        elemVideoAuto3.fadeOut();
        autoPlayVideo_3.pause();
        autoPlayVideo_3.currentTime(0);
    });


    $('#slide-section-4').slick({
        slidesToShow: 3,
        swipeToSlide: true,
        dots: true,
        prevArrow: '<span type="button" class="slick-prev"><img src="images/prev_slide.png" alt=""></span>',
        nextArrow: '<span type="button" class="slick-next"><img src="images/next_slide.png" alt=""></span>',
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });


    

    $('#slick-discover').on('init', function(event, slick, currentSlide, nextSlide){
        // $('.slick-slide').addClass('small')
        // currentSlide = 0;
        // nextSlide = 1;
        // console.log(currentSlide)
        // $("[data-slick-index="+ (currentSlide-2) +"]").addClass('small').removeClass('big middle');
        // $("[data-slick-index="+ (currentSlide-1) +"]").addClass('middle').removeClass('big small');
        // $("[data-slick-index="+ (currentSlide) +"]").addClass('big').removeClass('middle small');
        // $("[data-slick-index="+ (nextSlide) +"]").addClass('middle').removeClass('big small');
        // $("[data-slick-index="+ (nextSlide+1) +"]").addClass('small').removeClass('big middle');
    });

    $('#slick-discover').slick({
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 5,
        draggable: false,
        prevArrow: '<span type="button" class="slick-prev"><img src="images/prev_slide.png" alt=""></span>',
        nextArrow: '<span type="button" class="slick-next"><img src="images/next_slide.png" alt=""></span>'
    });

    // On before slide change
    // Trước khi thay đổi . Bắt đầu là 0;
    $('#slick-discover').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        // $('.slick-slide').addClass('small');
        // // console.log(currentSlide);
        // // console.log(nextSlide);
        // var currentElt = slick.$slides.get(nextSlide);
        // console.log(currentElt)
        // $(currentElt).addClass('big').removeClass('middle small');
        // // $(currentElt).addClass('12123123131233');
        // var prevElt = $(currentElt).prev();
        // var prevElt_ofPrev = $(prevElt).prev();

        // var nextElt = $(currentElt).next();
        // var nextElt_ofNext = $(nextElt).next();

        // prevElt.addClass('middle').removeClass('big small');
        // prevElt_ofPrev.addClass('small').removeClass('big middle');

        // nextElt.addClass('middle').removeClass('big small');
        // nextElt_ofNext.addClass('small').removeClass('big middle');
    });
});