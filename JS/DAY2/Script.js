// Variable

// scope
// var ->  functional/global scope
// let  -> block scope
// const -> block scope

// ===========================================

// declaration possible in var and let not possible in const 
// var a; 
// let b ;
// const c; 

// ===========================================

// reinitialization
// reinitialization  possible in var and let not possible in const 

// var a= 10;
//  a= 20;
//  console.log(a);

//  let b= 20;
//  b = 30;
//  console.log(b);

// const c = 40;
//  c = 50;
//  console.log(c)
// ===========================================


// redeclaration and reinitialization
// possible in var , not possible let and const
// var a= 10;
// var a = 20;

// let b = 30;
// let b = 40;

// const b = 30;
// const b = 40;

// ===========================================


// declaration and initialization -> it is possible in let , var and const
// var a= 10;
// let b = 20;
// const c = 30;


// ========================================

// Scope 

// var 

// function testVar() {
//   if (true) {
//     var x = 10;
//   }
//   console.log(x); // ✅ 10 → `var` is function scoped, so it's accessible here
// }

// testVar();


// let 

// function testLet() {
//   if (true) {
//     let x = 10;
//     console.log(x); // ✅ 10
//   }
//   console.log(x); // ❌ ReferenceError: x is not defined
// }

// testLet();



// // const

// function testConst() {
//   if (true) {
//     const x = 10;
//     console.log(x); // ✅ 10
//   }
//   console.log(x); // ❌ ReferenceError: x is not defined
// }

// testConst();




