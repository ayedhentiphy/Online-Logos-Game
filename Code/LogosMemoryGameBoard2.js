$(document).ready(function(){
	
	var picAAcount = picBBcount = picCCcount = pic4count = pic5count = pic6count = pic7count = pic8count = pic9count = pic10count = pic11count = pic12count = 3;
	var pic13count = pic14count = pic15count = pic16count = pic17count = pic18count = pic19count = pic20count = pic21count = pic22count = pic23count = 3;
	var pic24count = pic25count = pic26count = pic27count = pic28count = pic29count = pic30count = pic31count = pic32count = pic33count = pic34count = 3;
	var pic35count = 3;
	
	
	$("#picAA").click(function(){
		if(picAAcount % 2 == 1){
			picAAcount++;
			$("[id^='picAA']").attr('src', '../Pictures/Logos/IMDB.JPG'); 
		}
		else{
			picAAcount++;
			$("[id^='picAA']").attr('src', '../Pictures/Blocks/Block1.JPG'); 
		}
	});
	
	$("#picBB").click(function(){
		if(picBBcount % 2 == 1){
			picBBcount++;
			$("[id^='picBB']").attr('src', '../Pictures/Logos/Telefonica.JPG'); 
		}
		else{
			picBBcount++;
			$("[id^='picBB']").attr('src', '../Pictures/Blocks/Block2.JPG'); 
		}
	});
	
	$("#picCC").click(function(){
		if(picCCcount % 2 == 1){
			picCCcount++;
			$("[id^='picCC']").attr('src', '../Pictures/Logos/Swatch.JPG'); 
		}
		else{
			picCCcount++;
			$("[id^='picCC']").attr('src', '../Pictures/Blocks/Block3.JPG'); 
		}
	});
	
	$("#pic4").click(function(){
		if(pic4count % 2 == 1){
			pic4count++;
			$("[id^='pic4']").attr('src', '../Pictures/Logos/Guinness.JPG'); 
		}
		else{
			pic4count++;
			$("[id^='pic4']").attr('src', '../Pictures/Blocks/Block4.JPG'); 
		}
	});
	
	$("#pic5").click(function(){
		if(pic5count % 2 == 1){
			pic5count++;
			$("[id^='pic5']").attr('src', '../Pictures/Logos/Pirelli.JPG'); 
		}
		else{
			pic5count++;
			$("[id^='pic5']").attr('src', '../Pictures/Blocks/Block5.JPG'); 
		}
	});
	
	$("#pic6").click(function(){
		if(pic6count % 2 == 1){
			pic6count++;
			$("[id^='pic6']").attr('src', '../Pictures/Logos/NationalGeographic.JPG'); 
		}
		else{
			pic6count++;
			$("[id^='pic6']").attr('src', '../Pictures/Blocks/Block6.JPG'); 
		}
	});
	
	$("#pic7").click(function(){
		if(pic7count % 2 == 1){
			pic7count++;
			$("[id^='pic7']").attr('src', '../Pictures/Logos/Firefox.JPG'); 
		}
		else{
			pic7count++;
			$("[id^='pic7']").attr('src', '../Pictures/Blocks/Block7.JPG'); 
		}
	});
	
	$("#pic8").click(function(){
		if(pic8count % 2 == 1){
			pic8count++;
			$("[id^='pic8']").attr('src', '../Pictures/Logos/Converse.JPG'); 
		}
		else{
			pic8count++;
			$("[id^='pic8']").attr('src', '../Pictures/Blocks/Block8.JPG'); 
		}
	});
	
	$("#pic9").click(function(){
		if(pic9count % 2 == 1){
			pic9count++;
			$("[id^='pic9']").attr('src', '../Pictures/Logos/SesameStreet.JPG'); 
		}
		else{
			pic9count++;
			$("[id^='pic9']").attr('src', '../Pictures/Blocks/Block9.JPG'); 
		}
	});
	
	$("#pic10").click(function(){
		if(pic10count % 2 == 1){
			pic10count++;
			$("[id^='pic10']").attr('src', '../Pictures/Logos/Dove.JPG'); 
		}
		else{
			pic10count++;
			$("[id^='pic10']").attr('src', '../Pictures/Blocks/Block10.JPG'); 
		}
	});
	
	$("#pic11").click(function(){
		if(pic11count % 2 == 1){
			pic11count++;
			$("[id^='pic11']").attr('src', '../Pictures/Logos/Garmin.JPG'); 
		}
		else{
			pic11count++;
			$("[id^='pic11']").attr('src', '../Pictures/Blocks/Block11.JPG'); 
		}
	});
	
	$("#pic12").click(function(){
		if(pic12count % 2 == 1){
			pic12count++;
			$("[id^='pic12']").attr('src', '../Pictures/Logos/Levis.JPG'); 
		}
		else{
			pic12count++;
			$("[id^='pic12']").attr('src', '../Pictures/Blocks/Block12.JPG'); 
		}
	});
	
	$("#pic13").click(function(){
		if(pic13count % 2 == 1){
			pic13count++;
			$("[id^='pic13']").attr('src', '../Pictures/Logos/AlfaRomero.JPG'); 
		}
		else{
			pic13count++;
			$("[id^='pic13']").attr('src', '../Pictures/Blocks/Block13.JPG'); 
		}
	});
	
	$("#pic14").click(function(){
		if(pic14count % 2 == 1){
			pic14count++;
			$("[id^='pic14']").attr('src', '../Pictures/Logos/SonyEricsson.JPG'); 
		}
		else{
			pic14count++;
			$("[id^='pic14']").attr('src', '../Pictures/Blocks/Block14.JPG'); 
		}
	});
	
	$("#pic15").click(function(){
		if(pic15count % 2 == 1){
			pic15count++;
			$("[id^='pic15']").attr('src', '../Pictures/Logos/Pepsi.JPG'); 
		}
		else{
			pic15count++;
			$("[id^='pic15']").attr('src', '../Pictures/Blocks/Block15.JPG'); 
		}
	});
	
	$("#pic16").click(function(){
		if(pic16count % 2 == 1){
			pic16count++;
			$("[id^='pic16']").attr('src', '../Pictures/Logos/Budweiser.JPG'); 
		}
		else{
			pic16count++;
			$("[id^='pic16']").attr('src', '../Pictures/Blocks/Block16.JPG'); 
		}
	});
	
	$("#pic17").click(function(){
		if(pic17count % 2 == 1){
			pic17count++;
			$("[id^='pic17']").attr('src', '../Pictures/Logos/CartoonNetwork.JPG'); 
		}
		else{
			pic17count++;
			$("[id^='pic17']").attr('src', '../Pictures/Blocks/Block17.JPG'); 
		}
	});
	
	$("#pic18").click(function(){
		if(pic18count % 2 == 1){
			pic18count++;
			$("[id^='pic18']").attr('src', '../Pictures/Logos/McDonalds.JPG'); 
		}
		else{
			pic18count++;
			$("[id^='pic18']").attr('src', '../Pictures/Blocks/Block18.JPG'); 
		}
	});
	
	$("#pic19").click(function(){
		if(pic19count % 2 == 1){
			pic19count++;
			$("[id^='pic19']").attr('src', '../Pictures/Logos/Volvo.JPG'); 
		}
		else{
			pic19count++;
			$("[id^='pic19']").attr('src', '../Pictures/Blocks/Block19.JPG'); 
		}
	});
	
	$("#pic20").click(function(){
		if(pic20count % 2 == 1){
			pic20count++;
			$("[id^='pic20']").attr('src', '../Pictures/Logos/Skoda.JPG'); 
		}
		else{
			pic20count++;
			$("[id^='pic20']").attr('src', '../Pictures/Blocks/Block20.JPG'); 
		}
	});
		
});
