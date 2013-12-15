$(document).ready(function(){
	
	var count = 2;
	var newcount = 100;
	
	$("#pic1").click(function(){
		if(count % 2 == 1){$("#pic1").attr('src', 'LogosBarbie.jpg');}
		else{$("#pic1").attr('src', 'GameTest.JPG');}
	});
	
	/*$("body").keyup(function(){
			count++;
			alert(count);
	});*/
	
	$('body').bind('keypress', function(e){
		if(e.keyCode == 13){
			alert("Count!!!");
		}
		else{
			alert("Newcount");
		}
	});
		
});
