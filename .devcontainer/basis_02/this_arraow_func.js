
const user = {
    id : 1,
    name : "kuldeep",
    isLogged : true,
    greeting : function(){
        console.log(`heelo ${this.name} !!!`);
        console.log(this);
        
    }

}
user.greeting();
console.log(this);//in node {} ,,, but when we run this in browser console than it give ((window prototype and window methods))
user.name = "xyz";

user.greeting();


// --------- function & arrow function------

const name  = function() {//here this work
    name_1 = "xyz";
    console.log(name_1);//xyz
    console.log(this.name_1);//xyz
        
}

name();


const name_func  = () => {//arrow function means no this works here

    name_1 = "xyz";
    console.log(name_1);//xyz
    console.log(this.name_1);//undefined
        
}
name_func();

// ---way to declare arrow function
// 1. if we use {} than we have to write return


const add = (num1,num2) => {//arrow function here we write return to return something

    return num1+num2;
        
}

//2.

const add_2 = (num1,num2) => (num1+num2//arrow function here we don't write return to return something      
)

//3.
const add_3 = (num1,num2) => num1+num2//arrow function here we don't write return to return something      

//4.
const add_4 = (num1,num2) => ({num1:num2}//arrow function when we return object than we must use ()
)