/*函数目录*/

'use strict'

/************还需改进的程序开始**************/

/*放大镜magnify*/
/*九宫格拖拽改变大小*/
/*瀑布流*/

/************还需改进的程序结束**************/



/*********以下为2016.01.28日总结***********************************/

/*ready函数*/
/*事件委托binding*/
/*addWheel函数 滚轮*/
/*事件绑定*/
/*解除绑定*/
/*url2json*/
/*json2url*/
/*setStyle*/
/*getPos*/
/*getByClass*/
/*findMin*/
/*findMax*/
/*count*/
/*getStyle*/
/*findInArr*/
/*rnd*/
/*toDou*/
/*获取cookie*/
/*设置cookie*/
/*删除cookie*/
/*碰撞检测collTest*/
//角度转角度a2d
//弧度转弧度d2a
/*addClass*/
/*removeClass*/
/*zgetByClass*/
/*recursion 斐波那契算法*/
/*********2016.01.28日总结结束*******2016.01.29日总结开始*************/

/*移入事件addMouseOver频繁触发解决开始*/
/*=*/
/*onmouseover*/
/*移入事件addMouseOut频繁触发解决开始*/
/*=*/
/*onmouseout*/

/*********2016.01.29日总结结束*******过渡期使用***********************/


/*************2016.03.01开始******************/
/*
** 	addClass 		添加class
** 	params
** 				[object]
** 				[string]
*/
/*
**	removeClass 		删除class
** 	parmas
** 					[object]
** 					[string]
*/
/*
**	getByClass 		通过class获取一组元素
** 	params
** 					[object]
** 					[string]
*/
/*
**	recursion 		斐波那契算法	
** 	params
** 					[month-->>number]
*/
/*************2016.03.01结束******************/


/*一堆函数开始*/

/************还需改进的程序开始**************/

/*放大镜magnify开始*/
function magnify(obj1id, obj2id, mask) {
	var oDiv1 = document.getElementById(obj1id);
	var oDiv2 = document.getElementById(obj2id);
	var oMask = document.getElementById(mask);
	var oImg = oDiv2.children[0];
	oDiv1.onmouseover = function() {
		oMask.style.display = 'block';
		oDiv2.style.display = 'block';
	};
	oDiv1.onmouseout = function() {
		oMask.style.display = 'none';
		oDiv2.style.display = 'none';
	};

	oDiv1.onmousemove = function(ev) {
		var oEvent = ev || event;
		var l = oEvent.clientX - oDiv1.offsetLeft - oMask.offsetWidth / 2;
		var t = oEvent.clientY - oDiv1.offsetTop - oMask.offsetHeight / 2;
		if (l < 0) {
			l = 0;
		} else if (l > oDiv1.offsetWidth - oMask.offsetWidth) {
			l = oDiv1.offsetWidth - oMask.offsetWidth;
		}
		if (t < 0) {
			t = 0;
		} else if (t > oDiv1.offsetHeight - oMask.offsetHeight) {
			t = oDiv1.offsetHeight - oMask.offsetHeight;
		}
		oMask.style.left = l + 'px';
		oMask.style.top = t + 'px';
		oImg.style.left = -l * (oImg.offsetWidth - oDiv2.offsetWidth) / (oDiv1.offsetWidth - oMask.offsetWidth) + 'px';
		oImg.style.top = -t * (oImg.offsetHeight - oDiv2.offsetHeight) / (oDiv1.offsetHeight - oMask.offsetHeight) + 'px';
	};
}
/*放大镜magnify结束*/

/*瀑布流开始*/
function createLis() {
	function rnd(n, m) {
		return parseInt(Math.random() * (m - n) + n);
	}

	function createLi() {
		var oLi = document.createElement('li');
		oLi.style.height = rnd(150, 350) + 'px';
		oLi.style.background = 'rgb(' + rnd(0, 256) + ',' + rnd(0, 256) + ',' + rnd(0, 256) + ')';
		return oLi;
	}
	var oBox = document.getElementById('box');
	var aUl = oBox.getElementsByTagName('ul');
	for (var i = 0; i < 20; i++) {
		var oLi = createLi();
		var arr = [];
		for (var j = 0; j < aUl.length; j++) {
			arr.push(aUl[j]);
		}
		arr.sort(function(aUl1, aUl2) {
			return aUl1.offsetHeight - aUl2.offsetHeight;
		});
		arr[0].appendChild(oLi);
	}
}
/*瀑布流结束*/

