$(document).ready(function () {
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
});