import React, { useState } from 'react';
import { LoanResultPropsType, ResultsType } from '../types/types';
import { thousSeparator } from '../auxiliary/auxiliary';
import { Schedule } from './Schedule';
import { calcResults } from '../auxiliary/calculations';

export const LoanResult = ({ formData }: LoanResultPropsType) => {
  const [showSchedule, setShowSchedule] = useState(false);

  const results: ResultsType = calcResults(formData);

  function toggleSchedule() {
    setShowSchedule(!showSchedule);
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
      { showSchedule && 
        <Schedule formData={ formData } results={ results } toggleSchedule={ toggleSchedule } /> }
    </aside>
  );
}