// String :- it is collection of character.
// The javascript string is a sequence of character.

// Sting two types :-
// 1.String literals 
// 2.new keyword

// using literals 
// let demo = 'sarthak';
// let demo1 = "sarthak"
// let demo2 = `sarthak java my name`

// new keyword :-
// let demo3 = new String('sarthak')

// 
// let demo = 'sarthak'
// console.log(demo);
// console.log(typeof demo);

// let demo1 = new String('sarthak')
// console.log(demo1);
// console.log(typeof demo1);

// Methods

// toUpperCase()
// toLowerCase()
// include()
// endWith()
// repeat()
// trim()
// chatAt()
// charCodeAt()
// concat()
// indexOf()
// slice()
// split()
// subString()
// subStr()
// valueOf()

let str1 = 'javaScriPT'
let str11 =str1.toUpperCase();
console.log(str11);


let str2 = 'javaScriPT'
let str22 =str1.toLowerCase();
console.log(str22);

// include():- it is used to check whether a string contains the specified string or character.

let myString = "Hello , Welcome to Debugshala"
let myString1 =myString.includes("Debugshala1")
console.log(myString1);

// endsWith   :- this function checks whether a string ends with specified string or character.
let myString2 = "Hello , Welcome to Debugshala "
let myString22 =myString.endsWith("Debugshala")
console.log(myString22);

// repeat :- this returns a new String with a specified number of copies of an existing string.

let myString3 = "javascript "
let rpt = myString3.repeat(6);
console.log(rpt);

// trim :- this function remove the whitespaces from both ends of a string.
let myString4 = "       Hello to m to Debugshal!       "
let trm = myString4.trim()
console.log(trm);


// charAt(x) :- this function will return the character at the x position within the String 
let myString5 = 'hello myname is '
let char = myString5.charAt(5)
console.log(char);


// charCodeAt
let myString6 = "sarthak"
let charcd = myString6.charCodeAt(4)
console.log(charcd);

// substring
// syntax :- subString(start,end)// end - exclude
let myString7 = "aman om sudhanshu sarthak"
let substr = myString7.substring(5,16)
console.log(substr);

//length
let myString8 = "sudhanshu"
let len = myString8.length
console.log(len);

// replace 
let myString9 = "indore to delhi"
let replace1 = myString9.replace('indore',"ujjain")
console.log(replace1);

// startsWith
let myString10 = "java is programming language" 
let sw = myString10.startsWith("k")
console.log(sw);

// indexOf()

let myString11 = "sarthak"
let ind = myString11.indexOf("a",2);
console.log(ind);


// split method
// syntax :- split(delimiter, [limit])
let myString12 = `sarthak aman om`
let split1 = myString12.split('');
console.log(split1);

let myString13 = `sudhanshu debugshala`
let split2 = myString13.split( ` `)
console.log(split2);


// slice
// Syntax :- slice(Start , end )
let myString14 = "pythonprogramming"
let sli1 = myString14.slice(0,4)
console.log(sli1);

// valueOf
//toString
let num1 = 1234;
let check = num1.toString();
console.log(typeof check);

// valueOf
let num2 = new Number(1000)
console.log(num2.valueOf());






