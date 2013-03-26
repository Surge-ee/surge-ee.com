$(function() {

	fontResize();

	function fontResize() {
		var	$pTxt = $('.panel a'),
			pWidth = $pTxt.parent().width(),
			newSize = pWidth / 68;
			ieBleh	= pWidth / 80;
		$pTxt.css('font-size', ieBleh + 'em');
		$pTxt.css('font-size', newSize + 'rem');
	}

	$(window).resize(fontResize);

});
