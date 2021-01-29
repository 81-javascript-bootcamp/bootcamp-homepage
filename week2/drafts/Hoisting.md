# JavaScript Hoisting Nedir?


Hoisting , kod yürütmeden önce değişkenlerin ve işlev bildirimlerinin kapsamlarının en üstüne taşındığı bir JavaScript mekanizmasıdır. 
Kaçınılmaz olarak bu, işlevlerin ve değişkenlerin nerede bildirildiğine bakılmaksızın, kapsamlarının(scope) global veya yerel olmasına bakılmaksızın kapsamlarının en üstüne taşındıkları anlamına gelir.
Javascript'te değişken tanımlamanın 3 farklı yolu vardır :


-Let
-Const
-Var


Hoisting kavramı 'Var' ile değişken tanımlamalarında kullanılmaktadır.

# Örnek

Gördüğünüz örnekte ilk önce kodumuzdaki fonksiyonu çağırsak da, fonksiyon yazılmadan önce kod hala çalışır.
Bunun nedeni, bağlam yürütmenin JavaScript'te nasıl çalıştığıdır.

Hoisting, diğer veri türleri ve değişkenlerle iyi çalışır. Değişkenler bildirilmeden önce başlatılabilir ve kullanılabilir.


catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}


# Örnek 2

console.log(num); // num değişkenini yukarıda tanımlamamıza rağmen var ile tanımladıgımız icin döndürür. 
var num; // Declaration
num = 6; // Initialization