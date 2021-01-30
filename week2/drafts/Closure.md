# Closure

Namı değer Closure, diğer adıyla backpack'ten size bu yazıda bahsetmeye çalışacağım. Öncelikle aralarda bahsi geçen bazı kavramları biliyor olduğunuzu varsayarak bu yazıyı yazdığımı belirtmek isterim. Örneğin:  **Global Memory**,  **Heap**,  **Call Stack**,  **Execution Context**... Evet artık hazırsanız başlayabiliriz.

Ben bu konudan bahsederken backpack terimini kullanmayı daha yararlı görüyorum. Bu yüzden metafor olarak bunu kullanarak devam edeceğim bu yazıda.

Peki nedir bu Backpack?

Bildiğiniz gibi herhangi bir fonksiyon execute edildiği anda (çağırıldığında) kendi Execution Context'ini ve beraberinde Local Memory'sini yaratır. Bunu bir mini program gibi düşünebiliriz. En dışta her zaman Call Stack'in en altında bulunan ve her şeyden önce oluşturulan Global Execution Context gelir. Burada globalde tanımlı variable ve function'larımız bulunur. Bu context içerisinde çağrılan her fonksiyon çağrılma sırasına göre Call Stack'e push edilir. Ve en son çağırılan function önce işleme alınır (LIFO - Last In First Out). İşleme alınan function işi bittiğinde yani return olduğu anda Call Stack'ten pop edilir ve Garbage Collector tarafından memory'den silinir. Bu da demek oluyor ki, bizim mini program gibi çalışan functionlarımız'ın içerisinde bulunan ve local memory'i de tutulan (local state) datalarımız da silinmiş olur. Kod üzerinde inceleyerek devam edelim;

```javascript
function createFunction() { 
  function multiplyBy2(num) { 
	return num * 2; 
  } 
  return multiplyBy2; 
} 
const generatedFunc = createFunction(); 
const result = generatedFunc(3); // 6 
```
Bildiğiniz üzere JavaScript'te bir fonksiyon başka fonksiyonu return edebilir. Bu örnekte  **createFunction**  fonksiyonu çağırılıyor ve  **multiplyBy2**  fonksiyonunu Global Memory'de bulunan  **generatedFunc**  değişkenine atıyor. Burada kilit nokta;  **generatedFunc**  ile  **createFunction**  arasında herhangi bir bağlantı olmayışıdır.  **generatedFunc**  sadece  **createFunction**'ın tek çağırımlık bir sonucudur. JavaScript'in sekron çalışmasından dolayı generatedFunc bir kez çağırılıp herhangi bir değer return ettikten sonra (Bu örnekte 6 değeri return ediliyor) memory'den local memory'sinde bulunan  **num**  (Bu örnekte num = 3) değeriyle birlikte silinecek. Tekrar çağırıldığında da sıfırdan oluşturulacak ve local memory'si de haliyle yeniden oluşturulmuş olacak.

Peki ben fonksiyonumun çağırılmasından sonra önceki çağırımını hatırlamasını istiyorsam ne olacak?

Yani function'ım return olsun ama içerisinde kendisine ait olan datalar kaybolmasın. Tekrar bu function'ı çağırdığımda önceki çağırımını hatırlasın istiyorum. Bir nevi function'a kalıcı bir hafıza (cache/persistent memory) kazandırmak istiyorum diyebiliriz. Burada aslında Backpack'in daha uzun adını da sizinle paylaşmak ve isim üzerinden ilerlemek isterim.

### Persistent Lexical Scope Reference Data (P.L.S.R.D)

Aslında bu uzun ama bir o kadar da Closure'u açıklayan bir tanımlama. Örnek kod üzerinden ilerleyerek devam edelim.
```javascript
function outer() { 
  let counter = 0; 
  function incrementCounter() { 
    counter++; 
  } 
  return incrementCounter; 
} 
const myFunction = outer(); 
myFunction() // 1 
myFunction() // 2
```
Kodu satır satır inceleyecek olursak; Global Memory'de bir  **outer**  fonksiyonum ve henüz undefined durumunda olan  **myFunction**  adında bir değişkenim var.  **outer**  fonksiyonu çağrılıyor bu da demek oluyor ki kendi Execution Context'i oluşacak. Aynı zamanda fonksiyon Call Stack'e de eklenecek. Bu şekilde Call Stack yardımıyla JS Engine bizim işlemlerimizin sırasını da takip etmiş oluyor.

Kodda gördüğümüz üzere  **outer**  fonksiyonu,  **incrementCounter**  adında bir fonksiyonu kendi scope'unda tanımlayıp sonrasında return ediyor. Daha sonra bu return olan  **outer**  fonksiyonu Call Stack'ten çıkarılıyor ve Garbage Collector tarafından temizleniyor. Yani artık daha sonra dönüp bakabileceğim outer'a ait bir Execution Context'im yok. Devamında dönen  **incrementCounter**  fonksiyonunu  **myFuncion**  adında başka bir değişkene atıyoruz. Burada  **myFunction'ının**  ilk çağırımında  **1**, ikinci çağırımında  **2**  değerini elde ediyoruz. Bu da demek oluyorki  **myFunction**  önceki değerini hatırlayan kalıcı bir hafızaya (state'te) sahip. İşte bu nokta da tanıma tekrar dönebiliriz.

**incrementCounter**  fonksiyonu return olurken beraberinde Lexical Scope'unda ne varsa hepsini  **Backpack**'ine atıyor. Lexical Scope'unda  **counter = 0**  değeri mevcut. Bunu  **[[scope]]**  adında bir hidden property'nin içerisine alarak  **reference**'ını heap'e taşımış oluyor. Artık benim globalde erişebileceğim  **incrementCounter**'e ait kalıcı bir değerim mevcut. Ve ben bu fonksiyonu ne zaman çağırırsam önce kendi scope'una bakacak ve orada counter'ı bulamayıp bir üst scope olan Global Scope'una gidecek. Backpack'ine bakacak ve oradan counter'a erişip gerekli işlemleri gerçekleştirebilecek.

Closure'u kullandığımız bir çok alan var. Bunlardan bazıları:

-   Iterator ve Generator'lar
-   Module Pattern
-   Asynchronous JavaScript (Callback ve Promise'ler)
-   Functional Programming (Curriying)

Bu konu anlat anlat bitmez. O yüzden bir yerde noktalamam gerekiyor 🙂 Bu sebeple daha fazla devam etmiyorum. Fakat bu yazıyı okurken "bu ne ya ilk kez duydum" dediğiniz şeyler varsa ve bunları araştırmanıza vesile olduysam ne mutlu bana. İyi kodlamalar 😇
