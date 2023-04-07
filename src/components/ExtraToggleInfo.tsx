import React, { useState } from 'react';
import { ToggleType } from '../types/types'; 

export type ExtraToggleInfoType = {
  toggle: ToggleType,
}

export const ExtraToggleInfo = ( {toggle}: ExtraToggleInfoType ) => {
  const [ showInfo, setShowInfo ] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  }

  return (
    <>
    <p className="form__switch-info-title" onClick={handleInfoClick}>Additional information ⌄</p>
      { showInfo && 
        <p className="form__switch-info">
          { toggle.info }<br />
          <a href={ toggle.url } className='form__link'>Learn more</a>
        </p>
      }
    </>
  );
}