import { ResultsType } from "../types/types";

export function thousSeparator(num: number) {
  let str: string = num.toString();
  const separations = Math.floor((str.length - 1) / 3); // calculating amount of separations needed
  if (str && separations > 0 ) {
    for (let i = 1; i <= separations; i++) { // running a cycle required amount of time
      const pos = -(i*4 - 1); // position to slice on each iteration
      str = str.slice(0, pos) + ' ' + str.slice(pos); // inserting space at desired position
    }
    return str;
  }
  return num.toString();
}

export function prepareValue (value: string) {
  if (value) {
    if (value.match(/^[^0-9]/)) return 0;
    //if (str.length > 1 && str.charAt(0) === '0') str = str.slice(1);
    return parseInt(value.replace(/[^0-9]/, ''));
  }
  return 0;
}

export function formatLimits (value: number, type: string) {
  if (type === 'term') {
    if (value === 1) return value + ' year';
    return value + ' years';
  }
  return thousSeparator(value) + ' \u2249';
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
  let nextRemainder = 0;
  let payment = results.monthly;
  const schedule = [];

  for (let i = 1; i <= termInMonths; i++) {
    if (month === 12) {
      month = 0;
      year++;
    }

    interestPayment = Math.round(loanRemainder * results.rate / 1200);
    loanAmmortization = payment - interestPayment;
    nextLoanRemainder = loanRemainder - loanAmmortization;

    if (i === termInMonths) { // add accumulated rounding error to the last payment
      payment += nextRemainder;
      loanAmmortization += nextRemainder;
      nextRemainder = 0;
    }

    schedule.push({ year, month, payment, interestPayment, loanAmmortization, nextLoanRemainder });
    month++;
    loanRemainder = nextLoanRemainder;
  }

  return schedule;
}