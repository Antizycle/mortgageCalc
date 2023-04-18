import React, { useEffect, useState } from 'react';
import { InputStateType, InputsPropsType } from '../types/types';
import { inputData } from '../data/data';
import { InputWithRange } from './InputWithRange';

export const Inputs = ( {formData, onDataChange}: InputsPropsType ) => {
  const [ values, setValues ] = useState<InputStateType>({
    price: formData.price,
    fee: formData.fee,
    term: formData.term
  });

  useEffect( () => {
    const nextValues = {
    price: formData.price,
    fee: formData.fee,
    term: formData.term
    };
    setValues(nextValues);
  }, [formData]);

  function onValueChange(newValues: InputStateType) {
    const nextValues = {...values, ...newValues};
    setValues(nextValues);
  }

  return (
    <div className='form' key='inputs'>

      {inputData.map( input => (
        <InputWithRange 
          formData={ formData } 
          input={ input } 
          value={ values[input.id] }
          onValueChange={ onValueChange }
          onDataChange={ onDataChange } 
          key={ input.id } />
      ))}

    </div>
  );
}