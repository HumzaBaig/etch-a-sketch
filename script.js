$(document).ready(function() {
	createGrid(16);

	$('.square').hover(function() {
		$(this).css('background-color','#454141');
	});
	
});

var createGrid = function (squares) {
	for(var j=0;j<squares;j++)
	{
		var lastRow;
		if(j===squares-1)
		{
			lastRow = true;
		}
		else
		{
			lastRow = false;
		}
		if(!lastRow)
		{
			for(var i=0;i<squares;i++)
			{
				$('#center').append('<div class="square"></div>');
			}
			$('#center').append('<div class="square lastCol"></div>');
		}
		else
		{
			for(var i=0;i<squares;i++)
			{
				$('#center').append('<div class="square lastRow"></div>');
			}
			$('#center').append('<div class="square lastRow lastCol"></div>');
		}
	}

	var sqSide = 650/squares

	$('#center').width('747px');
	$('.square').css('border','solid');
	$('.square').css('margin-top','-4px');
	$('.square').css('display','inline-block');
	$('.square').width(sqSide);
	$('.square').height(sqSide);
	$('.lastCol').css('margin-left','-1px');
	$('.lastRow').css('margin-top','-6px');
}