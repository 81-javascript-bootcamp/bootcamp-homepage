# Scope(Kapsam)

Scope, kodunuzun içinde bulunan **değişkenlerin**, **fonksiyonların** ve **objelerin**, görünürlük ve erişebilirliğini ifade eder.

### Global Scope

Bir JavaScript dosyası içerisinde sadece bir **Global Scope** vardır.  Bir değişken herhangi bir fonksiyon içerisinde tanımlanmamış ise Global scope içindedir. Global scope içerisinde bulunan değişkenlere, diğer scope'lar içinden erişilebilir/değiştirilebilir.
```javascript
var fruit = "Elma";
console.log(fruit);		//elma

function getFruit(){
  console.log(fruit);	//fruit burada erişebilirdir.
}

getFruit();				//elma
```

### Function Scope

Bir fonksiyon içerisinde tanımlanan değişken, sadece o fonksiyon içinde erişilebilirdir. Fonksiyon dışında bu değişkene erişilemez. **var**, Function scope için değişkeni tanımlayan anahtar sözcüktür.
```javascript
function foo(){
  var fruit = "Elma";
  console.log(fruit);
}

foo();					//elma
console.log(fruit)		//Can't find variable: fruit
```

### Block Scope

Block Scope, **koşul ifadeleri (if, switch)** ve **döngüler (for, while)** içindeki alandır. Genel olarak, **{süslü parantez}** görülen her yer bir bloktur. ES6'da hayatımıza giren **const** ve **let** anahtar sözcükleri, geliştiricilerin değişkenleri bir blok içerisinde tanımlamasına izin verir. Bu da bu değişkenlerin yalnızca karşılık gelen blok içinde erişilebilir olduğu anlamına gelir.
```javascript
function foo(){
  if(true){
    var fruit1 = "elma";
    const fruit2 = "muz";
    let fruit3 = "çilek";
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

foo();
//elma
//Can't find variable: fruit2
//Can't find variable: fruit3
```