/*九宫格拖拽改变大小开始*/
function drag(obj, parent) {
	obj.onmousedown = function(ev) {
		var oEvent = ev || event;
		var downX = oEvent.clientX;
		var downY = oEvent.clientY;
		var downWidth = oDiv.offsetWidth;
		var downHeight = oDiv.offsetHeight;
		var downLeft = oDiv.offsetLeft;
		var downTop = oDiv.offsetTop;
		document.onmousemove = function(ev) {
			var oEvent = ev || event;
			if (obj.className.indexOf('l') != -1) {
				parent.style.width = downWidth - (oEvent.clientX - downX) + 'px';
				parent.style.left = downLeft + (oEvent.clientX - downX) + 'px'
			}
			if (obj.className.indexOf('t') != -1) {
				parent.style.height = downHeight - (oEvent.clientY - downY) + 'px';
				parent.style.top = downTop + (oEvent.clientY - downY) + 'px';
			}
			if (obj.className.indexOf('r') != -1) {
				parent.style.width = downWidth + oEvent.clientX - downX + 'px';
			}
			if (obj.className.indexOf('b') != -1) {
				parent.style.height = downHeight + oEvent.clientY - downY + 'px';
			}
		};
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
			obj.releaseCapture && obj.releaseCapture();
		};
		obj.setCapture && obj.setCapture();
		return false;
	};
}
/*九宫格拖拽改变大小开始*/

/************还需改进的程序结束**************/

/*###########################已封装成品的函数开始###########################################*/
/*ready函数开始*/
function addReady(fn) {
	//判断浏览器
	if (document.addEventListener) {
		//高版本浏览器dom事件 dom事件必须绑定
		document.addEventListener('DOMContentLoaded', fn, false);
	} else {
		//处理低版本ie
		document.attachEvent('onreadystatechange', function() {
			if (document.readyState == 'complete') {
				fn();
			}
		});
	}
}
/*ready函数结束*/

/*事件委托binding开始*/
function binDing(obj, fn) {
	obj.onclick = function(ev) {
		var oEvent = ev || event;
		var oSrc = oEvent.srcElement || oEvent.target;
		fn(oSrc);
	};
}
/*事件委托binding结束*/

/*addWheel 滚轮封装 函数开始*/

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
/*addWheel函数结束*/

/*事件绑定开始*/
function addEvent(obj, sEv, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(sEv, fn, false);
	} else {
		obj.attachEvent('on' + sEv, fn);
	}
}
/*事件绑定结束*/

/*解除绑定开始*/
function removeEvent(obj, sEv, fn) {
	if (obj.removeEventListener) {
		obj.removeEventListener(sEv, fn, false);
	} else {
		obj.detachEvent('on' + sEv, fn);
	}
}
/*解除绑定结束*/

/*获取今天函数开始*/
function getToday() {
	var oDate = new Date();
	var y = oDate.getFullYear();
	var m = oDate.getMonth() + 1;
	var d = oDate.getDate();

	return y + '/' + m + '/' + d;
}
/*获取今天函数结束*/

/*url2json开始*/
function url2json(url) {
	var json = {};
	var arr = url.split('&');
	for (var i = 0; i < arr.length; i++) {
		var arr2 = arr[i].split('=');
		json[arr2[0]] = arr2[1];
	}
	return json;
}
/*url2json结束*/

/*json2url开始*/
function json2url(json) {
	var arr = [];
	for (var i in json) {
		arr.push(i + '=' + json[i]);
	}
	var str = arr.join('&');
	return str;
}
/*json2url结束*/

/*setStyle开始*/
function setStyle() {
	//判断参数是几个，区别是批量还是一个
	if (arguments.length == 2) {
		//obj	arguments[0];
		//json	arguments[1];
		//批量设置，用json
		for (var name in arguments[1]) {
			arguments[0].style[name] = arguments[1][name];
		}
	} else {
		//obj 		arguments[0];
		//sName 	arguments[1];
		//sValue 	arguments[2];
		//用正常的形式	
		arguments[0].style[arguments[1]] = arguments[2];
	}
}
/*setStyle结束*/

