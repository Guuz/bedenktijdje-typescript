class Car {
	brand: string;
	nrOfDoors: number;

	constructor( brand:string, nrOfDoors:number ) {
		this.brand = brand;
		this.nrOfDoors = nrOfDoors;
	}

	// constructor( public brand:string, public nrOfDoors:number ) {}

	public getDescription() {
		if( this.brand && this.nrOfDoors) {
			return this._makeDescription();
		} else {
			return '';
		}
	}

	private _makeDescription() {
		var description = 'Brand: ' + this.brand;
		description += '\n';
		description += 'Doors: ' + this.nrOfDoors;

		return description;
	}

}



(function() {

	var car = new Car( 'Tesla', 5 );
	console.log( car.getDescription() );

	console.log('Setting doors to 3.');
	car.nrOfDoors = 3;
	console.log( car.getDescription() );

})();
