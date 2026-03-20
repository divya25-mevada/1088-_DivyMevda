'use strict'

// let a;
    
// console.log(typeof(a))


// opertor

// current=2024
// age =current-1
// age2=current-1
// console.log(age,  age2);


// const firstname='adada'
// const year=2010
// const birthyear=1990
// console.log("i'm  "+ firstname+(year-birthyear));
// console.log(`"my name is ${firstname}"`);


// const  age=12

// if(age>18){
//         console.log("asdad");
        
// }


//type conversion


// const year ="2010"
// console.log(Number(year))
// console.log(typeof nan);  we cant string to Number\

//type corecion

// console.log('i am'+23+ 'year old!');
// console.log('23'-10-'year');  //nan
// console.log('23'+10+'year');    //
// console.log('1'-1);

// 0/undefined/null/''(empty])/nan is falsy value

// console.log('1'+2+null);


//  let money=900

// strict equality
// === check datatype and value
// == value

// ternary operator ?(if) :else

    // const score =81
    // console.log(score>90? 'great job':score==80? 'ok':'not ok');
    

// logical operator  &&,||,!

//Function 

// function miren(x=1,d){

//     console.log("ajdad"+x+"d"+d);
    
// }


// const greet=function(){
//     console.log('hello World');
    
// }

// function calling another function
//calculate total price with tax

// function namep(amount) {
//     return amount*0.18    //18%
    
// }
// function calculatezTotal(amount) {
//     let tax=namep(amount)
//     let total=amount+tax
//     return total
// }

// let finalamount=calculatezTotal(100)
// console.log(finalamount);q

// arrow function

// const add=(a,b)=> (console.log(a+b)+console.log("hello"));


// arrow function limitions
// this keyword not Worker
//you cAN't create constructor

// arrays

// const person=['suresh','mahesh','jayesh','ramesh']
// console.log(person);


//loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// while loop
// while (condition) {
    
// }


// const person={
//     firstname:'suresh',
//     lastname:'patel',
//     age:20,
//     hobbies:['cricket','basketball']
// }

// const obj={
//     name:'arjun',
//     age:12

// }
// const obj2={
//     name:'arjun',

// }

// i want add in department it so i addd use ing obj.department='it'
// sperad operator use combine two object

// const obj3={...obj,...obj2}
// console.log(obj3);

// const obj={
//     name:'arjun',
//     age:12

// }
// const obj2={
//     name:'arjun12',
// here arjun12 print bcz key same but value take from obj2
// }


// console.log(a);
// let a=10

// Rest and sperad operator           

// const obj={
//     name:'arjun',
//     age:12

// }
// const obj2={
//     name:'arjun',

// }


// const obj4=obj
// console.log(obj4);

// const obj5={...obj}
// console.log(obj5);


// obj4.age=15
// obj5.age=20

// console.log(obj4);
// console.log(obj);

// console.log(obj5);

// console.log(obj);


// const obj4=obj
// console.log(obj4);

// const obj5={...obj}
// console.log(obj5);

// const a=[1,2]
// a.push('3')
// a.pop()
// a.pop()

// let aD={
//     name1:'arjun'
// }

// aD.name1='ada'

let a1={
    a:10,
    b:20
}



let a2={
    a:90,
    c:60,
    d:20
}

let a3=a1
a3.a=500
console.log(a3);
console.log(a1);


let a4={...a2}
a2.a=123
console.log(a4);
console.log(a2);

