$('body').empty(); 
$('body').append('<iframe id="frame" src="https://www.eximb.com/ukr/personal/" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>')
$('#frame').load(function(){
    //$('#frame').contents().find('body').html('Hey, i`ve changed content of <body>! Yay!!!');
});
