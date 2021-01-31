/// THIS

// 1. Implicit

const user = {
  name: "Joe",
  age: 30,
  greet(){
    console.log("Hello, my name is " + this.name);
  }
}

user.greet();

const user = {
  name: "Joe",
  age: 30,
  greet(){
    /// this = user
    console.log("Hello, my name is " + this.name);
  },
  mother: {
    name: "Stacey",
    greet(){
      /// this = mother
      console.log("Hello, my name is " + this.name);
    }
  }
}

user.mother.greet();


// 2. Explicit
// call, apply, bind

function greet(language1, language2){
  console.log("Hello, my name is " + this.name + " and I know " + language1 + ", " + language2)
}

function greet2(languages){
  const userLanguages = languages.join(", ");
  console.log("Hello, my name is " + this.name + " and I know " + userLanguages)
}

const user = {
  name: "Mary",
  age: 26
}

greet.call(user, "JavaScript", "Python");

let languages= ["JavaScript", "Python"];
greet.apply(user, languages);

let myFunc = greet.bind(user, "JavaScript", "Python");

let myFunc2 = greet2.bind(user, languages)

myFunc();


// 3. new Binding

function User(name, age){
  this.name = name;
  this.age  = age;
}


const Joe = new User("Joe", 27);

Joe.name
Joe.age


// 4. lexical binding

const user = {
  name: "Joe",
  age: 27,
  languages: ["JavaScript", "Python", "Rust"],
  greet(){
    const hello = "Hello, my name is" + this.name + " and I know";
    
    const langs = this.languages.reduce((str, lang, i) => {
      if(i ===  this.languages.length - 1){
        return str + " and " + lang
      }
      
      return str + "," + lang;
    }, "")
    
    console.log(hello + langs);
  }
}

user.greet();


// 5. window binding
window.age = 27;

function sayAge(){
  // this = window.
  console.log("My age is" + this.age);
}

sayAge();
/// window.sayAge();








