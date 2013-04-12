///<reference path="../d.ts/jquery.d.ts"/>

module demo.jquery {
	var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

	export function showSomeImages( callback?:Function = $.noop ) {
		var jqXHR = startRequest();

		jqXHR.done(function( data ) {
			$.each( data.items, function( i, item ) {

				var $img = $('<img>')
					.css('opacity', 0)
					.attr( 'src', item.media.m )
					.appendTo('body');

				showImageWhenLoaded( $img );
			});
		});

		jqXHR.always( callback );
	}



	function startRequest() {
		return $.getJSON( flickerAPI, {
			tags: 'landscape',
			tagmode: 'any',
			format: 'json'
		});
	}

	function showImageWhenLoaded( $img: JQuery ) {
		$img.on('load', function() {
			$img.fadeTo(300, 1);
		});
	}



	export function runDemo() {
		console.log('Showing some images...');

		showSomeImages( () => {
			console.log('Images loaded.');
		});
	}

}
