$(document).ready(function() {

	$('#submit').on('click',function(){
	var newItem = $('#textfield').val();
	newItem = '<p class = "ShoppingItem">'+ newItem + '</p>'
		$(newItem).insertAfter('#ShopStart');
	$('#textfield').val("");	
	});	
	
	$('#ShoppingList').on('click','p',function() {
		console.log("Shopping Item Clicked");
		$(this).toggleClass('strikethrough');
		var self = this;
		setTimeout(function() {
			console.log("time works");
			$(self).remove();
			}, 1000);
	});
});