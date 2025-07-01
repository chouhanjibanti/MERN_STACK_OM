// for loop :- loop of block of code no of times.


// for(inti;condition;incre/derc){
//  code to execute
// }

// print 1 t0 100

// for(let i=1;i<=100;i++){
//     console.log(i);
// }

// 1. print sum of the number from 1 to 5.
// 2. Print the multiplication table of a number m using a for loop, where m is provided by the user.
// 3. Print all even numbers from 1 to 50 using a for loop.
// 4. Print all odd numbers between 1 and n using a for loop, where n is provided by the user.
// 5. Print all numbers from 1 to n that are divisible by both 3 and 5 using a for loop, where n is provided by the user.
// 6. Calculate the product of all even numbers between 1 and n using a for loop, where n is provided by the user.
// 7. Calculate the sum of the digits of a number using a for loop, where the number is provided by the user.
// 8. Generate the first n Fibonacci numbers using a for loop, where n is provided by the user.


// 1. solution
// let sum = 0;
// for(let i=1;i<=5;i++){
//     // sum = sum +i; // 0+1 // 1+2 // 2+3
//     sum += i; 
// }
// console.log(sum);

// Generate the first n Fibonacci numbers using a for loop, where n is provided by the user.


// Answers:-

// let n = prompt("Enter ")
let n = 10;

let a=0 , b =1;
for(let i=0;i<n;i++){
    console.log(a);
    let temp = a+b; // 0+1 = 1
    a = b;
    b = temp;
}

// 0 1 1 2 3 5 8

// a = 0     b = 1
// a =0      temp= 1    b = 1
// a=1        b = 1    temp 1+1 =2
// a = 1   b = 2         temp 1+2 = 3
// a= 2     b = 3        temp 2+3 = 5
// a=3   b=5      temp = 8
