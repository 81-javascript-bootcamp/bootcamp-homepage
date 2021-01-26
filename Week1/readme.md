##Gelecek hafta hazırlık

```js
for(var i = 1; i<=10; i = i + 2){ console.log("Guncel deger", i); }

for(let i = 1; i<=10; i = i + 2){ console.log("Guncel deger", i); }

```
##var kullanıldığı zaman block scope dışında değişkene erişim sağlanabilir.
##let kullanıldığında block scope dışında değişkene erişim sağlanamaz. Erişim sağlanmaya çalışıldığında i is not defined hatası alırsınız.
<br />

---

#İşin rengini değiştirmek için şöyle bir örneğe göz atabiliriz.

```js
for(var i = 1; i<=10; i++){
    setTimeout(function(){
        console.log("Guncel deger", i);    
    }, 500);
    
}

for(let i = 1; i<=10; i++){
    setTimeout(function(){
        console.log("Guncel deger", i);    
    }, 500);
}

```
##Yukarıda yer alan örnekte işin içine hoisting kavramı ve  setTimeout çalışma mantığı giriyor.
##JavaScript'teki setTimeout işlevi genellikle argüman olarak bir callback işlevi alır. Callback işlevi, başka bir işlevin çalışması bittikten sonra çalıştırılan bir işlevdir. Bu durumda, for döngüsü bittikten sonra çalışacaktır. Let çalışma zamanında oluşturulduğu için i değerini sürekli artan bir şekilde konsola basar. Fakat var  ile tanımlanan değişken henüz derlenme aşamasında bir kez oluşturulduğu için döngü bittikten sonra setTimeout çalışacak ve i 'nin en son ki değerini konsola basacak.