/* const animalMethods = {
    eat(amount){
        console.log(`${this.name} is eating`);
        this.energy += amount
    },
    sleep(length){
        console.log(`${this.name} is sleeping`);
        this.energy += length
    },
    play(length){
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }
}

function Animal(name, energy) {
    let animal = Object.create(animalMethods);
    animal.name = name;
    animal.energy = energy;
    return animal;
}

const leo = Animal("Leo", 7); // new animal.eat, animal.sleep, animal.play created
const snoop = Animal("Snoop", 10); // new animal.eat, animal.sleep, animal.play created

leo.eat();
snoop.play();
*/

function Animal(name, energy) {
    this.name = name;
    this.energy = energy;
}

Animal.prototype.eat = function(amount){
    console.log(`${this.name} is eating`);
    this.energy += amount
}

Animal.prototype.sleep = function(length){
    console.log(`${this.name} is sleeping`);
    this.energy += length
}

Animal.prototype.play = function(length){
    console.log(`${this.name} is playing`);
    this.energy -= length
}

const leo = new Animal("Leo", 7);
const snoop = new Animal("Snoop", 10);


// hasOwnProperty
leo.hasOwnProperty("name") // true
leo.hasOwnProperty("sleep") // false

// instanceof
leo instanceof Animal;

leo.eat();
console.log(leo);
snoop.play();


/// Object.create
const parent = {
    name: "Stacey",
    age: 35,
    heritage: "Irish"
}

const child = Object.create(parent);
child.name = "Ryan";
child.age = 7;

console.log(child.name) //Ryan
console.log(child.heritage) //Irish



