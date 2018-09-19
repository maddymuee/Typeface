$(document).ready(function() {



/* var degrees = 0;
	$("div").on('click',function(){
		degrees += 30;
		$("body").css("-webkit-filter", "hue-rotate("+degrees+"deg)");
        $("body").css("filter", "hue-rotate("+degrees+"deg)");
}); */


	$("#a").on('mouseover',function(){
	$("#a .triangle1").addClass("aselected");
});
	$("#a").on('click',function(){
	$("#a .triangle1").removeClass("aselected");
});

	$("#b").on('mouseover',function(){
	$("#b .halfcircle1").addClass("bselected1");
	$("#b .halfcircle2").addClass("bselected2");

});
	$("#b").on('click',function(){
	$("#b .halfcircle1").removeClass("bselected1");
	$("#b .halfcircle2").removeClass("bselected2");

	$(".bselected1, .bselected2").css("pointer-events", "none");
	}).click(function(){
	setTimeout(function(){
	$(".bselected1, .bselected2").css("pointer-events", "auto");
	}, 1000);
});

	$("#c").on('mouseover',function(){
	$("#c .halfcircle3").addClass("cselected");
});
	$("#c").on('click',function(){
	$("#c .halfcircle3").removeClass("cselected");
});

	$("#d").on('mouseover',function(){
	$("#d .halfcircle4").addClass("dselected");
});
	$("#d").on('click',function(){
	$("#d .halfcircle4").removeClass("dselected");
});
	$("#e").on('mouseover',function(){
	$("#e .halfcircle3").addClass("eselected");
});
	$("#e").on('click',function(){
	$("#e .halfcircle3").removeClass("eselected");
});
	$("#g").on('mouseover',function(){
	$("#g .circle1").addClass("gselected");
});
	$("#g").on('click',function(){
	$("#g .circle1").removeClass("gselected");
});
	$("#j").on('mouseover',function(){
	$("#j .halfcircle5").addClass("jselected");
});
	$("#j").on('click',function(){
	$("#j .halfcircle5").removeClass("jselected");
});
	$("#k").on('mouseover',function(){
	$("#k .triangle2").addClass("kselected1");
	$("#k .triangle3").addClass("kselected2");
});
	$("#k").on('click',function(){
	$("#k .triangle2").removeClass("kselected1");
	$("#k .triangle3").removeClass("kselected2");
});
	$("#m").on('mouseover',function(){
	$("#m .triangle4").addClass("mselected1");
	$("#m .triangle5").addClass("mselected2");
});
	$("#m").on('click',function(){
	$("#m .triangle4").removeClass("mselected1");
	$("#m .triangle5").removeClass("mselected2");
});
	$("#n").on('mouseover',function(){
	$("#n .triangle4").addClass("nselected");
});
	$("#n").on('click',function(){
	$("#n .triangle4").removeClass("nselected");
});
	$("#o").on('mouseover',function(){
	$("#o .circle2").addClass("gselected");
});
	$("#o").on('click',function(){
	$("#o .circle2").removeClass("gselected");
});
	$("#p").on('mouseover',function(){
	$("#p .halfcircle1").addClass("bselected1");
});
	$("#p").on('click',function(){
	$("#p .halfcircle1").removeClass("bselected1");
});
	$("#q").on('mouseover',function(){
	$("#q .circle2").addClass("qselected");
});
	$("#q").on('click',function(){
	$("#q .circle2").removeClass("qselected");
});
	$("#r").on('mouseover',function(){
	$("#r .halfcircle1").addClass("rselected1");
	$("#r .triangle6").addClass("rselected2");
});
	$("#r").on('click',function(){
	$("#r .halfcircle1").removeClass("rselected1");
	$("#r .triangle6").removeClass("rselected2");
});
	$("#s").on('mouseover',function(){
	$("#s .halfcircle6").addClass("sselected");
	$("#s .halfcircle7").addClass("bselected2");
});
	$("#s").on('click',function(){
	$("#s .halfcircle6").removeClass("sselected");
	$("#s .halfcircle7").removeClass("bselected2");
});
	$("#u").on('mouseover',function(){
	$("#u .halfcircle8").addClass("uselected");
});
	$("#u").on('click',function(){
	$("#u .halfcircle8").removeClass("uselected");
});
	$("#v").on('mouseover',function(){
	$("#v .triangle7").addClass("mselected1");
});
	$("#v").on('click',function(){
	$("#v .triangle7").removeClass("mselected1");
});
	$("#w").on('mouseover',function(){
	$("#w .triangle8").addClass("wselected1");
	$("#w .triangle9").addClass("wselected2");
});
	$("#w").on('click',function(){
	$("#w .triangle8").removeClass("wselected1");
	$("#w .triangle9").removeClass("wselected2");
});
	$("#x").on('mouseover',function(){
	$("#x .triangle1").addClass("xselected1");
	$("#x .triangle10").addClass("xselected2");
});
	$("#x").on('click',function(){
	$("#x .triangle1").removeClass("xselected1");
	$("#x .triangle10").removeClass("xselected2");
});
	$("#y").on('mouseover',function(){
	$("#y .triangle11").addClass("yselected");
});
	$("#y").on('click',function(){
	$("#y .triangle11").removeClass("yselected");
});
	$("#z").on('mouseover',function(){
	$("#z .triangle12").addClass("zselected1");
	$("#z .triangle13").addClass("zselected2");
});
	$("#z").on('click',function(){
	$("#z .triangle12").removeClass("zselected1");
	$("#z .triangle13").removeClass("zselected2");
});
	$("#deux").on('mouseover',function(){
	$("#deux .triangle13").addClass("huitselected1");
	$("#deux .halfcircle9").addClass("bselected1");
});
	$("#deux").on('click',function(){
	$("#deux .triangle13").removeClass("huitselected1");
	$("#deux .halfcircle9").removeClass("bselected1");
});
	$("#trois").on('mouseover',function(){
	$("#trois .halfcircle1").addClass("bselected1");
	$("#trois .halfcircle2").addClass("bselected2");
});
	$("#trois").on('click',function(){
	$("#trois .halfcircle1").removeClass("bselected1");
	$("#trois .halfcircle2").removeClass("bselected2");
});
	$("#quatre").on('mouseover',function(){
	$("#quatre .triangle14").addClass("quatreselected");
});
	$("#quatre").on('click',function(){
	$("#quatre .triangle14").removeClass("quatreselected");
});
	$("#cinq").on('mouseover',function(){
	$("#cinq .halfcircle10").addClass("bselected2");
});
	$("#cinq").on('click',function(){
	$("#cinq .halfcircle10").removeClass("bselected2");
});
	$("#six").on('mouseover',function(){
	$("#six .circle3").addClass("sixselected");
});
	$("#six").on('click',function(){
	$("#six .circle3").removeClass("sixselected");
});
	$("#sept").on('mouseover',function(){
	$("#sept .triangle8").addClass("zselected2");
});
	$("#sept").on('click',function(){
	$("#sept .triangle8").removeClass("zselected2");
});
	$("#huit").on('mouseover',function(){
	$("#huit .circle4").addClass("huitselected1");
	$("#huit .circle5").addClass("huitselected2");
});
	$("#huit").on('click',function(){
	$("#huit .circle4").removeClass("huitselected1");
	$("#huit .circle5").removeClass("huitselected2");
});
	$("#neuf").on('mouseover',function(){
	$("#neuf .circle4").addClass("neufselected");
});
	$("#neuf").on('click',function(){
	$("#neuf .circle4").removeClass("neufselected");
});





});