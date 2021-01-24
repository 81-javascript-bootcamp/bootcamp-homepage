
function multiply(a,b){
    console.log(a*b)
}

// If else statements
if(3>5){
    console.log("3, 5ten büyüktür");
}else{
    console.log("3, 5ten küçüktür");
}

function logTruthiness(val){
    if(val){
        console.log("Truthy!");
    }else{
        console.log("Falsy!");
    }
}

logTruthiness(true);
// Truthy

logTruthiness({});
// Truthy

logTruthiness([]);
// Truthy

logTruthiness("some string");
// Truthy

logTruthiness(3.14);
// Truthy

logTruthiness(new Date());
// Truthy

logTruthiness(false);
logTruthiness(null);
logTruthiness(undefined);
logTruthiness(NaN);
logTruthiness(0);
logTruthiness("");
// Falsy


const getFee = function(){
    return isMember ? "$2.00" : "$10.00";
}

if(a == 5){
    console.log("a 5tir")
}else if(a === 3){
    console.log("a 3 tür")
}else{
    console.log("a 3 ya da 5 değildir");
}

// Switch case
let price = 1;

switch (price){
    case 1:
        alert("So cheap");
        break;
    case 2:
        alert("Affordable");
        break;
    case 3:
        alert("too expensive");
        break;
    default:
        alert("Unkown price");
}

/*
// Loops
// while loop
let sayi1 = 10
while(sayi1<10){
    console.log(sayi1);
    sayi1++;
}

// do..while loop
let sayi2 = 10;
do{
    console.log(sayi2);
    sayi2++;
} while(sayi2 < 10)

*/

for(let i=0; i<10; i++){
    if(i ===2){
        continue;
    }
    console.log(i);
}
let i=10
for(; i< 10 ; i++){
        break;
}

// Functions
// Function Declarations ve Function Expressions

/*
multiply(3,5);
addition(3,5);

function multiply(a,b){
    console.log(a*b)
}

const addition = function (a,b){
    console.log(a + b);
}

multiply(3,5);
addition(3,5);
*/

/*
console.log(degisken);
let degisken = 5;
console.log(degisken);
 */

arr.forEach(function(item, index){

});

/*
(function multiply(a,b){
    console.log(a*b)
})(3,5);

*/

/// RegEx
/*
const regexp = new RegExp("pattern", "flags");
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

re.test("a@b.com");
 */
