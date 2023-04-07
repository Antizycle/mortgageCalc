import React from 'react';
import { InputsPropsType } from '../types/types';
import { inputData } from '../data/data';
import { InputWithRange } from './InputWithRange';

export const Inputs = ( {data, handleChange, handleClick}: InputsPropsType ) => {

  return (
    <div className='form' key='inputs'>

      {inputData.map( input => (
        <InputWithRange formData={ data } input={ input } onChange={ handleChange } onClick={ handleClick} />
      ))}

    </div>
  );
}