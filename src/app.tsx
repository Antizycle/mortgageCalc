import React, { useState } from 'react';
import { LoanResult } from './components/LoanResult';
import { LoanForm } from './components/LoanForm';
import { Info } from './components/Info';
import { initForm } from './data/data';
import { NextFormDataType } from './types/types';

export const App: React.FC = () => {
  const [ formData, setFormData] = useState(initForm);

  function onDataChange(nextFormData: NextFormDataType) {
    const updateObj = {...formData};
    nextFormData.forEach( update => {
      //console.log(`Updating ${update.target} with value: ${update.value}`);
      updateObj[update.target] = update.value;
    });
    setFormData(updateObj);
  }

  return (
    <>
    <header className='header'>
      <h1 className='header__title'>
        Mortgage Calculator Component
      </h1>
      <p className="header__text">
        ! WARNING !<br />
        Small text ahead!<br />
        This is a learning excercise. While calculation logic is based on standart math behind loan calculations, this app uses made up currency.
      </p>
    </header>

    <main className='main container'>
      <section className="main__calc">

        <LoanForm formData={ formData } onDataChange={ onDataChange } />
        <LoanResult formData={ formData }/>

      </section>

        <Info />

    </main>

    <footer className='footer'>
      2023 / By&nbsp;
        Antizycle
    </footer>
    </>
  );
}