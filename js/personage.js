'use strict'
;(function(){
		var oShade = document.getElementById('shade');
		var oShade_l = document.getElementById('shade_l');
		var oShade_r = document.getElementById('shade_r');
		var oIntros_l = document.getElementById('intros_l');
		var oIntros_r = document.getElementById('intros_r');
		
		
		var oUserName = document.getElementById('username');
		
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
			calls_r(oCall_qq);
			calls_r(oCall_c);
			calls_r(oCall_vx);
		});
		setTimeout(function(){
			move(oShade,{
				"top":-400
			},{
				complete:function(){
					oShade.style.webkitTransition = '0.5s all ease';
					oShade.style.mozTransition = '0.5s all ease';
					oShade.style.msTransition = '0.5s all ease';
					oShade.style.transition = '0.5s all ease';
					oShade.style.webkitTransform = 'scale(140)';
					oShade.style.mozTransform = 'scale(140)';
					oShade.style.msTransform = 'scale(140)';
					oShade.style.transform = 'scale(140)';
					startMove(oShade,{
						'opacity':0
					},{
						duration:200
					});
					oShade.addEventListener('transitionend',function(){
						oShade.style.display = 'none';
						startMove(oIntros_l,{
							'top':0
						},{
							duration:600,
							complete:function(){
								
								oUserName.style.fontWeight = 'normal';
								oUserName.style.webkitTransition = '0.5s all ease';
								oUserName.style.mozTransition = '0.5s all ease';
								oUserName.style.msTransition = '0.5s all ease';
								oUserName.style.transition = '0.5s all ease';
								oUserName.style.webkitTransform = 'rotateY(360deg)';
								oUserName.style.msTransform = 'rotateY(360deg)';
								oUserName.style.mozTransform = 'rotateY(360deg)';
								oUserName.style.transform = 'rotateY(360deg)';
												
								oUserName.addEventListener('transitionend',function(){
									oUserName.style.fontWeight = 'normal';
									oUserName.style.webkitTransition = 'null';
									oUserName.style.mozTransition = 'null';
									oUserName.style.msTransition = 'null';
									oUserName.style.transition = 'null';
									oUserName.style.webkitTransform = 'rotateY(0deg)';
									oUserName.style.msTransform = 'rotateY(0deg)';
									oUserName.style.mozTransform = 'rotateY(0deg)';
									oUserName.style.transform = 'rotateY(0deg)';
								},false);
								
							}
						});
						startMove(oIntros_r,{
							'bottom':0
						},{
							duration:600
						});
					},false);
					
				},
				duration:900
			});	
		},500);
		
})();
