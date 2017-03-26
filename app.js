$(document).ready(function(){
	$("#pass").keyup(function(){

		var a = $("#pass").val();
		var b = $("#name").val();
		
		if (a.length >= 8) {
			$("#msg").text("strong")
			         .addClass("success")
			         .removeClass("error");
		}
		else if (a.length == 0) {
	        $("#msg").text();	
		}
		else{
			$("#msg").text("weak")
			         .addClass("error")
			         .removeClass("success");
		}
		$("#btn2").click(function(){
	    	

	    	if (b =="admin" && a == "admin") {
	    	window.open("profile.html");
	    	}
	    });
	    
	    $("#btn1").click(function(){
	    	$("#name").val("");
	    	$("#pass").val("");
	  
	    });
	
	});
    


	$('#alphabet-counter').keyup(function(){
		var maxLength = parseInt($('#alphabet-counter').attr('maxlength'));
		var chars = $('#alphabet-counter').val().length;
		var output = 'Alphabet Remaining :' + (maxLength - chars);
		$('#alphabet-count').text(output);
	});

	$("#change").click(function(){
		if($("#change-bg").hasClass("background-white")){
			$("#change-bg").removeClass("background-white");
			$("#change-bg").addClass("background-purple");
		}
		else{
			$("#change-bg").removeClass("background-purple");
			$("#change-bg").addClass("background-white");
		}
	});

	$("#date").datepicker();
	$( "#tabs" ).tabs();

	$('.parallax-window').parallax();


});
