// Value
// 1, true, "hello", function(){}

// Variable
var hello;
console.log(hello);
let foo = "Hello World";
foo = "Başka bir şey";
const bar  = "Hello World!";
//bar = "Başka bir değer";
let firstName = "John"
const API_KEY = "sadasdnaskldanskdasnkdkasnd"
// const PI = 3.14
const car = {model: "Porsche", type: "Sports"};
car.model = "BMW";
//let firstName
//let FIRSTNAME


// Primitive values - Reference Values
// typeof
// primitive values
// - number
// - string
// - boolean
// - undefined
// - null
// - symbol

// reference values
// - objects
// - arrays
// - functions

let number = 30;
let isOkay = true;
let text = "Hello";

let person = {name: "John"};






let name = "Mehmet";
let displayName = name;
// let displayName = "Mehmet"

name = "Ahmet";

console.log(name);
console.log(displayName);

// araba => 10101010101
let araba = {
    type: "Sport",
    name: "Porche"
};

// araba => 11001010101
let baskabirAraba = {
    type: "Sport",
    name: "Porche"
};

let baskaAraba = araba;

baskaAraba.name = "Mercedes";

console.log(araba.name);
console.log(baskaAraba.name);


console.log(araba === baskaAraba);

console.log(araba === baskabirAraba);


let a = null;
console.log(a);
// null

let b;
console.log(b);
// undefined

let d = {};
console.log(d.name);
// undefined

if(null){console.log("Hello")}
if(undefined){console.log("hELLO")}

console.log(null !== undefined);
console.log(null == undefined);



// value, expression, statement
// value üreten şeyler: expression
let a = 5;
let b = 3 + 5;
// statement: bir aksiyon gerçekleştiren
if(3>5){
    console.log("işlem");
}

// operators
let z = 5 + 6;
let b = 3 * 5;

// arithmetic operators
//+, *, -, **, /, %, ++, --

let toplam = 8;
//toplam = toplam + 1;
// toplam ++

let toplam = 8;
//let a = toplam++; // a = 8, toplam = 9
let b = ++toplam; // b= 9, toplam=9


// assignment operators
let a = 3;
// +=
let x = 5;
x += 3;
x -= 3;
// x = x - 3
// x = 5 + 3;

let text = "Hello" + " " + "World"

// comparison operators
// ==  equals to
// === equal value and equal type
// !=  not equal to
// !== not equal value and not equal type
// > greater than < less than >= <=
// ? ternary

3 === "3"

let age = 100;
let isOld = age > 90 ? "Yes" : "No";
console.log(isOld);

// logical operators
// && logical and
// || logical or
// ! logical not

console.log((3 > 2) && (5>4))
console.log((1 > 5) || (3 > 6) || (10 > 8))

const ornek = 3 && 5 && 1 && 0 && 2;
console.log(ornek);

const ornek2 = 0 || false || undefined || 0 || null;
console.log(ornek2);

const firstName = person && person.name && person.name.firstName;
// optional chaining
const firstName = person?.name?.firstName

let isOpen = true;
function toggleDrodown(){
    isOpen = !isOpen
}

if(!!name){

}
