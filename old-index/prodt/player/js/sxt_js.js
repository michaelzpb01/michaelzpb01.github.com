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
	//上下滑动封装
	(function (){
		function sxtList(id)
		{
			var oSbox=document.getElementById(id);
			var aSdiv=oSbox.getElementsByTagName('h6');
			var aSdl=oSbox.getElementsByTagName('dl');
			var aSli=oSbox.getElementsByTagName('li');
			for(var i=0; i<aSli.length; i++)
			{
				(function (index){
					aSli[i].onmouseover=function ()
					{
						for(var i=0; i<aSli.length; i++)
						{
							aSdiv[i].style.display='block';
							aSdl[i].style.display='none';
						}
						aSdiv[index].style.display='none';
						aSdl[index].style.display='block';
					};
				})(i)
				
			}
		}
			//上下滑动
		sxtList('sbox1');
		sxtList('sbox2');
		sxtList('sbox3');
		sxtList('sbox4');
	})()
	
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
		sxtmove('s_s2','s_block2');
		sxtmove('s_s3','s_block3');
		sxtmove('s_s4','s_block4');
		sxtmove('s_s5','s_block5');
	})()
	


	//自动播放选项卡封装
	;(function (){
		function sxt_tab(id,mid){
			
			var oSx_box1=document.getElementById(id);
			var oSul=oSx_box1.children[0];
			var s_Time=oSx_box1.children[1];
			var aSx_li=oSul.getElementsByTagName('li');
			var aSx_div=oSx_box1.getElementsByTagName('div');
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
		}
			//自动播放选项卡
		sxt_tab('sxt_box','s_s1');
		sxt_tab('sxt_box1','s_s2');
		sxt_tab('sxt_box3','s_s3');
		sxt_tab('sxt_box4','s_s4');
		sxt_tab('sxt_box5','s_s5');
	})()
	

	
	
		
})








