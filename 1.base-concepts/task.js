"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;

  if (d === 0) {
  arr = [-b / (2 * a)];
  } else if (d > 0) {
  arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentZeroOne = (percent / 100) / 12;
  let creditBody = amount - contribution; 
  let monthsPay = creditBody * (percentZeroOne + (percentZeroOne / (((1 + percentZeroOne)**countMonths) - 1))) ;
  let allPay = monthsPay * countMonths;
  return Number(allPay.toFixed(2));
}
