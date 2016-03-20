$(document).ready(function() {
	for(var j=0;j<16;j++)
	{
		for(var i=0;i<16;i++)
		{
			$('#wrapper').append('<div class="square"></div>');
		}
	}
	$('.square').css('border','solid');
	$('.square').css('display','inline-block');
	$('.square').width('75px');
	$('.square').height('75px');
	
});