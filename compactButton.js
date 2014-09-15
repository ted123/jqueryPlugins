(function ( $ ) {
	'use strict';

	var $     = require( 'jquery' );
	var _     = require( 'underscore' );
	var utils = require( 'videoPlayer/utils/utils' );

	$.fn.compactToButton = function ( options ) {
		var self       = this;

		var wheight    = $( window ).height();
		var wwidth     = $( window ).width();

		var btnClass   = 'btn btn-compact';
		var listClass  = 'list-compact';
		var icon       = '<span class="caret"></span>';
		var backdrop   = '<div id="backdrop-compact"></div>'

		var firstChild = this.children().first();
		var lastChild  = this.children().not( firstChild );

		var mobileCon  = wheight !== $( window ).height() && wwidth !== $( window ).width();

		// option params
		var height       = options.height;
		var funcOnResize = options.onresize || function () {};
		var funcClick    = options.onBdClick || function () {
			this.remove();
			lastChild.hide();
		}

		function conditionals () {
			if ( lastChild.height() > height && !firstChild.hasClass( btnClass )  ) {
				firstChild.addClass( btnClass ).append( icon );
				lastChild.addClass( listClass );
				$( 'body' ).append( backdrop );

				lastChild.hide();

				firstChild.on( 'click', function () {
					lastChild.show();
				} );
				$( '#backdrop-compact' ).on( 'click', funcClick );

			} else if ( lastChild.height() <= height && firstChild.hasClass( btnClass ) ){
				firstChild.removeClass( btnClass ).children().last().remove();
				lastChild.removeClass( listClass );
				$( '#backdrop-compact' ).remove();

				lastChild.show();

				firstChild.off();
			}
		}

		function doOnResize () {
			if ( mobileCon || !utils.isMobile() ) {
				if( !self.is( ':visible' ) ) {
					$( window ).off( 'resize' );
					return;
				}
				funcOnResize();
				conditionals();
			}
		}

		conditionals();

		$( window ).on( 'resize', _.debounce( doOnResize, 500 ) );

		return this;
	};

}( jQuery ));