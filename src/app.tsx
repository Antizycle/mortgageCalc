import React from 'react';


export const App: React.FC = () => {
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
        <form className="main__form">
          form component here
        </form>
        <aside className="main__results">
          results here
        </aside>
      </section>
      <section className="main__info">
        info
      </section>
    </main>

    <footer className='footer'>
      2023 / By&nbsp;
        Antizycle
    </footer>
    </>
  );
}