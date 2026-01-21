//1.singleton
//2.object literals

const symbol_1 = Symbol("key");
const symbol_2 = Symbol("key");


// Object.create(); // this create singleton

const obj = {
    id : 1,
    roll : 565,
    "name": "xyz",
    pass : true,
    //symbol_1:"key_encrypted", than it is not symbol it act like string ---->
    [symbol_1]:"key_encrypted",// way to define symbol
    symbol_2:"key_encrypted",// it is string not symbol
    date : new Date(Date.now()),

 }//this create literal , system treat key as string bydefault

console.log(obj.id);//1 
/*
console.log(obj.name);//error
console.log(obj."name");//error
*/

//---so we have only way to access obj by square brakets---
//---Beat Way to access objects
console.log(obj["id"]);//1


// -----symbol-----
console.log(typeof symbol_1);//symbol/undefined
console.log(typeof obj[symbol_2]);//undefined

obj.hello_func = function(){
    console.log(`helo dear ${obj["name"]}`); 
    return 0;
}//object function 

obj.hello_func();
console.log(obj.hello_func);//[Function (anonymous)]

Object.freeze(obj);//means we fix the values means no mututation

console.log(obj);/*{
  id: 1,
  roll: 565,
  name: 'xyz',
  pass: true,
  symbol_2: 'key_encrypted',
  date: 2026-01-18T10:55:15.207Z,
  Symbol(key): 'key_encrypted'
}*/















































