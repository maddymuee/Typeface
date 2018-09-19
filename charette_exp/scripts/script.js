console.log("hello");
$(document).ready(function() {



var degrees = 0;
	$("div").click(function(){
		degrees += 30;
		$("body").css("-webkit-filter", "hue-rotate("+degrees+"deg)");
        $("body").css("filter", "hue-rotate("+degrees+"deg)");
});


	$("#letterbox1").on('click',function(){
	$("#letterbox1 .halfcircle1").toggleClass("lb1selected1");
	$("#letterbox1 .halfcircle2").toggleClass("lb1selected2");
});

	$("#letterbox2").on('click',function(){
	$("#letterbox2 .halfcircle1").toggleClass("lb2selected1");
	$("#letterbox2 .halfcircle2").toggleClass("lb2selected2");
});

	$("#letterbox3").on('click',function(){
	$(".halfcircle1").toggleClass("lb3selected1");
	$(".halfcircle2").toggleClass("lb3selected2");
});

	$("#letterbox4").on('click',function(){
	$(".line1, .halfcircle1, .halfcircle2").toggleClass("lb4selected");
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