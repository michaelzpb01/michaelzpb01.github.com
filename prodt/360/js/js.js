window.onload = function(){
	//广告图
	(function(){
		var oNo = document.getElementById('no');
		var oBanner = document.getElementById('banner');
		oNo.onclick = function(){
			oBanner.style.display = 'none';
		}
	})();
	//搜索框
	(function(){
		var oS = document.getElementById('search_ss');
		var oSearch = document.getElementById('search1');
		var oList = document.getElementById('search_list');
		var timer = null;
		oS.onclick = function(){
			oSearch.value = '';
			oSearch.style.color = '#000';
			oList.style.display = 'block';
		};
		oS.onmouseout = function(){
			timer = setTimeout(function(){
				oList.style.display = 'none';
				oSearch.value = '秦时明月';
				oSearch.style.color = '#ccc';
			},200)
		};
		oList.onmouseover = function(){
			clearTimeout(timer);
			
		};
	})();
	/*大图自动选项卡*/
	(function(){
		var oBtnl = document.getElementById('btn_l');
		var oBtnr = document.getElementById('btn_r');
		var oD = document.getElementById('ddd');
		var aS = oD.getElementsByTagName('span');
		var oCont = document.getElementById('contents');
		var aUl = oCont.getElementsByTagName('ul');
		var iNum = 0;
		var timer = null;
		var aImg = oCont.getElementsByTagName('img');
		var aB = oCont.getElementsByTagName('b');
		for(var i = 0;i<aImg.length;i++){
			aImg[i].index = i;
			aImg[i].onmouseenter = function(){
				aB[this.index].style.display = 'block';
			};
			aImg[i].onmouseout = function(){
				aB[this.index].style.display = 'none';
			};
		}
		oCont.onmouseover = function(){
			clearInterval(timer);
		};
		oCont.onmouseout = function(){
			clearInterval(timer);
			timer = setInterval(time,1000);
		};
		oBtnl.onmouseover = function(){
			oBtnl.style.backgroundPosition = '0 240px';
			clearInterval(timer);
		};
		oBtnl.onmouseout = function(){
			oBtnl.style.backgroundPosition = '0 0px';
			clearInterval(timer);
			timer = setInterval(time,1000);
		};
		oBtnr.onmouseover = function(){
			oBtnr.style.backgroundPosition = '0 80px';
		};
		oBtnr.onmouseout = function(){
			oBtnr.style.backgroundPosition = '0 160px';
		};
		function time(){
			iNum++;
			if(iNum>aUl.length-1){
				iNum = 0;
			}
			cfb();
		}
		function cfb(){
			for(var i = 0;i<aS.length;i++){
				aUl[i].className = '';
			}
			aUl[iNum].className = 'show';
		}
		for(var i = 0;i<aS.length;i++){
			aS[i].index  = i;
			aS[i].onclick = function(){
				iNum = this.index;
				cfb();
			};
		}
		oBtnl.onclick = function(){
			iNum--;
			if(iNum < 0){
				iNum = aS.length-1;
			}
			cfb();
		}
		oBtnr.onclick = function(){
			iNum++;
			if(iNum > aUl.length-1){
				iNum = 0;
			}
			cfb();
		}
		clearInterval(timer);
		timer = setInterval(time,1000);
	})();
	/*传参选项卡部分*/
	(function(){
		function elect(id1,id2,name1,name2){
			var oBtn = document.getElementById(id1);
			var aBtn = oBtn.getElementsByTagName(name1);
			var oUl = document.getElementById(id2);
			var aUl = oUl.getElementsByTagName(name2);
			var timer = null;
			for(var i = 0;i<aBtn.length;i++){
				aBtn[i].index = i;
				aBtn[i].onmouseover = function(){
					var iNum = this.index;
					clearTimeout(timer)
					timer = setTimeout(function(){
						for(var i = 0;i<aBtn.length;i++){
							aBtn[i].className = '';
							aUl[i].className = '';
						}
						aBtn[iNum].className = 'active';
						aUl[iNum].className = 'show';
					},200);
				};
				aBtn[i].onmouseout = function(){
					clearTimeout(timer)
				};
			}
			
		}
		elect('hot_r_s_btn1','hot_r_s_cont1','span','ul');
		elect('hot_r_s_btn2','hot_r_s_cont2','span','ul');
		elect('hot_r_s_btn3','hot_r_s_cont3','span','ul');
		elect('hot_r_s_btn4','hot_r_s_cont4','span','ul');
		elect('btn_w','cont_mov','li','ul');
		elect('btn_b','along_l','li','ul');
	})();
	/*左右按钮选项卡*/
	(function(){
		function mos(id){
			var oMous = document.getElementById(id);
			var aLi = oMous.getElementsByTagName('li');
			var aEm = oMous.getElementsByTagName('em');
			for(var i = 0;i<aLi.length;i++){
				aLi[i].index = i;
				aLi[i].onmouseover = function(){
					aEm[this.index].style.display = 'block';
				};
				aLi[i].onmouseout = function(){
					aEm[this.index].style.display = 'none';
				};
			}
		}
		mos('mous');
		mos('mous1');
		function xxk(btnl,btnr,num,father,son,father1,son1){
			var oBtn1 = document.getElementById(btnl);
			var oBtn2 = document.getElementById(btnr);
			var oNum = document.getElementById(num);
			var oNew = document.getElementById(father);
			var aNewb = oNew.getElementsByTagName(son);
			var oTnr = document.getElementById(father1);
			var aThr = oNew.getElementsByTagName(son1);
			var num = 0;
			function cfb(){
				for(var i = 0;i<aNewb.length;i++){
					aNewb[i].className = '';
				}
				aNewb[num].className = 'show';
			}
			function time(){
				num++;
				if(num>aNewb.length-1){
					num = 0;
				}
				cfb();
			}
			for(var i = 0;i<aThr.length;i++){
				aThr[i].index = i;
				aThr[i].onclick = function(){
					var num = this.index;
					cfb();
				};
			}
			oBtn1.onclick = function(){
				num--;
				if(num < 0){
					num = aNewb.length-1;
				}
				cfb();
				oNum.innerHTML = num+1;
			};
			oBtn2.onclick = function(){
				num++;
				if(num > aNewb.length-1){
					num = 0;
				}
				cfb();
				oNum.innerHTML = num+1;
			};
		}
		xxk('btn_left','btn_right','nun1','mous','b','btn_thr','span');
		xxk('btn_left1','btn_right1','nun2','mous1','b','btn_thr','span');
		xxk('btn_left3','btn_right3','nun3','mous3','b','btn_thr','span');
		xxk('btn_left4','btn_right4','nun4','mous4','b','btn_thr','span');
	})();
	/*星期选项卡*/
	(function(){
		function elect(id1,id2,name1,name2){
			var oBtn = document.getElementById(id1);
			var aBtn = oBtn.getElementsByTagName(name1);
			var oUl = document.getElementById(id2);
			var aUl = oUl.getElementsByTagName(name2);
			var timer = null;
			for(var i = 0;i<aBtn.length;i++){
				aBtn[i].index = i;
				aBtn[i].onmouseover = function(){
					var iNum = this.index;
					clearTimeout(timer)
					timer = setTimeout(function(){
						for(var i = 0;i<aBtn.length;i++){
							aBtn[i].className = 'fl';
							aUl[i].className = 'hot_l_l_b clearFix';
						}
						aBtn[iNum].className = 'active fl';
						aUl[iNum].className = 'show hot_l_l_b clearFix';
					},200);
				};
				aBtn[i].onmouseout = function(){
					clearTimeout(timer)
				};
			}
			
		}
		elect('btn_b','along_l','li','ul');
	})();
	/*页面下部分左右滑动内容*/
	(function(){
		function lr(id1,id2,cont){
			var oImg1 = document.getElementById(id1);
			var oImg2 = document.getElementById(id2);
			var oSmall = document.getElementById(cont);
			var num = 0;
			var timer = null;
			oImg2.onclick = function(){
				clearInterval(timer);
				timer = setInterval(function(){
					num+=16;
					if(num > 1260){
						num = 1260;
						clearInterval(timer);
					}
					oSmall.style.marginLeft = '-'+num+'px';
					oImg1.style.display = 'block';
					oImg2.style.display = 'none';
				},1)
				
				
			};
			oImg1.onclick = function(){
				clearInterval(timer);
				timer = setInterval(function(){
					num-=16;
					if(num<0){
						num = 0;
						clearInterval(timer);
					}
					oSmall.style.marginLeft = -num+'px';;
					oImg1.style.display = 'none';
					oImg2.style.display = 'block';
				},1)
				
			};
		}
		lr('Im_left','Im_right','small_l_l');
		lr('Im_left1','Im_right1','small_l_l1');
		lr('Im_left2','Im_right2','small_l_l2');
		lr('Im_left3','Im_right3','small_l_l3');
		lr('Im_left4','Im_right4','small_l_l4');
		lr('Im_left5','Im_right5','small_l_l5');
		lr('Im_left6','Im_right6','small_l_l6');
	})();
	(function(){
		function bg(id1,name1,name2){
			var oHot = document.getElementById(id1);
			var aHli = oHot.getElementsByTagName(name1);
			var aStr = oHot.getElementsByTagName(name2);
			for(var i = 0;i<aHli.length;i++){
				aHli[i].index = i;
				aHli[i].onmouseover = function(){
					aStr[this.index].style.display = 'block';
				};
				aHli[i].onmouseout = function(){
					aStr[this.index].style.display = 'none';
				};
			}
		}
		bg('hot_ls','li','strong');
		bg('hot_l_l_b','li','strong');
		bg('hot_l_l_b1','li','strong');
		bg('mous3','li','strong');
		bg('hot_l_l_b3','li','strong');
		bg('mous4','li','strong');
		bg('along_l','li','strong');
		bg('small_l_l','li','strong');
		bg('small_l_l1','li','strong');
		bg('small_l_l2','li','strong');
		bg('small_l_l3','li','strong');
		bg('small_l_l4','li','strong');
		bg('small_l_l5','li','strong');
		bg('small_l_l6','li','strong');
	})();
	(function(){
		var oNav = document.getElementById('mov');
		var oNav1 = document.getElementById('mov1');
		var oNc = document.getElementById('nav_s');
		var oNc1 = document.getElementById('nav_s1');
		oNav.onmouseover = function(){
			oNc.style.display = 'block';
		};
		oNav.onmouseout = function(){
			oNc.style.display = 'none';
		};
		oNav1.onmouseover = function(){
			oNc1.style.display = 'block';
		};
		oNav1.onmouseout = function(){
			oNc1.style.display = 'none';
		};
	})();
};
