$(document).ready(function() {



/* var degrees = 0;
	$("div").click(function(){
		degrees += 30;
		$("body").css("-webkit-filter", "hue-rotate("+degrees+"deg)");
        $("body").css("filter", "hue-rotate("+degrees+"deg)");
});
*/


	$("#a").on('click',function(){
	$("#a .triangle1").toggleClass("aselected");
});

	$("#b").on('click',function(){
	$("#b .halfcircle1").toggleClass("bselected1");
	$("#b .halfcircle2").toggleClass("bselected2");

/*
	$(".bselected1, .bselected2").css("pointer-events", "none");
	}).mouseout(function(){
	setTimeout(function(){
	$(".bselected1, .bselected2").css("pointer-events", "auto");
	}, 1000);
	*/
});

	$("#c").on('click',function(){
	$("#c .halfcircle3").toggleClass("cselected");
});

	$("#d").on('click',function(){
	$("#d .halfcircle4").toggleClass("dselected");
});
	$("#e").on('click',function(){
	$("#e .halfcircle3").toggleClass("eselected");
});
	$("#f").on('click',function(){
	$(".line1, .line2, .line3").toggleClass("rotate");
});
	$("#g").on('click',function(){
	$("#g .circle1").toggleClass("gselected");
});
	$("#j").on('click',function(){
	$("#j .halfcircle5").toggleClass("jselected");
});
	$("#k").on('click',function(){
	$("#k .triangle2").toggleClass("kselected1");
	$("#k .triangle3").toggleClass("kselected2");
});
	$("#m").on('click',function(){
	$("#m .triangle4").toggleClass("mselected1");
	$("#m .triangle5").toggleClass("mselected2");
});
	$("#n").on('click',function(){
	$("#n .triangle4").toggleClass("nselected");
});
	$("#o").on('click',function(){
	$("#o .circle2").toggleClass("gselected");
});
	$("#p").on('click',function(){
	$("#p .halfcircle1").toggleClass("bselected1");
});
	$("#q").on('click',function(){
	$("#q .circle2").toggleClass("qselected");
});
	$("#r").on('click',function(){
	$("#r .halfcircle1").toggleClass("rselected1");
	$("#r .triangle6").toggleClass("rselected2");
});
	$("#s").on('click',function(){
	$("#s .halfcircle6").toggleClass("sselected");
	$("#s .halfcircle7").toggleClass("bselected2");
});
	$("#u").on('click',function(){
	$("#u .halfcircle8").toggleClass("uselected");
});
	$("#v").on('click',function(){
	$("#v .triangle7").toggleClass("mselected1");
});
	$("#w").on('click',function(){
	$("#w .triangle8").toggleClass("wselected1");
	$("#w .triangle9").toggleClass("wselected2");
});
	$("#x").on('click',function(){
	$("#x .triangle1").toggleClass("xselected1");
	$("#x .triangle10").toggleClass("xselected2");
});
	$("#y").on('click',function(){
	$("#y .triangle11").toggleClass("yselected");
});
	$("#z").on('click',function(){
	$("#z .triangle12").toggleClass("zselected1");
	$("#z .triangle13").toggleClass("zselected2");
});
	$("#deux").on('click',function(){
	$("#deux .triangle13").toggleClass("huitselected1");
	$("#deux .halfcircle9").toggleClass("bselected1");
});
	$("#trois").on('click',function(){
	$("#trois .halfcircle1").toggleClass("bselected1");
	$("#trois .halfcircle2").toggleClass("bselected2");
});
	$("#quatre").on('click',function(){
	$("#quatre .triangle14").toggleClass("quatreselected");
});
	$("#cinq").on('click',function(){
	$("#cinq .halfcircle10").toggleClass("bselected2");
});
	$("#six").on('click',function(){
	$("#six .circle3").toggleClass("sixselected");
});
	$("#sept").on('click',function(){
	$("#sept .triangle8").toggleClass("zselected2");
});
	$("#huit").on('click',function(){
	$("#huit .circle4").toggleClass("huitselected1");
	$("#huit .circle5").toggleClass("huitselected2");
});
	$("#neuf").on('click',function(){
	$("#neuf .circle4").toggleClass("neufselected");
});



	$("#letterbox5").on('mouseover',function(){
	$(".halfcircle1, .halfcircle2").animate({
		'border-top-right-radius': '55px',
		'border-bottom-right-radius': '55px',
		'border-bottom-left-radius': '55px',
		'border-top-left-radius': '55px',
		height: '110px',
		width: '110px',
		left:'-55px',
	}, 200);
});
$("#letterbox5").on('mouseout',function(){
	$(".halfcircle1, .halfcircle2").animate({
		'border-top-right-radius': '55px',
		'border-bottom-right-radius': '55px',
		'border-bottom-left-radius': '0',
		'border-top-left-radius': '0',
		height: '110px',
		width: '55px',
		left:'0',
	}, 200);
});



});