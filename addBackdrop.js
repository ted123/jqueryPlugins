(function ( $ ) {

	//var $ = require( 'jquery' );

	$.fn.addBackdrop = function ( options ) {
		var exempted  = options.exempted;
		var backdrop  = '<div id="backdrop-compact"></div>';
		var clickFunc = options.bdFunc || function () {
			this.remove();
		}

		for ( var i = 0; i < exempted.length; i++ ) {
			$( exempted[i] ).css( 'z-index', options.zindex1 );
		}

		if ( $( '#backdrop-compact' ).is( ':visible' ) ) {
			$( '#backdrop-compact' ).off();
			$( '#backdrop-compact' ).remove();
		}

		$( 'body' ).append( backdrop );

		$( 'backdrop-compact' ).css( 'z-index', options.zindex2  );

		$( 'backdrop-compact' ).on( 'click', clickFunc );

		return this.css( 'z-index', options.zindex1 );
	};

}( jQuery ));