import { togglesData } from "../data/data";
import { InitFormType, ResultsType } from "../types/types";

export function calcResults (data: InitFormType) {
  const totalDiscount = togglesData
    .filter( (entry) => data[entry.id] )
    .reduce( (sum, entry) => sum + entry.discount , 0); // filter out false discounts, sum up discounts

  const rate = (data.initRate + totalDiscount);
  const loanBody = data.price - data.fee;
  const totalRate = (1 + rate / 1200) ** (data.term * 12);
  const monthly = Math.round((loanBody * (rate / 12) * totalRate) / (totalRate - 1)) / 100;

  const minIncomeCoef = 0.68;
  const minIncome = Math.round(monthly * 100 / minIncomeCoef) / 100;

  return {rate, loanBody, totalRate, monthly, minIncome}
}

export function generateSchedule(term: number, results: ResultsType) {
  const curDate = new Date();
  const termInMonths = term * 12;

  let month = curDate.getMonth();
  let year = curDate.getFullYear();
  let loanRemainder = results.loanBody;
  let nextLoanRemainder = 0
  let interestPayment = 0;
  let loanAmmortization = 0;
  let payment = results.monthly;
  const schedule = [];

  for (let i = 1; i <= termInMonths; i++) {
    if (month === 12) {
      month = 0;
      year++;
    }

    interestPayment = Math.round(loanRemainder * results.rate / 12) / 100;
    loanAmmortization = payment - interestPayment;
    nextLoanRemainder = loanRemainder - loanAmmortization;

    if (i === termInMonths) { // add accumulated rounding error to the last payment
      payment += nextLoanRemainder;
      loanAmmortization += nextLoanRemainder;
      nextLoanRemainder = 0;
    }

    schedule.push({ 
      year, month, payment: payment.toFixed(2), interestPayment, 
      loanAmmortization, nextLoanRemainder: nextLoanRemainder.toFixed(2),
      key: `${year}-${month + 1}`
    });
    month++;
    loanRemainder = nextLoanRemainder;
  }

  return schedule;
}