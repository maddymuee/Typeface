$(document).ready(function() {
	$("#content").on('click',function(){
        $("#a .triangle1").removeClass("aselected");
		$("#c .halfcircle3").removeClass("cselected");
		$("#e .halfcircle3").removeClass("eselected");
		$("#j .halfcircle5").removeClass("jselected");
		$("#m .triangle4").removeClass("mselected1");
		$("#m .triangle5").removeClass("mselected2");
		$("#o .circle2").removeClass("oselected");
		$("#q .circle2").removeClass("qselected");
		$("#s .halfcircle6").removeClass("sselected");
		$("#s .halfcircle7").removeClass("bselected2");
		$("#v .triangle7").removeClass("mselected1");
		$("#x .triangle1").removeClass("xselected1");
		$("#x .triangle10").removeClass("xselected2");
		$("#z .triangle12").removeClass("zselected1");
		$("#z .triangle13").removeClass("zselected2");
		$("#trois .halfcircle1").removeClass("bselected1");
		$("#trois .halfcircle2").removeClass("bselected2");
		$("#cinq .halfcircle10").removeClass("bselected2");
		$("#sept .triangle8").removeClass("zselected2");
		$("#neuf .circle4").removeClass("neufselected");
		$("#b .halfcircle1").removeClass("bselected1");
		$("#b .halfcircle2").removeClass("bselected2");
		$("#d .halfcircle4").removeClass("dselected");
		$("#g .circle1").removeClass("gselected");
		$("#k .triangle2").removeClass("kselected1");
		$("#k .triangle3").removeClass("kselected2");
		$("#n .triangle4").removeClass("nselected");
		$("#p .halfcircle1").removeClass("bselected1");
		$("#r .halfcircle1").removeClass("rselected1");
		$("#r .triangle6").removeClass("rselected2");
		$("#u .halfcircle8").removeClass("uselected");
		$("#w .triangle8").removeClass("wselected1");
		$("#w .triangle9").removeClass("wselected2");
		$("#y .triangle11").removeClass("yselected");
		$("#deux .triangle13").removeClass("huitselected1");
		$("#deux .halfcircle9").removeClass("bselected1");
		$("#quatre .triangle14").removeClass("quatreselected");
		$("#six .circle3").removeClass("sixselected");
		$("#huit .circle4").removeClass("huitselected1");
		$("#huit .circle5").removeClass("huitselected2");
/*NAME LETTERS
		$("#namee1 .halfcircle3").removeClass("cselected");
		$("#namee2 .halfcircle11").removeClass("eselected");
		$("#namec .halfcircle3").removeClass("cselected");
		$("#namer .halfcircle12").removeClass("rselected1");
		$("#namer .triangle3").removeClass("rselected2");
		$("#nameo1 .circle2").removeClass("oselected");
		$("#nameo2 .circle2").removeClass("gselected");
		$("#namep1 .halfcircle1").removeClass("bselected1");
		$("#namep2 .halfcircle1").removeClass("rselected1");
		*/
    });


	$("#namee1").on('mouseover',function(){
	$("#namee1 .halfcircle3").addClass("cselected");
});
	$("#namee2").on('mouseover',function(){
	$("#namee2 .halfcircle11").addClass("eselected");
});

	$("#namec").on('mouseover',function(){
	$("#namec .halfcircle3").addClass("cselected");
});

	$("#nameo1").on('mouseover',function(){
	$("#nameo1 .circle2").addClass("oselected");
});
	$("#nameo2").on('mouseover',function(){
	$("#nameo2 .circle2").addClass("gselected");
});
	$("#namer").on('mouseover',function(){
	$("#namer .halfcircle12").addClass("rselected1");
	$("#namer .triangle3").addClass("rselected2");
});
	$("#namep1").on('mouseover',function(){
	$("#namep1 .halfcircle1").addClass("bselected1");
});
	$("#namep2").on('mouseover',function(){
	$("#namep2 .halfcircle1").addClass("rselected1");
});




	$("#a").on('mouseover',function(){
	$("#a .triangle1").addClass("aselected");
});


	$("#b").on('mouseover',function(){
	$("#b .halfcircle1").addClass("bselected1");
	$("#b .halfcircle2").addClass("bselected2");
});

	$("#c").on('mouseover',function(){
	$("#c .halfcircle3").addClass("cselected");
});

	$("#d").on('mouseover',function(){
	$("#d .halfcircle4").addClass("dselected");
});
	$("#e").on('mouseover',function(){
	$("#e .halfcircle3").addClass("eselected");
});
	
	$("#g").on('mouseover',function(){
	$("#g .circle1").addClass("gselected");
});
	$("#j").on('mouseover',function(){
	$("#j .halfcircle5").addClass("jselected");
});
	
	$("#k").on('mouseover',function(){
	$("#k .triangle2").addClass("kselected1");
	$("#k .triangle3").addClass("kselected2");
});
	
	$("#m").on('mouseover',function(){
	$("#m .triangle4").addClass("mselected1");
	$("#m .triangle5").addClass("mselected2");
});
	$("#n").on('mouseover',function(){
	$("#n .triangle4").addClass("nselected");
});

	$("#o").on('mouseover',function(){
	$("#o .circle2").addClass("oselected");
});
	
	$("#p").on('mouseover',function(){
	$("#p .halfcircle1").addClass("bselected1");
});
	
	
	$("#q").on('mouseover',function(){
	$("#q .circle2").addClass("qselected");
});

	$("#r").on('mouseover',function(){
	$("#r .halfcircle1").addClass("rselected1");
	$("#r .triangle6").addClass("rselected2");
});

	$("#s").on('mouseover',function(){
	$("#s .halfcircle6").addClass("sselected");
	$("#s .halfcircle7").addClass("bselected2");
});

	$("#u").on('mouseover',function(){
	$("#u .halfcircle8").addClass("uselected");
});
	$("#v").on('mouseover',function(){
	$("#v .triangle7").addClass("mselected1");
});

	$("#w").on('mouseover',function(){
	$("#w .triangle8").addClass("wselected1");
	$("#w .triangle9").addClass("wselected2");
});

	$("#x").on('mouseover',function(){
	$("#x .triangle1").addClass("xselected1");
	$("#x .triangle10").addClass("xselected2");
});

	$("#y").on('mouseover',function(){
	$("#y .triangle11").addClass("yselected");
});

	$("#z").on('mouseover',function(){
	$("#z .triangle12").addClass("zselected1");
	$("#z .triangle13").addClass("zselected2");
});

	$("#deux").on('mouseover',function(){
	$("#deux .triangle13").addClass("huitselected1");
	$("#deux .halfcircle9").addClass("bselected1");
});

	$("#trois").on('mouseover',function(){
	$("#trois .halfcircle1").addClass("bselected1");
	$("#trois .halfcircle2").addClass("bselected2");
});
	
	$("#quatre").on('mouseover',function(){
	$("#quatre .triangle14").addClass("quatreselected");
});
	$("#cinq").on('mouseover',function(){
	$("#cinq .halfcircle10").addClass("bselected2");
});
	
	$("#six").on('mouseover',function(){
	$("#six .circle3").addClass("sixselected");
});

	$("#sept").on('mouseover',function(){
	$("#sept .triangle8").addClass("zselected2");
});
	
	$("#huit").on('mouseover',function(){
	$("#huit .circle4").addClass("huitselected1");
	$("#huit .circle5").addClass("huitselected2");

});

	$("#neuf").on('mouseover',function(){
	$("#neuf .circle4").addClass("neufselected");
});
	





});