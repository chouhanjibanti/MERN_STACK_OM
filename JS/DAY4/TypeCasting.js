// TypeCasting :-
// we can convert one datatype to another datatype.

// there are two types of typecasting 
// 1. implicit typecasting -> Automatic 
// 2. Explicit typecasting  -> Externally 


// 1. implicit typecasting -> Automatic 

// console.log(10+10); // 20
// console.log(10+"10");// 1010   "10"+"10" -> 1010
// + => String concat

// console.log(10-20);//  0
// console.log(10-"10"); // 0
// - string -> number


// console.log(10+"n"); // 10n
// console.log(10-"n");// NAN


// conditional/ternary Operator 

// condition ? true : false
// console.log(10>100 ? true :false);

// console.log( 100< 1000 ? true :false);


// The process of converting one type of data into another type of data by JS  
// engine implicitly(implicit typecasting),when a wrong type of data is used in 
// the expression is known as type coercion(or implicit type casting).

// 2. Explicit typecasting  -> Externally 

console.log(10+Number("10")); // 20 

console.log(10+ String(10)); // 1010
console.log(Boolean(1));
console.log(Boolean(0));

console.log(String(123) - 10); // "123 "-10




