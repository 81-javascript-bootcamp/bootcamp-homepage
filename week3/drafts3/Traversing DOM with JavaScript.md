
# Traversing the DOM with JavaScript

Document Object Model veya kısaca DOM, web sayfasına öğeler yerleştirirken tarayıcı için bir referans bir örnek görevi görür. DOM'a öğelerin yerleştirildiği konumlara Node (düğüm) denir. Bir Web sayfasındaki öğeleri JavaScript gibi bir programlama diliyle değiştirdiğimizde, bunu DOM düğümleri aracılığıyla yapıyoruz. Belirli bir elemanın bir DOM düğümüne erişerek, konum, görünüm, içerik, davranış, vb. Gibi özelliklerini değiştirebiliriz. Bunu yapmak için, bir düğümden diğer düğümlere geçmenin, yani DOM'u geçmenin bir yoluna sahip olmamız gerekir. İlişkili düğümler arasında JavaScript ile üç şekilde yönde geçiş yapabiliriz.
1- Aşağıya doğru
2- Yukarıya doğru
3- Eşit yönlü

*Aşağı doğru hareket etme:*
DOM'da düğümler arasında aşağı doğru 2 şekilde ulaşabiliriz:
1.  `querySelector`  ya da  `querySelectorAll`
2.  `children`

*querySelector* ve *querySelectorAll* için örneklerimize bakalım.
```html
<div class="component">  
	<h2 class="component-title">Component title</h2>  
</div>
```
```javascript
const component = document.querySelector('.component')  
const title = component.querySelector('.component__title') 
console.log(title)
```

*children* ise, doğrudan bir alt öğeleri seçmenize izin veren bir özelliktir (hemen başka bir öğede iç içe geçmiş öğeler için). aşağıdaki örneğimize bakalım:
```html
<ul class="list">  
	<li><a href="#">Link 1</a></li>  
	<li><a href="#">Link 2</a></li>  
	<li><a href="#">Link 3</a></li>  
	<li><a href="#">Link 4</a></li>  
	<li><a href="#">Link 5</a></li>  
</ul>
```

```javascript
const list = document.querySelector('.list')  
const listItems = list.children 
console.log(listItems)
```

*Yukarı doğru hareket etme*
Yukarı doğru ilerlemenin iki yöntemi vardır:
1.  `parentElement`
2.  `closest`

  *parentELement*, parent elementi seçmenize izin veren bir özelliktir. Parent element, seçilen elemanı çevreleyen en yakın öğedir.
 ```html
<ul class="list">  
	<li><a href="#">Link 1</a></li>  
	<li><a href="#">Link 2</a></li>  
	<li><a href="#">Link 3</a></li>  
	<li><a href="#">Link 4</a></li>  
	<li><a href="#">Link 5</a></li>  
</ul>
```
```javascript
const firstListItem = document.querySelector('li')  
const list = firstListItem.parentElement 
console.log(list)
```

*closest*, bir selectorla eşleşen en yakın üst element öğesini seçmenizi sağlar. örneğimizi inceleyelim:
```html
<ul class="list">  
	<li><a href="#">Link 1</a></li>  
	<li><a href="#">Link 2</a></li>  
	<li><a href="#">Link 3</a></li>  
	<li><a href="#">Link 4</a></li>  
	<li><a href="#">Link 5</a></li>  
</ul>
```

```javascript
const firstLink = document.querySelector('a')  
const list = firstLink.closest('.list') 
console.log(list)
```

Not: closest, o an seçilen öğeden aramaya başlar, ardından document'e ulaşana kadar yukarı doğru ilerler. bulduğu ilk öğeyi döndürür ve durur.

*Eşit yönlü hareket etme*
Eşit yönde hareket etmenin üç yöntemi vardır: 
1.  `nextElementSibling`
2.  `previousElementSibling`
3.  `parentElement`,  `children` ve`index`i birleştirme.

*NextElementSibling* ile bir sonraki elementi seçebilirsiniz.
js
const nextElem = Node.nextElementSibling
```html
<ul class="list">  
	<li><a href="#">Link 1</a></li>  
	<li><a href="#">Link 2</a></li>  
	<li><a href="#">Link 3</a></li>  
	<li><a href="#">Link 4</a></li>  
	<li><a href="#">Link 5</a></li>  
</ul>
```
```javascript
const firstListItem = document.querySelector('li')  
const secondListItem = firstListItem.nextElementSibling 
console.log(secondListItem)
```

Aynı şekilde, *previousElementSibling* ile bir önceki öğeyi seçebilirsiniz.
```html
<ul class="list">  
	<li><a href="#">Link 1</a></li>  
	<li><a href="#">Link 2</a></li>  
	<li><a href="#">Link 3</a></li>  
	<li><a href="#">Link 4</a></li>  
	<li><a href="#">Link 5</a></li>  
</ul>
```

```javascript
const secondListItem = document.querySelectorAll('li')[1]  
const firstListItem = secondListItem.previousElementSibling 
console.log(firstListItem)
```

*parentElement,  children ve index'i birleştirme.*

Bu yöntem, belirli bir sibling (kardeş) seçmenize izin verir. Nasıl çalıştığını bir örnekle açıklamak daha kolay. Aşağıdaki HTML'deki ilk öğeden dördüncü öğeyi seçmek istediğinizi varsayalım.
```html
<ul class="list">  
	<li><a href="#">Link 1</a></li>  
	<li><a href="#">Link 2</a></li>  
	<li><a href="#">Link 3</a></li>  
	<li><a href="#">Link 4</a></li>  
	<li><a href="#">Link 5</a></li>  
</ul>
```
```javascript
const firstItem = document.querySelector('li')  
const list = firstItem.parentElement 
const allItems = list.children 
const fourthItem = allItems[3] 
console.log(fourthItem)`
```
hepsini biraraya getirerek kısaltabiliriz.

```javascript
const firstItem = document.querySelector('li')  
const fourthItem = firstITem.parentElement.children[3] 
console.log(fourthItem)
```
Kısaca toparlamak gerekirse: DOM üzerinde yatay dikey ya da aşağı yönlü hareket ederek belirli düğümlere ve ulaşıp bunlara yeni düğümler ekleyebilir ya da değiştirebiliriz. Bunlara da genel olarak traversing the DOM denir. Umarım açıklayıcı olmuştur.
