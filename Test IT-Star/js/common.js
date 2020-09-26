$(function() {


$('.sidebar-toggle').on('click', function(){
	$(this).toggleClass('active');
	$('.sidebar-inner').slideToggle();
});


$('.has-dropdown > a').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('active').next('.submenu').slideToggle();
});


$(window).on('resize', function(){
	if($(window).width() > 599) {
		$('.sidebar-toggle').removeClass('active');
		$('.sidebar-inner').removeClass('active').attr('style', '');
	}
});


$('.delete-btn').on('click', function(){
	$(this).parents('.product-item').remove();
});


$('.bonus-btn').on('click', function(){
	modalOpen();
});


$('.modal-close').on('click', function(){
	modalClose();
});


$('.modal-overlay').on('click', function(e){
	var modal = $('.modal');
	if(!modal.is(e.target) && modal.has(e.target).length === 0) {
		modalClose();
	}
});


function modalOpen() {
	$('.modal-overlay').fadeIn();
	$('.wrapper').addClass('blur');
	$('.modal').addClass('opened');
}

function modalClose() {
	$('.modal-overlay').fadeOut();
	$('.wrapper').removeClass('blur');
	$('.modal').removeClass('opened');
}


// if (typeof Storage != "undefined") {
// 	if (!localStorage.getItem("done")) {
		setTimeout(function() {
			modalOpen();
		}, 5000);
// 	}
// 	localStorage.setItem("done", true);
// }


});