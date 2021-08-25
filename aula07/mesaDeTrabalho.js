// //EX2.1
let x = 10
let y = "a"
console.log(y === "b" || x >= 10)

// //Ex2.2
let x = 3
let y = 8;
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y))

// //Ex2.3
let str = ""
let msg = "haha!"
let eBonito = "false";
console.log(!((str || msg) && eBonito))