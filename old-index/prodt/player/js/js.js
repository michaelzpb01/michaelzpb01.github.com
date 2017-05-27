//'user strict'
function addReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false);
	}else{
		document.attachEvent('onreadystatechange',function(){
			
			if(document.readyState == 'complete'){
				fn();
			}	
			
		});
	}
}

;(function(){
addReady(function(){
	var oZh_ul=document.getElementById('zh_ul');
	var aLi=oZh_ul.getElementsByTagName('li');
	var iNow=0;
//	var aS=oZh_ul.getElementsByTagName('span');
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
//				aImg[i].style.display='none';
			}
			this.className='on';
//			aImg[this.index].style.display='block';
		};
		aLi[i].onmouseout=function(){
			this.className='';
		};
	}
});
})();