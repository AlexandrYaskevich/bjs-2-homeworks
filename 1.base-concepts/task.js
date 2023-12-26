"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;

  if (d < 0) {
  arr = [];
  } else if (d === 0) {
  arr = [-b / (2 * a)];
  } else if (d > 0) {
  arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentZeroOne = percent / 100;
  let creditBody = amount - contribution; 
  let monthsPay = creditBody * (percentZeroOne / 12 + (percentZeroOne / 12 / (((1 + percentZeroOne /12)**countMonths)-1)))
  let allPay = creditBody + monthsPay;
  return Number(allPay.toFixed(2));
}