const bodyy = document.querySelector('body');
bodyy.style.backgroundColor = "blue";


const node_llist = document.querySelectorAll('.li1');//it is node list not an array
/*
NodeList(3)
├── 0: li.li1
├── 1: li.li1
├── 2: li.li1
├── length: 3
└── [[Prototype]]: NodeList

NodeList.prototype
├── entries(): ƒ
├── forEach(): ƒ
├── item(): ƒ
├── keys(): ƒ
├── values(): ƒ
├── length (getter)
├── constructor: ƒ NodeList()
├── Symbol.iterator(): ƒ values()
└── Symbol.toStringTag: "NodeList"


*/

node_list.forEach((item)=>{
item.style.backgroundColor = "red";})


// Get all elements with class 'li1'
// HTMLCollection is returned
const all = document.getElementsByClassName("li1"); // HTMLCollection(3)
/*
HTMLCollection(3)
├── 0: li.li1
├── 1: li.li1
├── 2: li.li1
├── length: 3
└── [[Prototype]]: HTMLCollection
     ├── item(index): ƒ
     ├── namedItem(name): ƒ
     ├── length (getter)
     ├── constructor: ƒ HTMLCollection()
     ├── Symbol.iterator(): ƒ values()
     └── Symbol.toStringTag: "HTMLCollection"
*/


// Convert HTMLCollection to Array
// so that we can use array methods like forEach
const new_arr_from_htmlCollection = Array.from(all); // Array of li elements


// Loop through each element and apply styles
new_arr_from_htmlCollection.forEach((item) => {
    item.style.color = "orange";           // Set text color to orange
    item.style.backgroundColor = "black";  // Set background color to black
    item.style.padding = "14px";           // Add padding of 14px
});

const boddy  = document.querySelector('body');
// undefined
console.log(boddy.innerHTML);
/*
  <div id="div1" class="d1">\n        <h1 class="heading">dom learning heading:-</h1>\n        <p style="display:none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque odit facere adipisci mollitia debitis aliquid temporibus, nemo similique molestias maxime assumenda nostrum expedita illo officia perspiciatis! Fugiat, recusandae temporibus.\n        </p>\n    </div>\n    <ul>\n        <li class="li1">res</li>\n        <li class="li1">rer</li>\n        <li class="li1">grr</li>\n    </ul>\n\n 
*/
console.log(boddy.innerText);
/* dom learning heading:-
res
rer
grr
undefined
*/

console.log(boddy.textContent);
/*    
        dom learning heading:-
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque odit facere adipisci mollitia debitis aliquid temporibus, nemo similique molestias maxime assumenda nostrum expedita illo officia perspiciatis! Fugiat, recusandae temporibus.
        
    
    
        res
        rer
        grr
    
*/