// 더보기 이벤트
$(function(){
  var tImg = $(".img-wrap img").height();
  if(tImg < 340){
    $(".i-more").hide();
  }
  $(".i-more").on("click",function(){
    $(this).prev().addClass("on");
    $(this).hide();
  });	
});
$(function(){
  var tText = $(".t-content").height();
  if(tText < 150){
    $(".t-more").hide();
  }
  $(".t-more").on("click",function(){
    $(this).prev().addClass("on");
    $(this).hide();
  });	
});