/*getPos开始*/
function getPos(obj) {
	var l = 0;
	var t = 0;
	while (obj) {
		l += obj.offsetLeft;
		t += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return {
		left: l,
		top: t
	}
}
/*getPos结束*/

/*getByClass开始*/
function getByClass(oparent, sClass) {
	function findInArr(str, arr) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == str) {
				return true;
			}
		}
		return false;
	}

	if (oparent.getElementsByClassName) {
		return oparent.getElementsByClassName(sClass);
	} else {
		var aEle = oparent.getElementsByTagName('*');
		var All = [];
		for (var i = 0; i < aEle.length; i++) {
			var arr = aEle[i].className.split(' ');

			if (findInArr(sClass, arr)) {
				All.push(aEle[i]);
			}
		}
		return All;
	}
}
/*getByClass结束*/

/*findMin开始*/
function findMin(index) {
	var iMinIndex = 0;
	var iMin = 999999999999999;
	for (var i = index; i < arr.length; i++) {
		if (arr[i] < iMin) {
			iMin = arr[i];
			iMinIndex = i;
		}
	}
	return iMinIndex;
}
/*findMin结束*/

/*findMax开始*/
function findMax(start) {
	var iMax = arr[start];
	var iMaxIndex = start;
	for (var i = start + 1; i < arr.length; i++) {
		if (arr[i] > iMax) {
			iMax = arr[i];
			iMaxIndex = i;
		}
	}
	return iMaxIndex;
}
/*findMax结束*/

/*count开始*/
/*倒计时*/
function count(year, manth, date) {
	//var oS = document.getElementById('span1');
	//设置到将来的时间
	var oTarget = new Date();
	oTarget.setFullYear(year, manth, date);
	oTarget.setHours(0, 0, 0, 0);
	//获取了2016 2 14日的毫秒数
	var iTarget = oTarget.getTime();
	//alert(iTarget);

	var oNow = new Date();
	var iNow = oNow.getTime();
	//alert(iNow)
	//从 现在到 情人节 秒数
	var s = parseInt((iTarget - iNow) / 1000);
	//天
	var d = parseInt(s / 86400);
	s %= 86400; //s已经变了  出去整个天数部分 不够一天的 秒数 包含小时 分钟和秒
	var H = parseInt(s / 3600);
	//小时数
	s %= 3600; //s已经变了  不够一小时的部分  包含分钟和秒数
	var M = parseInt(s / 60);
	//分钟数
	s = s % 60; //不够一分钟的秒数

	return d + '天 ' + H + '小时 ' + M + '分钟 ' + s + '秒';
	//oS.innerHTML = d+'天 '+H+'小时 '+M+'分钟 '+s+'秒';
}
/*count结束*/

/*getStyle开始*/
function getStyle(obj, name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}
/*getStyle结束*/

/*findInArr开始*/
function findInArr(num, arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == num) {
			return true;
		}
	}
	return false;
}
/*findInArr结束*/

/*rnd开始*/
function rnd(n, m) {
	return parseInt(Math.random() * (m - n) + n)
}
/*rnd结束*/

/*toDou开始*/
function toDou(n) {
	return n < 10 ? '0' + n : '' + n
}
/*toDou结束*/

/*获取cookie开始*/
function getCookie(name) {
	var arr = document.cookie.split('; ');
	for (var i = 0; i < arr.length; i++) {
		var arr2 = arr[i].split('=');
		if (arr2[0] == name) {
			return arr2[1];
		};
	}
	return '';
}
/*获取cookie结束*/

/*设置cookie开始*/
function setCookie(name, value, iDay) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDay);
	document.cookie = name + '=' + value + ';expires=' + oDate;
}
/*设置cookie结束*/

/*删除cookie开始*/
function removeCookie(name) {
	setCookie(name, 1, -1)
}
/*删除cookie结束*/

