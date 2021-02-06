Prototypal Inheritance

String array ya da objelerle birlikte .length .join() .split() gibi built-in metodları nasıl kullanabildiğimizi hiç düşündünüz mü? Bunların hepsi aslında prototypal inheritance denen bir kavramdan geliyor. 

Genellikle birden fazla obje yaratmamız gereken ya da birşeyleri alıp özelliklerini extend etmeyi ve kullanmayı istediğimiz durumlarla karşılarız. JavaScript'te, bu gibi durumlar için objelerin özel bir gizli özelliği [[Prototype]] (burada adlandırıldığı gibi) vardır; bu, null veya başka bir objeye referans edebilir. Bu objeye "prototip" denir.

Objeden bir propertyi okuduğumuzda ve eksik olduğunda, JavaScript onu prototipten otomatik olarak alır. Programlamada böyle bir şeye "prototypal inheritance" denir. Bununla ilgili bazı örnekleri ve bunun üzerine inşa edilen bazı dil özelliklerini inceleyeceğiz.

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

Şimdi rabbitten bir propertyi okursak ve bu eksikse, JavaScript onu animaldan otomatik olarak alır.

Örneğin:

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// Artık her ikisini de rabbit'te bulabilirsiniz.
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true


Burada (*) satırı, animalı bir rabbit prototipi olarak ayarlar.

Daha sonra, alert rabbit.eats (**) propertysini okumaya çalıştığında, bu rabbitte değildir, bu nedenle JavaScript [[Prototype]] referansını takip eder ve animalda bulur (aşağıdan yukarıya bakın):

Burada 'animal rabbitin prototipidir' veya 'rabbit prototip olarak animaldan miras kalır' diyebiliriz.

Dolayısıyla, hayvanın birçok yararlı özelliği ve metodu varsa, otomatik olarak tavşanda kullanılabilir hale gelirler. Bu tür özelliklere "inheritance" denir.

Hayvanda bir metodumuz varsa, rabbitte de çağrılabilir:

let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// walk prototipten alınmıştır.
rabbit.walk(); // Animal walk

Method prototipten otomatik olarak şu şekilde alınır:
animal: 
eats: true 
walk: function -------> rabbit: jumps: true

Prototip zinciri daha da uzun olabilir:

let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk prorotip zincirinden alınmıştır.
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)

Şimdi longEar'dan bir şey okursak ve bu eksikse, JavaScript onu rabbitte ve sonra animalda arayacaktır.

__Proto__’un değeri bir obje veya null olabilir. Diğer türler göz ardı edilir.

Çok açık olsa da tekrar söylemekte yarar var. Bir obje sadece bir tane [[Prototype]]'a sahip olabilir. Bir objenin iki farklı objeden kalıtım alamaz.

Not: Lütfen __proto__ 'nun [[Prototype]] özelliği ile aynı olmadığını unutmayın. __proto__ bir nevi [[Prototype]] için bir getter / setter olarak kullanılır. Daha sonra önemli olan kısımları tekrar göreceğiz, şimdilik sadece aynı şey olmadığını aklımızda tutalım.

Prototip sadece özelliklerin okunması için kullanılır. Veri özelliklerinin yazılma/silinme ( getter/setter değil) işi doğrudan obje üzerinden yapılır.

Aşağıdaki örnekte rabbit'e kendi walk metodu atanmıştır:
let animal = {
  eats: true,
  walk() {
    /* Bu metod rabbit tarafından kullanılmayacaktır. */
  }
};

let rabbit = {
  __proto__: animal
}

rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!

Artık rabbit.wal() metodu doğrudan kendi içerisinde bulur ve çalıştırır. Prototip kullanmaz.
Kısaca prototiplere ve prototip zincirlerine bu şekilde değinebiliriz. Bir sonraki konuda görüşmek üzere!

//Kaynaklar:
//https://javascript.info/
