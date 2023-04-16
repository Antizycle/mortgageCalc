import React, { MutableRefObject, useEffect, useRef } from 'react';
import { SchedulePropsType, ScheduleEntryType } from '../types/types';
import { monthList } from '../data/data'; 
import { generateSchedule } from '../auxiliary/auxiliary';

export const Schedule = ({ formData, results, toggleSchedule }: SchedulePropsType) => {
  const domNode = useRef<HTMLDivElement>(null);
  
  const schedule = generateSchedule(formData.term, results);

  const onEscPress = (event: KeyboardEvent) => {
    if (event.code === 'Escape') toggleSchedule();
  }

  useEffect(() => {
    const maybeHandler = (event: MouseEvent | TouchEvent) => {
      if (event.target) {
        if (!(domNode as MutableRefObject<HTMLDivElement>).current.contains(event.target as Node)) {
          toggleSchedule();
        }};
      }
      document.addEventListener('mousedown', maybeHandler);
      document.addEventListener('touchend', maybeHandler);
      document.addEventListener('keyup', onEscPress);
    return () => {
      document.removeEventListener('mousedown', maybeHandler);
      document.removeEventListener('touchend', maybeHandler);
      document.removeEventListener('keyup', onEscPress);
    };
  });

  function generateScheduleRow(entry: ScheduleEntryType) {
    return (
      <tr>
        <td>{ monthList[entry.month] }</td>
        <td title={ `Loan Interest: ${entry.interestPayment}, Loan Ammortization: ${entry.loanAmmortization}` }>{ entry.payment }</td>
        <td>{ entry.nextLoanRemainder }</td>
      </tr>);
  }

  return (
    <div ref={ domNode } className='schedule'>
      <span className='schedule__close' onClick={ toggleSchedule }>X</span>
      <h2 className="schedule__header">
        Mortgage preliminary information
      </h2>
      <table className='schedule__table'>
        <thead><tr>
            <th>Month</th>
            <th>Monthly payment</th>
            <th>Loan Remainder</th>
        </tr></thead>
        <tbody id="tbody">
            {
              schedule.map( (entry, index) => {
                if (index === 0 || entry.month === 0) return (<>
                  <tr><td colSpan={ 3 }>{ entry.year }</td></tr>
                  { generateScheduleRow(entry) }
                  </>)
                else return generateScheduleRow(entry)
              })
            }
        </tbody>
    </table>
    </div>
  );
}