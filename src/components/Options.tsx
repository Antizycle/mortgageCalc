import React from 'react';
import { OptionsPropsType } from '../types/types';


export const Options = ( {data, selected, onChange}: OptionsPropsType ) => {
  const dataKeys = Object.keys(data);

  return (
    <div className="form__wrapper">
      <label htmlFor='options_list' className='form__label'>Loan purpose:</label>
      <select key='optionsList' 
              name='options_list'
              value={ selected }
              onChange={ onChange }
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