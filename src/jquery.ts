///<reference path="../d.ts/jquery.d.ts"/>

(function() {

	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

	var jqXHR = $.getJSON( flickerAPI, {
		tags: "landscape",
		tagmode: "any",
		format: "json"
	});

	jqXHR.done(function( data ) {
		$.each( data.items, function( i, item ) {

			var $img = $('<img>')
				.hide()
				.attr( "src", item.media.m )
				.appendTo('body');

			$img.on('load', function() {
				$(this).fadeIn();
			});

		});
	});

	// jqXHR.done( ( data ) => {
	// 	$.each( data.items, ( i, item ) => {

	// 		var $img = $('<img>')
	// 			.hide()
	// 			.attr( "src", item.media.m )
	// 			.appendTo('body');

	// 		$img.on('load', function() {
	// 			$(this).fadeIn();
	// 		});

	// 	});
	// });

}());
