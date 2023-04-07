import React, { useState } from 'react';
import { LoanResult } from './components/LoanResult';
import { LoanForm } from './components/LoanForm';
import { Info } from './components/Info';
import { initForm } from './data/data';

export const App: React.FC = () => {
  const [ formData, setFormData] = useState(initForm);

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

        <LoanForm data={formData} onDataChange={setFormData} />
        <LoanResult />

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