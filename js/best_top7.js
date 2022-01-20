//  1. 경제학

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"경제학", size:"50"},
    headers: {Authorization: "KakaoAK 4a0aae40607d76e7c911ecd56083360e"}
})

.done(function(msg){
    $('#num1').append('<img src="'+msg.documents[0].thumbnail+'/">');
    $('.num1-box').prepend('<p>1</p>'); 
    $('.num1-box .info').append('<p>'+msg.documents[0].title.substring(0,7)+'</p>');
    $('.num1-box .info').append('<p>'+msg.documents[0].authors+'</p>');    
    
    var top7=document.getElementsByClassName('top7-1');
    for(var i=0; i<top7.length; i++){
        $('.top7-1').eq(i).append('<img src="'+msg.documents[i+1].thumbnail+'/">');

        var str=msg.documents[i+1].title;
        var str2=str.substring(0,10);
        var i2=i+2;
        
        $('.top7-1').eq(i).append('<p>'+i2+'</p>');
        $('.top7-1').eq(i).append('<h4>'+str2+'...'+'</h4>');
        $('.top7-1').eq(i).append('<p>'+msg.documents[i+1].authors+'</p>');
        

    }
});


//  2. 문학


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"문학", size:"50"},
    headers: {Authorization: "KakaoAK 4a0aae40607d76e7c911ecd56083360e"}
})

.done(function(msg){
    $('#num2').append('<img src="'+msg.documents[0].thumbnail+'/">');
    $('.num2-box').prepend('<p>1</p>'); 
    $('.num2-box .info').append('<p>'+msg.documents[0].title.substring(0, 7)+'</p>');
    $('.num2-box .info').append('<p>'+msg.documents[0].authors+'</p>');    
    
    var top7=document.getElementsByClassName('top7-2');
    for(var i=0; i<top7.length; i++){
        $('.top7-2').eq(i).append('<img src="'+msg.documents[i+1].thumbnail+'/">');

        var str=msg.documents[i+1].title;
        var str2=str.substring(0,10);
        var i2=i+2;
        
        $('.top7-2').eq(i).append('<p>'+i2+'</p>');
        $('.top7-2').eq(i).append('<h4>'+str2+'...'+'</h4>');
        $('.top7-2').eq(i).append('<p>'+msg.documents[i+1].authors+'</p>');

        

    }
});

//  3. 자기계발

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"자기계발", size:"50"},
    headers: {Authorization: "KakaoAK 4a0aae40607d76e7c911ecd56083360e"}
})

.done(function(msg){
    $('#num3').append('<img src="'+msg.documents[1].thumbnail+'/">');
    $('.num3-box').prepend('<p>1</p>'); 
    $('.num3-box .info').append('<p>'+msg.documents[1].title.substring(0, 8)+'</p>');
    $('.num3-box .info').append('<p>'+msg.documents[1].authors+'</p>');    
    
    var top7=document.getElementsByClassName('top7-3');
    for(var i=0; i<top7.length; i++){
        $('.top7-3').eq(i).append('<img src="'+msg.documents[i+2].thumbnail+'/">');

        var str=msg.documents[i+2].title;
        var str2=str.substring(0,10);
        var i2=i+2;
        
        $('.top7-3').eq(i).append('<p>'+i2+'</p>');
        $('.top7-3').eq(i).append('<h4>'+str2+'...'+'</h4>');
        $('.top7-3').eq(i).append('<p>'+msg.documents[i+2].authors+'</p>');

        

    }
});