$(document).ready(function() {
    var loops = 100;
    function removeAddClass() {
        $("#a .triangle1").removeClass("aselected");
		$("#c .halfcircle3").removeClass("cselected");
		$("#e .halfcircle3").removeClass("eselected");
		$("#nameg .circle1").removeClass("gselected");
		$("#j .halfcircle5").removeClass("jselected");
		$("#m .triangle4").removeClass("mselected1");
		$("#m .triangle5").removeClass("mselected2");
		$("#o .circle2").removeClass("oselected");
		$("#nameo .circle2").removeClass("oselected");
		$("#q .circle2").removeClass("qselected");
		$("#s .halfcircle6").removeClass("sselected");
		$("#s .halfcircle7").removeClass("bselected2");
		$("#names .halfcircle6").removeClass("sselected");
		$("#names .halfcircle7").removeClass("bselected2");
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


        if (--loops > 0)
            setTimeout(removeAddClass, 4000);
        }
        removeAddClass();
    });

$(document).ready(function() {
    var loops = 100;
    function removeAddClass() {
        $("#b .halfcircle1").removeClass("bselected1");
		$("#b .halfcircle2").removeClass("bselected2");
		$("#d .halfcircle4").removeClass("dselected");
		$("#g .circle1").removeClass("gselected");
		$("#k .triangle2").removeClass("kselected1");
		$("#k .triangle3").removeClass("kselected2");
		$("#n .triangle4").removeClass("nselected");
		$("#p .halfcircle1").removeClass("bselected1");
		$("#namep .halfcircle1").removeClass("bselected1");
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


        if (--loops > 0)
            setTimeout(removeAddClass, 8000);
        }
        removeAddClass();
    });
/*
$(document).ready(function() {
    var loops = 100;
    function removeAddClass() {
         $(".line1").addClass("animate");
        if (--loops > 0)
            setTimeout(removeAddClass, 8000);
        }
        removeAddClass();
    });
    */

$(document).ready(function() {


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
	$("#nameg").on('mouseover',function(){
	$("#nameg .circle1").addClass("gselected");
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
	
	$("#nameo").on('mouseover',function(){
	$("#nameo .circle2").addClass("oselected");
});
	
	$("#p").on('mouseover',function(){
	$("#p .halfcircle1").addClass("bselected1");
});
	
	$("#namep").on('mouseover',function(){
	$("#namep .halfcircle1").addClass("bselected1");
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

	$("#names").on('mouseover',function(){
	$("#names .halfcircle6").addClass("sselected");
	$("#names .halfcircle7").addClass("bselected2");
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