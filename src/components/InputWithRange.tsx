import React, { useEffect, useState } from 'react';
import { InputWithRangePropsType } from '../types/types';
import { thousSeparator, prepareValue, formatLimits } from '../auxiliary/auxiliary';
import { MaternityToggle } from './MaternityToggle';

export const InputWithRange = ({ formData, input, value, onValueChange, onDataChange }: InputWithRangePropsType) => {
  const [ timeoutId, setTimeoutId ] = useState<NodeJS.Timeout>();
  // if (value !== Number(formData[input.id])) setValue((Number(formData[input.id])));
  
  // let value = Number(formData[input.id]);
  let { min: minValue, max: maxValue, title } = input;
  let isDisabled = false;
  const { id: type, label } = input;
  const maternal = formData.maternity;


  if (type === 'fee') {
    const minPercent = formData.minFee;
    minValue = Math.round(formData.price * minPercent / 100); // min Fee value equals to current purpose/mode min fee % of the price
    maxValue = Math.round(formData.price * 0.9); // max fee is always 90% of the price
    title += ` (${minValue} — ${maxValue})`;
    if (maternal) isDisabled = true; // if maternal is on, disabling fee input and render maternity+funds blocks
  }

  // this is percent for range input visual representation
  const percent = Math.round((value - minValue) * 100 / (maxValue - minValue));
  const actualPercent = (value * 100 / formData.price).toFixed(1);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let eventValue = prepareValue(event.target.value);
    onValueChange({ [type]: eventValue });

    if (timeoutId) clearTimeout(timeoutId);

    setTimeoutId(setTimeout( () => {
      if (eventValue < minValue) eventValue = minValue;
      if (eventValue > maxValue) eventValue = maxValue;
      const newValues = { [type]: eventValue };

      const updateData = [{ target: type, value: eventValue }];
      if (type === 'fee') updateData.push(
          { target: 'feePercent', value: Number((eventValue * 100 / formData.price).toFixed(1))}
        );
      if (type === 'price') {
        const newFeeValue = Math.round(eventValue * formData.feePercent / 100);
        newValues.fee = newFeeValue;
        updateData.push(
          { target: 'fee', value: newFeeValue }
        );
      }
      onValueChange(newValues);
      onDataChange(updateData);
    }, 1000));
  }

 useEffect( () => {
  return () => clearTimeout(timeoutId);
 }, [timeoutId]);

  return (
    <>
    <div className={ (isDisabled ? 'form__wrapper--disabled' : '') + ' form__wrapper' } key={ type }>
      <label htmlFor={ type + '_input'} className='form__label'>{ label }</label>
      <input type='text'
             className='form__input'
             id={ type + 'Input' }
             name={ type + '_input'}
             value={ thousSeparator(value) }
             maxLength={7}
             title={ title }
             onChange={ handleChange }
             disabled={ isDisabled }
             />
      { type === 'fee' && <i className="form__fee-percent">{ actualPercent }%</i> }
      <input type='range'
             className={ (isDisabled ? 'form__range--disabled' : '') + ' form__range' }
             id={ type + 'Range' }
             name={ type + '_range'}
             value={ value }
             min={ minValue }
             max={ maxValue }
             style={ {backgroundSize: percent + '%'}}
             onChange={ handleChange }
             disabled={ isDisabled }
            />
        <div className="form__input-min">{ formatLimits(minValue, type) } </div>
        <div className="form__input-max">{ formatLimits(maxValue, type) } </div>
    </div>
    { type === 'fee' && 
      <MaternityToggle 
        feeValue={ value }
        formData={ formData } 
        onValueChange={ onValueChange }
        onDataChange={ onDataChange } 
        /> 
    }
    </>
  );
}