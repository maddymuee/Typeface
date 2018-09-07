console.log("hello");
$(document).ready(function() {
$("#letterbox2 .halfcircle1, #letterbox2 .halfcircle2").on('click',function(){
	$(this).toggleClass('lb2selected');
});
$("#letterbox3 .halfcircle1, #letterbox3 .halfcircle2").on('mouseover',function(){
	$(this).animate({
		opacity:".5",
	}, 200);
});
$("#letterbox3 .halfcircle1, #letterbox3 .halfcircle2").on('mouseout',function(){
	$(this).animate({
		opacity:"1",
	}, 200);
});
$("#letterbox4 .halfcircle1, #letterbox4 .halfcircle2").on('mouseover',function(){
	$(this).animate({
		width:"1000px",
	}, 200);
});
$("#letterbox4 .halfcircle1, #letterbox4 .halfcircle2").on('mouseout',function(){
	$(this).animate({
		width:"55px",
	}, 200);
});
$("#letterbox5").on('mouseover',function(){
	$("#letterbox5 .halfcircle1").animate({
		top:"105px",
	}, 200);
	$("#letterbox5 .halfcircle2").animate({
		top:"15px",
	}, 200);
});
$("#letterbox5").on('mouseout',function(){
	$("#letterbox5 .halfcircle1").animate({
		top:"15px",
	}, 200);
	$("#letterbox5 .halfcircle2").animate({
		top:"105px",
	}, 200);
});
$("#letterbox6").on('mouseover',function(){
	$("#letterbox6 .halfcircle1").animate({
		'border-radius': '100px',
		height: '200px',
		width: '200px'
	}, 200);
	$("#letterbox6 .halfcircle2").animate({
		'border-radius': '100px',
		height: '200px',
		width: '200px',
		top: '15px'
	}, 200);
});

$("#letterbox6").on('mouseout',function(){
	$("#letterbox6 .halfcircle1").animate({
		'border-top-right-radius': '55px',
		'border-bottom-right-radius': '55px',
		'border-bottom-left-radius': '0',
		'border-top-left-radius': '0',
		height: '110px',
		width: '55px'
	}, 200);
	$("#letterbox6 .halfcircle2").animate({
		'border-top-right-radius': '55px',
		'border-bottom-right-radius': '55px',
		'border-bottom-left-radius': '0',
		'border-top-left-radius': '0',
		height: '110px',
		width: '55px',
		top: '105px'
	}, 200);
});

$("#letterbox8").on('click',function(){
	$("#letterbox8 .halfcircle1").toggleClass('lb8selected1');
	$("#letterbox8 .halfcircle2").toggleClass('lb8selected2');
});

$("#letterbox9").on('click',function(){
	$("#letterbox9 .line1").animate({
		top:'-1000px',
	}, 500);
});
$("#letterbox9").on('click',function(){
	$("#letterbox9 .line1").animate({
		top:'0px',
	}, 500);
});

$("#letterbox10").on('click',function(){
	$("#letterbox10 .line1").toggleClass('lb10selected');
});

$("#letterbox11").on('click',function(){
	$("#letterbox11 .halfcircle1, #letterbox11 .halfcircle2").toggleClass('lb11selected');
});

$("#letterbox12").on('click',function(){
	$("#letterbox12 .halfcircle1, #letterbox12 .halfcircle2").toggleClass('lb12selected');
});

$("#letterbox13").on('click',function(){
	$("#letterbox13 .line1").toggleClass("lb13selected");
});

$("#letterbox14").on('click',function(){
	$(this).toggleClass("lb14selected");
});

$("#letterbox15").on('click',function(){
	$(this).toggleClass("lb15selected");
});

$("#letterbox16").on('click',function(){
	$("#letterbox16 .halfcircle1").toggleClass("lb16selected");
});

$("#letterbox17").on('mouseover',function(){
	$("#letterbox17 .line1").animate({
		left:'55px',
	}, 500);
});
$("#letterbox17").on('mouseout',function(){
	$("#letterbox17 .line1").animate({
		left:'0px',
	}, 500);
});
$("#letterbox18").on('click',function(){
	$("#letterbox18 .halfcircle1").toggleClass("lb18selected1");
	$("#letterbox18 .line1").toggleClass("lb18selected2");
});

$("#letterbox19").on('mouseout',function(){
	$("#letterbox19 .halfcircle1").animate({
		'border-top-right-radius': '55px',
		'border-bottom-right-radius': '55px',
		'border-bottom-left-radius': '55px',
		'border-top-left-radius': '55px',
		height: '110px',
		width: '55px'
	}, 200);
	$("#letterbox19 .halfcircle2").animate({
		'border-top-right-radius': '55px',
		'border-bottom-right-radius': '55px',
		'border-bottom-left-radius': '55px',
		'border-top-left-radius': '55px',
		height: '110px',
		width: '55px',
		top: '105px'
	}, 200);
});

$("#letterbox20").on('mouseover',function(){
	$("#letterbox20 .halfcircle1").animate({
		'border-top-right-radius': '100px',
		'border-bottom-right-radius': '100px',
		'border-bottom-left-radius': '0',
		'border-top-left-radius': '0',
		height: '200px',
		width: '100px'
	}, 200);
	$("#letterbox20 .halfcircle2").animate({
		'border-top-right-radius': '100px',
		'border-bottom-right-radius': '100px',
		'border-bottom-left-radius': '0',
		'border-top-left-radius': '0',
		height: '200px',
		width: '100px',
		top: '15px'
	}, 200);
});

$("#letterbox21").on('mouseover',function(){
	$("#letterbox21 .halfcircle1").animate({
		'border-top-right-radius': '60px',
		'border-bottom-right-radius': '60px',
		'border-bottom-left-radius': '0',
		'border-top-left-radius': '0',
		height: '120px',
		width: '60px'
	}, 200);
	$("#letterbox21 .halfcircle2").animate({
		'border-top-right-radius': '60px',
		'border-bottom-right-radius': '60px',
		'border-bottom-left-radius': '0',
		'border-top-left-radius': '0',
		height: '120px',
		width: '60px',
		top: '95px'
	}, 200);
});

$("#letterbox22").on('mouseover',function(){
	$("#letterbox22 .halfcircle1").animate({
		'border-top-right-radius': '50px',
		'border-bottom-right-radius': '50px',
		'border-bottom-left-radius': '0',
		'border-top-left-radius': '0',
		height: '100px',
		width: '50px'
	}, 200);
	$("#letterbox22 .halfcircle2").animate({
		'border-top-right-radius': '50px',
		'border-bottom-right-radius': '50px',
		'border-bottom-left-radius': '0',
		'border-top-left-radius': '0',
		height: '100px',
		width: '50px',
		top: '115px'
	}, 200);
});

$("#letterbox23").on('click',function(){
	$("#letterbox23 .circle1").toggleClass("lb23selected");
});

$("#letterbox24").on('click',function(){
	$("#letterbox24 .halfcircle1, #letterbox24 .halfcircle2").toggleClass("lb24selected");
});

$("#letterbox25").on('mouseover',function(){
	$(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
});

$("#letterbox27").on('click',function(){
	$("#letterbox27 .halfcircle1, #letterbox27 .halfcircle2").toggleClass("lb27selected");
});

$("#letterbox28").on('click',function(){
	$("#letterbox28 .halfcircle1").toggleClass("lb28selected1");
	$("#letterbox28 .halfcircle2").toggleClass("lb28selected2");
});

$("#letterbox29").on('click',function(){
	$("#letterbox29 .halfcircle1").toggleClass("lb29selected1");
	$("#letterbox29 .halfcircle2").toggleClass("lb29selected2");
});

$("#letterbox30").on('mouseover',function(){
	$("#letterbox30 .halfcircle1, #letterbox30 .halfcircle2").animate({
		top:'60px',
	}, 500);
});

$("#letterbox31").on('click',function(){
	$("#letterbox31 .halfcircle1, #letterbox31 .halfcircle2").animate({
		left:'1500px',
	}, 300);
});

$("#letterbox34").on('click',function(){
	$("#letterbox34 .halfcircle1, #letterbox34 .halfcircle2").toggleClass("lb34selected1");
	$("#letterbox34 .line1").toggleClass("lb34selected2");
});

$("#letterbox35").on('mouseover',function(){
	$("#letterbox35 .halfcircle1").animate({
		width: '65px',
	}, 200);
	$("#letterbox35 .halfcircle2").animate({
		width: '45px',
	}, 200);
});
$("#letterbox35").on('mouseout',function(){
	$("#letterbox35 .halfcircle1").animate({
		width: '45px',
	}, 200);
	$("#letterbox35 .halfcircle2").animate({
		width: '65px',
	}, 200);
});



});