// THIS FILE IS RESPONSIBLE FOR THE FRONT END DYNAMIC QUALITY OF A REVIEW POST

// GOAL: Animate growth of text 
//		 Use auto to scale height
$(document).ready(function(){
	$reviewText = $('.reviewText');

	$reviewText.click(function(){
		if($reviewText.css('max-height') === '200px'){
			$reviewText.removeClass('gradientOverlay');
			//$reviewText.css('max-height', 'auto');
			$reviewText.css('max-height', '500px');
			//$reviewText.animate({height:'500px'}, 500);
		}
		else{
			$reviewText.addClass('gradientOverlay');
			$reviewText.css('max-height', '200px');
		}
	});
});