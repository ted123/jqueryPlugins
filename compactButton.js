(function ( $ ) {

	$.fn.compactButton = function ( height, bdClick ) {
		var self       = this;
		
		var wheight    = $( window ).height();
		var wwidth     = $( window ).width();

		var btnClass   = 'btn btn-compact';
		var listClass  = 'list-compact';
		var icon       = '&emsp;<span class="caret"></span>';
		var backdrop   = '<div id="backdrop-compact" ></div>'  

		var firstChild = this.children().first();
		var lastChild  = this.children().last();

		var forigin    = firstChild[0];

		var funcClick  = bdClick || function () {
			this.remove();
			lastChild.hide();
		}

		function conditionals () {
			console.log( self.height() +' - '+height+' - '+firstChild.hasClass( btnClass )  );
			if ( self.height() > height && !firstChild.hasClass( btnClass )  ) {
				firstChild.addClass( btnClass ).append( icon );
				lastChild.addClass( listClass );
				$( 'body' ).append( backdrop );

				lastChild.hide();

				firstChild.on( 'click', function () {
					lastChild.show();
				} );
				$( '#backdrop-compact' ).on( 'click', funcClick );

			} else if ( self.height() <= height && firstChild.hasClass( btnClass ) ){
				firstChild.html( forigin );
				lastChild.removeClass( listClass );
				$( '#backdrop-compact' ).remove(); 

				lastChild.show();

				firstChild.off();
			}
		}

		conditionals();

		$( window ).on( 'resize', function () {
			if ( wheight !== $( window ).height() && wwidth !== $( window ).width() ) {
				if( !self.length ) {
					$( window ).off( 'resize' );
					return;
				} 
				conditionals();
			}           

		} );
	};
 
}( jQuery ));