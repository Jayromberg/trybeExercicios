const cost = 1000;
const saleValue = 1500;
const tax = 0.2;

var totalCost = cost + (cost * tax);
var profit = saleValue - totalCost;

console.log(profit);