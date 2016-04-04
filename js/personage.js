'use strict'
;(function(){
		var oShade = document.getElementById('shade');
		var oShade_l = document.getElementById('shade_l');
		var oShade_r = document.getElementById('shade_r');
		var oIntros_l = document.getElementById('intros_l');
		var oIntros_r = document.getElementById('intros_r');
		
		
		var oUserName = document.getElementById('username');
		
		var oList_fs = document.getElementById('list_fs');
		var valTimer = null;
		
		var aVal = zgetByClass(oList_fs,'val1');
		for(var i = 0;i<aVal.length;i++){
			addEvent(aVal[i],'mouseenter',function(){
				var _this = this; 
				clearInterval(valTimer);
				valTimer = setTimeout(function(){
					console.log(_this)
					startMove(_this.children[0],{
						'left':-200,
						'opacity':0.7
					},{
						complete:function(){
							_this.children[0].style.zIndex = '1000000';
								
						},
						duration:500
					});
				},500);
			});
			
			
			addEvent(aVal[i].children[0],'mouseover',function(){
				clearInterval(valTimer);
			});
			
			addEvent(aVal[i],'mouseleave',function(){
				var _this = this;
				this.children[0].style.zIndex = '-1';
				clearInterval(valTimer);
				startMove(this.children[0],{
					'left':60,
					'opacity':0
				},{
					duration:500
				});
				
			});
		}
		
		var bOk = false;
		var timer = null;
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
