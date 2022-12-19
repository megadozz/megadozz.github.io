$(document).ready(function(){

    var mask_w = $('.sec_img').width();

    $('#left').click(function(){

        $('#sec01_img_wrap').animate({

            left: -mask_w * 2,

        }, 500, function(){

            $('#sec01_img_wrap').css({

                left: -mask_w,

            }).find('.sec_img').first().appendTo('#sec01_img_wrap');

        });

    });

    $('#right').click(function(){

        $('#sec01_img_wrap').animate({

            left: 0,

        }, 500, function(){

            $('#sec01_img_wrap').css({

                left: -mask_w,

            }).find('.sec_img').last().prependTo('#sec01_img_wrap');

        });

    });

    setInterval(function(){

        $('#left').trigger('click');

    }, 4000);

});//end