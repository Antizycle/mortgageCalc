import React, { useEffect, useState } from 'react';
import { ScrollToPropType } from '../types/types';

export const ScrollTo = ({ parent }: ScrollToPropType) => {
  const [ showToTop, setShowToTop] = useState(false);
  const [ showToBot, setShowToBot] = useState(true);

  function showToTopButton(parentEl: HTMLDivElement) { 
    setShowToTop( (parentEl.scrollTop > 400) ? true : false );
    setShowToBot( (parentEl.scrollTop > parentEl.scrollHeight - 600) ? false : true );
  }

  useEffect( () => {
    const parentEl = parent.current;
    parentEl?.addEventListener('scroll', () => showToTopButton(parentEl));
    
    return () => {
      parentEl?.removeEventListener('scroll', () => showToTopButton(parentEl));
    }
  }, [parent]);

  function scrollTo (pos = 0) {
    parent.current?.scrollTo({
      top: pos,
      behavior: 'smooth'
    });
  }

  return (
    <div className="scroll-to__container">
      { showToTop && 
        <div 
          className="scroll-to__button scroll-to__button--top"
          onClick={ () => scrollTo() }
          >
          &#8657;
        </div> }
      <div 
        className="scroll-to__button scroll-to__button--bot" 
        style={ { visibility: showToBot ? 'visible' : 'hidden' } }
        onClick={ () => scrollTo(parent.current?.scrollHeight) }
        >
        &#8659;
      </div>
    </div>
  );
}