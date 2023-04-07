import React from 'react';
import { LoanFormPropsType } from '../types/types';
import { optionsList } from '../data/data';
import { Options } from './Options';
import { Mods } from './Mods';
import { ExtraToggle } from './ExtraToggle';
import { Inputs } from './Inputs';

export const LoanForm = ( {data, onDataChange}: LoanFormPropsType ) => {

  const program = (optionsList[data.purpose].programs).find(program => program.id === data.mod);

  function handleFormChange(event) {
    console.log(event);
  }

  return (
    <form className="form">
      <Options data={ optionsList } selected={ data.purpose } onChange={ handleFormChange }/>
      <Mods data={ optionsList } selectedPurpose={ data.purpose } selectedMod={ data.mod } handleSelect={ handleFormChange } />
      { program && 
        <div className="form__description">
          { program.description }. Starting loan interest { program.initRate }%. Minimum initial fee { program.minFee }%
        </div> }
        <Inputs data={ data } handleChange={ handleFormChange } handleClick={ handleFormChange } />
        {/* <InputWithRange type='price' data={ data } handleChange={ handleFormChange } />
        <InputWithRange type='fee' data={ data } handleChange={ handleFormChange } />
        <MaternityToggle data={ data } handleChange={ handleFormChange } />
        <InputWithRange type='term' data={ data } handleChange={ handleFormChange } /> */}
        <ExtraToggle data={ data } handleClick={ handleFormChange } />
    </form>
  );
}