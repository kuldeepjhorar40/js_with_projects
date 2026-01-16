// Memory type:
// stack memory(copydata share)- >primitive datatype
/*
1.Here we pass copy of original data 
2.slow , more memory  , secure


*/
let num1  = 103023;
let num2  = num1;
num2 =323;
console.log(num1);//103023
console.log(num2);//323


// heap memory(reference data share) - > non - primitive datatype
/*
1.Here we pass reference of original data 
2.Both data with similar reference will get same data 
3.It save memory , fast  , but due to multiple references their might be data leak or error occur
*/

let obj1  = {
    name : "xyz",
    email : "xyz@mail"
}
let obj2  = obj1;
obj2.email = "xyz@@@@@@@mail.com"
console.log(obj1.email);//"xyz@@@@@@@mail.com"
console.log(obj2.email);//"xyz@@@@@@@mail.com"

