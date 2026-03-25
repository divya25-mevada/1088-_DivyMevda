// 1: Student Report System
// Calculate average marks for each student
// Add a new property average using map()
// Assign result:
// • Avg ≥ 75 → "Distinction"
// • Avg ≥ 50 → "Pass"
// • Else → "Fail"


const students=[
   { name:"Dev",
    marks:[70,90,80]
   },
   { name:"raj",
    marks:[70,34,66]
   },
   { name:"suresh",
    marks:[56,55,90]
   },
];
const Report = students.map((students) => {
  let sum = students.marks.reduce((a, b) => a + b, 0);
  let avg = sum / students.marks.length;
    
   let status = "";
  if (avg >= 75) {
    status = "Distinction";
  } else if (avg >= 50) {
    status = "Pass";
  } else {
    status = "Fail";
  }

  return {
   ...students,
    average: avg,
    result: status
  };
});

console.log(Report);

// 2: Shopping Cart Analyzer
// Calculate total bill
// Return:
// • Total amount
// • Total quantity of items
// Use rest operator to accept multiple items


const cart=[
   {
   productName:['mobile','TV','laptop'],
   price:[100000,45000,82000]
   }
]

function calculateCart(...items) {
  let totalAmount = 0;
  let totalQuantity = 0;

  items.forEach(item => {
    totalQuantity += item.productName.length;
    totalAmount += item.price.reduce((a, b) => a + b, 0);
  });

  return {
   ...cart,
    totalAmount,
    totalQuantity
  };
}

const result = calculateCart(...cart);

console.log(result);

// 3: User Profile Updater
// Create a function to:
// • Update city
// • Add new property profession
// Use spread operator
// Do NOT modify original object


const object=[
  {
    name:'Raj',
    age:20,   
    city:'surat' 
  }
]

     
  function updateUser(newCity, profession) {
  const updatedUser = object.map(user => {
    return {
      ...user,             
      city: newCity,  
      profession: profession 
    };
  });

  return updatedUser;
}

const result1 = updateUser("Vadodara", "Doctor");

console.log(object);
console.log(result);


// 4: Product Filter & Transform
// Filter products with price > 1000
// Use map() to:
// • Add discountedPrice (10% off)
// Return new array

const Product1=[
  {
  productName:['mobile','TV','laptop'],
   price:[100000,45000,82000,90]

  }
]

const Filter_product=Product1.map((Product1)=>{
  return Product1.price.map((price,index)=>{
    if (price>1000) {
      return{
        name: Product1.productName[index],
          price: price,
        discount:price*0.9
      }
    }

  })
})

console.log(Filter_product);

// 5: Dynamic Number Processor
// Separate:
// • Even numbers
// • Odd numbers
// Also calculate:
// • Sum of even numbers
// • Sum of odd numbers

const num=[1,2,456,78,731,31,254,17]

const even = num.filter(item => item % 2 === 0);
const odd = num.filter(item => item % 2 !== 0);

const sum_even=even.reduce((a,b)=>{
  return a+b
  
},0)
const sum_odd=odd.reduce((a,b)=>{
  return a+b
  
},0)
console.log(even);
console.log("sum of even:",sum_even);
console.log(odd);
console.log("sum of odd:",sum_odd);






