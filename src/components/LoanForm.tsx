import React from 'react';
import { LoanFormPropsType } from '../types/types';
import { optionsList } from '../data/data';
import { Options } from './Options';
import { Mods } from './Mods';
import { ExtraToggle } from './ExtraToggle';
import { Inputs } from './Inputs';

export const LoanForm = ( {data, onDataChange}: LoanFormPropsType ) => {

  const program = (optionsList[data.purpose].programs).find(program => program.id === data.mod);

  return (
    <form className="form">
      <Options data={ optionsList } selected={ data.purpose } onDataChange={ onDataChange }/>
      <Mods data={ optionsList } selectedPurpose={ data.purpose } selectedMod={ data.mod } onDataChange={ onDataChange } />
      { program && 
        <div className="form__description">
          { program.description }. Starting loan interest { program.initRate }%. Minimum initial fee { program.minFee }%
        </div> }
        <Inputs data={ data } onDataChange={ onDataChange } />
        <ExtraToggle data={ data } onDataChange={ onDataChange } />
    </form>
  );
}