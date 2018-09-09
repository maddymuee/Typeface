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
$("#letterbox37").on('click',function(){
	$("div").toggleClass('lb8selected1');
});
$("#letterbox38").on('click',function(){
	$(".line1").animate({
		top:'-1000px',
	}, 500);
});
$("#letterbox38").on('click',function(){
	$(".line1").animate({
		top:'0px',
	}, 500);
});
$("#letterbox39").on('click',function(){
	$(".halfcircle1").toggleClass('lb8selected1');
	$(".halfcircle2").toggleClass('lb8selected2');
});

$("#letterbox40").on('click',function(){
	$(".halfcircle1").toggleClass('lb40selected1');
	$(".halfcircle2").toggleClass('lb40selected2');
	$("body").toggleClass('lb40selected3');
});

$("#letterbox41").on('mouseover',function(){
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
$("#letterbox41").on('mouseout',function(){
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
$("#letterbox42").on('click',function(){
	$("div").toggleClass("lb42selected");
});

$("#letterbox43").on('click',function(){
    alert("haha made you click");
});

$("#letterbox44 .halfcircle1").on('click',function(){
    $(this).slideUp();
});
$("#letterbox44 .halfcircle2").on('click',function(){
    $(this).slideUp();
});

$("#letterbox46").on('click',function(){
	$("#letterbox38").toggleClass("lb42selected");
});

$("#letterbox47").on('click',function(){
	$("#content").toggleClass("lb47selected");
});
$("#letterbox48").on('click',function(){
	$("#content").toggleClass("lb48selected");
});

$("#letterbox49").on('click',function(){
	$(".halfcircle1, .halfcircle2").animate({
		width:"300px",
	}, 200);
});
$("#letterbox49").on('click',function(){
	$(".halfcircle1, .halfcircle2").toggleClass("lb49selected");
});

$('#letterbox50').click('click touchstart', function() {
	$(this).animate({top: '1420px'}, 1000);
	$(this).animate({left: '340px'}, 1000);
});

/*
$("#letterbox52").on('click',function(){
	$("letterbox52 .halfcircle1").toggleClass("lb52selected1");
});
*/

$("#letterbox51").click(function() {
  $("#letterbox512").fadeIn(.5);
  $("#letterbox512").animate({top: '1750px'}, 1000);
});

/* FIX THIS */
var letterbox52=true;
	$("#letterbox52").click(function(){
		if (letterbox52=true) {
			$("body").css("-webkit-filter", "hue-rotate(90deg)");
            $("body").css("filter", "hue-rotate(90deg)");
    		letterbox52=false;
        }
	    else {
			$("body").css( "-webkit-filter", "hue-rotate(90deg)");
			$("body").css( "filter", "hue-rotate(90deg)");
	        letterbox52=true;
	        }    
});

$(function(){
	$( "#letterbox53 .halfcircle1, #letterbox53 .halfcircle2, #letterbox53 .line1" ).draggable();
});


$("#letterbox54").on('click',function(){
	$(".line1").toggleClass('lb54selected');
});

$("#letterbox55").on('click',function(){
	$(".line1").toggleClass('lb55selected');
});

$("#letterbox56").on('click',function(){
	$("div").toggleClass('lb56selected');
});

$("#letterbox57").on('click',function(){
	$(".line1").toggleClass('lb57selected');
});

$("#letterbox58").on('mouseover',function(){
	$(".halfcircle1").toggleClass("lb58selected1");
	$(".halfcircle2").toggleClass("lb58selected2");
});

$("#letterbox59").on('click',function(){
	$("#letterbox59 .halfcircle1").toggleClass("lb59selected1");
	$("#letterbox59 .halfcircle2").toggleClass("lb59selected2");
});

$("#letterbox60").on('click',function(){
	$("body").toggleClass("lb60selected");
});

$("#letterbox61").on('click',function(){
	$(".halfcircle1, .halfcircle2").animate({
		'border-radius': '0',
		height: '110px',
		width: '110px',
	}, 200);
});


$("#letterbox62").on('click',function(){
	$(".halfcircle1").toggleClass("lb62selected");
});

$("#letterbox63").on('mouseover',function(){
	$(".halfcircle1, .halfcircle2").animate({
		opacity:"0",
	}, 200);
});

$("#letterbox63").on('mouseout',function(){
	$(".halfcircle1, .halfcircle2").animate({
		opacity:"1",
	}, 200);
});

$("#letterbox64").on('click',function(){
	$(".halfcircle1, .halfcircle2").animate({
		opacity:"0",
	}, 200);
});

$("#letterbox65").on('click',function(){
	$(".line1").toggleClass("lb65selected");
});

$("#letterbox66").on('click',function(){
	$(".halfcircle1").toggleClass("lb66selected1");
	$(".halfcircle2").toggleClass("lb66selected2");
});

$("#letterbox67").on('click',function(){
	$(".halfcircle1, .halfcircle2").toggleClass("lb24selected");
});

$('#letterbox68').click('click touchstart', function() {
	$("#letterbox68, #letterbox66, #letterbox64, #letterbox62").animate({top: '1420px'}, 1000);
	$("#letterbox67, #letterbox65, #letterbox63, #letterbox61").animate({left: '340px'}, 1000);
});

$("#letterbox69").on('click',function(){
	$(".line1").toggleClass("lb69selected");
});

$("#letterbox70").on('click',function(){
	$(".line1").toggleClass("lb70selected");
});

$("#letterbox71").on('click',function(){
	$(".halfcircle1").animate({
		'border-top-right-radius': '110px',
		'border-bottom-right-radius': '110px',
		'border-bottom-left-radius': '110px',
		'border-top-left-radius': '110px',
		height: '220px',
		width: '220px',
		left:'-55px',
	}, 200);
	$(".line1, .halfcircle2").toggleClass("lb57selected");
});

$("#letterbox72").on('click',function(){
	$("#letterbox72, #letterbox71, #letterbox70, #letterbox69, #letterbox68, #letterbox67, #letterbox66, #letterbox65").toggleClass("lb72selected");
});

$('#letterbox73').on('click', function() {
	$("#letterbox8").animate({top: '300px'}, 1000);
	$("#letterbox16").animate({top: '580px'}, 1000);
	$("#letterbox24").animate({top: '860px'}, 1000);
	$("#letterbox32").animate({top: '1140px'}, 1000);
	$("#letterbox40").animate({top: '1420px'}, 1000);
	$("#letterbox48").animate({top: '1700px'}, 1000);
	$("#letterbox56").animate({top: '1980px'}, 1000);
	$("#letterbox64").animate({top: '2260px'}, 1000);
	$("#letterbox72").animate({top: '2540px'}, 1000);
});

$("#letterbox74").click(function() {
    window.location.reload();
});

$("#letterbox75").click(function() {
    $("div").toggleClass("lb72selected");
});

});