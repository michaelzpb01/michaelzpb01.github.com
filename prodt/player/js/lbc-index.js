window.onload=function (){
    ;(function (){
        var oS=document.getElementById('ol-btn');
        var aLi = oS.getElementsByTagName('li');
        var aSpan = oS.getElementsByTagName('span');
        var oUl = document.getElementById('banner-ul');
        var aLi2 = oUl.children;
        for(var i=0;i<aLi.length;i++){
            (function (index){
                function addEvent(obj,sEv,fn){
                    if(obj.addEventListener){
                        obj.addEventListener(sEv,fn,false);
                    }else{
                        obj.attachEvent('on'+sEv,fn);
                    }
                }
                addEvent(aLi[i],'mouseenter',function (){
                    for(var i=0;i<aLi.length;i++){
                        aLi[i].className='';
                        aSpan[i].className='';
                        startMove(aLi2[i],{opacity:0},{duration:500});
                    }
                    aLi[index].className='border1';
                    aSpan[index].className='triangle';
                    startMove(aLi2[index],{opacity:1},{duration:500});
                });
            })(i);
        }
    })();

    ;(function (){      /*显示层*/
        function show(id,sClassName){
            var oUl = document.getElementById(id);
            var oLi = oUl.children;
            var oShow = getByClass(oUl,sClassName);
            for(var i=0;i<oLi.length;i++){
                (function (index){
                    function addEvent(obj,sEv,fn){
                        if(obj.addEventListener){
                            obj.addEventListener(sEv,fn,false);
                        }else{
                            obj.attachEvent('on'+sEv,fn);
                        }
                    }
                    addEvent(oLi[i],'mouseover',function (){
                        for(var i=0;i<oLi.length;i++){
                            oShow[i].style.display='none';
                        }
                        oShow[index].style.display='block';
                    });
                    addEvent(oLi[i],'mouseout',function (){
                        oShow[index].style.display='none';
                    });
                })(i);
            }
        }
        show('content-hot-ul','this-div-show');
        show('content-film-text','this-div-show-W1');
        show('content-Tv-text-ul','this-div-show-W2');
        show('recreation-text-ul','this-div-show-W2');
        show('anime-text','this-div-show-W2');
        show('original-text','this-div-show-W2');
    })();

    /*-----------------2016.2.27 处理浏览器滚动条事件-----------------------*/
    (function (){
        function setNav(id){
            var oNav = document.getElementById(id);
            window.onscroll=function (){
                var oT = document.documentElement.scrollTop || document.body.scrollTop;
                if(oT>25){
                    oNav.style.top= '0';
                }else{
                    oNav.style.top= '39px';
                }
            }
        }
        setNav('navigation');       /*index 中的导航事件*/
    })();
    /*-----------------2016.2.27 处理浏览器滚动条事件-----------------------*/
};



/*getByClass bigan*/
function getByClass(oparent,sClass){
    function findInArr(str,arr){
        for(var i = 0;i<arr.length;i++){
            if(arr[i] == str){
                return true;
            }
        }
        return false;
    }

    if(oparent.getElementsByClassName){
        return oparent.getElementsByClassName(sClass);
    }else{
        var aEle = oparent.getElementsByTagName('*');
        var All = [];
        for(var i = 0;i<aEle.length;i++){
            var arr = aEle[i].className.split(' ');

            if(findInArr(sClass,arr)){
                All.push(aEle[i]);
            }
        }
        return All;
    }
}
/*getByClass end*/