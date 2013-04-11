///<reference path="../d.ts/jquery.d.ts"/>

module demo.jquery {
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

	export function showSomeImages( callback:Function ) {
		var jqXHR = startRequest();

		jqXHR.done(function( data ) {
			$.each( data.items, function( i, item ) {

				var $img = $('<img>')
					.css('opacity', 0)
					.attr( "src", item.media.m )
					.appendTo('body');

				showImageWhenLoaded( $img );
			});
		});
	}



	function startRequest() {
		return $.getJSON( flickerAPI, {
			tags: "landscape",
			tagmode: "any",
			format: "json"
		});
	}

	function showImageWhenLoaded( $img ) {
		$img.on('load', function() {
			$img.fadeTo(300, 1);
		});
	}

}
