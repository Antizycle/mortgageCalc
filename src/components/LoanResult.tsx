import React, { useState } from 'react';
import { InitFormType, LoanResultPropsType, ResultsType } from '../types/types';
import { togglesData } from '../data/data';
import { thousSeparator } from '../auxiliary/auxiliary';
import { Schedule } from './Schedule';

export const LoanResult = ({ data }: LoanResultPropsType) => {
  const [showSchdeule, setShowSchedule] = useState(false);

  function calcResults (data: InitFormType) {
    const totalDiscount = togglesData
      .filter( (entry) => data[entry.id] )
      .reduce( (sum, entry) => sum + entry.discount , 0); // filter out false discounts, sum up discounts

    const rate = (data.initRate + totalDiscount);
    const loanBody = data.price - data.fee;
    const totalRate = (1 + rate / 1200) ** (data.term * 12);
    const monthly = Math.round((loanBody * (rate / 1200) * totalRate) / (totalRate - 1));

    const minIncomeCoef = 0.68;
    const minIncome = Math.round(monthly / minIncomeCoef);

    return {rate, loanBody, totalRate, monthly, minIncome}
  }

  const results: ResultsType = calcResults(data);

  

  function toggleSchedule() {
    setShowSchedule(!showSchdeule);
  }

  return (
    <aside className="results">
      <h2 className="results__header">
        Mortgage preliminary information
      </h2>
      <div className="results__wrapper">
        <div className="results__item">
          <h4 className="results__item-header">Loam Interest Rate:</h4>
          <p className="results__item-value">{ thousSeparator(results.rate) }%</p>
        </div>
        <div className="results__item">
          <h4 className="results__item-header">Loan Amount:</h4>
          <p className="results__item-value">{ thousSeparator(results.loanBody) } ≉</p>
        </div>
        <div className="results__item">
          <h4 className="results__item-header">Monthly Payment:</h4>
          <p className="results__item-value">{ thousSeparator(results.monthly) } ≉</p>
        </div>
        <div className="results__item">
          <h4 className="results__item-header">Minimum income:</h4>
          <p className="results__item-value">{ thousSeparator(results.minIncome) } ≉</p>
        </div>
        <button className="results__show-schedule" onClick={toggleSchedule}>
          Show Schedule
        </button>
      </div>
      { showSchdeule && <Schedule formData={data} results={results} toggleSchedule={ toggleSchedule }/> }
    </aside>
  );
}