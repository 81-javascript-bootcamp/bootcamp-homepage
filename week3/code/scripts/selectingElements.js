// 1. id ile, getElementById
let element = document.getElementById("main-title");

// 2. name ile getirme, getElementsByName
let addressElement = document.getElementsByName("address");

//  3. tag ile getirme, getElementsByTagName
let pElements = document.getElementsByTagName("p");

// 4. classname ile getirme, getElementsByClassName
let bgRedElements = document.getElementsByClassName("bg-red");

// 5. querySelector ve querySelectorAll
let elementQ        = document.querySelector("#main-title");
let addressElementQ = document.querySelectorAll("input[name='address']");

