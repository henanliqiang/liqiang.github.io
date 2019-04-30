// 点击产品展示导航切换
$('.intro > .switch > .switchs').click(function(){
    $('.intro > .switch > .switchs').removeClass('active');
    $(this).addClass('active');
    console.log($(this).index(),'sdfds');
    $('.intro > .products > .shows').hide();
    $('.intro > .products > .shows:eq(' + $(this).index() + ')').show();
});
