$(function(){
  $(".detail-navi li").click(function(){
    $(".detail-navi :first-child").removeClass("selected");
    $(this).addClass("nav-active");
    $(this).siblings().removeClass("nav-active");
  });
});