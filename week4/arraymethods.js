// filter, map, sort, find, every, some, forEach

// forEeach
const fruits = ["apple", "banana", "orange"];

const konsolaYazdir =(fruit, index) => {
  const str = `Su anki index ${index}, su anki deger ${fruit}`;
  console.log(str);
};

fruits.forEach(konsolaYazdir);


// map
const numbers = [2,4,6,8];
const numbersMultiply2 = numbers.map((number) => number*2);
numbersMultiply2

// filter
const people = [
  {name: "John", age: 30, languages: ["Rust", "C#"]},
  {name: "Mary", age: 30, languages: ["JavaScript", "GO"]},
  {name: "Joe",  age: 20, languages: ["Python", "Pascal"]},
  {name: "Benjamin", age: 25, languages: ["JavaScript", "C#"]}
]

const peopleOlderThan20 = people.filter(person => person.age > 20);
const firstPersonKnowsJs = people.find((person) => {
  //return person.languages.includes("JavaScript");
  //return person.languages.find(language => language === "JavaScript");
  // return person.languages.indexOf("JavaScript") > -1;
});
firstPersonKnowsJs


// some, every
const isAnyoneOlderThan20 = people.some(person => person.age > 20);
const isEveryoneOlderThan20 = people.every(person => person.age > 20);
isAnyoneOlderThan20 ? "Yes" : "No"
isEveryoneOlderThan20 ? "Yes" : "No"





