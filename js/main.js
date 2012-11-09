$(function() {

	fontResize();

	function fontResize() {
		var	$pTxt = $('.panel a'),
			pWidth = $pTxt.parent().width(),
			newSize = pWidth / 70;
		$pTxt.css('font-size', newSize + 'rem');
	}

	$(window).resize(fontResize);

});
