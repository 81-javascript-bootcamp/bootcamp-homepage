Genellikle DOM olarak adlandırılan Document Object Model, web sitelerini etkileşimli hale getirmenin önemli bir parçasıdır. Bir programlama dilinin bir web sitesinin içeriğini, yapısını ve stilini değiştirmesine izin veren bir veri temsil aracıdır. JavaScript, tarayıcıda DOM'a bağlanan ve bu işlemleri yapmamıza imkan veren programlama dilidir. 

DOM, bir document'i mantıksal bir ağaç gibi temsil eder. Ağacın her dalı bir düğümde biter ve her düğüm objeler içerir. DOM metodları bu ağaca erişime izin verir. Bu metodlarla document'in yapısını, stilini veya içeriğini değiştirebilirsiniz. Node'lara ayrıca event handlers da eklenebilir. Bir event tetiklendiğinde, event handler execute edilir.

En basit düzeyde, bir web sitesi bir HTML belgesinden oluşur. Web sitesini görüntülemek için kullandığınız tarayıcı, HTML ve CSS'yi yorumlayan ve stil, içerik ve yapıyı gördüğünüz sayfaya işleyen bir programdır.

Tarayıcı, HTML'i parse etme ve CSS'nin stillendirmesine ek olarak, Document Object Model olarak bilinen bir yapı oluşturur. Bu model, JavaScript'in içeriğine ve öğelerine bir obje olarak erişmesine izin verir.
Örneğin:
```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Learning the DOM</title>
  </head>

  <body>
    <h1>Document Object Model</h1>
  </body>

</html>
```
Bu kodu index.html olarak kaydeder ve browserda açıp sağ tıkla inspect ederseniz elements kısmında DOM yapısını göreceksiniz. 

## The Document Object
Document object, web sitelerine erişmek ve bunları değiştirmek için kullanabileceğimiz birçok özelliğe ve metoda sahip built-in bir objedir. DOM ile nasıl çalışılacağını anlamak için, objelerin JavaScript'te nasıl çalıştığını anlamanız gerekir. 

İndex.html adresindeki developer tools bölümünde, Console sekmesine gidin. konsola document yazın ve ENTER tuşuna basın. Çıktının elements sekmesinde gördüğünüzle aynı olduğunu göreceksiniz.

Şu anda, bu örnekle, HTML kodu ve DOM'un tamamen aynı şey olduğu görülmektedir. Tarayıcı tarafından oluşturulan DOM'un HTML kaynak kodundan farklı olacağı iki örnek vardır:

1- DOM, client side tarafında JavaScript tarafından manipüle edilip değiştirilebilir.
2- Tarayıcı, kaynak koddaki hataları otomatik olarak düzeltir.

DOM örneğini JavaScript tarafından manipüle edebilmek için bir örnek yapalım.
Konsola document.body yazalım. 
```html
<body>
  <h1>Document Object Model</h1>
</body>
```
çıktısı yukarıdaki gibi olacaktır.  Document bir objedir, body ise o objenin nokta notasyonu ile eriştiğimiz bir özelliğidir. document.body'yi konsola göndermek, gövde elemanını ve içindeki her şeyi ortaya çıkarır.
örneğin 
```bash
document.body.style.backgroundColor =  'fuchsia'
```
yazarsak background rengini değiştirebiliriz. Şuanda yazdığımız kod DOM'un bir parçasıdır. 

Toparlamak gerekirse Document Object Model (DOM), bellekte bir document'in yapısının (bir web sayfasını temsil eden HTML gibi) bir temsilini oluşturarak web sayfalarını script veya programlama dillerine bağlar. 
