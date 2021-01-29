# Execution Context

Execution Context, JavaScript engine'in JavaScript kodunu okumak için oluşturduğu ve kodun çalıştırıldığı ortama dair bilgilerin tutulduğu soyut kavrama denir.

Bir JavaScript kodu çalıştığında öncelikle bilgiler **_memory_** denilen bir yerde tanımlanır ve daha sonra sırasıyla **_execute_** edilir. Bu ilk etapta olan tanımlama global ortamda gerçekleşeceğinden buna **global execution context** denir.

Herhangi bir fonksiyon çağırıldığında ise yeni bir execution context oluşur. Bu yeni oluşturulan ortamdaki bilgilerin tanımlanması ve excute edilmesine ise **local execution context** denir.

Bir execution context 2 fazdan oluşur:

1.  Creation Phase
2.  Execution Phase

### Memory Creation Phase

Bu fazda üç şey meydana gelir:

1. Scope belirlenir
2. Scope Chain belirlenir
3. `this` değerine karar verilir

- İlk etapta scope belirlenir. JavaScript'te bir kodun çalıştırılması için öncelikle o kodun ait olduğu ortam taranır. Kodun global ortamda mı yoksa bir fonksiyon tarafından üretilmiş local bir contextte mi çalıştırıldığına bakılır. Bu scope bilgi contextte tutulur.

![enter image description here](https://ui.dev/post-images/global-variables-in-creation-phase.png)

\*İkinci etapta ise scope chain belirlenir. Bunun için aşağıdaki kodu inceleyebiliriz.

    var num = 3;

    function foo() {
      var num = 6;
      function bar() {
        return num * 2;
      }
        return bar();
    }

    foo(); // 12

Burada ilk olarak global execution context tanımlanacaktır. Window ve this gibi global object değerleri belirlendikten sonra num ve foo fonksiyonlarının değerleri tanımlanacaktır.

`foo()` fonksiyonu çağırıldığı andan itibaren foo için yeni bir execution context oluşturulacaktır. Bu contextin içerisinde ise num ve bar() değerleri tanımlanacaktır.

`bar()` fonksiyonuna return edildiğinde yani bu fonskiyon çağırıldığında ise bar fonksiyonu için yeni bir context oluşturulacak ve buradaki variableların değerleri belirlenecektir. `bar()` fonksiyonundaki num değeri artık global scopetaki num değeri değil foo fonksiyonundaki num değeri yani 6 olur. Scope chain, `bar()` fonksiyonundaki num değerinin 6 olduğuna karar vermek adına parent ve children scopelara bakılmasıdır.

[![image](https://www.linkpicture.com/q/Screen-Shot-2021-01-29-at-17.56.33.png)](https://www.linkpicture.com/view.php?img=LPic6014247b679dc716004883)

- Üçüncü olarak this değeri belirlenir. Global ortamda this değeri global objecte eşitken bir functional execution contextte o fonskiyonun scopeuna bağlı tanımlanır. **_this_** in değeri belirlenirken referans alınan şey ait olduğu fonksiyon olur.

### Execution Phase

Yukarıdaki örneklerde de görüldüğü gibi JavaScript engine her bir işlemi tek tek ve sırasıyla yapar. JavaScript engine her zaman tek bir contexti execute eder.

Herhangi bir fonksiyon çağırıldığında execution context globalden çıkar ve o fonksiyonu execute etmek için yeni bir context oluşturur. Oradaki tanımlama ve execution sürecinin bitmesini bekler ve oradaki süreç ancak tamamen bittiğinde global ortamına geri döner. Bütün işlemleri sırayla yapması ve aynı anda sadece bir tek context işleyecek şekilde execution thread oluşturması nedeniyle JavaScript **_single-threaded_** olarak tanımlanır.

# Call Stack

JavaScript single-threaded bir dil olduğu için her seferinde tek bir fonksiyon execute edilmektedir. Bir JavaScript kodu çalıştırıldığında bütün fonksiyonların çağırıldığı (call) ve depolandığı (stack) ortamı anlamamıza yarayan soyut kavrama **_call stack_** denir. Call stacke giren bütün fonksiyonlar yukarıdan aşağı sıralanır ve sırası ile en son giren fonskiyon ilk önce çıkar, buna **_Last In First Out (LIFO)_** da denmektedir. Her şeyin tek tek ve sırayla işlenmesi nedeniyle call stack aynı zamanda **_senkron_** bir yapıdadır. Bu sebeple JavaScript de single-threaded ve senkron bir dil olarak tanımlanmaktadır.

![enter image description here](https://res.cloudinary.com/media-resource/image/upload/v1563577182/babscraig.com/call_stack_u2vvsi.jpg)

Call stack kavramını anlamak JavaScript'te asenkronluğu anlamak için de oldukça önemlidir.

Örnek olarak aşağıdaki kodu inceleyebiliriz.

    function first() {
        console.log("first");
    }
    function second() {
    	setTimeout(function() {
    		console.log("second");
    	}, 5000);
    }
    first();
    second();
    console.log("third");
    //first
    //third
    //second

Burada fonksiyonlar çağırılma sırası ile call stacke eklenip, last in first out kuralı ile execute edilir. Bu sebeple öncelikle `first()` fonksiyonu call stacke girer ve execute edilerek çıkar. Daha sonra `second()` fonksiyonu girer ancak second fonksiyonunda çağırılan `setTimeout` fonksiyonu asenkronluğu sağlayan bir Web API'dır. Bu fonksiyon ilk parametre olarak bir callback fonksiyonu alır. İkinci olarak da milisaniye cinsinden bir zaman değeri alır. `second()` fonksiyonu execute edilip call stackten çıkacaktır ancak içerisindeki setTimeoutta çağırılan callback fonksiyonu, **_callback queue_** denilen önce girenin önce çıktığı (_first in first out_) başka bir ortamda tutulur. Son olarak da `third()` fonksiyonu callback stacke girip execute edilir ve çıkar.

First ve third fonksiyonlarının return ettiği değerler direkt olarak execute edildiği için "first" ve "third" console'a basılır. setTimeout() fonksiyonundaki callback, browser tarafında işlenmeye devam edilmektedir ve belirlenen süre dolduğunda yani 5 saniye geçtiğinde callback queue'ya alınır.

Callback queue'ya bir fonksiyon geldiğinde orayı sürekli dinleyen ve oradaki fonksiyonların execute edilmesinden sorumlu olan bir **_event loop_** mekanizması vardır. setTimeout() ile 5 saniye sonra callback queueya geleceği sözü verilen callback fonksiyonu buraya geldiğinde event loop tetiklenir ve fonksiyon execute edilir. JavaScript'te asenkronluk bu şekilde sağlanır.

![enter image description here](https://res.cloudinary.com/media-resource/image/upload/v1563577216/babscraig.com/event_loop_mirspd.jpg)

> Call stack sonsuz sayıda fonksiyon almamaktadır. Kendi kendini tekrar eden (recursive) bir fonksiyon çağırıldığında ve durdurulmadığında **_stack overflow_** hatası alınacaktır.
