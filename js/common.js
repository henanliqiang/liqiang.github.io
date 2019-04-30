// 鼠标移入导航
$('header > .wrap > .inner > .fr > ul > li').mouseenter(function(e){
	$(this).find('dl').slideDown(200);
});
// 鼠标移出导航
$('header > .wrap > .inner > .fr > ul > li').mouseleave(function(e){
	$(this).find('dl').slideUp(200);
});
//屏幕滑动监听
$(window).scroll(function(){
	if ($(window).scrollTop()>0){
		$(".section").fadeIn(500);
	}else{
		$(".section").fadeOut(500);
	}
});
//当点击跳转链接后，回到页面顶部位置
$(".totop").click(function(){
	$('body,html').animate({scrollTop:0},500);
	return false;
});
//立即通话
$('.phonenow').hover(function(){
	$('.phone').toggle();
});
//官方微信
$('.wx').hover(function(){
	$('.wx-ewm').toggle();
});
// 横向轮播
$(function(){
	$('#gnb').dbNaviTwoDepthSwap({
		motionType:'slide'
	});
	$('.btn_sch').click(function(){
		$('.search').fadeToggle();
	});
	$('.btn_sitemap').click(function(){
		$('#sitemap').show();
	});
	$('.btn_close2').click(function(){
		$('#sitemap').stop().fadeOut();
	});

	$('.btn_nav').click(function(){
		$('#header').toggleClass('fix');
		$(this).toggleClass('on');
		$('#nav').toggle();
	});

	$('.menu > div > a,.snb_s>a').on('click',function(e){
		$('.menu > div > a,.snb_s>a').removeClass('on');
		$('.menu > div > ul,.snb_s>ul').slideUp();
		$(this).removeClass('on');
		var menuList = $(this).next('ul');
		if(!menuList.is(':visible') ){
			$(this).addClass('on');
			menuList.slideDown();
		}
		e.preventDefault();
	});

	/*
	$('.nav > li > a').on('click',function(e){
		$('.nav > li > a').removeClass('on');
		$('.nav > li > ul').slideUp();
		$(this).removeClass('on');
		var snbmenu = $(this).next('ul');
		if(!snbmenu.is(':visible') ){
			$(this).addClass('on');
			snbmenu.slideDown();
		}
		e.preventDefault();
	});
	*/

	//input[type=file] design
	var uploadFile = $('.fileBox .uploadBtn');
	uploadFile.on('change', function(){
		if(window.FileReader){
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}
		$(this).parents('.fileBox').find('.fileName').val(filename);
	});
})

//관련사이트로 이동
function head_select(sel) {
var idx = sel.selectedIndex;
	var openNewWindow = window.open("about:blank");
	openNewWindow.location.href=sel.value;
}
