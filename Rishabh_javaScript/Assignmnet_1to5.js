//Assignment 1
let u = "di"
let a = 37
let pamt = 1000
let d = 0

if (a < 18) {
    d = d + 10
}
else if (a >= 60) {
    d = d + 20
}

if (pamt > 5000 && (a < 18 || a >= 60)) {
    d = d + 5
}
else if (pamt > 5000) {
    d = d + 5
}

let fAmt = pamt - ((pamt * d) / 100)

console.log(d)
console.log(fAmt)

console.log(`Hi ${u}! You received a total discount of ${d}%. Final Amount: ₹${fAmt}`)


// assignmnet 2

let username ="suresh"
let password=1234

let name='suresh'
let pass=123

if(name===username && pass===password){
    console.log('Login successful!');
    
}
if(name!==username && pass!==password){
    console.log('incorrect password');
    
}
else if (name!==username) {
    console.log('name is not match');
    
}
else if(pass!==password){
     console.log('password is not correct');
}
else{
    console.log('invalind input');
    
}

// assignment 3

let number=-2
if(number>0){
    if (number%2==0) {
        console.log(`The number ${number} is positive and even`)
    }
    else{
         console.log(`The number ${number} is positive and odd`)
        
    }
}
else if(number<0){
    if (number%2==0) {
        console.log(`The number ${number} is negative and even`)
    }
    else{
         console.log(`The number ${number} is negative and odd`)
        
    }
}
else if(number===0){
    console.log('zero');
}

// assignment 4

let ismember=false
let cartvalue=200

if((ismember && cartvalue>1000)||cartvalue>2000){
    console.log('You are eligible for free delivery!');   
}
else {
    console.log('You are  not eligible for free delivery!');   
}


// assignmnet 5

let marks = 82;

if (marks < 0 || marks > 100) {
    console.log("Invalid marks entered.");
}
else if (marks >= 90) {
    console.log("Your grade is a.");
}
else if (marks >= 75) {
    console.log("Your grade is b.");
}
else if (marks >= 50) {
    console.log("Your grade is C.");
}
else {
    console.log("Fail");
}