/* ornek 1: 8 karakterden daha uzun olan kelimeleri marklayalim.
sari background, beyaz text color;
 */

const paragraph = document.querySelector("p");
let newParagraph = "";
const words = paragraph.innerText.split(" ");
for(let i=0; i < words.length; i++){
    const word = words[i];
    if(word.length > 8){
        newParagraph += "<span style='background: yellow;color: purple'>"+word+"</span>"
    }else{
        newParagraph += word;
    }
    newParagraph += " ";
}
paragraph.innerHTML = newParagraph;

/*
* soru isaretlerinin hepsini 🤔 ile degistir
* unlem isaretlerinini hepsini 😲 ile degistirelim.
* */
let emojiParagraph = "";
for(let i=0; i < words.length; i++){
    const word = words[i];
    const withThinking = word.replace("?", "🤔");
    const withAstonishing = withThinking.replace("!", "😲");
    emojiParagraph += withAstonishing;
    emojiParagraph += " ";
}
paragraph.innerHTML = emojiParagraph;


/*
 kelime sayisini headerdan sonra yazdiralim.
 */

const wordCountEl = document.createElement("div");
wordCountEl.innerText = words.length + " words";
document.body.insertBefore(wordCountEl, document.querySelector("p"))

/*
    Paragraphtan sonra kaynak linki ekleyelim.
 */
const link = document.createElement("a");
link.setAttribute("href", "https://tr.lipsum.com/");
link.setAttribute("target", "_blank");
link.innerText = "Go to source";
document.body.appendChild(link);