/*碰撞检测collTest开始*/
function collTest(obj1, obj2) {
	var l1 = obj1.offsetLeft;
	var r1 = obj1.offsetLeft + obj1.offsetWidth;
	var t1 = obj1.offsetTop;
	var b1 = obj1.offsetTop + obj1.offsetHeight;

	var l2 = obj2.offsetLeft;
	var r2 = obj2.offsetLeft + obj2.offsetWidth;
	var t2 = obj2.offsetTop;
	var b2 = obj2.offsetTop + obj2.offsetHeight;

	if (r1 < l2 || l1 > r2 || b1 < t2 || t1 > b2) {
		//alert('没有碰上');
		return false;

	} else {
		return true;
	}
}
/*碰撞检测collTest结束*/



/*****2016.01.29日总结开始******过渡期使用******/

/*移入事件onmouseover频繁触发解决开始*/
function addMouseOver(obj, fn) {
	obj.onmouseover = function(ev) {
		var oEvent = ev || event;
		var oFrom = oEvent.fromElement || oEvent.relatedTarget;
		if (obj.contains(oFrom)) {
			return;
		}
		fn();
	}
}
/*移入事件onmouseover频繁触发解决结束*/

/*移入事件onmouseover频繁触发解决开始*/
function addMouseOut(obj, fn) {
	obj.onmouseout = function(ev) {
		var oEvent = ev || event;
		var oTo = oEvent.toElement || oEvent.relatedTarget;
		if (obj.contains(oTo)) {
			return;
		}
		fn();
	}
}
/*移入事件onmouseout频繁触发解决结束*/

/*****2016.01.29日总结开始*******过渡期使用******/


/******2016.02.17日总结开始************/
//弧度转角度
function a2d(n){
	return n*180/Math.PI;
}
//角度转弧度
function d2a(n){
	return n*Math.PI/180;
}
/******2016.02.17日总结开始***********/

/*************2016.03.01开始***********************/
/*
** 	addClass 		添加class
** 	params
** 				[object]
** 				[string]
*/
function addClass(obj,sClass){
	//如果有class执行以下代码
	if(obj.className){
		//看一下obj的class到底有没有sClass
		var re = new RegExp('\\b'+sClass+'\\b');
		if(obj.className.search(re)==-1){
			//如果没有就加class
			obj.className += ' '+sClass;
		}
	}else{
		//没有class直接添加就行
		obj.className = sClass;
	}
	//最后去掉首尾空格，和多余的空格
	obj.className = obj.className.match(/\w+/g).join(' ');
}

/*
**	removeClass 		删除class
** 	parmas
** 					[object]
** 					[string]
*/
function removeClass(obj,sClass){
	//如果有class才需要操作，否则啥也不用管
	if(obj.className){
		var re = new RegExp('\\b'+sClass+'\\b','g');
		//把sClass干掉
		obj.className = obj.className.replace(re,'');
		//去掉首尾空格，和多余的空格
		obj.className = obj.className.match(/\w+/g).join(' ');
		//如果没有class了要把class属性去掉
		if(!obj.className){
			obj.removeAttribute('class');
		}
	}
}

/*
**	getByClass 		通过class获取一组元素
** 	params
** 					[object]
** 					[string]
*/
function zgetByClass(oParent,sClass){
	//如果系统提供的方法能用，就用
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		//需要一个容器装元素
		var aResult = [];
		var re = new RegExp('\\b'+sClass+'\\b');
		//获取到父级下所有的元素
		var aEle = oParent.getElementsByTagName('*');
		
		for(var i=0;i<aEle.length;i++){
			if(aEle[i].className.search(re)!=-1){
				aResult.push(aEle[i]);
			}
		}
		//返回一组元素
		return aResult;
	}
}
/*
**	recursion 		斐波那契算法	
** 	params
** 					[month-->>number]
*/
function recursion(n){
	if(n==1){
		return 1;
	}else if(n==2){
		return 1;
	}else{
		if(!arr[n]){
			arr[n] = recursion(n-1)+recursion(n-2);
		}
		return arr[n];
	}
}
/*************2016.03.01结束***********************/


/*###########################已封装成品的函数结束###########################################*/





/*未完待续············*/