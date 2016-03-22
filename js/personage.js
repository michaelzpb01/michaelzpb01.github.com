'use strict'
;(function(){
	addReady(function(){
		var oShade = document.getElementById('shade');
		var oShade_l = document.getElementById('shade_l');
		var oShade_r = document.getElementById('shade_r');
		var oIntros_l = document.getElementById('intros_l');
		var oIntros_r = document.getElementById('intros_r');
		
		var oCall_c = document.getElementById('call_c');
		var oCall_vx = document.getElementById('call_vx');
		
		var oWx = document.getElementById('WX');
		var oPhone = document.getElementById('phone');
		
		var oQq = document.getElementById('qq');
		var oCall_qq = document.getElementById('call_qq');
		
		
		var oList_fs = document.getElementById('list_fs');
		
		var bOk = false;
		var timer = null;
		function calls_l(obj){
			startMove(obj,{
				'left':-200,
				'opacity':0.7
			},{
				complete:function(){
					obj.style.zIndex = '1000000';
				},
				duration:500
			});
		}
		function calls_r(obj){
			
			timer = setTimeout(function(){
				
				startMove(obj,{
					'left':60,
					'opacity':0
				},{
					complete:function(){
						obj.style.zIndex = '-1';
					},
					duration:500
				});
			},30);
		}
		addEvent(oPhone,'mouseenter',function(){
			calls_l(oCall_c);
		});
		addEvent(oPhone,'mouseleave',function(){
			calls_r(oCall_c);
		});
		addEvent(oCall_c,'mouseenter',function(){
			clearTimeout(timer);
		});
		addEvent(oCall_c,'mouseleave',function(){
			calls_r(oCall_c);
		});
		
		
		
		addEvent(oWx,'mouseenter',function(){
			calls_l(oCall_vx);
		});
		addEvent(oWx,'mouseleave',function(){
			calls_r(oCall_vx);
		});
		addEvent(oCall_vx,'mouseenter',function(){
			clearTimeout(timer);
		});
		addEvent(oCall_vx,'mouseleave',function(){
			calls_r(oCall_vx);
		});
		
		
		addEvent(oQq,'mouseenter',function(){
			calls_l(oCall_qq);
		});
		addEvent(oQq,'mouseleave',function(){
			calls_r(oCall_qq);
		});
		addEvent(oCall_qq,'mouseenter',function(){
			clearTimeout(timer);
		});
		addEvent(oCall_qq,'mouseleave',function(){
			calls_r(oCall_qq);
			
		});
		
		addEvent(oList_fs,'mouseleave',function(){
			//alert(1)
			calls_r(oCall_qq);
			calls_r(oCall_c);
			calls_r(oCall_vx);
		});
		
		setTimeout(function(){
			startMove(oShade,{
				"top":0,
			},{
				complete:function(){
					startMove(oShade_l,{
						"left":-oShade.offsetWidth/2,
						'opacity':0
					},{
						complete:function(){
							oShade.style.display = 'none';
						},
						duration:2000
					});
					
					startMove(oShade_r,{
						"right":-oShade.offsetWidth/2,
						'opacity':0
					},{
						duration:2000
					});
					
					startMove(oShade,{
						'opacity':0
					},{
						duration:2000
					});
					
					setTimeout(function(){
						startMove(oIntros_l,{
							'top':0
						},{
							duration:1800
						});
						startMove(oIntros_r,{
							'bottom':0
						},{
							duration:1800
						});
					},1100);
					
				},
				duration:900
			});	
		},500);
		
		


	});
})();
