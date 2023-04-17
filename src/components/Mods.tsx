import React from 'react';
import { ModsPropsType } from '../types/types';


export const Mods = ( {data, formData, selectedPurpose, selectedMod, onDataChange}: ModsPropsType ) => {
  
  function handleSelect(eventValue: string) {
    // checking if provided value is in the data, otherwise set value to be the base program
    let programData = (data[selectedPurpose].programs).find( program => program.id === eventValue );
    if (!programData) programData = data[selectedPurpose].programs[0];

    const nextFormData = [
      { target: 'regional', value: programData.regional },
      { target: 'initRate', value: programData.initRate },
      { target: 'minFee', value: programData.minFee },
      { target: 'mod', value: programData.id }
    ];
    if (programData.regional) { // if regional is true, turn off some discounts
      nextFormData.push(
        { target: 'salaryProj', value: false },
        { target: 'canConfirmSalary', value: false },
        { target: 'insurance', value: false },
      );
    }
    const feeCheck = Math.round(formData.price * programData.minFee / 100);
    if (formData.fee < feeCheck) {
      nextFormData.push({ target: 'fee', value: feeCheck });
    }
    onDataChange(nextFormData);
  }

  return (
    <div className="form__btn-wrapper">
      { (data[selectedPurpose].programs).map(mod => (
        <div className={ ((mod.id === selectedMod) ? 'form__button--active ' : '') + 'form__button'} 
             key={ mod.id }
             id={ mod.id }
             title={ mod.description }
             onClick={ () => handleSelect(mod.id) }
             >
          { mod.name } |&nbsp;
          <span className={ (mod.id !== selectedMod) ? 'form__acnt-text' : '' }>{ mod.initRate }%</span>
        </div>
      ))

      }
    </div>
  );
}