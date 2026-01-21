function func_name(){//function define

}
func_name() // function calling
func_name // function reference --location in memory


function add(a,b){
    console.log(a+b);
    return a+b;
    
}
const sum = add(2,5);
console.log(sum);

const Item_obj1 = {
    id : 1,
    name : "pan",
    price : 120
}
const Item_obj2 = {
    id : 2,
    name : "stone",
    price : 140
}
const Item_obj3 = {
    id : 3,
    name : "steel_wire",
    price : 530
}

function AddToCart(...item){ // here we use spread operator as rest operator means  as much value we can add to item no limit
    let sum = 0 ;
    for (let index = 0; index < item.length; index++) {
        const element = item[index];
        console.log(element.name);
        
        sum += element.price;
    }
    console.log("Total price : ", sum);
    return sum;
    
}

AddToCart(Item_obj1,Item_obj2,Item_obj3);


function AddToCart2(val1 , val2 ,...item){ // here we use spread operator as rest operator means  as much value we can add to item no limit ((((but here we make special preference for array first and second element )))
    //item original  = [a,b,c,d,...]
    return item;//[c,d,...] means a and b are out from item array
    
}




























