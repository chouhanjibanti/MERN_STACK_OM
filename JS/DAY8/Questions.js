// 1. Write a program to check if a given number is a palindrome.
// input 123

let num =121;
let org  = num;
let reversed = 0;

while(num >0 ){
  let digit =   num%10; // 123 // 3  // 12 // 2 // 1 // 1
  reversed = reversed *10 + digit   // reversed = 0*10+3 = 3  // 3*10+2 // 32 // 32*10+1 = 321
  num = Math.floor(num/10) // remove last digit 12 || 1 // 0
}

if(org === reversed){
    console.log(org + " is a pallindrome number");
}else{
    console.log(org + " is not pallindrome number");
}

// 2. Write a program to check if a number is an Armstrong number




