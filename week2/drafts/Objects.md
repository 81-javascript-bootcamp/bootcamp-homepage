# Objects

JavaScriptte 8 tane veri tipi vardır. Bunların yedi tanesi primitive olarak adlandırılır(string, boolean, number, bigInt, null, undefined,symbol). 
Diğer veri tipi de objectdir. 

Objectler ise veriyi key ve value olarak tutmamızı sağlar.

Objeler {...} arasında tanımlanır. 

```javascript
let propertyName: {
   key: value
} 
```

Objeler key değerlerine göre saklanır.

Boş bir object yaratmak için :

```javascript
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```
# Özellikleri

```javascript
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

Burada tanımlanan user property name olarak geçer. Object içerisindeki name ise key olarak adlandırılır aynı zamanda da (name ya da identifier olarak da bilinir)

İkinci name age ise 30 valuesuna sahiptir aynı zaman da name inde value değeri John'dur. 


Objelerde istediğimiz zaman ekleme, silme ve okuma işlemleri yapabiliriz.

// get property values of the object:

```javascript
alert( user.name ); // John
alert( user.age ); // 30
```

```javascript
user.isAdmin = true; // Bu şekilde objeye değer ekleme yapabiliriz.
delete user.age; // Objeden eleman silme işlemini de bu şekilde gerçekleştirebiliriz.
```
**Obje tanımlamaları yaparken boşluk içeremez, özel karakterlerle( $ ve _  gibi) ve rakamlarla başlayamaz.**

// this would give a syntax error

```javascript
user.likes birds = true
```
// bu gösterimde arada boşluk içerdiği için çalışmayacaktır.

Alternatif olarak **square bracket notation** gösterimiyle string olarak nesneye eleman ekleyebiliriz.

```javascript
let user = {};
// set
user["likes birds"] = true;
// get
alert(user["likes birds"]); // true
// delete
delete user["likes birds"];
 user: {
  "likes birds": true   // Burada user objesini quare bracket notation gösterimiyle set ettiğimizde alacağımız sonuç bu şekilde olacaktır.
}
```

user["likes birds"] = true;  // Bu gösterimde ise köşeli paranter içerisinde key değerini verdiğimizde o objeye erişip value değerini okuyabilir ya da değiştirebilir.

# Object propertylerine erişim

```javascript
let user: {
	name: "John",
	age: 30
}
// 1
user.name;
// 2
user["name"];
```

**user["likes birds"] = true; ** 
// Yukarıda tanımladığımız objeye de köşeli paranter içerisinde key değerini verdiğimizde o objeye erişip value değerini okuyabilir ya da değiştirebiliriz.

**Genellikle objeleri real kod ortamında bu şekilde kullanırız.**

```javascript
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}
```

let user = makeUser("John", 30);
alert(user.name); // John

```
Yukarıdaki fonksiyonun parametleriyle objenin propertyleri aynı değer böyle olduğunda **shorthand** kullanabiliriz.
```Javascript
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
```

# Property adlandırılması

Değişkenlerde for, let, return gibi isim değerleri kullanamayız fakat objelerde tanımlayabiliriz.


```Javascript
// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};
alert( obj.for + obj.let + obj.return );  // 6
```

# Nested JS Objects

```Javascript
let person = {
    firstName: "James",
    lastName: "Bond",
    age: 25,
    address: {
        id: 1,
        country:"UK"
    }
};
person.address.country; // returns "UK"
```

# Method shorthand

```Javascript
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.getFullName()); // 'John Doe'
```

# The “for…in” loop

```Javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```

# Sorular

1-) 
```Javascript
let school = { 
    name: 'Vivekananda School', 
    displayInfo : function(){ 
        console.log(`${school.name.split(' ')[0]}`); 
    } 
} 
school.displayInfo();  // Çıktısı ne olur ?
```

2-) 
```Javascript
const object1 = new Object(); 
object1.property1 = 42; 
  
console.log(object1.hasOwnProperty('property1'));  // Çıktısı ne olur ?
```

3-) 
```Javascript

let a = {
  x: "y"
}
console.log("x" in a);   // Çıktısı ne olur ?
```
