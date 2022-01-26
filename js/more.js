// 더보기 이벤트
$(function(){
  var tImg = $(".img-wrap img").height();
  if(tImg < 330){
    $(".i-more").hide();
  }
  $(".i-more").on("click",function(){
    $(this).prev().addClass("on");
    $(this).hide();
  });	
});
