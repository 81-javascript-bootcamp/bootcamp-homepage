// Template Literals
const name = "Joe";
const age = 30;
const str  = "Hello, my name is " +name + ", I'm " + age +" years old";
const strTemplate = `Hello, my name is ${name}, I'm ${age} years old`;
//console.log(str);
//console.log(strTemplate);

// Shorthand Properties && Shorthand Method Names
const firstName = "John";
const lastName  = "Doe";
const person = {
  firstName, // firstName: firstName
  lastName, // lastName: lastName
  save(){
    
  }
}

// Arrow Functions
const getFive = function(){
    return 5;
}
const getFiveArrow = () => 5; 
const multiply = (x,y) => x*y;
//a.on("click", function cb(){}) // named function
//a.on("click", () => {}) // anonymous function

// Destructring
/// Array destructing
let arr = ["John", "Doe", 30, ["js", "python"]];
let [arrFirstName,arrLastName,arrAge, [,second]]  = arr;
console.log(arrFirstName);
console.log(arrLastName);
console.log(arrAge);
console.log(second);

// Object Destructring
/* let options = {
  title: "Menu", 
  width: 100, 
  height: 200, 
  style: {
    background: "red",
  }
};
*/
let options;
let {width: myWidth, title, height, style: {background, border: {left}}} = options || {}; 
console.log(background,left);

/*
const height = options.height;
const title = options.title;
const background = option.style.background;
const left = option.style.border.left;
*/

// Optional Chaining
const user = {
  address: {
    street: "Rasimpasa",
    details: {
      name: {
        firstName
      }
    }
  }
}
const streetName = user && user.address && user.address.street;
const streetNameNew = user?.address?.street

/// Default Parameters
const multiplyOld = (x,y) => {
  return x*y;
};
const multiply = (x,y=5) => {
  return x*y;
}
multiply(3,5); 
multiply(3); 

