import React from 'react';
import { ModsPropsType } from '../types/types';


export const Mods = ( {data, selectedPurpose, selectedMod, handleSelect}: ModsPropsType ) => {

  return (
    <div className="form__btn-wrapper">
      { (data[selectedPurpose].programs).map(mod => (
        <div className={ ((mod.id === selectedMod) ? 'form__button--active ' : '') + 'form__button'} 
             key={ mod.id }
             id={ mod.id }
             title={ mod.description }
             onClick={ handleSelect }
             >
          { mod.name } |&nbsp;
          <span className={ (mod.id !== selectedMod) ? 'form__acnt-text' : '' }>{ mod.initRate }%</span>
        </div>
      ))

      }
    </div>
  );
}