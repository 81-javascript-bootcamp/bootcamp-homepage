# DOMContentLoaded, load, beforeunload, unload

Bir HTML sayfasının yaşam döngüsünün üç önemli olayı vardır.

DOMContentLoaded: Tarayıcı HTML'i tam olarak yükleyip DOM ağacını oluşturur.Ancak resimler <img/> ve stil dosyaları henüz oluşturulmadığında.

Load: Sadece HTML değil sayfanın tüm <img/> ve stil dosyaları oluşturulduğunda.. 
beforeunload/unload: Kullanıcı sayfadan ayrıldığında. 

Her olayın kendi içinde farklı faydaları var;

DOMContentLoaded: DOM hazırdır, böylece işleyici DOM düğümlerini arayabilir, arayüzü başlatabilir.
load: external kaynaklarda yüklenir, stiller uygulanır boyutlar bilinir. 
beforeunload: Kullanıcının değişiklikleri kaydedip kaydetmediğini kontrol edebilir ve onlara gerçekten ayrılmak isteyip istemediğini sorabiliriz.
unload: Kullanıcı giderken yinede istatiktik gibi şeyler göndermek için kullanabilirsiniz.

# DOMContentLoaded

Bu event i yakalamak için addEventListener kullanmalıyız.

```javascript
document.addEventListener("DOMContentLoaded", ready);
// not "document.onDOMContentLoaded = ..."

<script>
  function ready() {
    alert('DOM is ready');

    // image is not yet loaded (unless it was cached), so the size is 0x0
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  }

  document.addEventListener("DOMContentLoaded", ready);
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">

```
Yukarıda örnekte DOMContentLoaded document yüklendiğinde çalışır böylece <img/> dahil tüm dom elemanlarını görebiliriz. Ancak görüntünün yüklenmesini beklemez. Yani alert sıfır boyut gösterir.


# Load

Window nesnesindeki load olayı, stiller, resimler ve diğer kaynaklar yüklendiğinde tetiklenir. 

```javascript
<script>
  window.onload = function() { // same as window.addEventListener('load', (event) => {
    alert('Page loaded');

    // image is loaded at this time
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">
```

Bu kodda image ın size ı ve with i görüntülenir çünkü load yüklenmesini bekler.

# beforeunload
window, document ve kaynaklar kaldırılmak üzereyken tetiklenir. 

Gerçekten sayfadan ayrılıp ayrılmak istemediğini onaylatmak için de kullanılabilir.

window.addEventListener('beforeunload',(event) =>{
    // do something here
});

# UnLoad

Bir ziyaretçi sayfadan ayrıldığında unload eventi tetiklenir. Analitik gönderme, sayfanın nasıl kullanıldığına dair bilgileri (tıklamalar, kaydırmalar, görüntülenen sayfa bilgileri) topladığımızı düşünelim. Kullanıcı sayfadan ayrıldığında bu bilgileri kaydedebiliriz.

Bu tür ihtiyaçlar için bu sayfaya bakabilirsiniz: navigator.sendBeacon(url, data) method for such needs, described in the specification https://w3c.github.io/beacon/.

```javascript
let analyticsData = { /* object with gathered data */ };

window.addEventListener("unload", function() {
  navigator.sendBeacon("/analytics", JSON.stringify(analyticsData));
});

```

# readyState

Document ın hazır olup olmadığını bilemediğimiz durumlar vardır. İşlemimizin şimdi veya daha sonra DOM yüklendikten sonra çalışmasını istediğimizi varsayalım.

document.readyState bize bununla ilgili bilgi verir.

3 olası değeri vardır.

"loading" – document yükleniyor.
"interactive" – document tamamen okundu.
"complete" – document tamamen yüklendi ve tüm kaynaklar yüklendi.

```javascript
function work() { /*...*/ }

if (document.readyState == 'loading') {
  // still loading, wait for the event
  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM is ready!
  work();
```

# CustomEvent()

CustomEvent() yeni bir custom event oluşturur. 

CustomEvent yaratmak için 2 yol vardır.

1-) Event contructor kullanılabilir.
2-) CustomEvent constructor kullanılabilir.

event = new CustomEvent(typeArg, customEventInit);

Birinci argumandaki typeArg, bir string isim olarak geçilmelidir.
İkinci arguman customEventInit ise iletmek istediğiniz özellikleri object olarak ekleyebilirsiniz ve opsiyoneldir.

```javascript
<h1 id="elem">Hello for John!</h1>

<script>
  // additional details come with the event to the handler
  elem.addEventListener("hello", function(event) {
    alert(event.detail.name);
  });

  elem.dispatchEvent(new CustomEvent("hello", {
    detail: { name: "John" }
  }));
</script>
```

```javascript
const myEvent = new Event('myevent', {
  bubbles: true,
  cancelable: true,
  composed: false
})
```
