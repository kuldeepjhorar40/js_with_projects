// flasy value 
// false  , 0 , -0 , BigInt 0n , "" , null , undefined  , Nan

// truthy value
// "0" , 'false' , " " , [] , {} , function func() {}

// note:-
//1. false == 0 --->o/p is 1
//2. false == '' --->o/p is 1
//3. '' == 0 --->o/p is 1



const arr  = [];
if(arr.length ===0){}
const obj1 = {}
if(Object.keys(obj1).length === 0 ){}//here object.key create a array of keys of objects

// nullish coalescing operator(??) : null undefined


// ans = null??15//15
// ans =1??null//1
// ans = undefined??13 //13
// ans  = null??12??17//12 first value priority

console.log(ans);
