"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = ((b**2)-(4*a*c));
  if (d === 0) {
    arr.push(-b/(2*a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d))/(2*a))
    arr.push((-b - Math.sqrt(d))/(2*a))
  } 
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  percent = +percent;
  contribution = +contribution;
  amount = +amount;

  let totalAmount;
  let bodyOfCredit = amount - contribution;
  let _MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30;
  let nowDate = new Date();
  let remainingMonths;
  let monthlyPayment;
  let truePercent = (percent / 100);
  
  console.log (typeof percent, percent)

  if (typeof percent !== "number") {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"` 
  } else if (typeof contribution !== "number") {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } else if (typeof amount !== "number") {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  } 
  console.log(bodyOfCredit, nowDate, _MS_PER_MONTH);

  function dateDiffInDays(nowDate, date) {
    let utc1 = Date.UTC(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
    let utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    console.log(utc1, utc2);
    return Math.floor((utc2 - utc1) / _MS_PER_MONTH);
  }

  remainingMonths = dateDiffInDays(nowDate, date);

  monthlyPayment = bodyOfCredit * ((truePercent/12) + ((truePercent/12) / (((1 + (truePercent/12))**remainingMonths) - 1)));

  totalAmount = monthlyPayment * remainingMonths;

  console.log("Сколько месяцев платить: " + +remainingMonths + " Ежемесячный платеж: " + +monthlyPayment.toFixed(2) + " Сколько всего платить: " + +totalAmount.toFixed(2));


  return +totalAmount.toFixed(2);
}
