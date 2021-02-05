# Design Patterns

Bir yazılım oluşturma esnasında tekrar kullanabilir ve uygulanabilir çözümlere ihtiyaç duyulmaktadır. Bu çözüm şemalarına design pattern adı verilmektedir.

Bir design pattern kullanmanın sağlayabileceği bazı yararlar bulunmaktadır:

1. Design patternler daha önceden test edilmiş ve sağlaması yapılmış tekniklerdir. Tekrar test edilmeye ihtiyaç duymazlar.
2. Kolay bir şekilde tekrar kullanabilir veya uygulanabilir yapıdalardır.
3. Kurulan sistemi veya yazılan kodun diğer developerlar için de kolayca okunabilir, anlaşılabilir ve sürdürülebilir olmasını sağlar.

> Tekrar tekrar uygulanabilir çözümler design pattern olarak adlandırıldığı gibi tekrar eden yaygın problemler karşısında oluşturulmuş kötü bir yöntem ile iyi bir çözüme ulaşmaya çalışmaya da *anti-pattern* denir.

Design Patternler 3 kategoriden oluşur:

 - Creational
 - Structural
 - Behavioral

JavaScript ile uygulanabilecek design patternlardan bazıları şunlardır:
-   Constructor Pattern   
-   Module Pattern
-   Revealing Module Pattern
-   Singleton Pattern
-   Observer Pattern
-   Mediator Pattern
-   Prototype Pattern
-   Command Pattern
-   Facade Pattern
-   Factory Pattern
-   Mixin Pattern
-   Decorator Pattern
-   Flyweight Pattern

JavaScript'te kullanılan en yaygın patternlerden biri module pattern'dir.

## The Module Pattern

Modüllerin uygulamalarda temiz ve ayrı kod birimleri oluşturması açısından birçok yararı bulunmaktadır.

1. **Sürdürülebilirlik**: Her modül kendi kendini içeren ayrı bir container yapıdadır. Bu bakımdan kod tabanından bağımsız ve soyut bir şekilde büyüyebilir veya geliştirebilirler. Güncellenmesi kolay olduğu için de sürdürebilir yapıdadırlar.
2. **Gizlilik (privacy)**:  Modüller ile *private* veya *public* methodlar oluşturulabilir. Kendi closure'larını kullanmaları bakımından global scope'a sızmazlar. Bu da global scopeta değişken tanımlarken oluşabilecek çakışmalardan ve karışıklıklardan (namespace pollution) uzak durulmasını sağlar.
3. **Tekrar Kullanılabilirlik**: Herhangi bir başka çözüm için de tekrar kolayca adapte edilebilir yapıdadırlar.

Modüller içerisinde tanımlanan değişkenlerin veya metotların kendilerine ait bir closure'a sahip olmasını ve bu sayede gizliliğini korunmasını sağlayan yapı IIFE (immediately-invoked function expression)'dir.

    (function() {

    // declare private variables and/or functions

    return {
        // declare public variables and/or functions
    }})();

```javascript
var HTMLChanger = (function() {
    var contents = 'contents'

    var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
    }

    return {
    callChangeHTML: function() {
        changeHTML();
        console.log(contents);
    }
    };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined
```
## The Revealing Module Pattern

The Revealing Module Pattern'in amacı modül içerisinde tanımlanan değişkenlerin gizliliğine object literal dot notation ile karar verilebilir olmasını sağlamaktır. IIFE bir objeye return eder ve dot notation ile istenilen methodlar açığa çıkarılır ve ulaşılabilir hale gelir.

```javascript
var Exposer = (function() {
    var privateVariable = 10;

    var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
    }

    var methodToExpose = function() {
    console.log('This is a method I want to expose!');
    }

    var otherMethodIWantToExpose = function() {
    privateMethod();
    }

    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined
```

## Module Formats

Module format, o modülü tanımlayan kullanım şekline (syntax) denir. JavaScript'te bilinen bazı module formatları şunlardır:

 -   Asynchronous Module Definition (AMD)
 -   CommonJS
 -   Universal Module Definition (UMD)
 -   System.register
 -   ES6 module format

JavaScript'te kullanılan en yaygın module formatlar CommonJs ve ES6 module formattır.

### CommonJS

 - Node.js tarafından implemente edilmiştir.
 - 'require' ile import eder.
 - 'module.exports' ile export eder.
 - *tree shanking** yoktur. Doğrudan modülü import eder.
 - Statik analiz yoktur.
 - Sadece server tarafında çalışır.

### ES6 modules

 - Server ve client tarafında çalışabilir. Yine de her browser tarafından desteklenmez.
 - 'import' ile import eder.
 - 'export' ile export eder.
 - Statik analiz yapar. Neyin import neyin export edileceğine kod compile olurken karar verilebilir. Kodun execute edilmesine gerek yoktur.
 - Statik analiz sayesinde tree shanking ve *dead code elimination** mümkündür.
 - Doğrudan modülü import etmek yerine asıl, ilgili value hangisi ise o import edilebilir.
 
 

> **Tree shaking**:  Kod compile olurken ihtiyaç duyulan modülün import edilip ihtiyaç duyulmayan modüllerin export edilmediği, ayıklandığı sisteme denir.
> **Dead Code Elimination**: Kullanılmayan kod ve değişkenlerin ayıklanmasını sağlayan bir sisteme denir. 


