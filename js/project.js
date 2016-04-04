;(function(){
	addReady(function(){
		var oPage = document.getElementById('page');
		var oProjectUl = document.getElementById('project_ul');
		var aPli = oProjectUl.getElementsByTagName('li');
		var aPimg = oProjectUl.getElementsByTagName('img');
		var aPmask = zgetByClass(oProjectUl,'project_mask');
		var count = 0;
		var bOk = false;
		function fnDown(ev){
			var _this = this;
			var oEvent = ev||event;
			oEvent.cancelBubble = true;
			bOk = true;
			var disx = oEvent.clientX - this.offsetLeft;
			var disy = oEvent.clientY - this.offsetTop;
			document.onmousemove = function(ev){
				if(!bOk)return;
				var oEvent = ev||event;
				var l = oEvent.clientX-disx;
				var t = oEvent.clientY-disy;
				if(t<0){
					t = 0;
				}else if(t>oPage.offsetHeight - _this.offsetHeight){
					t = oPage.offsetHeight - _this.offsetHeight;
				}
				
				if(l<0){
					l = 0;
				}else if(l>oPage.offsetWidth - _this.offsetWidth){
					l = oPage.offsetWidth - _this.offsetWidth;
				}
				console.log(oPage.offsetWidth - _this.offsetWidth);
				_this.style.left = l+'px';
				_this.style.top = t+'px';
			};
			document.onmouseup = function(){
				bOk = false;
				document.onmousemove = null;
				document.onmouseup = null;
				_this.releaseCapture&&_this.releaseCapture();
			};
			this.setCapture&&this.setCapture();
			return false;
		}
		for(var i=0;i<aPli.length;i++){
			var aPmaskH3 = aPli[i].children;
			var setL  = oPage.offsetWidth-aPli[i].offsetWidth;
			var setT = oPage.offsetHeight-aPli[i].offsetHeight;
			through(aPli[i]);
			aPli[i].style.top = rnd(0,setT)+'px';
			aPli[i].style.left = rnd(0,setL)+'px';
			addEvent(aPimg[i],'mousedown',function(ev){
				var oEvent = ev||event;
				oEvent.cancelBubble = true;
				return false;
			});
			for(var j = 0;j<2;j++){
				aPmaskH3[j].onmousedown = function(){
					return false;
				};
			}
			addEvent(aPli[i],'mousedown',fnDown);
			addEvent(aPli[i],'mouseenter',function(){
				count++;
				this.style.zIndex = count;
			});
		}
		oProjectUl.onmousedown = function(){
			return false;
		};
		function hoverDir(obj,ev){
			var sT = document.documentElement.scrollTop||document.body.scrollTop;
			var sL = document.documentElement.scrollLeft||document.body.scrollLeft;
			var w = obj.offsetWidth;
			var h = obj.offsetHeight;
			var x = obj.offsetLeft+w/2-(ev.clientX+sL);
			var y = obj.offsetTop+h/2-(ev.clientY+sT);
			return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
		}
		function through(obj)
		{
			var oS = obj.children[0];
			obj.onmouseover=function(ev){
				var oEvent = ev||event;
				var oForm = oEvent.formElement||oEvent.relatedTarget;
				if(this.contains(oForm))return;
				var dir = hoverDir(this,oEvent);
				switch(dir){
					case 0:
						//右
						oS.style.left = '200px';
						oS.style.top = 0;
						break;
					case 1:
						//下
						oS.style.left = 0;
						oS.style.top = '200px';
						break;
					case 2:
						//左
						oS.style.left = '-200px';
						oS.style.top = 0;
						break;
					case 3:
						//上
						oS.style.left = 0;
						oS.style.top = '-200px';
						break;
				}
				startMove(oS,{top:0,left:0},{duration:300});
			};
			obj.onmouseout=function(ev){
				var oEvent = ev||event;
				var oTo = oEvent.toElement||oEvent.relatedTarget;
				if(this.contains(oTo))return;
				var dir = hoverDir(this,oEvent);
				switch(dir){
					case 0:
						//右
						startMove(oS,{left:200,top:0},{duration:300});
						break;
					case 1:
						//下
						startMove(oS,{left:0,top:200},{duration:300});
						break;
					case 2:
						//左
						startMove(oS,{left:-200,top:0},{duration:300});
						break;
					case 3:
						//上
						startMove(oS,{left:0,top:-200},{duration:300});
						break;
				}
			};
		}
		
		
	});
})();
