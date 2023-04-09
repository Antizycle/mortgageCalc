import React from 'react';
import { OptionsPropsType } from '../types/types';


export const Options = ( {data, selected, onDataChange}: OptionsPropsType ) => {
  const dataKeys = Object.keys(data);

  function handleChange(eventValue: string) {
    const target = 'purpose';
    let formValue = eventValue;

    if (!dataKeys.includes(formValue)) formValue = dataKeys [0];
    onDataChange([
      { target: target, value: formValue },
      { target: 'mod', value: data[formValue].programs[0].id }
    ]);
  }

  return (
    <div className="form__wrapper">
      <label htmlFor='options_list' className='form__label'>Loan purpose:</label>
      <select key='optionsList' 
              name='options_list'
              value={ selected }
              onChange={ event => handleChange(event.target.value) }
              className='form__select'
              >
        { dataKeys.map(option => (
          <option key={ option } 
            value={ option } 
            label={ data[option].title + ' | ' + data[option].programs[0].initRate + '%'} 
            className='form__option'
            >
            { data[option].title }
          </option>
        ))}
      </select>
    </div>
  );
}