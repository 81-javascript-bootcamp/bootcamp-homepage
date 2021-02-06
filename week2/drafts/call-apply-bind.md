
**Call ve Apply**

Call ve Apply fonksiyonları Function objemizin __proto__ objesinde bulunan iki adet fonksiyondur. Bu fonksiyonların görevleri aynı olsa da kullanımları arasında ufak bir fark vardır. Şimdi ilk olarak Mozilla’nın dokümanlarından bu fonksiyonların ne iş yaptığını anlamaya çalışalım.

> **Call() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan bağımsız argümanlarla bir fonksiyonu çağırır. Argümanlar fonksiyona tek tek gönderilir. (Örnek: test(obj,arg1,arg2,arg3))**
> 
> **Apply() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan değişkenlerle bir fonksiyonu çağırır. Argümanlar fonksiyona argüman listesi şeklinde gönderilir. (Örnek: test(obj,[arg1,arg2,arg3]))**

Yani anlaşılacağı üzere ikisinin görev tanımı aynı tek farkı Call fonksiyonu için kaç parametre varsa onların hepsini tek tek yazmamız gerekiyor. Apply için ise parametreye bir dizi verilebilir.
Bu fonksiyonların ne yaptığını anlamak için şu örneğimize bakalım.

    const obj1 = {
        number1: 10,
        number2: 20,
    }
    const obj2 = {
        number1: 30,
        number2: 50,
    }
    function addNumbers(num){
    		console.log(this.number1 + this.number2 + num );
    }
    addNumbers(100); // NaN

Buradaki çıktının neden  **_NaN olduğuyla_** ilgili bir fikri olan var mı ? Fikri olmayanlar için açıklamak gerekirse, şu anda global scope’ta bulunan objemiz window objesi olduğu için ve this anahtar kelimesi bu objeyi gösterdiği için bu sonucu aldık. Window objesinin içinde number1 veya number2 şeklinde property bulunmuyor. Bu nedenle aslında “undefined + undefined + 100” gibi bir toplama yapıyoruz ve bunun sonucunda “NaN” sonucunu elde ediyoruz.

Peki bu örnekte addNumbers fonksiyonunun hem obj1 hem de obj2 objesi için çalışmasını istersek ne yapabiliriz ? İşte burada yardımımıza  **call ve apply fonksiyonları** koşuyor. Burada, yukarıdaki tanımlara göre call veya apply fonksiyonlarını kullanırsak this anahtar kelimesi, call fonksiyonuna hangi objeyi argüman olarak gönderirsek onu gösterecektir.

    const obj1 = {
        number1:10,
        number2:20
    }
    const obj2 = {
        number1:30,
        number2:50
    }
    
    function addNumbers(num) {
        console.log(this.number1 + this.number2 + num);
    }
    
    addNumbers.call(obj1,100); // 10+20+100 = 130
    addNumbers.call(obj2,100); // 30+50+100 = 180

Burada call metoduna birinci argüman olarak **obj1'i** gönderdiğimizde this anahtar kelimesi bu objeyi gösterdiği için sonucumuz 130 çıktı. Aynı şekilde, **obj2'i** gönderdiğimizde de 180 sonucunu aldık. Yani, bir fonksiyonu call fonksiyonuyla farklı objeler ile kullanabildik.

Başka bir örnekle devam edelim. 

    var person = {  
    fullName: function(city, country) {  
    return`${this.firstName} ${this.lastName}, ${city} ${country}`
	    },
    }
    var person1 = {  
    firstName:"John",  
    lastName: "Doe"  
    }  
    person.fullName.call(person1, "Oslo", "Norway"); // John Doe,Oslo,Norway

Görüleceği üzere fonksiyonu call ile çağıracağımız zaman bütün parametreleri tek tek yazmamız gerekiyor.  Az parametre olduğunda çok sorun yok gibi peki boyutu 100 olan bir veri bütünü olsa hepsini tek tek elle mi yazmalıyız? Bu konuda bize Apply yardımcı oluyor.

    var person = {
      fullName: function(age,city, country) {
        return`${this.firstName} ${this.lastName},${age}, ${city} ${country}`
      }
    }
    var person1 = {
      firstName:"John",
      lastName: "Doe"
    }
    var otherInformations = ["26","Oslo", "Norway"]
    
    person.fullName.apply(person1, otherInformations );//John Doe,26, Oslo,Norway
    

**Bind Fonksiyonu**

Bind fonksiyonu da mantık olarak call ve apply fonksiyonlarına oldukça fazla benzer. Ancak kullanım olarak bu fonksiyonlardan farklıdır. 
> **Bind() fonksiyonu, içine verilen objeye göre yeni bir fonksiyon kopyası yaratır. Oluşan bu kopya fonksiyonu daha sonradan argüman listesi ile beraber gönderilen objeye kullanabiliriz.**

 Anlamak için örneğimize bakalım.

    const obj1 = {
        number1:10,
        number2:20
    };
    
    function getNumbersTotal(number3,number4) {
        return this.number1 + this.number2 + number3 + number4;
    }
    /* obj1'i this parametresinin göstereceği şekilde 
    bağlayarak yeni bir fonksiyon oluşturuyoruz.
    */
    
    const copyFunc = getNumbersTotal.bind(obj1);
    
    console.log(copyFunc(30,40)); //100



Burada da bind fonksiyonunun kullanımını görüyoruz. Aslında mantık olarak call ve apply’a benzese de yapı olarak epey farklı. Call ve Apply fonksiyonları bir fonksiyonu hemen çalıştırırken, bind fonksiyonu bize yeni bir kopya üretmektedir. Oluşturulan bu kopyayı ise istediğimiz herhangi bir bağlamda(context) kullanabiliriz.

Aklınızda şu şekilde bir sorunun döndüğünü tahmin ediyorum.

> **“Bind, Call ve Apply mantık olarak aynıysa hangisini nerelerde kullanacağım ?”**

Javascript’e yeni başlayanların bu soruyu sorması oldukça normal. Cevabını şu şekilde verebiliriz.

> **Bind fonksiyonundan, fonksiyonumuzu başka bir bağlamda daha sonradan kullanabilmek adına yararlanabiliriz (örnek,Javascript Olayları — JS Events). Call ve Apply Fonksiyonlarını ise bir fonksiyonu hemen bir obje ile çağırmak için kullanabiliriz.**

