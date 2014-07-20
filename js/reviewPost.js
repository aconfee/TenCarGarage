// THIS FILE IS RESPONSIBLE FOR THE FRONT END DYNAMIC QUALITY OF A REVIEW POST

// GOAL: Animate growth of text 
//		 Use auto to scale height
$(document).ready(function(){
	$reviewText = $('.reviewText');

	$reviewText.click(function(){
		$maxHeight = parseFloat($(window).height()) * 0.8;
		$maxHeight = $maxHeight.toString();

		if($(this).css('max-height') === '200px'){
			$(this).removeClass('gradientOverlay');
			$(this).css('max-height', $maxHeight);
			$(this).css('overflow', 'auto');
		}
		else{
			$(this).addClass('gradientOverlay');
			$(this).css('max-height', '200px');
			$(this).css('overflow', 'hidden');
		}
	});
});