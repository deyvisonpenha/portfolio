/* Parallax scroll*/
	window.addEventListener("scroll",parallax,false);

	function parallax(){
		var heightWindow = window.innerHeight;
		var setPosition = (heightWindow*3)/10;
		var layer_1 = document.getElementById('layer-1');
		var desloc = 450+setPosition - (window.pageYOffset/2.6)+'px';
		layer_1.style.top = desloc;

		console.log("page " + window.pageYOffset);
		console.log("layer_1 " + document.getElementById('layer-1').style.top);
		console.log("tela "+heightWindow);
		console.log("posicao "+setPosition);
		console.log("desloc "+desloc);
	}
/* end of parallax */

	/* show hide by scroll */
	$(window).scroll(function(){
		var scrollv = $(window).scrollTop();
		if(scrollv >= 350){
			//$("#layer-1").show("slide", {direction: "left" },800);
			$(".containerRight").show(800);
			//window.addEventListener("scroll",parallax,false);
		}
		else{
			$(".containerRight").hide();
		}
	})
/* end of show hide by scroll */

/* Anchor slo by */
var $doc = $('html, body');
	$('.scrollSuave').click(function() {
		$doc.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 450, 'linear');
		return false;
	});
 