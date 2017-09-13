if (typeof jQuery === 'undefined') {
    throw new Error('Requires jQuery')
}
$(window).on('load', function () {
    $('body').removeClass('hidden-body');
    $('#sum-loading').fadeOut();
});

$(window).resize(function(){
    if($(window).width() < 768){
        $('.fp-tableCell').removeAttr('style');
        $('.fp-scrollable').removeAttr('style');
        $('.section ').removeAttr('style');
        
        $.fn.fullpage.setAutoScrolling(false);
        $.fn.fullpage.setFitToSection(false);
    }else{
        $.fn.fullpage.setAutoScrolling(true);
        $.fn.fullpage.reBuild();
    }
})

$(document).ready(function(){
    $('.navbar-mobile').on('click', function(){
        $('#menu-sum').toggleClass('active');
    })
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

    var toutAutoSection2, toutAutoSection3;

    var elemVideoAuto2 = $('#video-section-2-auto');
    var elemVideoClick2 = $('#video-section-2-click');
    var btnCloseVideo2 = $('#close-video-2');

    var elemVideoAuto3 = $('#video-section-3-auto');
    var elemVideoClick3 = $('#video-section-3-click');
    var btnCloseVideo3 = $('#close-video-3');

    $('#fullpage').fullpage({
        // verticalCentered: false,
        // fixedElements: '#pos-header',
        anchors: ['magic','story', 'secret','feeling', 'discover', 'register'],
        menu: '#menu-sum',
        navigation: true,
        navigationPosition: 'left',
        // scrollOverflow: true,
        onLeave: function(index, nextIndex, direction){
            if($(window).width() > 767){
                if(nextIndex != 1){
                    $('#pos-header').addClass('on');
                }else{
                    $('#pos-header').removeClass('on');
                }
            }
            if(nextIndex != 1){
                $('#backToTop').fadeIn();
            }else{
                $('#backToTop').fadeOut();
            }
            if(nextIndex != 2){
                clearTimeout(toutAutoSection2);
                autoPlayVideo_2.pause();
                autoPlayVideo_2.currentTime(0);
            }else{
                $('.br-section-2').fadeIn();
                $('.col-right-section-2').removeClass('opaque');
                elemVideoClick2.fadeOut();
                btnCloseVideo2.fadeOut();
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
                btnCloseVideo3.fadeOut();
                clickPlayVideo_3.pause();
                clickPlayVideo_3.currentTime(0);
            }
            // }
        },
        afterLoad: function(anchorLink, index){
            // if($(window).width() > 767){
                if(index == 2){
                    toutAutoSection2 = setTimeout(function(){
                        $('.br-section-2').fadeOut();
                        $('.col-right-section-2').addClass('opaque');
                        $('#play-section-2').fadeOut();
                        hideElemWhenAutoPlayVideo();
                        autoPlayVideo_2.play();
                        $('#video-section-2-auto').fadeIn();
                        btnCloseVideo2.fadeIn();
                    }, 2500);
                }else{
                    elemVideoAuto2.fadeOut();
                    btnCloseVideo2.fadeOut();
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
                        btnCloseVideo3.fadeIn();
                    }, 2500);
                }else{
                    elemVideoAuto3.fadeOut();
                    btnCloseVideo3.fadeOut();
                    autoPlayVideo_3.pause();
                    autoPlayVideo_3.currentTime(0);
                    $('#play-section-3').fadeIn();
                }
            // }
        },
        afterRender: function(anchorLink, index, slideAnchor, slideIndex){
        }
    });

    $(window).resize();


    

    function hideElemWhenAutoPlayVideo(){
        $('footer').fadeOut();
        $('#fp-nav').fadeOut();
    }

    function showElemAfterAutoPlayVideo(){
        $('footer').fadeIn();
        $('#fp-nav').fadeIn();
    }

    autoPlayVideo_2.on('ended', function() {
        showElemAfterAutoPlayVideo();
        $('.br-section-2').fadeIn();
        $('.col-right-section-2').removeClass('opaque');
        $('#play-section-2').fadeIn();
        elemVideoAuto2.fadeOut();
        btnCloseVideo2.fadeOut();
        autoPlayVideo_2.pause();
        autoPlayVideo_2.currentTime(0);
    });

    clickPlayVideo_2.on('ended', function() {
        showElemAfterAutoPlayVideo();
        $('.br-section-2').fadeIn(300);
        $('.col-right-section-2').removeClass('opaque');
        $('#play-section-2').fadeIn();
        elemVideoClick2.fadeOut();
        btnCloseVideo2.fadeOut();
        clickPlayVideo_2.pause();
        clickPlayVideo_2.currentTime(0);
    });
    $('#play-section-2').click(function () {
        btnCloseVideo2.fadeIn();
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
    $('#close-video-2').click(function () {
        btnCloseVideo2.fadeOut();
        showElemAfterAutoPlayVideo();
        $('.br-section-2').fadeIn();
        $('.col-right-section-2').removeClass('opaque');
        $('#play-section-2').fadeIn();
        elemVideoAuto2.fadeOut();
        autoPlayVideo_2.pause();
        autoPlayVideo_2.currentTime(0);

        elemVideoClick2.fadeOut();
        clickPlayVideo_2.pause();
        clickPlayVideo_2.currentTime(0);
    });

    /*-------------*/

    autoPlayVideo_3.on('ended', function() {
        showElemAfterAutoPlayVideo();
        $('.br-section-3').fadeIn(300);
        $('.col-left-section-3').removeClass('opaque');
        $('#play-section-3').fadeIn(300);
        elemVideoAuto3.fadeOut();
        autoPlayVideo_3.pause();
        autoPlayVideo_3.currentTime(0);

        btnCloseVideo3.fadeOut();
    });

    clickPlayVideo_3.on('ended', function() {
        showElemAfterAutoPlayVideo();
        $('.br-section-3').fadeIn(300);
        $('.col-left-section-3').removeClass('opaque');
        $('#play-section-3').fadeIn(300);
        elemVideoClick3.fadeOut();
        clickPlayVideo_3.pause();
        clickPlayVideo_3.currentTime(0);
        btnCloseVideo3.fadeOut();
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

        btnCloseVideo3.fadeIn();
    });

    $('#close-video-3').click(function () {
        showElemAfterAutoPlayVideo();
        $('.br-section-3').fadeIn(300);
        $('.col-left-section-3').removeClass('opaque');
        $('#play-section-3').fadeIn(300);
        elemVideoAuto3.fadeOut();
        autoPlayVideo_3.pause();
        autoPlayVideo_3.currentTime(0);

        elemVideoClick3.fadeOut();
        clickPlayVideo_3.pause();
        clickPlayVideo_3.currentTime(0);

        btnCloseVideo3.fadeOut();
    });


    $('#slide-section-4').slick({
        slidesToShow: 3,
        swipeToSlide: true,
        dots: true,
        prevArrow: '<span type="button" class="slick-prev"><img src="images/prev_slide.png" alt=""></span>',
        nextArrow: '<span type="button" class="slick-next"><img src="images/next_slide.png" alt=""></span>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    var owl = $('.center-mode-owl');
    owl.on('changed.owl.carousel', function(e){
        idx = e.item.index;
        $('.owl-item.big').removeClass('big');
        $('.owl-item.middle').removeClass('middle middle-left middle-right');
        $('.owl-item.in-right').removeClass('in-right');
        $('.owl-item.in-left').removeClass('in-left');

        $('.owl-item').eq(idx).addClass('big');
        $('.owl-item').eq(idx-1).addClass('middle middle-left');
        $('.owl-item').eq(idx-2).addClass('in-left');
        $('.owl-item').eq(idx+1).addClass('middle middle-right');
        $('.owl-item').eq(idx+2).addClass('in-right');
        $('.center-mode-owl .owl-dots').click(function(event) {
          $(this).removeClass('disabled');
        });
    });
    owl.on('translate.owl.carousel', function(e){
        $('.center-mode-owl').find('.owl-dots').removeClass('disabled');
    });
    var iHeightOwl;
    owl.on('resized.owl.carousel', function(e){
        iHeightOwl = $('.center-mode-owl').height();
        $('.wrap-owl-5').css({'height': iHeightOwl + 'px'});
    });
    owl.on('initialized.owl.carousel', function(e){
        iHeightOwl = $('.center-mode-owl').height();
    });
    
    owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });
    $(document).on('click', '.owl-item>div', function() {
        owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
    });
    owl.owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: -30,
        nav: false,
        dots: true,
        // mouseDrag: false,
        // touchDrag: false,
        responsive:{
            600:{
                items:5
            }
        }
    });
    $('.owl-5-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.owl-5-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })


    $('.view-detail-price').on('click', function(){
        var element = $(this).attr('data-id');
        $(this).parents('.content-des').hide();
        $('#'+element).show();
        $('#'+element).parents('.modal-content').find('.back-layer').show();
    })

    $('.back-layer').on('click', function(){
        $(this).hide();
        $(this).parent().find('.content-des').show();
        $(this).parent().find('.content-detail').hide();
    })

    var bOpenModal = false;
    $('[data-toggle=modal]').on('click', function (e) {
        e.preventDefault();
        if(!bOpenModal){
            bOpenModal = true;
            var target = $(this).attr('data-id');
            setTimeout(function() {
                bOpenModal = false;
                $(target).modal('show');
            }, 350); // milliseconds
        }
    });

    $('#modalDetailProd_1').on('show.bs.modal', function () {
        $('.back-layer').hide();
        $('#modalDetailProd_1').find('.content-des').show();
        $('#modalDetailProd_1').find('.content-detail').hide();
    })

    $('#modalDetailProd_2').on('show.bs.modal', function () {
        $('.back-layer').hide();
        $('#modalDetailProd_2').find('.content-des').show();
        $('#modalDetailProd_2').find('.content-detail').hide();
    })

    $('#modalDetailProd_3').on('show.bs.modal', function () {
        $('.back-layer').hide();
        $('#modalDetailProd_3').find('.content-des').show();
        $('#modalDetailProd_3').find('.content-detail').hide();
    })

    $('#modalDetailProd_4').on('show.bs.modal', function () {
        $('.back-layer').hide();
        $('#modalDetailProd_4').find('.content-des').show();
        $('#modalDetailProd_4').find('.content-detail').hide();
    })

    $('#modalDetailProd_5').on('show.bs.modal', function () {
        $('.back-layer').hide();
        $('#modalDetailProd_5').find('.content-des').show();
        $('#modalDetailProd_5').find('.content-detail').hide();
    })
});