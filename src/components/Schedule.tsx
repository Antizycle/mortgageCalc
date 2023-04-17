import React from 'react';
import { SchedulePropsType, ScheduleEntryType } from '../types/types';
import { monthList } from '../data/data'; 
import { generateSchedule } from '../auxiliary/calculations';
import { useClickOutside } from '../auxiliary/useClickOutside';
import { ScrollTo } from './ScrollTo';

export const Schedule = ({ formData, results, toggleSchedule }: SchedulePropsType) => {
  const domNode = useClickOutside(() => toggleSchedule());
  const schedule = generateSchedule(formData.term, results);
  
  function generateScheduleRow(entry: ScheduleEntryType) {
    return (
      <tr key={ entry.key }>
        <td>{ monthList[entry.month] }</td>
        <td title={ `Loan Interest: ${entry.interestPayment}, Loan Ammortization: ${entry.loanAmmortization}` }>{ entry.payment }</td>
        <td>{ entry.nextLoanRemainder }</td>
      </tr>);
  }

  return (
    <div ref={ domNode } className='schedule' key='scheduleCont'>
      <ScrollTo parent={ domNode }/>
      <span className='schedule__close' onClick={ toggleSchedule }>&#9587;</span>
      <h2 className="schedule__header">
        Mortgage preliminary information
      </h2>
      text
      <table className='schedule__table' key='scheduleTable'>
        <thead>
          <tr>
            <></>
            <th>Month</th>
            <th>Monthly payment</th>
            <th>Loan Remainder</th>
          </tr>
        </thead>
        <tbody id="tbody" key='scheduleBody'>
            {
              schedule.map( (entry, index) => {
                if (index === 0 || entry.month === 0) return (<React.Fragment key={ `${entry.key}-head` }>
                  <tr><td colSpan={ 3 }>{ entry.year }</td></tr>
                  { generateScheduleRow(entry) }
                  </React.Fragment>);
                else return generateScheduleRow(entry)
              })
            }
        </tbody>
    </table>
    </div>
  );
}