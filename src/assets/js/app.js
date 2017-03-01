$(document).foundation();

	$(".toggle_menu").click(function(){
	var menu = $(".top-menu");
	if (menu.hasClass('open')){
	menu.css('display', "none");
	menu.removeClass('open');
	} else {
	menu.css('display', "block");
	menu.addClass('open');
	}
	});
