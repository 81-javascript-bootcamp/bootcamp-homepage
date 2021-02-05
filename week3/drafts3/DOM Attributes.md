# DOM Attributes

JavaScript'te HTML elemanları oluşturabildiğimiz gibi oluşturduğumuz elemanların attribute değerleri ile ilgili işlemler yapmamız da mümkün. 

Örneğin bir attribute oluşturmak ya da var olan attribute değerini güncellemek için **`setAttribute()`** metodunu, elemanın sahip olduğu attribute değerini öğrenmek için **`getAttribute()`** metodunu, elemanın belli bir attribute değerine sahip olup olmadığını kontrol etmek için **`hasAttribute()`** metodunu ya da var olan bir attribute değerini silmek için **`removeAttribute()`** metodunu kullanabiliriz.

Şimdi bu metodlara yakından bakalım. 

## setAttribute() Kullanımı;

Belirtilen elemanın attribute değerini ayarlamak için kullanılan yöntemdir. Belirtilen ad ve değer ile yeni bir attribute ekler ya da var olan attribute değerini güncellemeye yarayan yöntemdir. 

### Kullanım Şekli ;

```
element.setAttribute(name, value)

```

### Örnek Kullanım;

Alttaki örnekte HTML içindeki `<button>` elementine **`setAttribute()`** kullanarak bir attribute ekleyelim. 
  
```  
HTML

<button>Hello World</button>	

JavaScript

let b = document.querySelector("button");
b.setAttribute("name", "helloButton");

console.log (b);  // <button name="Hello World">Hello World</button>

``` 

## getAttribute() Kullanımı;

**`getAttribute()`** elementte belirtilen attribute değerini döndürür. Eğer seçilen elementte istenen attribute değeri yoksa döndürülen değer "null" ya da "" (boş dizi) olacaktır.

### Kullanım Şekli ;

```
element.getAttribute(name)

```

### Örnek Kullanım;

Alttaki örnekte HTML içinde bulunan bir `<div>` elementinin attribute değerine **`getAttribute()`** kullanarak erişmeye çalışalım.

```
HTML

<div id="div1">Hi Champ!</div>
  
JavaScript

// in a console
const div1 = document.getElementById('div1');

//=> <div id="div1">Hi Champ!</div>
const exampleAttr= div1.getAttribute('id');

//=> "div1"

const align = div1.getAttribute('align')

//=> null
```

## removeAttribute() Kullanımı;

Bir elementin belirtilen attribute değerini kaldırmak için **`removeAttribute()`** yöntemini kullanırız.

### Kullanım Şekli ;

```
element.removeAttribute(attrName);

```

### Örnek Kullanım;
Alttaki örnekte HTML içinde bulunan bir `<div>` elementinin attribute değerini **`removeAttribute()`** kullanarak silmeye çalışalım.

```
HTML

<div id="div1" align="left" width="200px">

JavaScript

document.getElementById("div1").removeAttribute("align");

<div id="div1" width="200px">

```

## hasAttribute() Kullanımı;
**`hasAttribute()`** yöntemi ile belirlenen bir elementin istediğimiz bir attribute değerine sahip olup olmadığını kontrol edebiliriz. İstenen attribute değeri elementte varsa "true" yoksa "false" değeri döndürür.


### Kullanım Şekli ;

```
element.hasAttribute(attrName);

```

### Örnek Kullanım;
Alttaki örnekte HTML içinde bulunan bir `<a>` elementinin target isimli attribute sahip olup olmadığını kontrol edelim. Sahip olduğu durumda true döneceği için bu sonucu if statement içinde kullanarak attribute değerini değiştirmeye çalışalım.
  
```  
HTML

<a id="test" href="" target="_blank">google.com</a>

JavaScript

var x = document.querySelector("#test"); 

 if (x.hasAttribute("target")) { 
 
    x.setAttribute("target", "_self");
}
```

Kaynak : developer.mozilla.org
