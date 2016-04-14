/*
 * Local Storage 
 *
 * 1. localStorage.setItem
 * 2. localStorage.getItem
 * 3. localStorage.removeItem
 *
 * LocalStorage Helper	
 * 
 * JSON.parse -->  turns a string of JSON text into a Javascript object.
 * JSON.stringify --> turns a Javascript object into JSON text and stores that JSON text in a string.
 *
 */

var cesar = {
	age: 29,
	title: "teacher"
};

localStorage.setItem('cesar', JSON.stringify(cesar));

var x = JSON.parse(localStorage.getItem('cesar'));

console.log(x);


var y = localStorage.removeItem('cesar');

console.log(y);


