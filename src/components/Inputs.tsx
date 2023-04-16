import React, { useState } from 'react';
import { InputStateType, InputsPropsType } from '../types/types';
import { inputData } from '../data/data';
import { InputWithRange } from './InputWithRange';

export const Inputs = ( {data, onDataChange}: InputsPropsType ) => {
  const [ values, setValues ] = useState<InputStateType>({
    price: data.price,
    fee: data.fee,
    term: data.term
  });

  function onValueChange(newValues: InputStateType) {
    const nextValues = {...values, ...newValues};
    // setValues( (prevValues) => {
    //   return {...prevValues, ...nextValues};
    // });
    setValues(nextValues);
  }

  return (
    <div className='form' key='inputs'>

      {inputData.map( input => (
        <InputWithRange 
          formData={ data } 
          input={ input } 
          value={ values[input.id] }
          onValueChange={ onValueChange }
          onDataChange={ onDataChange } 
          key={ input.id } />
      ))}

    </div>
  );
}