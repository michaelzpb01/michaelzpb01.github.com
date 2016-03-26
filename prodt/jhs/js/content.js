'use strict'

window.onload = function(){
	var oRem = document.documentElement.style.fontSize = document.documentElement.clientWidth/320*20+'px';
	//alert(oRem)
	window.onresize = function(){
		var oRem = document.documentElement.style.fontSize = document.documentElement.clientWidth/320*20+'px';
	};
};
