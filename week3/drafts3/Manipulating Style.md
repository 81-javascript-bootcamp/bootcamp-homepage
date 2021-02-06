## Manipulating Style

### Stiller ve Sınıflar (Styles and Classes)
JavaScript'in stil ve sınıflarla etkileşimine girmeden önce bir öğeyi biçimlendirmenin iki yolu olduğunu bilmek gerekiyor.
1. CSS içinde bir **class** oluşturmak ve bunu öğeye eklemek: `<div class="...">`
2.  Doğrudan öğenin içine **style** ile yazmak: `<div style="...">`

Her zaman **style** kullanmak yerine **class** kullanımını tercih etmeliyiz. **Style** kullanımını, yalnızca **sınıflar** çok karıştığında ve işin içinden çıkamadığımız durumlarda kullanmalıyız.

JavaScript hem **sınıfları(class)** hem de **style** özelliklerini değiştirebilir. Örneğin bir öğenin koordinatlarını dinamik olarak hesaplayıp, bunları JavaScript kullanarak ayarlamak istiyorsak aşağıdaki gibi **style** kullanılabilir:

```javascript
let top = /* kompleks hesaplamalar */;
let left = /* kompleks hesaplamalar */;

elem.style.left = left; 
elem.style.top = top;
```

Metni kırmızı yapmak, arkaplan simgesi eklemek gibi durumlarda, bunları CSS üzerinde tanımlayıp bunu öğeye ekleyebiliriz. Bu daha esnek ve düzenlenmesi kolaydır. Bunu JavaScript ile de yapabiliriz. 

### className ve classList
Bir öğenin sınıfını değiştirmek, *script* dosyalarında en sık kullanılan eylemlerden biridir.

Eskiden JavaScript'te bir sınırlama vardı: **class** gibi  ayrılmış kelimeler bir nesnenin özelliği olamazdı. Bu sınırlama şu an mevcut değil, fakat bu sebepten dolayı sınıflar için benzer görünümlü bir özellik olan **className** tanıtıldı. ~~elem.class~~'a karşılık olarak `elem.className` kullanılmaktadır.

Örneğin:
```html
<body class="main page">
  <script>
    alert(document.body.className); //main page
  </script>
</body>
```

Eğer `elem.className` şeklinde bir atama yaparsak, bu tüm sınıf dizilerinin yerini alır. Bazen ihtiyacımız olan bu olsa da, çoğu zaman tek bir sınıf eklemek/kaldırmak isteriz. Bunun için kullanılan başka bir özellik bulunmaktadır: **classList**. 

**classList**, ekleme/çıkarma/değiştirme yöntemlerini içeren özel bir nesnedir.

Örneğin:
```html
<body class="main page">
  <script>
    // class ekleme
    document.body.classList.add('article');
    alert(document.body.className); // main page article
  </script>
</body>
```

Bu özellikleri kullanarak ister sınıf dizesini tümden değiştirebilir -**className**- ya da sınıf dizesi içinde tek tek değişiklik yapabiliriz -**classList**-. Neyi seçeceğimiz tamamen ihtiyaçlarımıza bağlıdır.

`classList` methodları aşağıdaki gibidir:

- `elem.classList.add/remove("class")` => Sınıf ekleme veya silme
- `elem.classList.toggle("class")` => Eğer yoksa sınıfı ekler, varsa kaldırır.
- `elem.classList.contains("class")` => Verilen sınıfın olup olmadığını kontrol eder ve **true/false** döner.

### getComputedStyle

Bir stili değiştirmek basittir fakat bir öğe üzerinde bulunan stil özelliklerini nasıl okuyabiliriz?

CSS sınıflarından gelen hiçbir şeyi `elem.style` kullanarak okuyamayız. `style` sadece bir atama için kullanılabilir.

Örneğin:
```html
<head>
  <style> body { color: red; margin: 5px } </style>
</head>
<body> 
  The red text 
  <script> 
    alert(document.body.style.color); // empty
    alert(document.body.style.marginTop); // empty 
  </script>
</body>
```

Peki bir nesnenin CSS özelliklerini (örneğin margin değeri) nasıl öğrenebiliriz? 

Bunun için `getComputedStyle` metodunu kullanmamız  gerekiyor.

Syntax:
```javascript
getComputedStyle(element[,pseudo])
```

*element*
Değeri okunacak nesne.

*pseudo(Opsiyonel)*
Eşleşecek sözde nesneyi belirten bir dize. Örneğin ::before.

```html
<head>
  <style> body { color: red; margin: 5px } </style>
</head>
<body> 
  <script>
    let computedStyle = getComputedStyle(document.body);
    // Artık margin ve rengini okuyabiliriz.
    alert(computedStyle.marginTop); // 5px
    alert(computedStyle.color); // rgb(255,0,0) 
  </script>
</body>
```

### getBoundingClientRect

**getBoundingClientRect()** yöntemi, bir öğenin boyutunu ve görünen alanına göre konumunu döndürür. Bu yöntem ile bir nesnenin 8 farklı özelliğine ulaşabiliriz: *sol, üst, sağ, alt, x, y, genişlik, yükseklik*.

Kullanımı: `document.getElementById('foo').getBoundingClientRect();`
Burada *getElementById()* ile koordinatlarını bulmak istediğimiz nesneyi belirliyoruz. Daha sonrasında *getBoundingClientRect()* yöntemi ile nesnenin koordinatlarını almış oluyoruz.

Örnek:
```html
<body>
  <div id="hello">Hello World</div>
  <script>
    const helloElement = document.getElementById('hello');
    const results = helloElement.getBoundingClientRect();
  </script>
</body>
```
```
Output{
  top: 450,
  left: 400,
  right: 825,
  bottom: 500,
  x: 400,
  y: 450,
  width: 425,
  height: 50
}
```
Bu bilgileri, diğer nesneleri buna göre konumlandırmak, nesneleri hareketlendirmek(animasyon) ve daha fazlası için kullanabilirsiniz.
