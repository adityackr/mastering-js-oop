// * Association

// function Person(name, surname) {
// 	this.name = name;
// 	this.surname = surname;
// 	// this.spouse = null;
// }

// const aditya = new Person('Aditya', 'Chakraborty');
// const arpita = new Person('Arpita', 'Chakrbaorty');

// arpita.spouse = aditya;
// aditya.spouse = arpita;

// console.log(arpita);

// * Aggregation

// const company = {
// 	name: 'Acme Inc.',
// 	employees: [],
// };

// company.employees.push(aditya);
// company.employees.push(arpita);
// console.log(company);
// console.log(aditya, arpita);

// * Composition

// const person = {
// 	name: 'Aditya',
// 	surname: 'Chakraborty',
// 	address: {
// 		street: 'K B Aman Ali Road',
// 		city: 'Chattogram',
// 		country: 'Bangladesh',
// 	},
// };

// console.log(person);
// console.log(person.address);

// * Encapsulation

// function Company(name) {
// 	const employees = [];

// 	this.name = name;

// 	this.getEmployees = () => {
// 		return employees;
// 	};

// 	this.addEmployees = (name) => {
// 		employees.push(name);
// 	};

// 	this.sortEmployeesByName = () => {
// 		employees.sort();
// 	};
// }

// const company = new Company('Acme Inc.');

// company.addEmployees('Arpita');
// company.addEmployees('Aditya');

// console.log(company.getEmployees());
// company.sortEmployeesByName();
// console.log(company.getEmployees());

// * Inheritance

function Person() {
	this.name = '';
	this.surname = '';
}

function Programmer() {
	this.knownLanguages = '';
}

Programmer.prototype = new Person();

// const programmer = new Programmer()

// * Polymorphism

function writeFullName(p) {
	console.log(p.name + ' ' + p.surname);
}

const a = new Person();
a.name = 'Aditya';
a.surname = 'Chakraborty';

const b = new Programmer();
b.name = 'Arpita';
b.surname = 'Chakraborty';
b.knownLanguages = 'JavaScript';

writeFullName(a);
writeFullName(b);
