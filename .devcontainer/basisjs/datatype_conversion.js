let score = "33" 
let score1 = "33abc" 
console.log(typeof score)
console.log(typeof(score)) //type of datatypes

let scoreInteger = Number(score) //type conversion in datatpes
let score1Integer = Number(score1) 

console.log(scoreInteger,"->",typeof scoreInteger )
console.log(score1Integer,"->",typeof(score1Integer)) //Nan

// Conversion
/*
"33"->33
"32efdf"->Nan
true ->1;

*/


let num  = 1 ;
let flag  = Boolean(num); //true
flag  = Boolean("")  //false
flag = Boolean("ef") //true

let str1 = String(num) //"1"





//------Operations-----

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2*2);
console.log(2**3);//power
console.log(2%2);//modulous


let str_1 = "helo"
let str_2 = "helo"

let str_3 = str_1 + str_2
console.log(1+"2");//"12"
console.log("2"+1);//"21"
console.log("1"+2+4);//"124"
console.log(1+2+"2") //"32"
console.log(+true) //1
// console.log(true+) //error
console.log(+"") //0
console.log(+" re") //"1"

let num1 , num2  ,num3
num1 = num2  = num3  = 212

num1++;
console.log(num1) //"213"
num1++;
console.log(num1) //"214"

