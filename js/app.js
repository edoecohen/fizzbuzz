$(document).ready(function(){

	$("ul").ready(function () {
		
		for(var i = 1; i<101; i++){
			if( i % 3 == 0 && i % 5 == 0) {
				$("ul").append("<li class='fizzbuzz special'>fizz buzz <span class='why'>(" + i + ")</span></li>");	
			}
			else if ( i % 3 == 0) {
				$("ul").append("<li class='fizz special'>fizz <span class='why'>(" + i + ")</span></li>");					
			}
			else if ( i % 5 == 0) {
				$("ul").append("<li class='buzz special'>buzz <span class='why'>(" + i + ")</span></li>");				
			}
			else{
				$("ul").append("<li>" + i + "</li>");	
			};			
		};

		$(".special").on("mouseover", function(){
			$(this).find(".why").show();
		});
		$(".special").on("mouseleave", function(){
			$(this).find(".why").hide();
		});
	});
});
