import React from 'react';
import { LoanFormPropsType } from '../types/types';
import { optionsList } from '../data/data';
import { Options } from './Options';
import { Mods } from './Mods';
import { ExtraToggle } from './ExtraToggle';
import { Inputs } from './Inputs';

export const LoanForm = ( {formData, onDataChange}: LoanFormPropsType ) => {

  const program = (optionsList[formData.purpose].programs).find(program => program.id === formData.mod);

  return (
    <form className="form">
      <Options data={ optionsList } selected={ formData.purpose } onDataChange={ onDataChange }/>
      <Mods 
        data={ optionsList } 
        formData={ formData } 
        selectedPurpose={ formData.purpose } 
        selectedMod={ formData.mod } 
        onDataChange={ onDataChange } 
        />
      { program && 
        <div className="form__description">
          { program.description }. Starting loan interest { program.initRate }%. Minimum initial fee { program.minFee }%
        </div> }
        <Inputs formData={ formData } onDataChange={ onDataChange } />
        <ExtraToggle formData={ formData } onDataChange={ onDataChange } />
    </form>
  );
}