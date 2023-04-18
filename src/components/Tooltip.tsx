import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import info_icon from '../img/info_icon.svg';
import { useClickOutside } from '../auxiliary/useClickOutside';
import { inputData } from '../data/data';

export type TooltipPropsType = {
  type: string,
  parent?: React.MutableRefObject<HTMLDivElement | null>
}

export const Tooltip = ({ type, parent }: TooltipPropsType) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [popEl, setPopEl] = useState<HTMLDivElement | null>(null);
  const [arrEl, setArrEl] = useState<HTMLDivElement | null>(null);
  const domNode = useClickOutside(() => { setShowTooltip(false) });
  const refElem = parent?.current ?? domNode.current;
  // const offset = parent ? 10 : 55;
  const { styles, attributes } = usePopper(refElem, popEl, {
    modifiers: [
      { name: 'arrow', options: { element: arrEl } },
      { name: 'offset', options: { offset: [0, 10] } }
    ],
    placement: (parent ? 'auto' : 'bottom-end'),
    
  });
  
  const currentData = inputData.find(entry => entry.id === type);

  return (
    <div ref={ domNode }>
      <div className="tooltip" onClick={ (event) => {
        event.stopPropagation();
        setShowTooltip(!showTooltip)
        } }>
        <img src={ info_icon } alt="info" />
      </div>
      { showTooltip &&
          <div ref={setPopEl} style={ {...styles.popper} } className='tooltip__content' {...attributes.popper}>
            <h4 className="tooltip__header">{ currentData?.label ?? 'Additional Information' }</h4>
            <p className="tooltip__text">
            { currentData?.title ?? 'No additional infromation available at this time' }
            </p>
            <p className="tooltip__text">
            <a href={ currentData?.url ?? 'https://google.com' }>Learn more</a>
            </p>
          <div ref={setArrEl} style={ styles.arrow } className='tooltip__arrow' />
        </div>}
  </div>
  );
}