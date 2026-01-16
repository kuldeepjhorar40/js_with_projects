// Strings

let name  = "fdf"
let age  = 32
console.log(`heloo ${name} ,now you are ${age}old`); //WE MAINLY USE THIS SYNTAX IN JS WHICH WILL IMPROVE OUR CODE READABILITY string interpolation

console.log(name[0]);

const str = new String("abc-df-dvfv")

/*String {'sdf-vvfv-fvgf'}

====================================
String Object Inspection
====================================

Value
-----
"sdf-vvfv-fvgf"

Length
------
13

Indexed Characters
------------------
0  : "s"
1  : "d"
2  : "f"
3  : "-"
4  : "v"
5  : "v"
6  : "f"
7  : "v"
8  : "-"
9  : "f"
10 : "v"
11 : "g"
12 : "f"

Type Information
----------------
Type            : String
PrimitiveValue  : "sdf-vvfv-fvgf"

Prototype Chain
---------------
String
  └── Object

====================================
String Prototype Functions
====================================

anchor() -> str.anchor("a") -> "<a name=\"a\">sdf-vvfv-fvgf</a>"
at() -> str.at(3) -> "-"
big() -> str.big() -> "<big>sdf-vvfv-fvgf</big>"
blink() -> str.blink() -> "<blink>sdf-vvfv-fvgf</blink>"
bold() -> str.bold() -> "<b>sdf-vvfv-fvgf</b>"
charAt() -> str.charAt(2) -> "f"
charCodeAt() -> str.charCodeAt(0) -> 115
codePointAt() -> str.codePointAt(0) -> 115
concat() -> str.concat("-end") -> "sdf-vvfv-fvgf-end"
constructor() -> str.constructor === String -> true
endsWith() -> str.endsWith("fvgf") -> true
fixed() -> str.fixed() -> "<tt>sdf-vvfv-fvgf</tt>"
fontcolor() -> str.fontcolor("red") -> "<font color=\"red\">sdf-vvfv-fvgf</font>"
fontsize() -> str.fontsize(4) -> "<font size=\"4\">sdf-vvfv-fvgf</font>"
includes() -> str.includes("vv") -> true
indexOf() -> str.indexOf("-") -> 3
isWellFormed() -> str.isWellFormed() -> true
italics() -> str.italics() -> "<i>sdf-vvfv-fvgf</i>"
lastIndexOf() -> str.lastIndexOf("-") -> 8
link() -> str.link("https://x.com") -> "<a href=\"https://x.com\">sdf-vvfv-fvgf</a>"
localeCompare() -> str.localeCompare("abc") -> 1
match() -> str.match(/v+/g) -> ["vv","v","v"]
matchAll() -> [...str.matchAll(/v+/g)] -> [["vv"],["v"],["v"]]
normalize() -> str.normalize() -> "sdf-vvfv-fvgf"
padEnd() -> str.padEnd(16,"*") -> "sdf-vvfv-fvgf***"
padStart() -> str.padStart(16,"*") -> "***sdf-vvfv-fvgf"
repeat() -> str.repeat(2) -> "sdf-vvfv-fvgfsdf-vvfv-fvgf"
replace() -> str.replace("-","_") -> "sdf_vvfv-fvgf"
replaceAll() -> str.replaceAll("-","_") -> "sdf_vvfv_fvgf"
search() -> str.search("vv") -> 4
slice() -> str.slice(4,8) -> "vvfv"
small() -> str.small() -> "<small>sdf-vvfv-fvgf</small>"
split() -> str.split("-") -> ["sdf","vvfv","fvgf"]
startsWith() -> str.startsWith("sdf") -> true
strike() -> str.strike() -> "<strike>sdf-vvfv-fvgf</strike>"
sub() -> str.sub() -> "<sub>sdf-vvfv-fvgf</sub>"
substr() -> str.substr(4,4) -> "vvfv"
substring() -> str.substring(0,3) -> "sdf"
sup() -> str.sup() -> "<sup>sdf-vvfv-fvgf</sup>"
toLocaleLowerCase() -> str.toLocaleLowerCase() -> "sdf-vvfv-fvgf"
toLocaleUpperCase() -> str.toLocaleUpperCase() -> "SDF-VVFV-FVGF"
toLowerCase() -> str.toLowerCase() -> "sdf-vvfv-fvgf"
toString() -> str.toString() -> "sdf-vvfv-fvgf"
toUpperCase() -> str.toUpperCase() -> "SDF-VVFV-FVGF"
toWellFormed() -> str.toWellFormed() -> "sdf-vvfv-fvgf"
trim() -> "  sdf-vvfv-fvgf  ".trim() -> "sdf-vvfv-fvgf"
trimEnd() -> "sdf-vvfv-fvgf  ".trimEnd() -> "sdf-vvfv-fvgf"
trimStart() -> "  sdf-vvfv-fvgf".trimStart() -> "sdf-vvfv-fvgf"
valueOf() -> str.valueOf() -> "sdf-vvfv-fvgf"
[Symbol.iterator]() -> [...str] -> ["s","d","f","-","v","v","f","v","-","f","v","g","f"]

====================================
Object Prototype Functions
====================================

constructor() -> str.constructor -> String
hasOwnProperty() -> str.hasOwnProperty("length") -> false
isPrototypeOf() -> String.prototype.isPrototypeOf(str) -> true
propertyIsEnumerable() -> str.propertyIsEnumerable("length") -> false
toLocaleString() -> str.toLocaleString() -> "sdf-vvfv-fvgf"
toString() -> Object.prototype.toString.call(str) -> "[object String]"
valueOf() -> Object.prototype.valueOf.call(str) -> String {"sdf-vvfv-fvgf"}
__defineGetter__() -> typeof str.__defineGetter__ -> "function"
__defineSetter__() -> typeof str.__defineSetter__ -> "function"
__lookupGetter__() -> typeof str.__lookupGetter__ -> "function"
__lookupSetter__() -> typeof str.__lookupSetter__ -> "function"
__proto__ -> str.__proto__ === String.prototype -> true

Internal Properties
-------------------
[[Scopes]]        : Scopes[0]
[[PrimitiveValue]]: "sdf-vvfv-fvgf"


*/

const str1 = new String("   abc-df-   dvfv")
console.log(str1.length);//17
console.log(str1.toUpperCase());//   ABC-DF-   DVFV
console.log(str1.trim());//abc-df-   dvfv
console.log(str1.trimEnd());//   abc-df-   dvfv
console.log(str1.substring(3,7));//abc-
console.log(str1.substring(-8,5));//   ab
console.log(str1.repeat(2));//   abc-df-   dvfv   abc-df-   dvfv
console.log(str1.charAt(7));//d
console.log(str1.indexOf('d'));//7
console.log(str1.split('-'));//[ '   abc', 'df', '   dvfv' ]