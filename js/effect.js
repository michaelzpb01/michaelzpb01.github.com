;(function(){
	addReady(function(){
		var oEffect = document.getElementById('effect');
		var aEul = oEffect.getElementsByTagName('ul');
		var aEli = oEffect.getElementsByTagName('li');
		var oEBtn = document.getElementById('effect_btn');
		var aBtn = oEBtn.getElementsByTagName('li');
		//alert(aBtn.length)
		for(var i = 0;i<aBtn.length;i++){
			aBtn[i].index = i;
			aBtn[i].onclick = function(){
				for(var i = 0;i<aBtn.length;i++){
					aBtn[i].className = '';
					aEul[i].style.display = 'none';
				}
				this.className = 'on';
				aEul[this.index].style.display = 'block';
			};
		}
		for(var i = 0;i<aEli.length;i++){
			;(function(i){
				addEvent(aEli[i],'mouseover',function(){
					this.style.webkitTransform = 'rotateY(-180deg)';
					this.style.mozTransform = 'rotateY(-180deg)';
					this.style.msTransform = 'rotateY(-180deg)';
					this.style.transform = 'rotateY(-180deg)';
				});
				addEvent(aEli[i],'mouseout',function(){
					this.style.webkitTransform = 'rotateY(0deg)';
					this.style.mozTransform = 'rotateY(0deg)';
					this.style.msTransform = 'rotateY(0deg)';
					this.style.transform = 'rotateY(0deg)';
				});
			})(i);
		}
		
		
	});
	
	
})();