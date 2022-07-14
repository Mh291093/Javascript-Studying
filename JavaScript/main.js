// Single Line Comment
/*
Single & Multiple Line Comment
*/

// window.alert("Hello From JS file");   // pop up better than alert

// document.write("<h1>Hello World!</h1>");  // not usable

// console.log("Hello from JS file");

console.log("Log");
console.error("Error");

console.table(['Ahmed', 'Mohamed']);

console.log("Hello from %cJS %cfile", "color: red; font-size: 20px", "color: blue; font-size: 10px");  // styling

//ES6

var myName = "Mohamed";
console.log("Hello " + myName);
console.log('Hello ${myName}');

// Data Types

// 1- String
console.log("Mohamed Hassan");
console.log(typeof "Mohamed Hassan");
console.log(typeof "100");

// 2- Number
console.log(100);
console.log(typeof 100);
console.log(typeof 100.5);

// 3- Object => Array
console.log(typeof [10, 15, 20]);
console.log(typeof ["A", "B", "C"]);

// 4- Object {key: value}
console.log(typeof {name: "Mohamed", age: 29, country: "Cairo"});

// 5- Boolean ( True, False)
console.log(typeof true);
console.log(typeof false);

// 6- Undefined
console.log(typeof undefined);

// 7- Null => Object
console.log(typeof null);

var my_Name = 30;
console.log('my age is ' + my_Name);
console.log(`my age is ${my_Name}`);   // BackTik حرف الذال

// Variables => keyword variableName Assignment operator(=) VariableValue;
var user = "Mohamed";
console.log(user);

// console.log(hello);
// hello.innerHTML = "Option";

// Case sesitive Variables
var user = 5;
var User = 10;
console.log(user);
console.log(User);

// camelCase 
var myName = "Mohamed";
console.log(myName);

// Var, const, Const
// var a = 1;
// var a = 2;    // not alert Redeclare
// console.log(a);

// let a = 1;
// let a = 2;    // alert Redeclare Error
// console.log(a);

// const a = 1;
// const a = 2;    // alert Redeclare Error
// console.log(a);

// console.log(a);
// var a = 1;          // undefined
// const a = 1;          // Error
// let a = 1;          // Error

// variable scope drama
// var => Added window objects
// let, const => not exist in window object

// console.log("Mohamed 'Hassan' Mohamed");
console.log("Mohamed \"Hassan\" Mohamed");   // \ => Escape char.

console.log("Mohamed \
Hassan \
Mohamed");                 // \ => line continue

console.log("Mohamed\nHassan");    // \n => new line

// Concatenation
let a = "I Learn";
let b = "JS";
document.write(a + " " + b);
console.log(a, b);

// template literals
// let x = "I love";
// let y = "JS";
// let z = "And";
// let d = "Programming";
// console.log(x + " " + y + "\n" + z + " " + d);

// ES6 in template literals
// console.log(`${x} ${y}
// ${z} ${d}`);

// let title = "Mohamed";
// let desc = "Learning Programming";
// let markup = `
//     <div class="card">
//         <div class="child">
//             <h2>${title}</h2>
//             <p>${desc}</p>
//         </div>
//     </div>
// `;
// document.write(markup);

let x = "Mohamed", y = "Learn JS", z = "25/10";
let markup = `
    <div class="card">
        <div class="child">
            <h3>${x}</h3>
            <p>${y}</p>
            <span>${z}</span>
        </div>
    </div>
`
document.write(markup);

// Arithmetic operations
console.log(10 - "Mo");  // NaN => not a number
console.log(typeof NaN);  // type => number
console.log(21 / 5);
console.log(2 ** 4);     // Exponent 2 power 4 = 16
console.log(11 % 2);     // remove => 1 (Division remainder)
num = 1;
console.log(num++);    // post increment firstly print then add
console.log(++num);    // pre increment firstly add then print

// Unary operators
// unary plus [Return number if it's not number]
console.log(+"10");
console.log(+"-50");
console.log(+null);
console.log(+true);
console.log(+false);

// Unary Negation [return number if it's not number + negates it]
console.log(-"100");
console.log(-"-100");
console.log(-"-100");
console.log(-"XYZ");  // NaN
console.log(-null);
console.log(-true);
console.log(-false);

// Type Coercion
let m = "10", n = 20, o = true;
console.log(+m + n);  // Unary Plus
console.log(m - n);    // => -10
console.log("" - 5);   // "" => Zero
console.log(false-true);  // => 0-1 = -1
console.log(n + o);      // => 21
console.log(m + n + o);   // String
console.log(+m + n + o);  // => 31

// Assign operators
let k = 10;
k += 20;         // k = k + 20
k -= 5;          // k = k - 5
console.log(k);

/*
Number
Double Precision
Syntactic Sugar *_* => 1_000_000
1e6 => 1000000
10**6 => 1000000
*/

// String Methods
let theName = "  Mo  ";
console.log(theName[0]);    // Zero based Index
console.log(theName.charAt(0));
console.log(theName.length);
console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
console.log(theName.trim().charAt(1).toUpperCase());   // Chain

let g = "Mohamed Hassan";

// indexOf(Value [Mand.], Start [Opt.] 0)
console.log(g.indexOf("Hassan"));   // starts at zero by default
console.log(g.indexOf("Hassan", 9));

// lastIndexOf(Value [Mand.], Start [Opt.] Length)
console.log(g.lastIndexOf("a"));  // starts from last
console.log(g.lastIndexOf("M", 5));

// Slice(Start [Mand.], End [Opt.] Not Include End)
console.log(g.slice(0));      // full srting
console.log(g.slice(8, 14));    // Hassan

// Repeat (Times) [ES6]
console.log(g.repeat(3));

// Split (separator [Opt.], Limit [Opt.])
console.log(g.split());      // Return Array
console.log(g.split(" ", 1));

// subString(Start [Mand.], End [Opt.] Not Including End)
console.log(g.substring(0, 2));
console.log(g.substring(-1));

// subString(Start [Mand.], Characters to Extract)
console.log(g.substr(0, 7));    // Mohamed
console.log(g.substr(-6, 2));  // Ha

// includes(Value [Mand.], Start [Opt.] Defaoult 0)  [ES6]  # true OR false
console.log(g.includes("Hassan"));    // true
console.log(g.includes("Mohamed", 8));    // false

// startsWith(Value [Mand.], Start [Opt.] Defaoult 0)  [ES6]  # true OR false
console.log(g.startsWith("M"));   // true
console.log(g.startsWith("m"));   // false
console.log(g.startsWith("Hassan", 8));   // true

// endsWith(Value [Mand.], Length [Opt.] Defaoult Full Length)  [ES6]  # true OR false
console.log(g.endsWith("n"));   // true
console.log(g.endsWith("d", 7));   // true

// Comparison Operators
console.log(10 == "10");  // compare value only
console.log(-10 == "-10");  // compare value only
console.log(10 != "10");  // compare value only
console.log(10 === "10");  // compare value + type => identical
console.log(10 !== "10");  // compare value + type => identical
console.log(10 >= 10);     // true
console.log(typeof "X" === typeof "Y");  // true

// Logical Operators
// ! Not
console.log(!true);   // false
console.log(!(10 == "10"));
// && And
console.log(10 == 10 && 10 > 20); // false
console.log(10 == 10 && 10 < 20); // true
// || Or
console.log(10 == 10 || 10 > 20);  // true

// Example
document.getElementById("btn").onclick = function(){
    document.getElementById("result").innerHTML = "Hello JS";
};

var v;
console.log(typeof v);  // undefined

console.log(+false);  // + convert to number
