// THIS FILE IS RESPONSIBLE FOR THE FRONT END DYNAMIC QUALITY OF A REVIEW POST

// Display the full text when 'more' is selected.
$(document).ready(function(){
	$('.moreText').click(function(){
		$('reviewText').css('max-height', 'auto');
	});
});