///<reference path="../d.ts/jquery.d.ts"/>

module demo.jquery {
	var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

	export function showSomeImages() : JQueryPromise {
		var jqXHR = $.getJSON( flickerAPI, {
			tags: 'landscape',
			tagmode: 'any',
			format: 'json'
		});

		return jqXHR.then( (data) => addImages( data.items ) );
	}

	function addImages( imgs ) : JQueryPromise {
		var addedPromises = imgs.map( addImage );

		return $.whenAll( addedPromises );
	}

	function addImage( item ) : JQueryPromise {
		var $img = $('<img>')
				.attr( 'src', item.media.m )
				.appendTo('body');

		return showImageWhenLoaded( $img );
	}

	function showImageWhenLoaded( $img: JQuery ) : JQueryPromise {
		var dfd = $.Deferred();

		$img
			.css('opacity', 0)
			.on('load', () => {
				$img.fadeTo(300, 1).promise().then( dfd.resolve )
			});

		return dfd.promise();
	}



	export function runDemo() {
		console.log('Showing some images...');

		showSomeImages().then(() => {
			console.log('Images loaded.');
		});
	}
}



// Extend JQuery with $.whenAll
interface JQueryStatic {
	whenAll(promises : JQueryPromise[]) : JQueryPromise;
}
$.whenAll = (ps) => $.when.apply($, ps)

