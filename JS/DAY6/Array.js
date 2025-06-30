// Array create in two ways 
// using the new keyword
// let arr2 = new Array(12,123,'hyy',true);
// console.log(arr2);


// using literal
// let arr1 = [56,true,false,'raja']
// console.log(arr1);

// if you want to access the values
            //     56 ,true, false,' raja'
// arr1[index]  -> 0    1      2        3

// start from 0 
// end with  [array_length-1] [4-1] [3]

// arr_name[index]  // Displaying the data of the Array
// console.log(arr1[0]);
// console.log(arr1[3]);


// ***************Methods of Array***************
        
// push :- add the element at the last
// let array1 = [10,40,10,30,400]
// array1.push(100)
// console.log(array1);

// ====================================================
// pop -> remove the element from the last
// let array2 = [10,40,10,30,400]
// let removeEle  = array2.pop();
// console.log(array2);
// console.log(removeEle);

// ====================================================
// shift -> remove the element from the first
// let array3 = [10,40,10,30,400]
// console.log(array3.shift());

// ====================================================
// unshift :- add the element from the beginning
// let array4 = [10,40,10,30,400]
// array4.unshift(1,4)
// console.log(array4);

// ====================================================
// indexOf :- it will return the index of the element.
// let array5 = [10,40,10,30,400,10]
// console.log(array5.indexOf(10,3));

// ==============================================

// include -> we will check the element it will exist or not
// boolean -> true / false
// let array6 = ['java','mern','sql','html','css']
// let check=array6.includes("java")
// console.log(check);

// ==================================

// splice :- method returns an array by changing (adding /removing) its element in place.
// splice :- (start index, deleteCount, item1 , item2.....)
// let array5 = [10,40,10,30,400,345,76,43]
// let check1 = array5.splice(3,2,500,1000)
// console.log(check1);
// console.log(array5);
// =============================

// slice :- this method returns selected element in an array.
// slice :- (start index , end index) -> ending index will exclude
// let array6 = [10,40,10,30,400,345,76,43]
// let check2 = array6.slice(3,5)
// console.log(check2);


// ===================================================

//Iteration methods

// 1. forEach :- Executes a provided function once for each array element.

// let a = [1,2,3,4,5]

// for(init;condition;incre/decre){

// }
// for(let i=0;i<a.length;i++){
//     console.log(a[i]+" ");
// }

// a.forEach(function(values){//1 2 3 4 5
//     console.log(values);
// })

// Array.from() :- this method is used to create an array from any other object.
// let name1 = "sarthak"
// let arr =Array.from(name1)
// console.log(arr);

// 3. for of :- we use these loop to access object values directly.
// let number = [1,2,3,4,5]

// for(let i of number){
//     console.log(i);
// }

// 4. for in :- we use these loop to access object key values
let number = [1,2,3,4,5]
for(let i in number){
    console.log(i+" index and their values "+number[i]);
}

//5. map :- creates a new array with the results of calling a provided function on every element.
// let numbers = [1,2,3,4,5,6]
// let numberWithMultiple  = numbers.map(function(number){
//     return number*50;// 1*50 2*50 3*50
// })
// console.log(numberWithMultiple);

// numberWithMultiple ->camelCase  sarthakSharma


//6. filter -> create a new array with all elements that pass the test implemented by the provided function.
// let numbers = [1,4,3,9,6,7]
// let evenNumber=numbers.filter(function(number){
//     return number%2==0;
// })
// console.log(evenNumber);

// 7. reduce() -> executes a reducer function on each element of the array , resulting in a single output value.
// let numbers = [1,4,3,9,6,7]
// let sum = numbers.reduce(function(total,number){
//     return total+number // 1  // 5 //8 //17 // 23 // 30
// },0)
// console.log(sum);

// 0 ,1 
// 1 ,4
// 5 , 3 
// 8 ,9 
// 17 , 6
// 23 ,7

// =======================================

// find :- Returns the value of the first element that passes a test.
// let numbers = [1,4,3,7,6,9]
// let check = numbers.find(function(number){
//     return number>6
// })
// console.log(check);

// findIndex :- Returns the index of the first element that passes a test.
// let numbers = [1,4,3,7,6,9]
// let check = numbers.findIndex(function(number){
//     return number>6
// })
// console.log(check);

// ===================================

// some :- test weather all elements in the array pass the test implemented by the provided function.

// let numbers = [1,4,3,7,6,9]
// let allOdd = numbers.some(function(number){
//     return number%2!==0
// })
// console.log(allOdd);

// ===================================

// every :- Test weather all elements in the array pass the test implemented by the provided function.

// let numbers = [1,1,3,7,1,9]
// let allOdd = numbers.every(function(number){
//     return number%2!==0
// })
// console.log(allOdd);

// ===================================

// PRACTICAL EXAMPLE :-
// Example 1: Finding the maximum number in an array  => [1, 2, 3, 4, 5];
// Example 2: Removing duplicates from an array => [1, 2, 3, 4, 5, 1, 2, 3];
// Example 3: Flattening a nested array => [1, [2, 3], [4, [5, 6]]];

// let numbers = [1, 2, 3, 4, 5];
// let max = numbers.reduce(function(a,b){
//     return Math.max(a,b)
// })
// console.log(max);

// let numbers = [1, 2, 3, 4, 5, 1, 2, 3];
// let unique = [...new Set(numbers)]
// console.log(unique);


// let nestedArray = [1, [2, 3], [4, [5, 6]]];
// let flatArray = nestedArray.flat(Infinity)
// console.log(flatArray);
























