import React from 'react';
import { LoanResultPropsType } from '../types/types';
import { togglesData } from '../data/data';
import { thousSeparator } from '../auxiliary/auxiliary';

export const LoanResult = ({ data }: LoanResultPropsType) => {
  const totalDiscount = togglesData
    .filter( (entry) => data[entry.id] )
    .reduce( (sum, entry) => sum + entry.discount , 0); // filter out false discounts, sum up discounts
  const rate = (data.initRate + totalDiscount);

  const loanBody = data.price - data.fee;
  const totalRate = (1 + rate / 1200) ** (data.term * 12);
  const montlhly = Math.round((loanBody * (rate / 1200) * totalRate) / (totalRate - 1));
  console.log(totalRate);

  const minIncomeCoef = 0.68;
  const minIncome = Math.round(montlhly / minIncomeCoef);

  return (
    <aside className="main__results">
      <h2>Mortgage preliminary information</h2>
      <div className="form__btn-wrapper">
        <div className="main__result">
          <h4>Loam Interest Rate:</h4>
          <p>{ thousSeparator(rate) }%</p>
        </div>
        <div className="main__result">
          <h4>Loan Amount:</h4>
          <p>{ thousSeparator(loanBody) } ≉</p>
        </div>
        <div className="main__result">
          <h4>Monthly Payment:</h4>
          <p>{ thousSeparator(montlhly) } ≉</p>
        </div>
        <div className="main__result">
          <h4>Minimum income:</h4>
          <p>{ thousSeparator(minIncome) } ≉</p>
        </div>
      </div>
    </aside>
  );
}