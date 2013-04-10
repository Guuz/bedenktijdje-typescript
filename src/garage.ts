///<reference path="car.ts"/>

module Garage {

	export var name = 'Q Electric Car Park';
	var spaces = 2;
	var cars:Car[] = [];

	export function addCar( car:Car ) {
		if( !isFull() ) {
			cars.push( car );
		}
	}

	function isFull() {
		return cars.length >= spaces;
	}



	export function listCars() {
		var ret = [];

		cars.forEach(function( car ) {
			ret.push( car.brand );
		})

		// cars.forEach( (car) =>
		// 	ret.push( car.brand )
		// );

		return ret.join('\n');
	}

}



(function() {

	var tesla = new Car( 'Tesla', 5 );
	var opel = new Car( 'Opel', 5 );

	console.log( Garage.name );

	console.log('Add a Tesla.');
	Garage.addCar( tesla );
	console.log( Garage.listCars() );

	console.log('Add an Opel.');
	Garage.addCar( opel );
	console.log( Garage.listCars() );

}());
