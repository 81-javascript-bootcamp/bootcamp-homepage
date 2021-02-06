const title = document.getElementById("main-title");
title.style.color = "red";
title.style.backgroundColor = "black";
title.style.height = "60px";
title.style.overflow = "scroll";
//title.setAttribute("style", "font-size: 60px");
console.log(title.classList);
title.classList.add("newclass")
console.log(title.classList);
title.classList.remove("mytitle");
console.log(title.classList);
title.classList.contains("mytitle");
// getBoundingClientRect

