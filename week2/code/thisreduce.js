const arr = [1,2,3,4,5,6];

arr.reduce(function(accumulator, currentValue){
  // 1. accumulator = 0, currentValue = 1, accumulator = 1
  // 2. accumulator = 1, currentValie = 2, accumulator = 3;
  // 3. accumuaator = 3, currentValue = 3, accumulator = 6
  ///.....
  return accumulator + currentValue;
}, 0)


arr.reduce(function(acc, crr){
  return acc*crr
}, 1)


const user = {
  name: "John",
  sayMyName(){
    setTimeout(()=>{
      console.log("Says " + this.name + " after 1 second");
    }, 1000);
  }
}

user.sayMyName();


