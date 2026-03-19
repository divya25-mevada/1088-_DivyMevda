let name='Suresh'
let age =12
let purchaseamount=10000
let discount=0;
let fianlamont;

if(age<18){
    discount=discount+10
}
else if(age>=60){
    discount=discount+20
}
if (purchaseamount>500) {
    discount=discount+5
}
fianlamont=purchaseamount-(purchaseamount*discount/100)

console.log(`Hi ${name}! You received a total discount of ${discount}%. Final amount: ₹${fianlamont}`);



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

// let marks = 82;

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