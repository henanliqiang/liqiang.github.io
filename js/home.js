// DOM元素加载完毕
$(function(){
  var loadEle = document.getElementsByClassName('loads');
  for (var index = 0; index < loadEle.length; index++) {
    if (loadEle[index]) {
      loadEle[index].getElementsByClassName('loading')[0].style.display = 'none';
    } else {
      loadEle[index].getElementsByClassName('loading')[0].style.display = 'block';
    }
  }
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  //此方法为模拟的，hover到分页器的小圆点后自动触发其本身的click事件
  $(".swiper-container > .swiper-pagination > .swiper-pagination-bullet").hover(function() {
    $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
  },function() {
    mySwiper.autoplay.start(); //鼠标移出之后，自动轮播开启
  });
  // 产品中心 轮播
  var mySwiper2 = new Swiper('#swiper-container2',{
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: false, //自动播放
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // type: 'custom',
      },
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      effect : 'coverflow',
      slidesPerView: 5,
      centeredSlides: true,
  });
  var mySwiper3 = new Swiper('#swiper-container3',{
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: false, //自动播放
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // type: 'custom',
    },
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    effect : 'coverflow',
    slidesPerView: 5,
    centeredSlides: true,
  });
  var mySwiper4 = new Swiper('#swiper-container4',{
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: false, //自动播放
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // type: 'custom',
    },
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    effect : 'coverflow',
    slidesPerView: 5,
    centeredSlides: true,
  });
  var mySwiper5 = new Swiper('#swiper-container5',{
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: false, //自动播放
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // type: 'custom',
    },
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    effect : 'coverflow',
    slidesPerView: 5,
    centeredSlides: true,
  });
  //产品中心导航切换
  $('.choose > .item > a').click(function(){
    $('.choose > .item').removeClass('active');
    $(this).parent('.item').addClass('active');
    $('.product-show > #container > #m_contents > .section_1').hide();
    $('.product-show > #container > #m_contents > .section_1:eq(' + $(this).parent('.item').index() + ')').show();
  });
  // 新闻中心导航切换
  $('.newsCenter > .new > .titles > ul > li > a').click(function(){
    $('.newsCenter > .new > .titles > ul > li').removeClass('active');
    $(this).parent('li').addClass('active');
    console.log($(this).parent('li').index());
    $('.newsCenter > .new > .contents > .content').hide();
    $('.newsCenter > .new > .contents > .content:eq(' + $(this).parent('li').index() + ')').show();
  });
  // 鼠标移入产品中心样品展示
  $('.products > .product-show > .swiper-container2 > .swiper-wrapper > .swiper-slide').hover(function(){
    $(this).children('a').children('.mask').toggle();
    $(this).children('a').children('.masks').toggle();
  });
  $('.products > .product-show > .swiper-container3 > .swiper-wrapper > .swiper-slide').hover(function(){
    $(this).children('a').children('.mask').toggle();
    $(this).children('a').children('.masks').toggle();
  });
  $('.products > .product-show > .swiper-container4 > .swiper-wrapper > .swiper-slide').hover(function(){
    $(this).children('a').children('.mask').toggle();
    $(this).children('a').children('.masks').toggle();
  });
  $('.products > .product-show > .swiper-container5 > .swiper-wrapper > .swiper-slide').hover(function(){
    $(this).children('a').children('.mask').toggle();
    $(this).children('a').children('.masks').toggle();
  });
});
