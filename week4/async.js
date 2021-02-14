const yemekSiparisi = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({name: "Hamburger"});
  }, 2000)
});

yemekSiparisi.then((data) => {
  console.log(`${data.name} hazir`);
}).catch(() => {
  console.log("Bir problem olustu");
})

console.log("3");


const promise = new Promise((resolve, reject) => {
    setTimeout(reject, 2000);
})

function logA(){
  console.log("A")
}

function logB(){
  console.log("B");
}

promise.then(logA).then(logB).catch(logB);



/* getUser("johndoe", (user) => {
  getWeather(user.location, (weather) => {
    getSometgin(weather, () => {
      console.log("Callback hell")
    });
  })
}) */

/* getUser("johndoe")
  .then(getWeather)
  .then((data) => getSomething())
  .then((something) => console.log("not callback hell")); */

/*
const myRequest = fetch("https://httpbin.org/get");

myRequest.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
})

for(let i=0; i< 5000; i++){
  console.log(i);
}
*/


// async/await

async function toplama(x,y){
  return x + y;
}


async function buildUi(){
  makeLayout();
  createDomElements();
  try{
      const sonuc = await toplama(3,4);
  }catch(error){
    console.log(error);
  }
  console.log("Son satir");
}









