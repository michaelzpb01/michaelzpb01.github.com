function tab(id1,id2){
	var oPic=document.getElementById(id1);
	var aImg=oPic.children;
	var oOmg=document.getElementById(id2);
	var aSpan=oOmg.children;
	for(i=0;i<aImg.length;i++){
		aSpan[i].index=i;
		aSpan[i].onmouseover=function(){
			for(i=0;i<aImg.length;i++){
				aSpan[i].className='fl';
				aImg[i].className='';
			};
			this.className='show fl';
			aImg[this.index].className='active';
		};
	};
}
window.onload = function(){
	tab('pic','kkl');
};
