// 2. Order Management System
// For each order:
// 1. Calculate total amount
// 2. Calculate total items quantity
// 3. Return new array:

// 4. Using the above assignments, turn into a single mini web app (UI + JS)

const orders=[{
    Productname:'iphone',
    price:80000,
    quantity:1},

    {
    Productname:'Speaker',
    price:2000,
    quantity:3},

    {
    Productname:'TV',
    price:45000,
    quantity:2},

]





function total_amount(order){
    
    let sum = 0;

  order.forEach(o => {
    sum += o.price * o.quantity;
  });

  return sum;

}

function total_items_quantity(params) {
    let item=0;

    params.forEach(o=>
        item+=o.quantity
    )

    return `
    <h3>Total quantity: ${item}</h3>
`}

let amt=total_amount(orders)

const rows = orders.map(o => `
  <tr>
    <td>${o.Productname}</td>
    <td>${o.price}</td>
    <td>${o.quantity}</td>
  </tr>
`).join("");

document.getElementById("ordersTable").innerHTML = rows;

document.getElementById("quantity").innerHTML=total_items_quantity(orders)
document.getElementById("amount").innerText="TotAL amount:"+amt

