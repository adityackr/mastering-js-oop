const obj = {};
// const person = {
// 	name: 'Aditya',
// 	surName: 'Chakraborty',
// 	test: () => {},
// };

// * {} -> object literal
// * person -> object
// * name, surName -> properties
// * test -> method

// const person = {
// 	'first-name': 'Aditya',
// 	'last-name': 'Chakraborty',
// };

// const person = {
// 	name: 'Arpita',
// 	surName: 'Chakraborty',
// 	address: {
// 		street: 'K B Aman Ali Road',
// 		city: 'Chattogram',
// 		country: 'Bangladesh',
// 	},
// 	age: 31,
// 	showFullName() {
// 		// return 'Aditya Chakraborty';
// 		return this.name + ' ' + this.surName;
// 	},
// };

// const person = {};

// // * add properties
// person.name = 'Aditya';
// person.surName = 'Chakraborty';
// person.address = {
// 	street: 'K B Aman Ali Road',
// 	city: 'Chattogram',
// 	country: 'Bangladesh',
// };
// person.age = 31;
// person.showFullName = () => {
// 	return 'Aditya Chakraborty';
// };
// console.log(person);
// const fullName = person.showFullName();
// console.log(fullName);
// console.log(person.name);
// console.log(person['address']);
// console.log(person.address.country);

// delete properties
// delete person.address;
// console.log(person.address);

// * object constructor

// const arpita = {
// 	name: 'Arpita',
// 	surName: 'Chakraborty',
// 	address: {
// 		street: 'South Nalapara Road',
// 		city: 'Chattogram',
// 		country: 'Bangladesh',
// 	},
// 	age: 31,
// 	showFullName() {
// 		return this.name + ' ' + this.surName;
// 	},
// };

// const aditya = {
// 	name: 'Aditya',
// 	surName: 'Chakraborty',
// 	address: {
// 		street: 'K B Aman Ali Road',
// 		city: 'Chattogram',
// 		country: 'Bangladesh',
// 	},
// 	age: 31,
// 	showFullName() {
// 		return this.name + ' ' + this.surName;
// 	},
// };

// function Person(name, surname, age) {
// 	this.name = name;
// 	this.surname = surname;
// 	this.age = age;
// 	this.showFullName = () => {
// 		return this.name + ' ' + this.surname;
// 	};
// }

// const mankind = {
// 	Person: function (name, surname, age) {
// 		'use strict';
// 		this.name = name;
// 		this.surname = surname;
// 		this.age = age;
// 		this.showFullName = () => {
// 			return this.name + ' ' + this.surname;
// 		};
// 	},
// };

// const arpita = new mankind.Person('Arpita', 'Chakraborty', 26);
// const aditya = new mankind.Person('Aditya', 'Chakraborty', 31);
// arpita.name = 'Arpita';
// arpita.surname = 'Chakraborty';
// arpita.age = 26;
// arpita.address = {
// 	street: 'K B Aman Ali Road',
// 	city: 'Chattogram',
// 	country: 'Bangladesh',
// };
// arpita.showFullName = () => {
// 	return arpita.name + ' ' + arpita.surname;
// };

// console.log(arpita.showFullName());
// console.log(aditya);

// const person = new Object();
// person.name = 'Aditya';
// person.surname = 'Chakraborty';
// console.log(person.constructor === Object);

// const number = new Object(3 * 2);
// console.log(number);

// const string = new Object('test');
// console.log(string);

// * Object prototypes

// function Person(name, surname, age) {
// 	this.name = name;
// 	this.surname = surname;
// 	this.age = age;
// 	this.showFullName = () => {
// 		return this.name + ' ' + this.surname;
// 	};
// }

// const arpita = new Person('Arpita', 'Chakraborty', 26);
// const aditya = new Person('Aditya', 'Chakraborty', 31);

// Person.prototype.greets = function () {
// 	return 'Hello ' + this.name + ' ' + this.surname + '!';
// };

// console.log(Object.getPrototypeOf(aditya));

// console.log(aditya.greets());
// console.log(arpita.greets());

// String.prototype.padLeft = function (width, char) {
// 	let result = this;
// 	char = char || ' ';

// 	if (this.length < width) {
// 		result = new Array(width - this.length + 1).join(char) + this;
// 	}
// 	return result;
// };

// console.log('abc'.padLeft(10, 'x'));

// * Using classes

// class Person {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}
// }

const Person = class {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
};

const aditya = new Person('Aditya', 'Chakraborty');
const arpita = new Person('Arpita', 'Chakraborty');

console.log(aditya);
console.log(arpita);

console.log(typeof Person);
