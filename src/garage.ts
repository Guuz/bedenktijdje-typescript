///<reference path="car.ts"/>

module demo.modules {
	import classes = demo.classes;

	export module garage {

		export var name = 'Q Electric Car Park';
		var spaces = 2;
		var cars: classes.Car[] = [];

		export function addCar( car: classes.Car ) {
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
			});

			return ret.join('\n');

			//var brands = cars.map(car => car.brand);
			//return brands.join('\n');
		}

	}



	export function runDemo() {
		var Car = classes.Car
		  , tesla = new Car( 'Tesla', 5 )
		  , opel = new Car( 'Opel', 5 )

		console.log( garage.name );

		console.log('Add a Tesla.');
		garage.addCar( tesla );
		console.log( garage.listCars() );

		console.log('Add an Opel.');
		garage.addCar( opel );
		console.log( garage.listCars() );
	}

}
