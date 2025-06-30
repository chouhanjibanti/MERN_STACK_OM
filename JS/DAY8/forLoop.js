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
let sum = 0;
for(let i=1;i<=5;i++){
    // sum = sum +i; // 0+1 // 1+2 // 2+3
    sum += i; 
}
console.log(sum);