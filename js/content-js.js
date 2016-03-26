'use strict'
var iNum = 0;
addReady(function(){
	//var iNum = 0
	;(function(){
		var oPage = document.getElementById('page');
		var oPrev = document.getElementById('prev');
		var oNext = document.getElementById('next');
		var oHeader = document.getElementById('header');
		var oNav = document.getElementById('nav');
		var aLi = oNav.getElementsByTagName('li');
		var oHeaderBar = document.getElementById('header_bar');
		var oTelephone = document.getElementById('telephone');
		
		var oSkillText = document.getElementById('skill_text');
		var aPage_c = oPage.children;
		
		
		var oUserName = document.getElementById('username');
		
		var oUndergoUl = document.getElementById('undergo_ul');
		
		
		var oUndergoBtnText = document.getElementById('undergo_btn_text');
		var oSpeedJ = document.getElementById('speed_j');
		var oSpeedJn = document.getElementById('speed_jn');
		var oHint = document.getElementById('hint');
		
		
		var oUndergoUltimer = null;
		var bOk = false;
		var bOk2 = false;
		var up = -262;
		
		aLi[iNum].style.color = '#0ad7b3';
		sport();
		term();
		function sport(){
			startMove(aPage_c[0],{
				"marginTop":-iNum*oPage.offsetHeight,
			},{
				complete:function(){
					bOk = false;
				},
				duration:300
			});
			numone();
			if(document.documentElement.clientWidth<1300){
				oTelephone.style.display = 'none';
			}else{
				oTelephone.style.display = 'block';
			}
		}
		
		function numone(){
			if(iNum == 1){
				sun();
				bOk2 = false;
				move(oSkillText,{
					'top':'850'
				},{
					duration:500,
					complete:function(){
						oSkillText.style.webkitTransition = '0.5s all ease';
						oSkillText.style.mozTransition = '0.5s all ease';
						oSkillText.style.msTransition = '0.5s all ease';
						oSkillText.style.transition = '0.5s all ease';
						oSkillText.style.webkitTransform = 'scale(1.1)';
						oSkillText.style.mozTransform = 'scale(1.1)';
						oSkillText.style.msTransform = 'scale(1.1)';
						oSkillText.style.transform = 'scale(1.1)';
					}
				});
				
			}else{
				bOk2 = true;
				oSkillText.style.top = '-750px';
				oSkillText.style.webkitTransition = 'null';
				oSkillText.style.mozTransition = 'null';
				oSkillText.style.msTransition = 'null';
				oSkillText.style.transition = 'null';
				oSkillText.style.webkitTransform = 'scale(0.9)';
				oSkillText.style.mozTransform = 'scale(0.9)';
				oSkillText.style.msTransform = 'scale(0.9)';
				oSkillText.style.transform = 'scale(0.9)';
				
			}
		}
		
		function term(){
			if(iNum>aPage_c.length-1){
				iNum=aPage_c.length-1;
			}
			if(iNum<0){
				iNum=0;
				
			}
			if(iNum == 0){
				oHeader.style.background = 'rgba(0,0,0,0)';
			}
			if(iNum > 0){
				oHeader.style.background = 'rgba(0,0,0,0.5)';
			}
			
			numone();
			if(iNum == 5){
				clearInterval(oUndergoUltimer);
				;(function(){
					var speed = 50;
					
					addEvent(oSpeedJ,'click',function(){
						if(speed>90){
							alert('谢谢亲看的这么仔细');
						}
						speed+=10;
						timespeed(speed);
					});
					addEvent(oSpeedJn,'click',function(){
						if(speed<10){
							alert('亲：太快的话看不清楚');
						}
						speed-=10;
						timespeed(speed);
					});
					
					function timespeed(speed){
						clearInterval(oUndergoUltimer);
						oUndergoUltimer = setInterval(function(){
							up-=2;
							oUndergoUl.style.top = up%960+'px';				
						},speed);
					}
					timespeed(speed);
				})();
				
			}else{
				clearInterval(oUndergoUltimer);
			}
			
		}
		
		function next(){
			
			if(bOk)return;
			bOk = true;
			iNum++;
			term();
			startMove(aPage_c[0],{
				"marginTop":-iNum*oPage.offsetHeight
			},{
				complete:function(){
					bOk = false;
				},
				duration:300
				
			});
			clear();
			wellbar();
			sun();
			numone();
		}
		
		function prev(){
			if(bOk)return;
			bOk = true;
			iNum--;
			term();
			sport();
			clear();
			wellbar();
			sun();
			if(iNum == 0){
				oUserName.style.fontWeight = 'normal';
				oUserName.style.webkitTransition = '1s all ease';
				oUserName.style.mozTransition = '1s all ease';
				oUserName.style.msTransition = '1s all ease';
				oUserName.style.transition = '1s all ease';
				oUserName.style.webkitTransform = 'rotateY(360deg)';
				oUserName.style.msTransform = 'rotateY(360deg)';
				oUserName.style.mozTransform = 'rotateY(360deg)';
				oUserName.style.transform = 'rotateY(360deg)';
							
			}else{
				oUserName.style.fontWeight = 'normal';
				oUserName.style.webkitTransition = 'null';
				oUserName.style.mozTransition = 'null';
				oUserName.style.msTransition = 'null';
				oUserName.style.transition = 'null';
				oUserName.style.webkitTransform = 'rotateY(0deg)';
				oUserName.style.msTransform = 'rotateY(0deg)';
				oUserName.style.mozTransform = 'rotateY(0deg)';
				oUserName.style.transform = 'rotateY(0deg)';
			}
		}
		function wellbar(){
			aLi[iNum].style.color = '#0ad7b3';
			startMove(oHeaderBar,{
				"left":iNum*oHeaderBar.offsetWidth
			},{
				duration:300
			});
		}
		function clear(){
			for(var j = 0;j<aLi.length;j++){
				aLi[j].style.color = '#d2d2d2';
			}
			aLi[iNum].style.color =  '#0ad7b3';
		}
		addEvent(oPrev,'click',prev);
		addEvent(oNext,'click',next);
		addEvent(window,'resize',sport);
		addWheel(oPage,function(down){
			if(down){
				next();
			}else{
				prev();
			}
			clear();
			wellbar();
		});
		for(var i = 0;i<aLi.length;i++){
			
			;(function(i){
				addEvent(aLi[i],'mouseover',function(){
					aLi[i].style.color = '#0ad7b3';
					startMove(oHeaderBar,{
						"left":i*oHeaderBar.offsetWidth
					},{
						duration:300
					});
				});
				
				
				addEvent(aLi[i],'mouseout',function(){
					aLi[i].style.color = '#d2d2d2';
					wellbar();
				});	
				
				addEvent(aLi[i],'click',function(){
					
					iNum = i;
					term();
					clear();
					sport();
				});
			})(i);

		}
		
		
		document.onkeydown = function(ev){
			if(ev.keyCode == 38||ev.keyCode == 37){
				prev();
			}else if(ev.keyCode == 40||ev.keyCode == 39){
				next();
			}
		};
		
		function sun(){
			
			var oDiv = document.getElementById('xq_parent');
			var oS = oDiv.children[0];
			
			var oDiv1 = document.getElementById('xq_parent1');
			var oS1 = oDiv1.children[0];
			
			var oDiv2 = document.getElementById('xq_parent2');
			var oS2 = oDiv2.children[0];
			
			var oDiv3 = document.getElementById('xq_parent3');
			var oS3 = oDiv3.children[0];
			
			var oDiv4 = document.getElementById('xq_parent4');
			var oS4 = oDiv4.children[0];
			function sky(oParent,aChild,iSpeed,dis){
				iSpeed = iSpeed||0.01;
				dis = dis||0;
				var R = oParent.offsetWidth/2;
				var a = dis;
				clearInterval(aChild.timer);
				aChild.timer = setInterval(function(){
					
					if(bOk2)return;
					a += iSpeed;
					var x = R+Math.sin(a)*R;
					var y = R-Math.cos(a)*R;
					aChild.style.left = x+'px';
					aChild.style.top = y+'px';
				},16);	
			}
			
			sky(oDiv,oS,0.01);
			sky(oDiv1,oS1,0.011);
			sky(oDiv2,oS2,0.013);
			sky(oDiv3,oS3,0.015);
			sky(oDiv4,oS4,0.017);
		}
			
		
		/*以上是功能部分*/
		//alert(oUndergoUl.offsetHeight)
		
		
		
		
		
		
		
	})();
});
