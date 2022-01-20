$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"심리학", size:"50"},
    headers: {Authorization: "KakaoAK 4a0aae40607d76e7c911ecd56083360e"},
})


.done(function(msg){
    var newbook=document.getElementsByClassName('nb-list');
    for(var i=0; i<newbook.length; i++){
        $('.nb-list').eq(i).append('<img src="'+msg.documents[i].thumbnail+'/">');
        
        var str=msg.documents[i].title;
        var str2=str.substring(0, 10);

        $('.nb-list').eq(i).append('<h4>'+str2+'...'+'</h4>');
        $('.nb-list').eq(i).append('<p>'+msg.documents[i].authors+'</p>');
    }
});