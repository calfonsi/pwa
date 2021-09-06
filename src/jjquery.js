var $ = function(param){
	var el;
	var obj = {
		getEl(param){
			//if(el){ return el; }
			if (typeof param === "string" || param instanceof String) {
				el = document.querySelector(param);
			} else {
				el = param;
			}
			return el;
		},
		addClass(className){
			el.classList.add(className);
			return this;
		},
		removeClass(className){
			el.classList.remove(className);
			return this;
		},
		show(value){
			el.style.display = "block";
			return this;
		},
		hide(value){
			el.style.display = "none";
			return this;
		},
		attr(name, value){
			if(value == null){
				return el.getAttribute(name);
			} else {
				el.setAttribute(name, value);
			}
			return this;
		},
		html(value){
			if(value != null){
				el.innerHTML = value;
			} else {
				return el.innerHTML;
			}
		},
		append(value){
			if(value != null){
				el.innerHTML += value;
				return el;
			} else {
				el.innerHTML += value;
			}
		},
		val(value){
			if(value != null){
				return el.value = value;
			} else {
				return el.value;
			}
			//return this;
		},
		remove(value){
			el.remove();
			return this;
		},
		is(name){
			var x = 'ix ' + el.getAttribute('class');
			var z = x.indexOf(name);
			if(z < 0){
				return false;
			} else {
				return true;
			}		
		},
		ons(event, callback){
			document.addEventListener(event, callback);
		},
		on(event, callback){
			if(param != null){
				var params = document.querySelectorAll(param);
				for (var i = 0 ; i < params.length; i++) {
					params[i].addEventListener(event, callback);
					el.addEventListener(event, callback);
				}
			}
			return this;
		}
	};
	el = obj.getEl(param);
	
	return obj;
}

function isString(el, attr){
	if(typeof el === 'object'){
		var z = 'ix ' + el.getAttribute('class');
	} else {
		var z = 'ix ' + attr;
	}
	if(z.indexOf(attr) > 0){
		return true;
	} else {
		return false;
	}
}

/**
<div id="main"></div>
$('#main').addClass('red').addClass('green').removeClass('red').getEl();
**/