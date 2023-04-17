import React, { useState } from 'react';
import { MaternityTogglePropsType } from '../types/types';
import { thousSeparator, prepareValue } from '../auxiliary/auxiliary';

export const MaternityToggle = ( {feeValue, formData, onValueChange, onDataChange}: MaternityTogglePropsType ) => {
  const [ bothValues, setbothValues] = useState([formData.matValue, 0]);
  const maxTotal = feeValue;
  const maxFeeValue = Math.round(formData.price * 0.9);
  const minFeeValue = Math.round(formData.price * formData.minFee / 100);
  
  function handleChange (nextMatValue: number, nextFundsValue: number) {
    if (nextMatValue > formData.matValue) nextMatValue = formData.matValue;
    if (nextMatValue > maxTotal) nextMatValue = maxTotal;
    if (nextMatValue + nextFundsValue > maxFeeValue) {
      nextFundsValue = maxFeeValue - nextMatValue;
    }
    if (nextMatValue + nextFundsValue < minFeeValue) {
      nextFundsValue = minFeeValue - nextMatValue;
    }

    const newFee = nextMatValue + nextFundsValue;
    
    setbothValues([nextMatValue, nextFundsValue]);
    onValueChange({fee: newFee});
    onDataChange([
      { target: 'fee', value: newFee }
    ]);
  }


  function clickHandler(eventValue: boolean) {
    if (eventValue) {
      if (formData.matValue > formData.fee) setbothValues([formData.fee, 0]);
      if (formData.matValue < formData.fee) {
        setbothValues([formData.matValue, formData.fee - formData.matValue]);
      }
    }
    onDataChange([
      { target: 'maternity', value: eventValue }
    ]);
  }

  return (
    <div className="form__switch-wrapper" key="maternity">
      <div className="form__switch" >
        <span className='form__lable--switch-desc'>I want to use my Maternity Capital</span>
        <div className={ (formData.maternity ? 'form__switch-container--on' : '') + ' form__switch-container'} 
              onClick={ () => clickHandler(!formData.maternity) }>
          <div className={ (formData.maternity ? 'form__toggle form__toggle--on' : 'form__toggle')}>
          </div>
        </div>
      </div>
      { formData.maternity && 
        <div className="form__wrapper--maternity" key="matCapital">
          <div className="form__wrapper">
            <label htmlFor='maternity_input' className='form__label'>Maternity capital</label>
            <input type='text'
                  className='form__input'
                  id='maternityInput'
                  name='maternity_input'
                  value={ thousSeparator(bothValues[0]) }
                  title={ 'Maternity capital cant be more than ' + formData.matValue }
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