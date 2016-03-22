'use strict'
addReady(function(){
	;(function(){
		var oPage = document.getElementById('page');
		var oPrev = document.getElementById('prev');
		var oNext = document.getElementById('next');
		var oHeader = document.getElementById('header');
		var oNav = document.getElementById('nav');
		var aLi = oNav.getElementsByTagName('li');
		var oHeaderBar = document.getElementById('header_bar');
		var oTelephone = document.getElementById('telephone');
		
		
		var aPage_c = oPage.children;
		var iNum = 0;
		var bOk = false;
		
		aLi[iNum].style.color = '#0ad7b3';
		sport();
		term();
		function sport(){
			startMove(aPage_c[0],{
				"marginTop":-iNum*oPage.offsetHeight,
			},{
				complete:function(){
					bOk = false
				},
				duration:300
			});
			if(document.documentElement.clientWidth<1300){
				oTelephone.style.display = 'none';
			}else{
				oTelephone.style.display = 'block';
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
		}
		
		function next(){
			if(bOk)return;
			bOk = true;
			iNum++;
			term();
			startMove(aPage_c[0],{
				"marginTop":-iNum*oPage.offsetHeight,
			},{
				complete:function(){
					bOk = false
				},
				duration:300
			});
			clear();
			wellbar();
		}
		
		function prev(){
			if(bOk)return;
			bOk = true;
			iNum--;
			term();
			sport();
			clear();
			wellbar();
		}
		function wellbar(){
			aLi[iNum].style.color = '#0ad7b3';
			startMove(oHeaderBar,{
				"left":iNum*oHeaderBar.offsetWidth,
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
						"left":i*oHeaderBar.offsetWidth,
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
					clear();
					sport();
					term();
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
		
		
		
		
		
	})();
});
