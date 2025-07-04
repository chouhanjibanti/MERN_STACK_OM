hoisting :-  Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope (global or function scope) before the code is executed.

demo()
function demo(){
    clg("hy")
}


1. var -> global / functional
2. var a= 10;
  var a =20;
  clg(a)

diff:-
scope -> functional / block / block
declaration -> var possible , let possible ,  const not possible 
reinitialization -> var possible , let possible , const not possible
hosting ->  var possible , let not possible , const not possible



let a =20;   
a -> identifier -> memory block 

we can not achieve hoisting in the case of variable 
var -> undefined 
let  -> RF
const -> RF

we can  achieve hoisting in the case of function
function declaration 
function expression ❌❌ 


