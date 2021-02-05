
# Selecting Elements

## DOM Programlama Arayüzü

-   JavaScript ile Tüm HTML DOM ağacına ulaşabilirsiniz.
-   DOM içinde tüm HTML etiketleri birer nesne (**object**) olarak oluşturulmuştur.
-   Programlama arayüzü her etiket için metot(**method**) ve özellikler(**property**) sunar.
-   Özellik(  **Property**) etiket değeri üzerinde okuma ve değiştirme yapma imkanı sunar.(İçeriği değiştirme gibi)
-   Methot (**Method**) etiket üzerinde eylemler gerçekleştirme imkanı sunar.(Yeni etiketler ekleme gibi)

## HTML DOM document Nesnesi

**document**  nesnesi web sayfasını temsil eder.

Sayfa içindeki her hangi bir elemente ulaşmak için  **document**  nesnesi ile başlamak zorundasınız. HTML etiketleri üzerinde düzenleme yapmak için kullanılan bazı document metotları aşağıda gösterilmiştir.

## HTML Etiketlerini Seçme

-   document.**getElementById**(id):  **id**  niteliği ile eşleşen  **ilk**  kaydı getirir.
-   document.**getElementsByName**(name):  **name**  niteliği ile eşleşen  **tüm** kayıtları dizi olarak getirir.
-   document.**getElementsByTagName**(etiketadı):**etiket adı**  ile eşleşen**tüm** kayıtları dizi olarak getirir.
-   document.**getElementsByClassName**(classAdı):**class**  niteliği ile eşleşen**tüm** kayıtları dizi olarak getirir.
-   document.**querySelector**(seçici):  **seçici**  ile eşleşen  **ilk**  kaydı getirir.
-   document.**querySelectorAll**(seçici):  **seçici**  ile eşleşen **tüm**  kayıtları dizi olarak getir.

Aşağıdaki document özellikleri ile de HTML nesnelerine liste olarak erişebilirsiniz. HTML belgesindeki nesneleri dizi listesi olarak çeker.

_Not:  **body, head, documentElement, title**  tek bir nesneyi döndürür. Diğerleri nesnelerden oluşan bir dizi döndürür._

-   document.**anchors** ⇨ Sayfadaki tüm bağlantıları erişmek için kullanılır.
-   document.**body** ⇨Body nesnesine ulaşmak için kullanılır
-   document.**documentElement**  ⇨HTML kökünden itibaren tüm dökümana ulaşmak için kullanılır.
-   document.**embeds**  ⇨ eklentilere ulaşmak için kullanılır.
-   document.**forms**  ⇨ Sayfadaki formlara ulaşmak için kullanılır.
-   document.**head**  ⇨ head etiketine ulaşmak için kullanılır.
-   document.**images**  ⇨Sayfadaki resimlere ulaşmak için
-   document.**links**  ⇨ Sayfadaki linklere ulaşmak için kullanılır.(**a href**  olan nesneler)
-   document.**scripts**  ⇨ Sayfada yüklenen Script dosyalarına ulaşmak için kullanılır.
-   document.**title**  ⇨ Sayfa başlığına ulaşmak için kullanılır.

**Örnek**: document.**getElementById** kullanımı

    <p id="birinci"> ilk paragraf</p>
    <p name="yazar">ikinci pragraf</p>
    <p>üçüncü paragraf</p>
    <p>dördüncü paragraf</p>
     
    <script>
    
    var nesne= document.getElementById("birinci");
    console.log(nesneler);
    </script>

Element bulunursa, method elementi bir nesne olarak (myElement içinde) döndürür.
Element bulunamazsa eğer null döner.

**Örnek**: document.**getElementsByName** kullanımı

    <p id="birinci"> ilk paragraf</p>
    <p name="yazar">ikinci pragraf</p>
    <p name="yazar">üçüncü paragraf</p>
    <p>dördüncü paragraf</p>
     
    <script>
    
    var nesneler= document.getElementsByName("yazar");
    console.log(nesneler);
    </script>

**Örnek**: document.**getElementsByTagName** kullanımı

    <p id="birinci"> ilk paragraf</p>
    <p name="yazar">ikinci pragraf</p>
    <p name="yazar">üçüncü paragraf</p>
    <p>dördüncü paragraf</p>
     
    <script>
    
    var nesneler= document.getElementsByTagName("p");
    console.log(nesneler); 
    </script>

**Örnek**: document.**getElementsByClassName** kullanımı

    <p id="birinci"> ilk paragraf</p>
    <p class="kutu">ikinci pragraf</p>
    <p class="kutu">üçüncü paragraf</p>
    <p>dördüncü paragraf</p>
     
    <script>
     
    var nesneler= document.getElementsByClassName("kutu");
    console.log(nesneler); 
    </script>


**Örnek**: document.**querySelector** kullanımı

     <p id="birinci"> ilk paragraf</p>
        <p class="kutu">ikinci pragraf</p>
        <p class="kutu">üçüncü paragraf</p>
        <p>dördüncü paragraf</p>
         
        <script>
         
        var nesneler= document.querySelector(".kutu");
        //.kutu ile eşleşen ilk kaydı getirir. 
        //CSS tanımlamasındaki gibi id içinse # kullanılır.
        console.log(nesneler); 
        </script>


**Örnek**: document.**querySelectorAll** kullanımı

    <p id="birinci"> ilk paragraf</p>
    <p class="kutu">ikinci pragraf</p>
    <p class="kutu">üçüncü paragraf</p>
    <p>dördüncü paragraf</p>
     
    <script>
    
    var nesneler= document.querySelectorAll(".kutu");
    console.log(nesne); //.kutu ile eşleşen tüm kayıtları getirir.
    </script>

**Not:** querySelectorAll, Internet Explorer 8 ve önceki sürümlerinde desteklenmemektedir.
