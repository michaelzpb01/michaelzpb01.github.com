'user strict'
;(function(){
function addWheel(obj, fn) {
	function fnWheel(ev) {
		var oEvent = ev || event;
		var down = false;
		//chrome IE
		if (oEvent.wheelDelta) {
			down = oEvent.wheelDelta < 0 ? true : false;
		} else {
			//oEvent.detail
			down = oEvent.detail < 0 ? false : true;
		}
		//down鼠标方向 向下为true 
		fn(down);
		oEvent.preventDefault && oEvent.preventDefault();
		return false;
	}
	//ff
	if (navigator.userAgent.indexOf('Firefox') != -1) {
		obj.addEventListener('DOMMouseScroll', fnWheel, false);
	} else {
		obj.onmousewheel = fnWheel;
	}
}

function roll(json){
	json = json||{};
	json.count = json.count ||'count';
	json.count_bar = json.count_bar ||'countent';
	json.sel = json.sel ||'sel';
	json.sel_bar = json.sel_bar ||'bar';
	
	var oCon = document.getElementById(json.count);
	var oContent = document.getElementById(json.count_bar);
	var oSel = document.getElementById(json.sel);
	var oBar = document.getElementById(json.sel_bar);
	
	function setpost(t){
		if(t<0){
			t=0;
		}else if(t>oSel.offsetHeight-oBar.offsetHeight){
			t=oSel.offsetHeight-oBar.offsetHeight;
		}
		oBar.style.top = t+'px';
		var scale = t/(oSel.offsetHeight-oBar.offsetHeight);
		oContent.style.top = -scale*(oContent.offsetHeight-oCon.offsetHeight)+'px';
	}
	oBar.onmousedown = function(ev){
		var oEvent = ev||event;
		var disY = oEvent.clientY-oBar.offsetTop;
		document.onmousemove = function(ev){
			var oEvent = ev||event;
			var t = oEvent.clientY-disY;
			setpost(t);
		};
		document.onmouseup = function(){
			document.onmouseup = null;
			document.onmousemove = null;
			oBar.releaseCapture&&oBar.releaseCapture();
		};
		oBar.setCapture&&oBar.setCapture();
		return false;
	};
	addWheel(oCon,function(down){
		var t = oBar.offsetTop;
		if(down){
			t+=15;
		}else{
			t-=15;
		}
		setpost(t);
	});
}
function fluctuate(count,sel){
	/*内容的父级*/
	var oCon = document.getElementById(count);
	var oCount = oCon.children[0];
	/*滚动条的大父级*/
	var scrollbar = document.getElementById(sel);
	var oLeftBtnTop = scrollbar.children[0];
	var oLeftBtnBot = scrollbar.children[2];
	var oBarLeft = scrollbar.children[1].children[0];
	var oSel = scrollbar.children[1];
	
	function setTop(t){
		if(t<0){
			t=0;
		}else if(t>oSel.offsetHeight-oBarLeft.offsetHeight){
			t=oSel.offsetHeight-oBarLeft.offsetHeight;
		}
		oBarLeft.style.top = t+'px';
		var scale = t/(oSel.offsetHeight-oBarLeft.offsetHeight);
		oCount.style.top = -scale*(oCount.offsetHeight-oCon.offsetHeight)+'px';
	}
	oLeftBtnTop.onclick = function(){
		var t =  oBarLeft.offsetTop;
		t-=15;
		setTop(t);
	};
	oLeftBtnBot.onclick = function(){
		var t =  oBarLeft.offsetTop;
		t+=15;
		setTop(t);
		
	};
}
	roll({
		"count":'zpbocount',
		"count_bar":'zpbcount',
		"sel":'sel_r',
		"sel_bar":'sel_r_bar'
	});
	roll({
		"count":'count_l_parent',
		"count_bar":'count_l',
		"sel":'sel_l',
		"sel_bar":'sel_l_bar'
	});
	fluctuate('count_l_parent','zpb_list_sel_l');
	fluctuate('zpbocount','zpb_list_sel_r');
})();

