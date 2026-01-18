const obj = {
    id : 1,
    roll : 565,
    "name": "xyz",
    pass : true,
}

const user_1 = {
    id:80,
    full_name:{
        user_short_name:{
            first_name:'k',
            last_name:'j'
        },
        first_name:'kuldep',
        last_name:'jhorar'
    }
}
console.log(user_1.full_name.user_short_name.first_name);
//object  chanining

console.log(user_1.full_name?.user_short_name?.first_name);//optional chaning ---> '?' used for if no full name exist than no error occur(expectption handling)


const obj1 = {
    id : 1,
    roll : 565,
    "name": "xyz",
    pass : true,
}

const obj2 = {
    id2 : 2,
    roll2 : 4565,
    "name2": "xzw",
    pass2 : true,
}   

const obj_combine = {obj1 ,obj2};
/* 
{
  obj1: { id: 1, roll: 565, name: 'xyz', pass: true },
  obj2: { id: 2, roll: 4565, name: 'xzw', pass: true }
}
*/
console.log(obj_combine);

    
const obj_combine_merge_their_elements = Object.assign({},obj1,obj2);//you must remeber that both object do not conttain same_name key it create wrong object
//we take'{}' for if we have more than two object merge in a single object


console.log(obj_combine_merge_their_elements);
/* 
{
  id: 1,
  roll: 565,
  name: 'xyz',
  pass: true,
  id2: 2,
  roll2: 4565,
  name2: 'xzw',
  pass2: true
}
*/

const obj_combine_merge_their_elements_2 = {...obj1,...obj2};

console.log(obj_combine_merge_their_elements_2);
/* 
{
{
  id: 1,
  roll: 565,
  name: 'xyz',
  pass: true,
  id2: 2,
  roll2: 4565,
  name2: 'xzw',
  pass2: true
}
*/


Object.keys(obj1);//Array of keys of obj1
Object.values(obj1);//Array of values of obj1
obj1.length;//Array of keys of obj1
Object.seal(obj1);//no further modififcation and mutuation

console.log(Object.entries(obj1));//[ [ 'id', 1 ], [ 'roll', 565 ], [ 'name', 'xyz' ], [ 'pass', true ] ]

console.log(obj1.hasOwnProperty('name'));//true

/*

====================================
OBJECT CONSTRUCTOR & METHODS IN JS
====================================

1) Object (Constructor)
-----------------------
func_name  : Object()
syntax     : let obj = new Object();
example    : let obj = new Object({id: 43, name: "xzy"});
output     : { id: 43, name: "xzy" }


2) Object.keys()
----------------
func_name  : Object.keys()
syntax     : Object.keys(object)
example    : Object.keys({id:43, name:"xzy"})
output     : ["id", "name"]


3) Object.values()
------------------
func_name  : Object.values()
syntax     : Object.values(object)
example    : Object.values({id:43, name:"xzy"})
output     : [43, "xzy"]


4) Object.entries()
-------------------
func_name  : Object.entries()
syntax     : Object.entries(object)
example    : Object.entries({id:43, name:"xzy"})
output     : [["id",43], ["name","xzy"]]


5) Object.assign()
------------------
func_name  : Object.assign()
syntax     : Object.assign(target, source)
example    : Object.assign({}, {id:43}, {name:"xzy"})
output     : { id:43, name:"xzy" }


6) Object.create()
------------------
func_name  : Object.create()
syntax     : Object.create(proto)
example    : let obj = Object.create({x:10})
output     : obj.x → 10


7) Object.freeze()
------------------
func_name  : Object.freeze()
syntax     : Object.freeze(object)
example    : Object.freeze(obj)
output     : object becomes read-only


8) Object.seal()
----------------
func_name  : Object.seal()
syntax     : Object.seal(object)
example    : Object.seal(obj)
output     : properties can't be added/removed


9) Object.hasOwn()
------------------
func_name  : Object.hasOwn()
syntax     : Object.hasOwn(obj, key)
example    : Object.hasOwn({id:43}, "id")
output     : true


10) hasOwnProperty()
-------------------
func_name  : hasOwnProperty()
syntax     : obj.hasOwnProperty(key)
example    : ({id:43}).hasOwnProperty("id")
output     : true


11) Object.getPrototypeOf()
---------------------------
func_name  : Object.getPrototypeOf()
syntax     : Object.getPrototypeOf(obj)
example    : Object.getPrototypeOf({})
output     : Object.prototype


12) Object.setPrototypeOf()
---------------------------
func_name  : Object.setPrototypeOf()
syntax     : Object.setPrototypeOf(obj, proto)
example    : Object.setPrototypeOf(obj, {x:10})
output     : obj.x → 10


13) Object.is()
---------------
func_name  : Object.is()
syntax     : Object.is(a, b)
example    : Object.is(10, 10)
output     : true


14) Object.preventExtensions()
------------------------------
func_name  : Object.preventExtensions()
syntax     : Object.preventExtensions(obj)
example    : Object.preventExtensions(obj)
output     : new properties not allowed


15) toString()
--------------
func_name  : toString()
syntax     : obj.toString()
example    : ({}).toString()
output     : "[object Object]"


16) valueOf()
-------------
func_name  : valueOf()
syntax     : obj.valueOf()
example    : ({id:43}).valueOf()
output     : {id:43}


17) __proto__
-------------
func_name  : __proto__
syntax     : obj.__proto__
example    : ({}).__proto__
output     : Object.prototype


18) isPrototypeOf()
------------------
func_name  : isPrototypeOf()
syntax     : proto.isPrototypeOf(obj)
example    : Object.prototype.isPrototypeOf({})
output     : true


19) propertyIsEnumerable()
--------------------------
func_name  : propertyIsEnumerable()
syntax     : obj.propertyIsEnumerable(key)
example    : ({id:43}).propertyIsEnumerable("id")
output     : true


*/























































































































