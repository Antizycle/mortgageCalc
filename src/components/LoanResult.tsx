import React, { useState } from 'react';
import { LoanResultPropsType, ResultsType } from '../types/types';
import { thousSeparator } from '../auxiliary/auxiliary';
import { Schedule } from './Schedule';
import { calcResults } from '../auxiliary/calculations';
import { Tooltip } from './Tooltip';

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
          <Tooltip type='resultsRate' />
        </div>
        <div className="results__item">
          <h4 className="results__item-header">Loan Amount:</h4>
          <p className="results__item-value">{ thousSeparator(results.loanBody) } ≉</p>
          <Tooltip type='resultsRate' />
        </div>
        <div className="results__item">
          <h4 className="results__item-header">Monthly Payment:</h4>
          <p className="results__item-value">{ thousSeparator(results.monthly) } ≉</p>
          <Tooltip type='resultsRate' />
        </div>
        <div className="results__item">
          <h4 className="results__item-header">Minimum income:</h4>
          <p className="results__item-value">{ thousSeparator(results.minIncome) } ≉</p>
          <Tooltip type='resultsRate' />
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