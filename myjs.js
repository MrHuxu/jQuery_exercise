//导航栏
$(document).ready(function(){$('#mark').css({left:'258px'})})
$(document).ready(function(){
	$('#navi1>div').eq(0).mouseover(function(){
		$('#mark').animate({left:'258px'},'fast')
		$('#link1a').slideDown('slow')
	}).mouseout(function(){
	$('#link1a').slideUp('slow')
	}).end().eq(1).mouseover(function(){
		$('#mark').animate({left:'458px'},'fast')
		$('#link1b').slideDown('slow')
	}).mouseout(function(){
		$('#mark').animate({left:'258px'}, 'slow')
		$('#link1b').slideUp('slow')
	}).end().eq(2).mouseover(function(){
		$('#mark').animate({left:'658px'}, 'fast')
		$('#link1c').slideDown('slow')
	}).mouseout(function(){
		$('#mark').animate({left:'258px'},'slow')
		$('#link1c').slideUp('slow')
	}).end().eq(3).mouseover(function(){
		$('#mark').animate({left:'858px'}, 'fast')
		$('#link1d').slideDown('slow')
	}).mouseout(function(){
		$('#mark').animate({left:'258px'},'slow')
		$('#link1d').slideUp('slow')
	}).end()
})

//渐隐式的图片轮播
$(document).ready(function(){
	$("#pics1").children("img").each(function(){
		$(this).hide();
	})
})
var turn1 = 0;
function showpic(){
	$('#btns1>div').css({backgroundColor:'#ffffff'})
	$('#pics1>img').fadeOut()
	$('#pics1>img').eq(turn1 % 4).fadeIn()
	$('#btns1>div').eq(turn1 % 4).animate({backgroundColor:'yellow'},'fast')
	turn1 += 1
}
setTimeout('showpic()', 0)
setInterval('showpic()', 2000)
$(document).ready(function(){ 
	$("#btns1").children("div").each(function(){ 
		$(this).mouseover(function(){
			$('#btns1>div').css({backgroundColor:'#ffffff'})
			$(this).animate({backgroundColor:'yellow'},"fast");
			$('#pics1>img').fadeOut(100)
			if($(this).text() == 1){
				turn1 = 1;
				$('#img1a').fadeIn();
			}
			else if($(this).text() == 2){
				turn1 = 2;
				$('#img1b').fadeIn()
			}
			else if($(this).text() == 3){
				turn1 = 3;
				$('#img1c').fadeIn()
			}
			else if($(this).text() == 4){
				turn1 = 0;
				$('#img1d').fadeIn()
			}
		}).mouseout(function(){
			$(this).animate({backgroundColor:'#ffffff'},"fast")
		});
	})
})

//左右滑动式的图片轮播
$(document).ready(function(){$('#pics2').css({left:'200px'})})
var turn2 = 0;
function slidepic(){
	switch(turn2 % 4){
		case 0:{
			$('#pics2').animate({left:'-500px'},'slow');
			break;
		}case 1:{
			$('#pics2').animate({left:'-1200px'},'slow');
			break;
		}case 2:{
			$('#pics2').animate({left:'-1900px'},'slow');
			break;
		}case 3:{
			$('#pics2').animate({left:'200px'},'slow');
			break;
		}default:
			break;
	}
	turn2 += 1
}
setInterval('slidepic()',2000)
$(document).ready(function(){
	$('#btn2a').mouseover(function(){
		$(this).animate({backgroundColor:'yellow'})
	}).mouseout(function(){
		$(this).animate({backgroundColor:'#923'})
	}).click(function(){
		switch($('#pics2').css('left')){
			case '200px':{
				$('#pics2').animate({left:'-1900px'});
				turn2 = 3;
				break;
			}case '-500px':{
				$('#pics2').animate({left:'200px'});
				turn2 = 0;
				break;
			}case '-1200px':{
				$('#pics2').animate({left:'-500px'});
				turn2 = 1;
				break;
			}case '-1900px':{
				$('#pics2').animate({left:'-1200px'});
				turn2 = 2;
				break;
			}
		}
	})
	$('#btn2b').mouseover(function(){
		$(this).animate({backgroundColor:'yellow'})
	}).mouseout(function(){
		$(this).animate({backgroundColor:'#923'})
	}).click(function(){
		switch($('#pics2').css('left')){
			case '200px':{
				$('#pics2').animate({left:'-500px'});
				turn2 = 1;
				break;
			}case '-500px':{
				$('#pics2').animate({left:'-1200px'});
				turn2 = 2;
				break;
			}case '-1200px':{
				$('#pics2').animate({left:'-1900px'});
				turn2 = 3;
				break;
			}case '-1900px':{
				$('#pics2').animate({left:'200px'});
				turn2 = 0;
				break;
			}
		}
	})
})
