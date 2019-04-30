/*********************************************************************************
�÷����� : jquery.dbNaviTwoDepthSwap.js (ver 1.0)
������ : Copyright �� 2012 by �����κ���(http://designblack.com) 
���̼��� : �����ζ��̼���
��Ÿ : �������, ���� �� ���̼����� Ȩ�������� �����ϼ���
       ���������� �����ϰų� ���� �� �� �����ϴ�
*********************************************************************************/
;(function($){
	$.fn.dbNaviTwoDepthSwap=function(options){
		//�ɼǰ�
		var opt={
			pageNum:null,           //���θ޴� �������ν�
			subNum:null,            //����޴� �������ν�
			motionType:'none',      //���Ÿ��(none,fade,slide)
			motionSpeed:400,        //��Ǽӵ�(�и���)
			delayTime:0             //�޴��ƿ��� �ǵ��ư��� �����̽ð�(�и���)
		}	
		$.extend(opt,options);
		return this.each(function(){
			var $this=$(this);			
			var $menuList=$this.find('>.main');
			var $subList=$menuList.find('>div>ul>li');
			var listNum=$menuList.length;
			var fixMenu=opt.pageNum-1;
			var fixSub=opt.subNum-1;
			var currentMenu=fixMenu;
			var currentSub=fixSub;
			var timerId;
			init();	

			function init(){
				setMouseEvent();
				setAnimation();				
			}

			function setMouseEvent(){
				$this.bind('mouseenter',function(){
					//$('#header').addClass('on');
					clearTimeout(timerId);
				});
				$this.bind('mouseleave',function(){
					timerId=setTimeout(setAnimation,opt.delayTime);
					//$('#header').removeClass('on');
				});
				$menuList.bind('mouseenter keyup',function(){					
					currentMenu=$(this).index();
					if(currentMenu!=fixMenu){
						currentSub=null;
					}						
					setAnimation();
				});
				$menuList.bind('mouseleave',function(){
					if(currentMenu!=fixMenu){
						currentSub=fixSub;
					}
					currentMenu=fixMenu;						
				});

				$subList.bind('mouseenter keyup',function(){
					currentSub=$(this).index();					
					setAnimation();
				});
				$subList.bind('mouseleave',function(){
					var _currentMenu=$(this).parents('.main').index();	
					if(_currentMenu==fixMenu){
						currentSub=fixSub;
					}else{
						currentSub=null;
					}						
				});
			}

			function setAnimation(){
				for(var i=0;i<listNum;i++){
					var _menuList=$menuList.eq(i);
					if(currentMenu==i){
						switch(opt.motionType){
							case 'fade':
								_menuList.find('>div').stop(true,true).fadeIn(opt.motionSpeed);
								break;
							case 'slide':
								_menuList.find('>div').stop(true,true).slideDown(opt.motionSpeed);
								break;
							default:
								_menuList.find('>div').show();
						}				
						_menuList.addClass('main_select');
						setReplace(_menuList.find('>a>img'),'src','_off','_on')
						for(var k=0;k<_menuList.find('li').length;k++){
							var _sub=_menuList.find('li').eq(k);
							if(currentSub==k){
								setReplace(_sub.find('>a>img'),'src','_off','_on');
								_sub.addClass('sub_select');
							}else{
								_sub.removeClass('sub_select');
								setReplace(_sub.find('>a>img'),'src','_on','_off');
							}
						}
					}else{
						switch(opt.motionType){
							case 'fade':
								_menuList.find('>div').stop(true,true).fadeOut(opt.motionSpeed/2);
								break;
							case 'slide':
								_menuList.find('>div').stop(true,true).slideUp(opt.motionSpeed/2);
								break;
							default:
								_menuList.find('>div').hide();
						}
						_menuList.removeClass('main_select');
						setReplace(_menuList.find('>a>img'),'src','_on','_off');
						
					}
				}
			}

			function setReplace(_mc,_attr,_old,_new){
				var str=_mc.attr(_attr);
				if(String(str).search(_old)!=-1){
					_mc.attr(_attr,str.replace(_old,_new));
				}
			}
		})
	}
})(jQuery)
