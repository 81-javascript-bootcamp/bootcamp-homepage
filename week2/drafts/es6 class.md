EcmaScript6 ile gelen Class yapısı ile Nesne Yönelimli Programlama prensiplerini kullanabiliyoruz. (Halen ES6’yı desteklemeyen tarayıcılar vardır.) Classlarda tıpkı fonksiyonlar gibi başka bir ifade içinde tanımlanabilir, değer döndürebilir, atanabilir.
Class yapısı neyi sağlar?
•	prototype-based inheritance, 
•	constructors, 
•	super calls, 
•	instance and static methods

Class yapısını bir örnek üzerinde inceleyelim.

```javascript
class User{
  constructor(name) {
    this.name = name
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if(value.length < 4){
      alert("Name is too short.")
      return;
    }
    this._name = value;
  }

  sayHi(){
    return `Hi, ${this.name}`
  }
}

let user = new User("John");
alert(user.name); //John
user.sayHi() //Hi, John
user = new User(""); // Name is too short.
```

Örnekte User adında bir class tanımlanmaktadır.
Constructor: Javascript’te class yapısı tanımlamak için oluşturulan fonksiyonlar, constructor (yapıcı metot) olarak adlandırılır.
Constructor ile de türetilen “user” objesinin ilk değer atamaları yapılmaktadır. 
new User: new ile yeni bir obje oluşturulmaktadır. “user” objesi ile User classına erişebilmekteyiz.
Getters/setters: Set name’de this._name’ e yeni değer ataması(setter method), get name ile değerin(getter method) return edilmesi sağlanmakta.

Class inheritance
Extends Anahtar Kelimesi ve super

```javascript
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!
```

Classları geliştirmek için extends anahtar kelimesini kullanılmaktadır. Bu örnekte Rabbit adında bir sınıf oluşturulmakta ve bu sınıfı Animal sınıfından extends edilmekte. 
Extend edilen bu sınıf Anaimal classının metot ve nesnelerine erişip, kullanabilmektedir. Bunu super ile parent classının fonksiyonlarını çağrılıp yapmaktadır. 
Aynı özellik ve fonksiyonları tekrar yazmadan classı genişleterek kullanabilmekteyiz.
