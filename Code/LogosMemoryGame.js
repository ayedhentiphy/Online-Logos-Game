$(document).ready(function(){
	
	var picAAcount = picBBcount = picCCcount = pic4count = pic5count = pic6count = pic7count = pic8count = pic9count = pic10count = pic11count = pic12count = 3;
	var pic13count = pic14count = pic15count = pic16count = pic17count = pic18count = pic19count = pic20count = pic21count = pic22count = pic23count = 3;
	var pic24count = pic25count = pic26count = pic27count = pic28count = pic29count = pic30count = pic31count = pic32count = pic33count = pic34count = 3;
	var pic35count = 3;
	
	
	$('body').bind('keypress', function(enter){
		if(enter.keyCode == 13){ //The "Enter" keyCode is '13'
			alert("Count!!!");
		}
		else{
			alert("Newcount");
		}
	});
	
	
	$("#picAA").click(function(){
		if(picAAcount % 2 == 1){
			picAAcount++;
			$("[id^='picAA']").attr('src', '../Pictures/Logos/Amazon.JPG'); 
		}
		else{
			picAAcount++;
			$("[id^='picAA']").attr('src', '../Pictures/Blocks/Block1.JPG'); 
		}
	});
	
	$("#picBB").click(function(){
		if(picBBcount % 2 == 1){
			picBBcount++;
			$("[id^='picBB']").attr('src', '../Pictures/Logos/Barbie.JPG'); 
		}
		else{
			picBBcount++;
			$("[id^='picBB']").attr('src', '../Pictures/Blocks/Block2.JPG'); 
		}
	});
	
	$("#picCC").click(function(){
		if(picCCcount % 2 == 1){
			picCCcount++;
			$("[id^='picCC']").attr('src', '../Pictures/Logos/Blockbuster.JPG'); 
		}
		else{
			picCCcount++;
			$("[id^='picCC']").attr('src', '../Pictures/Blocks/Block3.JPG'); 
		}
	});
	
	$("#pic4").click(function(){
		if(pic4count % 2 == 1){
			pic4count++;
			$("[id^='pic4']").attr('src', '../Pictures/Logos/BMW.JPG'); 
		}
		else{
			pic4count++;
			$("[id^='pic4']").attr('src', '../Pictures/Blocks/Block4.JPG'); 
		}
	});
	
	$("#pic5").click(function(){
		if(pic5count % 2 == 1){
			pic5count++;
			$("[id^='pic5']").attr('src', '../Pictures/Logos/BurgerKing.JPG'); 
		}
		else{
			pic5count++;
			$("[id^='pic5']").attr('src', '../Pictures/Blocks/Block5.JPG'); 
		}
	});
	
	$("#pic6").click(function(){
		if(pic6count % 2 == 1){
			pic6count++;
			$("[id^='pic6']").attr('src', '../Pictures/Logos/CalvinKlein.JPG'); 
		}
		else{
			pic6count++;
			$("[id^='pic6']").attr('src', '../Pictures/Blocks/Block6.JPG'); 
		}
	});
	
	$("#pic7").click(function(){
		if(pic7count % 2 == 1){
			pic7count++;
			$("[id^='pic7']").attr('src', '../Pictures/Logos/Canon.JPG'); 
		}
		else{
			pic7count++;
			$("[id^='pic7']").attr('src', '../Pictures/Blocks/Block7.JPG'); 
		}
	});
	
	$("#pic8").click(function(){
		if(pic8count % 2 == 1){
			pic8count++;
			$("[id^='pic8']").attr('src', '../Pictures/Logos/Citreon.JPG'); 
		}
		else{
			pic8count++;
			$("[id^='pic8']").attr('src', '../Pictures/Blocks/Block8.JPG'); 
		}
	});
	
	$("#pic9").click(function(){
		if(pic9count % 2 == 1){
			pic9count++;
			$("[id^='pic9']").attr('src', '../Pictures/Logos/Ebay.JPG'); 
		}
		else{
			pic9count++;
			$("[id^='pic9']").attr('src', '../Pictures/Blocks/Block9.JPG'); 
		}
	});
	
	$("#pic10").click(function(){
		if(pic10count % 2 == 1){
			pic10count++;
			$("[id^='pic10']").attr('src', '../Pictures/Logos/Flikr.JPG'); 
		}
		else{
			pic10count++;
			$("[id^='pic10']").attr('src', '../Pictures/Blocks/Block10.JPG'); 
		}
	});
	
	$("#pic11").click(function(){
		if(pic11count % 2 == 1){
			pic11count++;
			$("[id^='pic11']").attr('src', '../Pictures/Logos/HP.JPG'); 
		}
		else{
			pic11count++;
			$("[id^='pic11']").attr('src', '../Pictures/Blocks/Block11.JPG'); 
		}
	});
	
	$("#pic12").click(function(){
		if(pic12count % 2 == 1){
			pic12count++;
			$("[id^='pic12']").attr('src', '../Pictures/Logos/IBM.JPG'); 
		}
		else{
			pic12count++;
			$("[id^='pic12']").attr('src', '../Pictures/Blocks/Block12.JPG'); 
		}
	});
	
	$("#pic13").click(function(){
		if(pic13count % 2 == 1){
			pic13count++;
			$("[id^='pic13']").attr('src', '../Pictures/Logos/Intel.JPG'); 
		}
		else{
			pic13count++;
			$("[id^='pic13']").attr('src', '../Pictures/Blocks/Block13.JPG'); 
		}
	});
	
	$("#pic14").click(function(){
		if(pic14count % 2 == 1){
			pic14count++;
			$("[id^='pic14']").attr('src', '../Pictures/Logos/Kellogs.JPG'); 
		}
		else{
			pic14count++;
			$("[id^='pic14']").attr('src', '../Pictures/Blocks/Block14.JPG'); 
		}
	});
	
	$("#pic15").click(function(){
		if(pic15count % 2 == 1){
			pic15count++;
			$("[id^='pic15']").attr('src', '../Pictures/Logos/Levis.JPG'); 
		}
		else{
			pic15count++;
			$("[id^='pic15']").attr('src', '../Pictures/Blocks/Block15.JPG'); 
		}
	});
	
	$("#pic16").click(function(){
		if(pic16count % 2 == 1){
			pic16count++;
			$("[id^='pic16']").attr('src', '../Pictures/Logos/Loreal.JPG'); 
		}
		else{
			pic16count++;
			$("[id^='pic16']").attr('src', '../Pictures/Blocks/Block16.JPG'); 
		}
	});
	
	$("#pic17").click(function(){
		if(pic17count % 2 == 1){
			pic17count++;
			$("[id^='pic17']").attr('src', '../Pictures/Logos/LouisVuitton.JPG'); 
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
			$("[id^='pic19']").attr('src', '../Pictures/Logos/Michelin.JPG'); 
		}
		else{
			pic19count++;
			$("[id^='pic19']").attr('src', '../Pictures/Blocks/Block19.JPG'); 
		}
	});
	
	$("#pic20").click(function(){
		if(pic20count % 2 == 1){
			pic20count++;
			$("[id^='pic20']").attr('src', '../Pictures/Logos/Microsoft.JPG'); 
		}
		else{
			pic20count++;
			$("[id^='pic20']").attr('src', '../Pictures/Blocks/Block20.JPG'); 
		}
	});
	
	$("#pic21").click(function(){
		if(pic21count % 2 == 1){
			pic21count++;
			$("[id^='pic21']").attr('src', '../Pictures/Logos/MTV.JPG'); 
		}
		else{
			pic21count++;
			$("[id^='pic21']").attr('src', '../Pictures/Blocks/Block21.JPG'); 
		}
	});
	
	$("#pic22").click(function(){
		if(pic22count % 2 == 1){
			pic22count++;
			$("[id^='pic22']").attr('src', '../Pictures/Logos/Nescafe.JPG'); 
		}
		else{
			pic22count++;
			$("[id^='pic22']").attr('src', '../Pictures/Blocks/Block22.JPG'); 
		}
	});
	
	$("#pic23").click(function(){
		if(pic23count % 2 == 1){
			pic23count++;
			$("[id^='pic23']").attr('src', '../Pictures/Logos/Nike.JPG'); 
		}
		else{
			pic23count++;
			$("[id^='pic23']").attr('src', '../Pictures/Blocks/Block23.JPG'); 
		}
	});
	
	$("#pic24").click(function(){
		if(pic24count % 2 == 1){
			pic24count++;
			$("[id^='pic24']").attr('src', '../Pictures/Logos/Nissan.JPG'); 
		}
		else{
			pic24count++;
			$("[id^='pic24']").attr('src', '../Pictures/Blocks/Block24.JPG'); 
		}
	});
	
	$("#pic25").click(function(){
		if(pic25count % 2 == 1){
			pic25count++;
			$("[id^='pic25']").attr('src', '../Pictures/Logos/PizzaHut.JPG'); 
		}
		else{
			pic25count++;
			$("[id^='pic25']").attr('src', '../Pictures/Blocks/Block25.JPG'); 
		}
	});
	
	$("#pic26").click(function(){
		if(pic26count % 2 == 1){
			pic26count++;
			$("[id^='pic26']").attr('src', '../Pictures/Logos/Pringles.JPG'); 
		}
		else{
			pic26count++;
			$("[id^='pic26']").attr('src', '../Pictures/Blocks/Block26.JPG'); 
		}
	});
	
	$("#pic27").click(function(){
		if(pic27count % 2 == 1){
			pic27count++;
			$("[id^='pic27']").attr('src', '../Pictures/Logos/Quiksilver.JPG'); 
		}
		else{
			pic27count++;
			$("[id^='pic27']").attr('src', '../Pictures/Blocks/Block27.JPG'); 
		}
	});
	
	$("#pic28").click(function(){
		if(pic28count % 2 == 1){
			pic28count++;
			$("[id^='pic28']").attr('src', '../Pictures/Logos/RedBull.JPG'); 
		}
		else{
			pic28count++;
			$("[id^='pic28']").attr('src', '../Pictures/Blocks/Block28.JPG'); 
		}
	});
	
	$("#pic29").click(function(){
		if(pic29count % 2 == 1){
			pic29count++;
			$("[id^='pic29']").attr('src', '../Pictures/Logos/Reebok.JPG'); 
		}
		else{
			pic29count++;
			$("[id^='pic29']").attr('src', '../Pictures/Blocks/Block29.JPG'); 
		}
	});
	
	$("#pic30").click(function(){
		if(pic30count % 2 == 1){
			pic30count++;
			$("[id^='pic30']").attr('src', '../Pictures/Logos/Samsung.JPG'); 
		}
		else{
			pic30count++;
			$("[id^='pic30']").attr('src', '../Pictures/Blocks/Block30.JPG'); 
		}
	});
	
	$("#pic31").click(function(){
		if(pic31count % 2 == 1){
			pic31count++;
			$("[id^='pic31']").attr('src', '../Pictures/Logos/Skype.JPG'); 
		}
		else{
			pic31count++;
			$("[id^='pic31']").attr('src', '../Pictures/Blocks/Block31.JPG'); 
		}
	});
	
	$("#pic32").click(function(){
		if(pic32count % 2 == 1){
			pic32count++;
			$("[id^='pic32']").attr('src', '../Pictures/Logos/Starbucks.JPG'); 
		}
		else{
			pic32count++;
			$("[id^='pic32']").attr('src', '../Pictures/Blocks/Block32.JPG'); 
		}
	});
	
	$("#pic33").click(function(){
		if(pic33count % 2 == 1){
			pic33count++;
			$("[id^='pic33']").attr('src', '../Pictures/Logos/Twitter.JPG'); 
		}
		else{
			pic33count++;
			$("[id^='pic33']").attr('src', '../Pictures/Blocks/Block33.JPG'); 
		}
	});
	
	$("#pic34").click(function(){
		if(pic34count % 2 == 1){
			pic34count++;
			$("[id^='pic34']").attr('src', '../Pictures/Logos/Volkswagen.JPG'); 
		}
		else{
			pic34count++;
			$("[id^='pic34']").attr('src', '../Pictures/Blocks/Block34.JPG'); 
		}
	});
	
	$("#pic35").click(function(){
		if(pic35count % 2 == 1){
			pic35count++;
			$("[id^='pic35']").attr('src', '../Pictures/Logos/ABC.JPG'); 
		}
		else{
			pic35count++;
			$("[id^='pic35']").attr('src', '../Pictures/Blocks/Block35.JPG'); 
		}
	});
	
	
});