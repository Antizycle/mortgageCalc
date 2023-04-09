import React, { useState } from 'react';
import { MaternityTogglePropsType } from '../types/types';
import { thousSeparator, prepareValue } from '../auxiliary/auxiliary';

export const MaternityToggle = ( {feeValue, data, onValueChange, onDataChange}: MaternityTogglePropsType ) => {
  const [ bothValues, setbothValues] = useState([data.matValue, 0]);
  const maxTotal = feeValue;
  const maxFeeValue = Math.round(data.price * 0.9);
  const minFeeValue = Math.round(data.price * data.minFee / 100);
  
  function handleChange (nextMatValue: number, nextFundsValue: number) {
    if (nextMatValue > data.matValue) nextMatValue = data.matValue;
    if (nextMatValue > maxTotal) nextMatValue = maxTotal;
    if (nextMatValue + nextFundsValue > maxFeeValue) nextFundsValue = maxFeeValue - nextMatValue;
    if (nextMatValue + nextFundsValue < minFeeValue) nextFundsValue = minFeeValue - nextMatValue;

    const newFee = nextMatValue + nextFundsValue;
    
    setbothValues([nextMatValue, nextFundsValue]);
    onValueChange({fee: newFee});
    onDataChange([
      { target: 'fee', value: newFee }
    ]);
  }


  function clickHandler(eventValue: boolean) {
    if (eventValue) {
      console.log(data.matValue, data.fee);
      if (data.matValue > data.fee) setbothValues([data.fee, 0]);
      if (data.matValue < data.fee) setbothValues([data.matValue, data.fee - data.matValue]);
    }
    onDataChange([
      { target: 'maternity', value: eventValue }
    ]);
  }

  return (
    <div className="form__switch-wrapper" key="maternity">
      <div className="form__switch" >
        <span className='form__lable--switch-desc'>I want to use my Maternity Capital</span>
        <div className={ (data.maternity ? 'form__switch-container--on' : '') + ' form__switch-container'} 
              onClick={ () => clickHandler(!data.maternity) }>
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
                  value={ thousSeparator(bothValues[0]) }
                  title={ 'Maternity capital cant be more than ' + data.matValue }
                  onChange={ event => 
                    handleChange(prepareValue(event.target.value), bothValues[1]) }
                  />
          </div>
          <div className="form__wrapper" key="funds">
            <label htmlFor='funds_input' className='form__label'>Personal Funds</label>
            <input type='text'
                  className='form__input'
                  id='fundsInput'
                  name='funds_input'
                  value={ thousSeparator(bothValues[1]) }
                  title={ 'Personal funds cant be more than ' + maxTotal }
                  onChange={ event => 
                    handleChange(bothValues[0], prepareValue(event.target.value)) }
                  />
          </div>
        </div>
      }
    </div>
  );
}