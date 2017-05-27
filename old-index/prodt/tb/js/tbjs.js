window.onload = function(){
	var oSpan=document.getElementById('options');
	var aSpan=oSpan.getElementsByTagName('span');
	var oUl=document.getElementById('guize');
	var aUl=oUl.getElementsByTagName('ul');
	for(var i=0;i<aSpan.length;i++){
		aSpan[i].index=i;
		aSpan[i].onmouseover=function(){
			for(var i=0;i<aSpan.length;i++){
			aSpan[i].className='';
			aUl[i].className='';
			};
			this.className='first';
			aUl[this.index].className='show';
		};
	};
	
	
	var oPic=document.getElementById('ht_pic');
	var oBtn=document.getElementById('btn');
	var aPic=oPic.getElementsByTagName('a');
	var aBtn=oBtn.getElementsByTagName('span');
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			for(var i=0;i<aBtn.length;i++){
				aPic[i].className='';
				aBtn[i].className='';
			};
			this.className='btn_in';
			aPic[this.index].className='dsx';
		};
	};
};	
	
	
	

