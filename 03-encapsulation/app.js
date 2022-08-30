// Encapsulation hides the internal details regarding how the object manipulates its data.

// * Convention based approach

// function TheatreSeats() {
// 	this._seats = [];
// }

// TheatreSeats.prototype.placePerson = function (person) {
// 	this._seats.push(person);
// };

// const theatreSeats = new TheatreSeats();
// theatreSeats.placePerson({ name: 'Aditya', surname: 'Chakraborty' });

// console.log(theatreSeats);

// * Privacy levels using closure

// function TheatreSeats() {
// 	const seats = [];

// 	this.placePerson = function (person) {
// 		seats.push(person);
// 	};
// }

// const theatreSeats = new TheatreSeats();
// theatreSeats.placePerson({ name: 'Aditya', surname: 'Chakraborty' });

// console.log(theatreSeats);
