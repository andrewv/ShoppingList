$(document).ready(function() {

	$('#submit').on('click',function(){
	var newItem = $('#textfield').val();
	newItem = '<p class = "ShoppingItem">'+ newItem + '</p>'
		$(newItem).insertAfter('#ShopStart');
	});	
	
	$('#ShoppingList').on('click','p',function() {
		console.log("Shopping Item Clicked");
		$(this).toggleClass('strikethrough');
		setTimeout(function() {
			console.log("time works");
			$(this).remove();
			}, 1000);
	});
});