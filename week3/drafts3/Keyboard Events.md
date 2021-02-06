Olaylar HTML elemanlarının kullanıcı ya da Web Apileri ile etkileşimi sonucu meydana gelen değişimlerdir.Bir nesnenin üzerine tıklamak,fareyle bir nesnenin üzerine gelmek,
bi tuşa basmak,sayfanın yüklenmesi gibi birçok eylem olaylar(events) ile yönetilebilir.

Ben bu yazımda Keyborard Events konusuna değineceğim

**Bağzı KeyboardEvent Özellikleri and Metodları**

altKey: "ALT" tuşuna basılıp basılmadığını kontrol eder.
charCode: Basılan tuşun Unicode kodunu döner.
code: Basılan tuşun kodunu döner.Her klavyede farklı bir değer dönebilir.
ctrlKey: "CTRL" tuşuna basılıp basılmadığını kontrol eder.
getModifierState() : Spesifik bir karakterin basılı olup lmadığını kontrol eder.
key: Basılan tuş ismini döner.
keyCode : Basılan tuşun Unicode kodunu döner.
location : Basılan tuşun klavye konumunu döner.

## ONKEYDOWN EVENT

Kullanıcının ilgili elementin içinde bir tuşa bastığı anda tetiklenir.

**ÖRNEK**

    <!DOCTYPE html>
    <html>
    <head>
        <title>ONKEYDOWN EVENT</title>
    </head>
    <body>
        <input type="text" id="message">

        <script>
            let textBox = document.getElementById('message');

            textBox.addEventListener('keydown', (event) => {
                console.log(`KEY=${event.key},CODE=${event.code}`);

            });
        </script>
    </body>
    </html>

Eğer klayeden A tuşuna basarsanız console'da
KEY=A,CODE=KeyA
sonucunu göreceksinz.

## ONKEYPRESS EVENT

Kullanıcının ilgili elementin içinde bir tuşa bastığı veya basılı tuttuğu zaman tetiklenir.

**ÖRNEK:**

    <!DOCTYPE html>
    <html>
    <head>
        <title>ONKEYPRESS EVENT</title>
    </head>
    <body>
        <input type="text" id="message">

        <script>
            let textBox = document.getElementById('message');
            textBox.addEventListener('keydown', (event) => {
                console.log(`ISCTRLKEY=${event.ctrlKey},KEYCODE=${event.keyCode}`);

            });
        </script>
    </body>
    </html>

Eğer klayeden A tuşuna basarsanız console'da
ISCTRLKEY=False,KEYCODE=65

## ONKEYUP EVENT

Kullanıcın basılı tuttuğu tuşu bıraktığı zaman tetiklenir.
