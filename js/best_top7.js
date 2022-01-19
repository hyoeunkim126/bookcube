$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"경제학", size:"50"},
    headers: {Authorization: "KakaoAK 4a0aae40607d76e7c911ecd56083360e"}
})

.done(function(msg){
    $('#num1').append('<img src="'+msg.documents[0].thumbnail+'/">');
    $('.num1-box').append('<p>1</p>'); 
    $('.num1-box').append('<h4>'+msg.documents[0].title+'</h4>');
    $('.num1-box').append('<p>'+msg.documents[0].authors+'</p>');    
    
    var top7=document.getElementsByClassName('top7-1');
    for(var i=1; i<top7.length; i++){
        $('.top7-1').eq(i).append('<img src="'+msg.documents[i].thumbnail+'/">');

        var str=msg.documents[i].title;
        var str2=str.substring(0,20);
        
        $('.top7-1').eq(i).append('<p>'+i+'</p>');
        $('.top7-1').eq(i).append('<h4>'+str2+'...'+'</h4>');
        $('.top7-1').eq(i).append('<p>'+msg.documents[i].authors+'</p>');

        

    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"문학", size:"50"},
    headers: {Authorization: "KakaoAK 4a0aae40607d76e7c911ecd56083360e"}
})

.done(function(msg){
    $('#num2').append('<img src="'+msg.documents[0].thumbnail+'/">');
    $('.top7-2 .num1-box').append('<p>1</p>'); 
    $('.top7-2 .num1-box').append('<h4>'+msg.documents[0].title+'</h4>');
    $('.top7-2 .num1-box').append('<p>'+msg.documents[0].authors+'</p>');    
    
    var top7=document.getElementsByClassName('top7-1');
    for(var i=1; i<top7.length; i++){
        $('.top7-2').eq(i).append('<img src="'+msg.documents[i].thumbnail+'/">');

        var str=msg.documents[i].title;
        var str2=str.substring(0,20);
        
        $('.top7-2').eq(i).append('<p>'+i+'</p>');
        $('.top7-2').eq(i).append('<h4>'+str2+'...'+'</h4>');
        $('.top7-2').eq(i).append('<p>'+msg.documents[i].authors+'</p>');

        

    }
});