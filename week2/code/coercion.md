// true + false
// 1 + 0
// 1


// 12 / "6"
// 12 / 6
// 2


// "number" + 15 + 3
// "number" + 15
// "number15"
// "number15" + 3
// "number153"

// 15 + 3 + "number"
// 15 + 3
// 18
// 18 + "number"
// "18number"


// [1] > null
// "1" > null
// 1 > 0
// true

// [] + []
// "" + ""
// ""

// "foo" + + "bar"
// "foo" + NaN
// "fooNaN"

// "true" == true
// NaN == 1
// false


// ["x"] == "x"
// "x" == "x"
// true


// [] + null + 1
// [] + null
// "" + null
// "null"
// "null" + 1
// "null1"


// 0 || "0" && {}
// "0" && {}
// {}


//[1,2,3] == [1,2,3]
// false
console.log({}+[]+{}+[1])
// {}+[]+{}+[1]
// +[]+{}+[1]
// 0 + {} + [1]
// 0 + "[object Object]" + [1]
// "0[object Object]" + [1]
// "0[object Object]" + "1"
// "0[object Object]1"






