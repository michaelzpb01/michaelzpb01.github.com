	'use strict'
function addReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false);
	}else{
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState=='complete'){
				fn();
			}
		});
	}
}
	

addReady(function (){
	//点击收缩封装
	;(function (){
		function sxtmove(mid1,mid2)
		{
			var oS1=document.getElementById(mid1);
			var oS_block=document.getElementById(mid2);
			var timer=null;
			oS1.onclick=function ()
			{
				if(this.innerHTML=='-')
				{
					oS1.innerHTML='+';			
					startMove(oS_block,{height:0});
					oS_block.style.overflow='hidden';
				}else{
					oS1.innerHTML='-';			
					startMove(oS_block,{height:oS_block.scrollHeight});		
				}				
			};
		}
		//收缩效果
		sxtmove('s_s1','s_block1');
	})()
	


	//自动播放选项卡封装
	;(function (){
		function sxt_tab(id,mid){
			
			var oSx_box1=document.getElementById(id);
			var oSul=oSx_box1.children[0];
			var s_Time=oSx_box1.children[1];
			var aSx_li=oSul.getElementsByTagName('li');
			var aSx_divs = document.getElementById('s_block1');
			var aSx_div=aSx_divs.children;
			var aSx_div_child1 = aSx_div[0].getElementsByTagName('div');
			var aSx_div_child2 = aSx_div[1].getElementsByTagName('div');
			var oS1=document.getElementById(mid);
			var timer=null;
			var iNow=0;
			
			for(var i=0; i<aSx_li.length; i++)
			{
				(function (index){
					aSx_li[i].onclick=function ()
					{
						iNow=index;
						sxt_act();
					}
				}(i))			
			}
			function sxt_time()
			{
				iNow++;
				if(iNow==aSx_li.length)
				{
					iNow=0;
				}
				sxt_act();
			}
			clearInterval(timer);
			timer=setInterval(function (){
				sxt_time();
			},1000);
			function sxt_act()
			{
				for(var i=0; i<aSx_li.length; i++)
				{
					aSx_li[i].className='';
					aSx_div[i].className='';
				}
				aSx_li[iNow].className='active';
				aSx_div[iNow].className='show';
			}
			oSx_box1.onmouseover=function ()
			{
				clearInterval(timer);
			};
			oSx_box1.onmouseout=function ()
			{
				/*if(s_Time.offsetHeight<=50)
				{
					clearInterval(timer);
				}else{
					timer=setInterval(function (){
						sxt_time();
					},1000);
				}*/
				if(oS1.innerHTML=='+')
				{
					clearInterval;
				}
				if(oS1.innerHTML=='-')
				{
					timer=setInterval(function (){
						sxt_time();
					},1000);
				}
			};

			for(var i=0;i<aSx_div_child1.length;i++) {
				aSx_div_child1[i].style.display = 'block';
			}
			for(var i=0;i<aSx_div_child2.length;i++) {
				aSx_div_child2[i].style.display = 'block';
			}
		}
			//自动播放选项卡
		sxt_tab('sxt_box','s_s1');
		
	})()
	

	
	
		
})




