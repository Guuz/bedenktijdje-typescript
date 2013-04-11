///<reference path="../d.ts/jquery.d.ts"/>

module demo.interfaces {

	interface ISandwichOptions {
		name: string;
		description?: string;
		price: number;
		rating?: number;
		bacon?: bool;
		lettuce?: bool;
		tomato?: bool;
		chicken?: bool;
	}

	function printSandwich( options:ISandwichOptions ) {
		var defaults = {
			name: ''
		  , description: 'No description.'
		  , price: 0
		  , rating: null
		  , bacon: false
		  , lettuce: false
		  , tomato: false
		  , chicken: false
		}

		var settings = $.extend( defaults, options );

		// Maak een human readable string van de settings.
		// setting: settingValue
		var sandwich = Object.keys(settings).map( setting => setting + ': ' + settings[setting] );

		console.log( sandwich.join('\n') );
	}



	export function runDemo() {
		printSandwich({
			name: 'BLT'
		  , price: 4.5
		  , rating: 8
		  , bacon: true
		  , lettuce: true
		  , tomato: true
		});
	}
}


