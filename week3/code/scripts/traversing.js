// 1. get the parent
let mainTitle = document.querySelector("#main-title");
let parentOfTitle = mainTitle.parentNode;
console.log(parentOfTitle);

// 2. get the siblings
let nextSibling = mainTitle.nextElementSibling;
let previousSibling = mainTitle.previousElementSibling;
console.log(nextSibling, previousSibling);

// 3. get the child

let noteContainer = document.querySelector("#note-container");
let firstChildOfNote = noteContainer.firstElementChild;
let lastChildOfNote  = noteContainer.lastElementChild;

let allChildren = noteContainer.children;
console.log(allChildren);
console.log(firstChildOfNote);