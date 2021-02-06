let myNewElement = document.createElement("div");

myNewElement.innerHTML = "<p>This is my element</p>";

myNewElement.id = "thisismynewelement";

document.body.appendChild(myNewElement)


let menu = document.querySelector("#menu");
let firstLi = document.createElement("li");
firstLi.textContent = "Products";
menu.appendChild(firstLi);

let secondLi = document.createElement("li");
secondLi.textContent = "About Us";
menu.appendChild(secondLi);


// insertBefore
//menu.insertBefore(document.createElement("p"), document.querySelector("#menu"))

// removeChild
//menu.removeChild(document.querySelector("ul"))
