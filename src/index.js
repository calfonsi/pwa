if("serviceWorker" in navigator){
	navigator.serviceWorker.register("sw.js").then(registration => {
		console.log("SW Registered!");
		console.log(registration);
	}).catch(error => {
		console.log("SW Registration Failed!");
		console.log(error);
	});
}

$('#japSidenav a').ons('click', function(e){
	e.preventDefault();
	if(e.target.nodeName == "A"){
		if(isString(e.target, 'main-nav-a') == true){
			if(e.target.text == 'Lotto'){
				var mc = '<p><input type="hidden" id="repeat" value="8" />';
				mc += '<button onclick="lottoGen();">Gens</button></p>';
				mc += '<div class="img-lotto"><canvas id="myCanvas"></div>';
				$('#mainContent').html(mc);
				closeNav();
			}
		}
		
	}
})

function openNav() {
  document.getElementById("japSidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("japSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

		function generate(size, lowest, highest) {
			var numbers = [];
			for(var i = 0; i < size; i++) {
				var add = true;
				var randomNumber = Math.floor(Math.random() * highest) + 1;
				for(var y = 0; y < highest; y++) {
					if(numbers[y] == randomNumber) {
						add = false;
					}
				}
				if(add) {
					numbers.push(randomNumber);
				} else {
					i--;
				}
			}
		  
			var highestNumber = 0;
			for(var m = 0; m < numbers.length; m++) {
				for(var n = m + 1; n < numbers.length; n++) {
					if(numbers[n] < numbers[m]) {
						highestNumber = numbers[m];
						numbers[m] = numbers[n];
						numbers[n] = highestNumber;
					}
				}
			}
			
			var numlen = '';
			for(var m = 0; m < numbers.length; m++) {
				if(numbers[m] < 10){
					numbers[m] = '0'+ numbers[m];
					numlen += numbers[m] + " ";
				}
			}
		  
			//document.getElementById("numbers").innerHTML += numbers.join(" - ") + '<br />';
			
			return numbers.join(" - ");
			
		}
		function lottoGen(){
			var ns = document.getElementById("repeat").value;
			var px = 15;
			var fonts = 'Arial';
			var c = document.getElementById("myCanvas");
			var cHeight = ns * px;
			var ctx = c.getContext("2d");
			
			for(var m = 0; m < ns; m++) {
				var lott = generate(6, 1, 49);
				ctx.font = "15px Arial";
				ctx.fillText(lott, 30, px * (m+1));
				//alert(typeof(ns) + " | " + ns);
				generate(6, 1, 49);
				//document.getElementById("numbers").innerHTML += lott + '<br />';
				//c.style.Height = cHeight + (px * (m+1)) + 'px';
			}
			//generate(6, 1, 49);
		}

