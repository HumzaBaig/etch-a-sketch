$(document).ready(function() {
	for(var j=0;j<16;j++)
	{
		var lastRow;
		if(j===15)
		{
			lastRow = true;
		}
		else
		{
			lastRow = false;
		}
		if(!lastRow)
		{
			for(var i=0;i<15;i++)
			{
				$('#center').append('<div class="square"></div>');
			}
			$('#center').append('<div class="square lastCol"></div>');
		}
		else
		{
			for(var i=0;i<15;i++)
			{
				$('#center').append('<div class="square lastRow"></div>');
			}
			$('#center').append('<div class="square lastRow lastCol"></div>');
		}
	}

	var sqSide = 650/16

	$('#center').width('747px');
	$('.square').css('border','solid');
	$('.square').css('margin-top','-4px');
	$('.square').css('display','inline-block');
	$('.square').width(sqSide);
	$('.square').height(sqSide);
	$('.lastCol').css('margin-left','-1px');
	$('.lastRow').css('margin-top','-6px');
	
});