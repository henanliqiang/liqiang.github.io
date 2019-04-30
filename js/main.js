(function(humanSeat, $,undefined){
	humanSeat.register('MSI');
	humanSeat.MSI = (function(){
		var _init = function(){
			motionSet();
		};

		var motionSet = function(){
			var sTop = 0; 
			var m_group = [$('#m_contents .section_1')];
			var t1, t2, t3, t4, t5;
			var mog;

			t1 = new TimelineLite();
			t1.pause();

			t2 = new TimelineLite();
			t2.to($(m_group[1]).find('.prd_tab'),1,{y:0,alpha:1})
			.to($(m_group[1]).find('.prd_list'),1,{y:0,alpha:1},'-=1.0')
			t2.pause();

			t3 = new TimelineLite();
			t3.to($(m_group[2]).find('.features'),0.5,{y:0,alpha:1})
			t3.pause();

			t4 = new TimelineLite();
			t4.to($(m_group[3]).find('.type_1 .info > div:nth-of-type(1)'),1,{x:0,alpha:1})
			.to($(m_group[3]).find('.type_2 .info > div:nth-of-type(1)'),1,{x:0,alpha:1},'-=0.8')
			.to($(m_group[3]).find('.type_1 .info > div:nth-of-type(2)'),1,{x:0,alpha:1},'-=0.8')
			.to($(m_group[3]).find('.type_2 .info > div:nth-of-type(2)'),1,{x:0,alpha:1},'-=0.8')
			t4.pause();

			t5 = new TimelineLite();
			t5.to($(m_group[4]).find('.n_list'),1,{y:0,alpha:1,ease: Back.easeOut.config(1)})
			.to($(m_group[4]).find('.m_link'),1,{y:0,alpha:1,ease: Back.easeOut.config(1)},'-=0.8')
			t5.pause();

			mog = [t1, t2, t3, t4, t5];

			$(window).scroll(function(e) {
				scroll();
			});
			scroll();
			function scroll(){
				sTop = $(window).scrollTop() + $(window).height()/2;
				for(var i = 0; i < m_group.length; i++){
					if($(m_group[i]).offset().top < sTop){
						mog[i].play();
						m_group.splice(i, 1);
						mog.splice(i, 1);
					}
				}
			}

			$(window).load(function(){
				h_event = new TimelineLite();
				h_event.to($('#header'),0.5,{y:0,alpha:1})
			})

			$(window).resize(function(){
				var width = parseInt($(this).width());
				if (width<=1024){
					t1.kill();
					t2.kill();
					t3.kill();
					t4.kill();
					t5.kill();
				}
			}).resize();
		}
		return {
			init: _init
		}
	})();
}(APP || {}, jQuery));