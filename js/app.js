if (typeof jQuery === 'undefined') {
    throw new Error('Requires jQuery')
}
$(window).on('load', function () {
    $('body').removeClass('hidden-body');
    $('#sum-loading').fadeOut();
});
$(document).ready(function(){

    var options = {
        aspectRatio: '16:9',
        fluid: true,
        controlBar: {
            fullscreenToggle: false
        }
    };

    




    var toutAutoSection2, toutAutoSection3;
    var elemVideoAuto2 = $('#video-section-2-auto');
    var elemVideoClick2 = $('#video-section-2-click');
    var elemVideoAuto3 = $('#video-section-3-auto');
    var elemVideoClick3 = $('#video-section-3-click');
    $('#fullpage').fullpage({
        // verticalCentered: false,
        // fixedElements: '#pos-header',
        anchors: ['','story', 'secret', 'register'],
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
                //elemVideoAuto2.get(0).pause();
                // elemVideoAuto2.get(0).currentTime = 0;
            }else{
                $('.br-section-2').fadeIn();
                $('.col-right-section-2').removeClass('opaque');
                elemVideoClick2.fadeOut();
                elemVideoClick2.get(0).pause();
                elemVideoClick2.get(0).currentTime = 0;
            }
            if(nextIndex != 3){
                clearTimeout(toutAutoSection3);
                elemVideoAuto3.get(0).pause();
                elemVideoAuto3.get(0).currentTime = 0;
            }else{
                $('.br-section-3').fadeIn();
                $('.col-left-section-3').removeClass('opaque');
                elemVideoClick3.fadeOut();
                elemVideoClick3.get(0).pause();
                elemVideoClick3.get(0).currentTime = 0;
            }
        },
        afterLoad: function(anchorLink, index){
            if(index == 2){
                toutAutoSection2 = setTimeout(function(){
                    $('.br-section-2').fadeOut();
                    $('.col-right-section-2').addClass('opaque');
                    $('#play-section-2').fadeOut();
                    // elemVideoAuto2.get(0).play();
                    var player = videojs('video-section-2-auto', options, function () {
                        videojs.log('Your player is ready!');

                        // In this context, `this` is the player that was created by Video.js.
                        this.play();

                        // How about an event listener?
                        this.on('ended', function() {
                            videojs.log('Ended !');
                        });
                    });
                    $('#video-section-2-auto').fadeIn();
                }, 2500);
            }else{
                elemVideoAuto2.fadeOut();
                $('#play-section-2').fadeIn();
            }

            if(index == 3){
                toutAutoSection3 = setTimeout(function(){
                    $('.br-section-3').fadeOut();
                    $('.col-left-section-3').addClass('opaque');
                    $('#play-section-3').fadeOut();
                    elemVideoAuto3.get(0).play();
                    elemVideoAuto3.fadeIn();
                }, 2500);
            }else{
                elemVideoAuto3.fadeOut();
            }
        },
        afterRender: function(anchorLink, index, slideAnchor, slideIndex){
        }
    });
    document.getElementById('video-section-2-auto').addEventListener('ended',checkAutoVideo2,false);
    function checkAutoVideo2(e) {
        $('.br-section-2').fadeIn();
        $('.col-right-section-2').removeClass('opaque');
        $('#play-section-2').fadeIn();
        elemVideoAuto2.fadeOut();
    }

    document.getElementById('video-section-2-click').addEventListener('ended',checkLongVideo2,false);
    function checkLongVideo2(e) {
        $('.br-section-2').fadeIn(300);
        $('.col-right-section-2').removeClass('opaque');
        $('#play-section-2').fadeIn();
        elemVideoClick2.fadeOut();
    }

    $('#play-section-2').click(function () {
        $('#play-section-2').fadeOut();
        $('.br-section-2').fadeOut();
        $('.col-right-section-2').addClass('opaque');
        elemVideoClick2.fadeIn();
        clearTimeout(toutAutoSection2);
        elemVideoAuto2.fadeOut();
        // elemVideoAuto2.get(0).pause();
        // elemVideoAuto2.get(0).currentTime = 0;

        if ($("#video-section-2-click").get(0).paused) {
            $("#video-section-2-click").get(0).play();
        } else {
            $("#video-section-2-click").get(0).pause();
        }
    });
    
    document.getElementById('video-section-3-auto').addEventListener('ended',checkAutoVideo3,false);
    function checkAutoVideo3(e) {
        $('.br-section-3').fadeIn(300);
        $('.col-left-section-3').removeClass('opaque');
        $('#play-section-3').fadeIn(300);
        elemVideoAuto3.fadeOut();
    }

    document.getElementById('video-section-3-click').addEventListener('ended',checkLongVideo3,false);
    function checkLongVideo3(e) {
        $('.br-section-3').fadeIn(300);
        $('.col-left-section-3').removeClass('opaque');
        $('#play-section-3').fadeIn(300);
        elemVideoClick3.fadeOut();
    }

    $('#play-section-3').click(function () {
        $('.br-section-3').fadeOut();
        $('#play-section-3').fadeOut();
        $('.col-left-section-3').addClass('opaque');
        elemVideoClick3.fadeIn();
        clearTimeout(toutAutoSection3);
        elemVideoAuto3.fadeOut();
        elemVideoAuto3.get(0).pause();
        elemVideoAuto3.get(0).currentTime = 0;
        if ($("#video-section-3-click").get(0).paused) {
            $("#video-section-3-click").get(0).play();
        } else {
            $("#video-section-3-click").get(0).pause();
        }
    });

    // $('.your-class').slick({
    //     centerMode: true,
    //     centerPadding: '0px',
    //     slidesToShow: 5,
    //     draggable: false,
    //     responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 3
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 1
    //         }
    //     }
    //     ]
    // });

    // $('.your-class').on('reInit', function(event, slick, currentSlide, nextSlide){
    //     console.log(123)
    //     // $("[data-slick-index="+ (currentSlide-1) +"]").addClass('small');
    //     // $("[data-slick-index="+ currentSlide +"]").removeClass('big small').addClass('middle');
    //     $("[data-slick-index="+ nextSlide +"]").addClass('big');
    //     // $("[data-slick-index="+ (nextSlide+1) +"]").addClass('middle');
    // });

    // // On before slide change
    // $('.your-class').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     $("[data-slick-index="+ (currentSlide-1) +"]").addClass('small');
    //     $("[data-slick-index="+ currentSlide +"]").removeClass('big small').addClass('middle');
    //     $("[data-slick-index="+ nextSlide +"]").addClass('big');
    //     $("[data-slick-index="+ (nextSlide+1) +"]").addClass('middle');
    // });










    // $('.owl-carousel').on('initialized.owl.carousel', function(e){
    //     idx = e.item.index;
    //     $('.owl-item.big').removeClass('big');
    //     $('.owl-item.medium').removeClass('medium');
    //     $('.owl-item.small').removeClass('small');
    //     $('.owl-item').addClass('small');
        

    //     $('.owl-item').eq(idx+2).addClass('big');
    //     $('.owl-item').eq(idx+1).addClass('medium');
    //     // $('.owl-item').eq(idx).addClass('small');
    //     $('.owl-item').eq(idx+3).addClass('medium');
    //     $('.owl-item').eq(idx+4).addClass('small');
    //     $('.owl-item').eq(idx+5).addClass('small');
    // });

    // $('.owl-carousel').owlCarousel({
    //     center: false,
    //     loop: true,
    //     nav: true,
    //     items: 5
    // });
    // $('.owl-carousel').on('translate.owl.carousel', function(e){
    //     idx = e.item.index;

    //     // $('.owl-item.big').removeClass('big');
    //     // $('.owl-item.medium').removeClass('medium');
    //     // $('.owl-item.small').removeClass('small');

    //     $('.owl-item').addClass('small');
        
    //     $('.owl-item').eq(idx+2).addClass('big');
    //     $('.owl-item').eq(idx+1).addClass('medium');
    //     // $('.owl-item').eq(idx).addClass('small');
    //     $('.owl-item').eq(idx+3).addClass('medium');
    //     $('.owl-item').eq(idx+4).addClass('small');
    //     $('.owl-item').eq(idx+5).addClass('small');
    // });
});