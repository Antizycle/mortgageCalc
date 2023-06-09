import React from 'react';
import { ExtraTogglePropsType } from '../types/types';
import { togglesData } from '../data/data';
import { ExtraToggleInfo } from './ExtraToggleInfo';

export const ExtraToggle = ( {formData, onDataChange}: ExtraTogglePropsType ) => {
  let currentToggles = togglesData.filter( toggle => toggle.id !== 'canConfirmSalary' );
  
  if (formData.regional) currentToggles = currentToggles.filter( toggle => !/salaryProj|insurance/.test(toggle.id));
  else if (formData.salaryProj === false) currentToggles = Array.from(togglesData);

  function handleClick(eventTarget: string, eventValue: boolean) {
        onDataChange([
      { target: eventTarget, value: eventValue }
    ]);
  }

  return (
    <>
      { currentToggles.map( toggle => (
        <div className="form__switch-wrapper" key={ toggle.id }>
          <div className="form__switch" >
            <span className='form__lable--switch-desc'>{ toggle.description }</span>
            <span className={ (formData[toggle.id] ? 'form__acnt-text' : '') + ' form__label--switch' }>
              { formData[toggle.id] ? toggle.discount : '-0.0' }%
            </span>
            <div className={ (formData[toggle.id] ? 'form__switch-container--on' : '') + ' form__switch-container'} 
                  onClick={ () => handleClick(toggle.id, !formData[toggle.id]) }>
              <div className={ (formData[toggle.id] ? 'form__toggle form__toggle--on' : 'form__toggle')}>
              </div>
            </div>
          </div>
          <ExtraToggleInfo toggle={ toggle } />
        </div>
        )) }
    </>
  );
}