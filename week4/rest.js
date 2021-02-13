//...
/// Rest and spread
const fruits = ["apple", "orange", "banana"];
// Copying && concat
const otherFruits = ["apricots", "avocado"];
const fruitsCopy = [...fruits, ...otherFruits];

/// slice
const [apple, orange, ...remainingFruits] = fruits;
apple
remainingFruits

function add(...args){
  let result = 0;
  for(let i=0; i<args.length; i++){
    result += args[i];
  }
  return result;
}

add(1);
add(1,2,3);
add(1,2,3,5,10);


const circle = {
  radius: 10
};

const color = {
  color: "red"
};

const biggerCircle = {...circle, ...color};

const clonedCircle = {...circle};
const otherClonedCircle = Object.assign({}, biggerCircle);

const coloredCircle = {
  ...circle,
  radius: 20,
  color: "red"
};

console.log(coloredCircle);

const person = {
  name: "John",
  languages: {
    "JavaScript": true,
    "GO": true,
    other: {
      "Java": {
        basic: true
      }
    }
  }
}

const clonedPerson = {...person, languages: {...person.languages, other: {...person.languages.other}}};
const clonedObjAssign = Object.assign({}, clonedPerson);
clonedPerson.name = "Joe";
clonedPerson.languages["GO"] = false;
clonedPerson.languages.other.Java = false;
person
clonedPerson;
