// *
// * *
// * * *
// * * * *
// * * * * *

// let star = 0;
// let rows = 5;
// for(let i=1;i<=rows;i++){ //i=1   -> i<=5 -> true   // i=2 2<=5 -> true || i=3 3<=5 || i=4 4<=5 || i=5 5<=5 true || i=6 6<=5
//     star++; // 1 // 2 // 3 // 4  // 5
//     let line = ''
//     for(let i=1;i<=star;i++){// i=1 -> 1<=1 -> true // i =2  2<=1  || i=1 1<=2 -> true || i=2 2<=2 ->true || i=3 3<=2
//       line = line + "* " // *
//       // * *
//       // * * *
//       //
//     }
//     console.log(line);
// }

// *
// * *
// * * *
// * * * *
// * * * * *

//          *
//        *   *
//      *   *   *
//    *    *    *   *
//  *    *   *     *   *

// let star = 0;
// let space = 5;
// let rows = 5;

// for(let i=1;i<=rows;i++){

//    star++;
//    space--;
//     let line = ''
//    for(let j=1;j<=space;j++){
//         line = line + " "
//    }
//     for(let k=1;k<=star;k++){
//         line = line + "* "
//    }
//    console.log(line);
// }

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let star = 6;
// let space = -1;
// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//   star--;
//   space++;
//   let line = "";
//   for (let j = 1; j <= space; j++) {
//     line = line + " ";
//   }
//   for (let k = 1; k <= star; k++) {
//     line = line + "*";
//   }
//   console.log(line);
// }


//      *
//     **
//    ***
//   ****
//  *****



// 1 
// 2 3
// 4 5 6
// 7 8 9 10


// let count = 1;
// let rows = 5;
// for(let i=1;i<=rows ;i++){
//   let line = " "
//   for(let j=1;j<=i;j++){ // j =2  2<=1
//     line = line+count + " ";
//     count++;
//   }
//   console.log(line);
// }


// A -> 65 66 67 ->90 
// a -> 97 98 122



// a
// b c
// d e f
// g h i j 


// let rows = 4;
// let charCode = 97; // ascii value of a = 97

// for(let i =1;i<=rows;i++){
//    let line = " "
//    for(let j=1;j<=i;j++){
//      line = line + String.fromCharCode(charCode) + " ";
//      charCode++;
//    }
//    console.log(line);
// }

// 1) WAP TO SWAP TWO VARIABLE WITH USING THIRD VARIABLE? 

// let a = 20;
// let b = 30;
// let c =0;

// c = a;
// a = b;
// b = c;

// console.log("value of a = "+a);
// console.log("value of b = "+b);

// 2)WAP TO SWAP TWO VARIABLES WITHOUT USING THIRD VARIABLE ? 

// let a = 20;
// let b = 30;

//  a = a+b;  // a = 20+30 = 50
//  b = a-b;  // b = 50-30 = 20
//  a = a-b;   // a=  50-30 = 30

//  console.log("value of a = "+a);
// console.log("value of b = "+b);

// 3)WAP TO PRINT LARGEST OF TWO NUMBERS WITH THE HELP OF CONDITIONAL OPERATOR ? 

let a = 10;
let b = 20;

console.log(a>b ? "a is greater" : "b is greater");





