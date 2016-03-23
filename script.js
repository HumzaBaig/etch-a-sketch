$(document).ready(function() {
	createGrid(16);

	$('input').click(function() {
		/*$('.square').css('background-color','white');*/
		var $sq = prompt("How many rows of squares would you like?");
		createGrid($sq);
	});
	
});

var createGrid = function (squares) {
	$('#center').remove();
	$('<table id="center"></table>').appendTo('#wrapper')
	$('#center').css('margin-top','0px');
	$('#center').css('margin-left','auto');
	$('#center').width('960px');
	$('#center').height('960px');
	for(var j=0;j<squares;j++)
	{
		$('<tr class="Row"></tr>').appendTo('#center');
	}
	for(var i=0;i<squares;i++)
	{
		$('.Row').append('<td><div class="square"></div></td>');
	}

	var sqSide = 800/squares

	$('.square').css('border','solid');
	$('.square').css('margin','0px');
	$('.square').css('padding','0px');
	$('<td>').css('margin','0px');
	$('<td>').css('padding','0px');
	$('.Row').css('margin','0px');
	$('.Row').css('padding','0px');
	$('.square').width(sqSide);
	$('.square').height(sqSide);

	$('.square').hover(function() {
		$(this).css('background-color','#454141');
	});
}