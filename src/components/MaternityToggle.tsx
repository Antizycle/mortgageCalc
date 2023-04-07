import React, { useState } from 'react';
import { MaternityTogglePropsType } from '../types/types';
import { thousSeparator, prepareValue } from '../auxiliary/auxiliary';

export const MaternityToggle = ( {data, onChange, onClick}: MaternityTogglePropsType ) => {
  const [ totalValue, setTotalValue] = useState([data.matValue, 0]);
  const maxTotal = data.fee;
  const total = totalValue[0] + totalValue[1];

  if (total < maxTotal) setTotalValue([totalValue[0], maxTotal - data.matValue]);
  if (total > maxTotal) setTotalValue([maxTotal, 0]);
  // if (data.matValue > maxTotal) setTotalValue([maxTotal, 0]);
  
  function handleMaternityChange (event: React.ChangeEvent<HTMLInputElement>) {
    let nextMatValue = prepareValue(event.target.value);
    let nextFundsValue = totalValue[1];

    if (nextMatValue > data.matValue) {
      nextMatValue = data.matValue;
    } 
    if (nextMatValue < 0) {
      nextMatValue = 0;
    }
    if (nextMatValue > maxTotal) {
      nextMatValue = maxTotal;
      nextFundsValue = 0;
    }
    if (nextMatValue + nextFundsValue > maxTotal) nextFundsValue = maxTotal - nextMatValue;

    setTotalValue([nextMatValue, nextFundsValue]);
  }

  function handleFundsChange (event: React.ChangeEvent<HTMLInputElement>) {
    let nextFundsValue = prepareValue(event.target.value);
    let nextMatValue = totalValue[0];

    if (nextFundsValue < 0 ) nextFundsValue = 0;
    if (nextFundsValue > maxTotal) nextFundsValue = maxTotal;
    if (nextFundsValue + nextMatValue >= maxTotal) nextMatValue = maxTotal - nextFundsValue;
    if (nextMatValue < 0) nextMatValue = 0;
    if (nextMatValue > data.matValue) nextMatValue = data.matValue

    setTotalValue([nextMatValue, nextFundsValue]);
  }

  return (
    <div className="form__switch-wrapper" key="maternity">
      <div className="form__switch" >
        <span className='form__lable--switch-desc'>I want to use my Maternity Capital</span>
        <div className={ (data.maternity ? 'form__switch-container--on' : '') + ' form__switch-container'} 
              onClick={ onClick }>
          <div className={ (data.maternity ? 'form__toggle form__toggle--on' : 'form__toggle')}>
          </div>
        </div>
      </div>
      { data.maternity && 
        <div className="form__wrapper--maternity" key="matCapital">
          <div className="form__wrapper">
            <label htmlFor='maternity_input' className='form__label'>Maternity capital</label>
            <input type='text'
                  className='form__input'
                  id='maternityInput'
                  name='maternity_input'
                  value={ thousSeparator(totalValue[0]) }
                  title={ 'Maternity capital cant be more than ' + data.matValue }
                  onChange={ handleMaternityChange }
                  />
          </div>
          <div className="form__wrapper" key="funds">
            <label htmlFor='funds_input' className='form__label'>Personal Funds</label>
            <input type='text'
                  className='form__input'
                  id='fundsInput'
                  name='funds_input'
                  value={ thousSeparator(totalValue[1]) }
                  title={ 'Personal funds cant be more than ' + maxTotal }
                  onChange={ handleFundsChange }
                  />
          </div>
        </div>
      }
    </div>
  );
}