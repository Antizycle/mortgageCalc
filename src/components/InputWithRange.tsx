import React from 'react';
import { InputWithRangePropsType } from '../types/types';
import { thousSeparator } from '../auxiliary/auxiliary';
import { MaternityToggle } from './MaternityToggle';

export const InputWithRange = ( { formData, input, onChange, onClick}: InputWithRangePropsType ) => {
  let value = Number(formData[input.id]);
  let { min: minValue, max: maxValue, title } = input;
  let isDisabled = false;
  const { id: type, label } = input;
  const maternal = formData.maternity;

  console.log(type, value);

  if (type === 'fee') {
    const minPercent = formData.minFee;
    minValue = formData.price * minPercent / 100; // min Fee value equals to current purpose/mode min fee % of the price
    maxValue = formData.price * 0.9; // max fee is always 90% of the price
    title += ` (${minValue} — ${maxValue})`;
    if (maternal) isDisabled = true; // if maternity is on, disabling fee input and render maternity+funds blocks
  }
  // checking if value is out of bounds
  if (value < minValue) value = minValue;
  if (value > maxValue) value = maxValue;

  // this is percent for range input visual representation
  const percent = Math.round((value - minValue) * 100 / (maxValue - minValue));
  const actualPercent = (value * 100 / formData.price).toFixed(1);

  const priceValue = thousSeparator(value);

  return (
    <>
    <div className={ (isDisabled ? 'form__wrapper--disabled' : '') + ' form__wrapper' } key={ type }>
      <label htmlFor={ type + '_input'} className='form__label'>{ label }</label>
      <input type='text'
             className='form__input'
             id={ type + 'Input' }
             name={ type + '_input'}
             value={ priceValue }
             title={ title }
             onChange={ onChange }
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
             onChange={ onChange }
             disabled={ isDisabled }
            />
    </div>
    { type === 'fee' && <MaternityToggle data={ formData } onChange={ onChange } onClick={ onClick }/>}
    </>
  );
}