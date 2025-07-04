Tokens of JS:-

variable
identifier 
value


JS variable  :- var , let and const 
var  :- introduced before es6
let and const  : introduced  es6

identifier

var a = 10;
variable -> let , var and const
identifier -> a b c 


let age = 20;
variable -> let
identifier -> age 
value -> 20 

========================================================================

In JS how many types of errors:-
1. TypeError :- Assignment to constant variable
    const a = 10;
    a = 20; // ❌ TypeError: Assignment to constant variable.


2. Syntax Error :- wrong syntax
   if (true {
   console.log("Hello");
   }
// ❌ SyntaxError: Unexpected token '{'


3. reference Error :-  age is not defined
   console.log(age); // ❌ ReferenceError: age is not defined


4. Range Error :- arr[3] -> [1,2,3,4,5]
    let arr = new Array(-5); 
    // ❌ RangeError: Invalid array length

