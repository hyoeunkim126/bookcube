$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"불교"},
    headers: {Authorization: "KakaoAK 4a0aae40607d76e7c911ecd56083360e"}
})

.done(function(msg){
    var free=document.getElementsByClassName('free-list');
    for(var i=0; i<free.length; i++){
        $('.free-list').eq(i).append('<img src="'+msg.documents[i].thumbnail+'/">');
        
        var str=msg.documents[i].title;
        var str2=str.substring(0, 10);

        $('.free-list').eq(i).append('<h4>'+str2+'...'+'</h4>');
        $('.free-list').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
    }
})