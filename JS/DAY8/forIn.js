//forIn loop :-  its an advanced version of for loop.

// const person = {
//     id : 1,
//     name : "sarthak",
//     age : 23
// }

// console.log(person);

// for(let key in person){
//     console.log(key + " : " + person[key] );
// }

//  id = person[id]  = 1
// name  = person[name] = sarthak
// age = person[age] = 23


// let arr = [123,35,56,7]
// for(let i in arr){
//     console.log(i);
// }


//leap year

// let year = 1900;

// if((year%4===0 && year%100!==0) || (year%400 ===0)){
//     console.log(year + " is leap year");
// }else{
//         console.log(year + " is not leap year");
// }

//  perfect number 

// perfect number 8 -> 1 +2+4 not a perfect number
                //  6 -> 1+2+3 => 6


    let num = 28;
    let sum =0;
    for(let i=1;i<num;i++){
        if(num % i ===0 ){
            sum = sum+i; // 1 + 2 + 4 +7 +14
        }
    }
    if(sum === num){
        console.log(num ,"is perfect number");
    }else{
         console.log(num ,"is not perfect number");

    }