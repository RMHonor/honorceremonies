$(document).ready(function(){
	
	//navbar click events
    $("nav a[href^='#']").on("click", function(e){
		//prevent immediate jump followed by animation
		e.preventDefault();
		
		//change active link
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");

		//get target
		var hash = this.hash;

		//animate to anchor
		$('html, body').stop().animate({
			'scrollTop': $(hash).offset().top
		}, 600, 'swing', function () {
			window.location.hash = hash;
		});
	});
	
	$('.navbar-collapse a').click(function(){
		$(".navbar-collapse").collapse('hide');
	});
	
	//contact form events
	$input = $(".contact-form input, .contact-form textarea")
	$input.on("input", function(){
		var empty = false;
		$input.each(function() {
			if(this.value == ""){
				empty = true;
				return;
			}
		});
		if (!empty){
			$(".contact-btn").removeAttr("disabled");
		} else {
			$(".contact-btn").attr("disabled");
		}
	});
});