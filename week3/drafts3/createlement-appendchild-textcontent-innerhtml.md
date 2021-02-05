# TextContent

TextContent özelliği, belirtilen düğümün metin içeriğini ve tüm alt öğelerini ayarlar veya döndürür.
Varolan bir içeriği değiştirebilir veya boş bir elementi string(metinsel) içerik ile doldurabilirsiniz.

*var x = document.getElementById("myBtn");*
*x.textContent="selamlar";*


# CreateElement

HTML nesnesi oluşturmak için kullanılır.
CreateElement () yöntemi, belirtilen ada sahip bir Öğe Düğümü oluşturur.
eleman oluşturulduktan sonra kullanmak eleman .appendChild () veya eleman .insertBefore () belgeye eklemek için bir yöntemdir.

*var btn = document.createElement("BUTTON");*
*btn.innerHTML = "CLICK ME";*                  



# AppendChild

AppendChild () yöntemi, bir düğümün son çocuğu olarak bir düğüm ekler.
Metin içeren yeni bir paragraf oluşturmak istiyorsanız, metni paragrafa eklediğiniz bir Metin düğümü olarak oluşturmayı ve ardından paragrafı belgeye eklemeyi unutmayın.
Bu yöntemi, bir öğeyi bir öğeden diğerine taşımak için de kullanabilirsiniz (bkz. “Diğer Örnekler”).
İpucu: Belirtilen, var olan bir alt düğümden önce yeni bir alt düğüm eklemek için insertBefore () yöntemini kullanın.

*document.body.appendChild(btn);*



# İnnerHTML

innerHtml özellik, HTML belge üzerinde dinamik html yazmak için kullanılabilir.
Daha çok web sayfalarında kayıt formu, yorum formu, linkler vb. Dinamik html oluşturmak için kullanılır.

*document.getElementById(“demo”).innerHTML = “Paragraph changed!”;*

# İnsertBefore

İnsertBefore () yöntemi, sizin belirttiğiniz mevcut bir alt öğenin hemen önüne alt öğe olarak bir düğüm ekler.
Metin içeren yeni bir liste öğesi oluşturmak istiyorsanız, metni "li" öğesine ekleyeceğiniz Metin düğümü olarak oluşturmayı ve ardından listeye "li" eklemeyi unutmayın.
Mevcut bir öğeyi eklemek / taşımak için insertBefore yöntemini de kullanabilirsiniz.

*var node = document.getElementById(“myList2”).lastChild;*
*var list = document.getElementById(“myList1”);*
*list.insertBefore(node, list.childNodes[0]);*