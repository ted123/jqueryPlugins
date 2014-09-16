(function ( $ ) {

	// var $ = require( 'jquery' );

	$.fn.addBackdrop = function ( options ) {
		var exempted    = options.exclude;
		var backdrop    = '<div id="backdrop-aplugin"></div>';
		var elementFunc = options.onSelfClick || function () {};
		var bdFunc      = options.onBackdropClick || function () {
			this.remove();
		};

		for ( var i = 0; i < exempted.length; i++ ) {
				$( exempted[i] ).css( 'z-index', options.zindex1 + 1 );
		}

		function removeBind () {
			if ( $( '#backdrop-aplugin' ).is( ':visible' ) ) {
				$( '#backdrop-aplugin' ).off();
				$( '#backdrop-aplugin' ).remove();
			}
		}

		function bindAgain () {
			$( '#backdrop-aplugin' ).css( 'z-index', options.zindex2  )
									.on( 'click', bdFunc );
		}

		this.on( 'click', function ( e ) {
			elementFunc( e );
			removeBind();
			$( 'body' ).append( backdrop );
			bindAgain();
		} );

		return this.css( 'z-index', options.zindex1 );
	};

}( jQuery ));