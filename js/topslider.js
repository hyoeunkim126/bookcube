$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"경제", size:"50"},
    headers: {Authorization: "KakaoAK 4a0aae40607d76e7c911ecd56083360e"}
})

.done(function(msg){
    console.log(msg);

    var todayhot=document.getElementsByClassName('today-hot-box');
    for(var i=0; i<todayhot.length; i++){
        $('.today-hot-box').eq(i).append('<img src="'+msg.documents[i].thumbnail+'/">');

        var str=msg.documents[i].title;
        var str2=str.substring(0,20);

        $('.today-hot-box').eq(i).append('<h4>'+str2+'...'+'</h4>');
        $('.today-hot-box').eq(i).append('<p>'+msg.documents[i].authors+'</p>');

    }
});