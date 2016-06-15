$(document).ready(function(){
	
	//navbar click events
    $("nav a[href^='#']").on('click', function(e){
		//prevent immediate jump followed by animation
		e.preventDefault();
		
		//change active link
		$(".nav").find('.active').removeClass('active');
		$(this).parent().addClass('active');

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
	$input = $('.contact-form input, .contact-form textarea')
	$input.on('input', function(){
		var empty = false;
		$input.each(function() {
			if(this.value == ""){
				empty = true;
			}
		});
		if (!empty){
			$('.contact-btn').removeAttr('disabled');
		} else {
			$('.contact-btn').attr('disabled');
		}
	});
	
	$('.contact-btn').on('click', function(){
		var empty = false;
		$input.each(function() {
			if(this.value == ""){
				empty = true;
			}
		});
		
		if (!empty){
			var name = $('.client-name').val(),
				email = $('.client-email').val(),
				message =  $('.client-message').val();
			$.post("php/mail.php", {
				'from': name,
				'email': email,
				'message': message
			})
			.done(function(a, b, xhr){
				if (xhr.status == 200){
					alert("Success")
				}
			})
			.fail(function(xhr, status, error){
				alert("Error: " + error);
			});
		}
	});
});