import React from 'react';
import { ExtraTogglePropsType } from '../types/types';
import { togglesData } from '../data/data';
import { ExtraToggleInfo } from './ExtraToggleInfo';

export const ExtraToggle = ( {data, handleClick}: ExtraTogglePropsType ) => {
  let currentToggles = togglesData.filter( toggle => toggle.id !== 'canConfirmSalary' );
  
  if (data.salaryProj === false) currentToggles = Array.from(togglesData);

  return (
    <>
      { currentToggles.map( toggle => (
        <div className="form__switch-wrapper" key={ toggle.id }>
          <div className="form__switch" >
            <span className='form__lable--switch-desc'>{ toggle.description }</span>
            <span className={ (data[toggle.id] ? 'form__acnt-text' : '') + ' form__label--switch' }>
              { data[toggle.id] ? toggle.discount : '-0.0' }%
            </span>
            <div className={ (data[toggle.id] ? 'form__switch-container--on' : '') + ' form__switch-container'} 
                  onClick={ handleClick }>
              <div className={ (data[toggle.id] ? 'form__toggle form__toggle--on' : 'form__toggle')}>
              </div>
            </div>
          </div>
          <ExtraToggleInfo toggle={ toggle } />
        </div>
        )) }
    </>
  );
}