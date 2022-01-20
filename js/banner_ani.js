// 이벤트 배너
$(function(){
    
    $(".e-prev").click(function(){
        $(".event-list li:last").prependTo(".event-list");
        $(".event-list").css({marginLeft:-312});
        $(".event-list").stop().animate({marginLeft:0},300);
        
    });
    $(".e-next").click(function(){
        $(".event-list").stop().animate({marginLeft:-312},300, function(){
            $(".event-list li:first").appendTo(".event-list");
            $(".event-list").css({marginLeft:0});
        });
    });
});    



// 중간 배너
$(function(){
    
    $(".e-prev").click(function(){
        $(".banner-list li:last").prependTo(".banner-list");
        $(".banner-list").css({marginLeft:-312});
        $(".banner-list").stop().animate({marginLeft:0},300);
        
    });
    $(".e-next").click(function(){
        $(".banner-list").stop().animate({marginLeft:-312},300, function(){
            $(".banner-list li:first").appendTo(".banner-list");
            $(".banner-list").css({marginLeft:0});
        });
    });
});    