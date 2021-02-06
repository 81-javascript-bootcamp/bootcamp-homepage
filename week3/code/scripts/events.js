window.addEventListener("load", function(){
    const btn = document.querySelector("button");

    btn.addEventListener("click", function(event){
        //console.log(event);
        //alert("Buton tiklandi");
    });

    // Mouse events
    /*
    *
    * mousedown
      mouseup
      click
      dblclick
      mousemove
      mousenter/ mouseleave
      mouseover / mouseout
    *
    * */

   document.addEventListener("mousemove", function(e) {
      // console.log("Mouse hareket ediyor");
   });

   title.addEventListener("mouseenter", function(e) {
      //console.log("Titlein uzerinde");
   });


   // Keyboard Events
   /*
    keydown
    keypress
    keyup
    */

    document.addEventListener("keydown", function(e){
        if(e.keyCode === 13){
            console.log("Entera basildi");
        }else{
            console.log("Baska bir tusa basildi")
        }
    });



    title.addEventListener("click", function(e) {
        console.log("title tiklandi");
    })

    const insideButton = document.querySelector("#inside-button");


    insideButton.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("icerdeki buton tiklandi");
    })

    const link = document.querySelector("a");

    link.addEventListener("click", function(event){
        event.preventDefault();
        alert("Linke tiklandi");
    })

})

/// Event flow
/// Event capturing
/// Event bubbling
/// Event delagation