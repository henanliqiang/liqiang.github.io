//新闻导航切换
$('.intro > .switch > .switchs').click(function(){
    $('.intro > .switch > .switchs').removeClass('active');
    $(this).addClass('active');
    console.log($(this).index());
    $('.intro > .contents > .items').hide();
    $('.intro > .contents > .items:eq(' + $(this).index() + ')').show();
});






