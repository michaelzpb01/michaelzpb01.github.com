'use strict'
;(function(){
	addReady(function(){
		var oPrev = document.querySelector('#prodt_prev');
		var oNext = document.querySelector('#prodt_next');
		var oUl = document.getElementById('prodt_ul');
		var aLi = oUl.getElementsByTagName('li');
		var arr = [];
		for(var i = 0;i<aLi.length;i++){
			arr.push(aLi[i].className);
		}
		oNext.onclick = function(){
			arr.unshift(arr.pop());
			for(var i = 0;i<aLi.length;i++){
				aLi[i].className = arr[i];
			}
		};
		oPrev.onclick = function(){
			arr.push(arr.shift());
			for(var i = 0;i<aLi.length;i++){
				aLi[i].className = arr[i];
			}
		};
		
		oNext.onmouseenter = function(){
			this.style.background = '#15ceac';
		};
		oNext.onmouseleave = function(){
			this.style.background = '#9f9f9f';
		};
		
		oPrev.onmouseenter = function(){
			this.style.background = '#15ceac';
		};
		oPrev.onmouseleave = function(){
			this.style.background = '#9f9f9f';
		};
		
		;(function(){
			var oDiv = document.getElementById('undergo_btn');
			var iSpeedX = 0;
			var iSpeedY = 0;
			var lastX = 0;
			var lastY = 0;
			var timer = null;
			
			
			oDiv.onmousedown=function(ev){
				clearInterval(timer);
				var oEvent = ev||event;
				var disX = oEvent.clientX-oDiv.offsetLeft;
				var disY = oEvent.clientY-oDiv.offsetTop;
				document.onmousemove=function(ev){
					var oEvent = ev||event;
					oDiv.style.left = oEvent.clientX-disX+'px';
					oDiv.style.top = oEvent.clientY-disY+'px';
					
					iSpeedX = oEvent.clientX - lastX;
					iSpeedY = oEvent.clientY - lastY;
					
					lastX = oEvent.clientX;
					lastY = oEvent.clientY;
				};
				document.onmouseup=function(){
					document.onmousemove=null;
					document.onmouseup=null;
					move();
					oDiv.releaseCapture&&oDiv.releaseCapture();
				};
				oDiv.setCapture&&oDiv.setCapture();
				return false;
			};
			
			
			function move(){
				clearInterval(timer);
				timer = setInterval(function(){
					iSpeedY+=3;
					var l = oDiv.offsetLeft+iSpeedX;
					var t = oDiv.offsetTop+iSpeedY;
					
					if(t>document.documentElement.clientHeight-oDiv.offsetHeight){
						t=document.documentElement.clientHeight-oDiv.offsetHeight;
						iSpeedX *= 0.8;
						iSpeedY *= -0.8;
					}
					if(l>document.documentElement.clientWidth-oDiv.offsetWidth){
						l=document.documentElement.clientWidth-oDiv.offsetWidth;
						iSpeedX *= -0.8;
						iSpeedY *= 0.8;
					}
					
					if(t<0){
						t = 0;
						iSpeedX *= 0.8;
						iSpeedY *= -0.8;
					}
					
					if(l<0){
						l = 0;
						iSpeedX *= -0.8;
						iSpeedY *= 0.8;
					}
					
					
					
					oDiv.style.left = l+'px';
					oDiv.style.top = t+'px';
					
					
					if(Math.abs(iSpeedX)<1)iSpeedX = 0;
					if(Math.abs(iSpeedY)<1)iSpeedY = 0;
					if(iSpeedX==0&&iSpeedY==0&&t==document.documentElement.clientHeight-oDiv.offsetHeight){
						clearInterval(timer);
					}
					
				},30);
			}
		})();
	});
})();
