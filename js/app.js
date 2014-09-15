$(document).ready(function(){

	var textValue;

	// Allow entry with Enter key
	$("input").keydown(function (e) {
		if (e.keyCode == 13) { 
			$("#text_value").click();
			event.preventDefault();
		}
	});

	// Function to get Input
	$("#text_value").click( function() {
		textValue = +$("#text").val();
		if (isNaN(textValue)) {
			alert("Please only enter numeric digits. No letters. No decimals. Thanks!");
		}
		else if (textValue % 1 != 0) {
			alert("Please no numbers with decimals. Thanks!");
		}
		else {
			textValue += 1;
			$("ul").empty();
			fbAction(textValue);
		};
	});

	// FizzBuzz Function
	var fbAction = function (number) {
			
		for(var i = 1; i<number; i++){
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
	};
});
