// while (condition) {
//     // execute code
    //  incre /decre
// }

// let i=1;
// while (i<=5){
//     console.log(i);
//     i++;
// }

// i =1    1<=5 -> true -> 1 -> ++
// i =2     2<=5   -> true -> 2 -> ++
// i =6    6<=5 -> false

// Questions :- 
//1.  Calculate the sum of all numbers from 1 to 100 using a while loop.
// 2. Find the largest digit in a given number using a while loop.  input number =  45732
// 3. Print the first n Fibonacci numbers using a while loop.
// 4. Calculate the sum of the squares of the first 10 natural numbers using a while loop.
// 5. Count the number of digits in a number using a while loop. input number = 34543
// 6. Calculate the factorial of a number using a while loop. input number = 10



// 1. sum of all the numbers from 1 to 100
// let i =1;
// let sum =0;
// while(i<=100){
//     sum = sum +i;   //sum +=i;
//     i++
// }

// console.log(sum);

// 2. Find the largest digit in a given number using a while loop.  input number =  45732

// let num = 45732;
// let largest = 0;
// while(num > 0){// 45732 // 4573 // 457 // 45 // 4
//     let digit = num%10; // 2 // last digit // 3 // 7 // 5 
//     if(digit > largest){ // 2 > 0 // 3>2 // 3  // 7>3 // 7
//         largest = digit;   // 2 // 3// 7
//     }
//     num = Math.floor(num /10);// remove last digit  4573// 457 // 45 / 4
// }
// console.log("Largest digit is ",largest);

// 3. Print the first 20 Fibonacci numbers using a while loop.
// 4. Calculate the sum of the squares of the first 10 natural numbers using a while loop.
// 5. Count the number of digits in a number using a while loop. input number = 34543
// 6. Calculate the factorial of a number using a while loop. input number = 10



// 4.
// let i=1;
// let sum = 0;
// while(i<=10){
//     sum += i*i; // sum = sum+i*i
//     i++
// }
// console.log(sum);


// 5. 

// let num1= 34543
// let count=0;

// while(num1 >0){
//     num1 = Math.floor(num1/10);
//     count++;
// }
// console.log("Number of count",count);

// 6.

let num = 10;
let fact = 1;
while(num>1){
    fact = fact*num;      // fact = 1*10 = 10 // 10*9 = 90 // 90*8 = 720
    num--;
}
console.log(fact);