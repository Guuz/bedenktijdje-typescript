module demo.classes {

	export class Car {
		brand: string;
		nrOfDoors: number;
		isMoving: bool = false;

		constructor( brand:string, nrOfDoors:number, isMoving?:bool ) {
			this.brand = brand;
			this.nrOfDoors = nrOfDoors;

			this.isMoving = isMoving;
		}

		//constructor(
		//	public brand:string
		//  , public nrOfDoors:number
		//  , public isMoving?:bool = false
		//){}

		getDescription() {
			var description = 'Brand: ' + this.brand;
			description += '\n';
			description += 'Doors: ' + this.nrOfDoors;

			return description;
		}

		push() {
			this.isMoving = true;

			setTimeout( () => {
				this.isMoving = false;
			}, 1000);
		}
	}



	export function runDemo() {
		var car = new Car( 'Tesla', 5 );
		console.log( car.getDescription() );

		console.log('Setting doors to 3.');
		car.nrOfDoors = 3;
		console.log( car.getDescription() );



		console.log('Moving?', car.isMoving);

		console.log('Pushing the car.');
		car.push();
		console.log('Moving?', car.isMoving);
		console.log('Wait for it...');

		setTimeout(function() {
			console.log('Moving?', car.isMoving);
		}, 1500);
	}

}
