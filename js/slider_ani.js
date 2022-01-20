$(function(){
    
    $(".prev").click(function(){
        $(".top-slider li:last").prependTo(".top-slider");
        $(".top-slider").css({marginLeft:-180});
        $(".top-slider").stop().animate({marginLeft:0},300);
        
    });
    $(".next").click(function(){
        $(".top-slider").stop().animate({marginLeft:-180},300, function(){
            $(".top-slider li:first").appendTo(".top-slider");
            $(".top-slider").css({marginLeft:0});
        });
    });
});    