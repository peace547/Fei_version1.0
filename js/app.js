$('.block').bind('swiperight',function(event) {
		$(this).addClass("action");
		$(".trashRow").addClass("active");
});
$('.cards_mater').bind('tap',function(event) {
		$(this).parents(".block").removeClass("action");
});
	