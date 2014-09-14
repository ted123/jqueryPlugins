(function ( $ ) {

	$.fn.addBackdrop = function ( zindex1, zindex2, bdFunc ) {
		var backdrop  = '<div id="backdrop-compact"></div>';
		var clickFunc = bdFunc || function () {
			this.remove();
		} 

		if ( $( '#backdrop-compact' ).length ) {
			$( '#backdrop-compact' ).off();
			$( '#backdrop-compact' ).remove();
		}

		$( 'body' ).append( backdrop );

		$( 'backdrop-compact' ).on( 'click', clickFunc );

		return this.css( 'z-index', zindex1 );
	};
 
}( jQuery ));