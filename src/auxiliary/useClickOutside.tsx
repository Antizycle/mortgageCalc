import {useRef, useEffect, MutableRefObject} from 'react';

export function useClickOutside (handler: () => void) {
  const domNode = useRef<HTMLDivElement>(null);

  const onEscPress = (event: KeyboardEvent) => {
    if (event.code === 'Escape') handler();
  }

  useEffect(() => {
    const maybeHandler = (event: MouseEvent | TouchEvent) => {
      if (event.target) {
        if (!(domNode as MutableRefObject<HTMLDivElement>).current.contains(event.target as Node)) {
          handler();
        }};
      }
      document.addEventListener('mousedown', maybeHandler);
      document.addEventListener('touchend', maybeHandler);
      document.addEventListener('keyup', onEscPress);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
      document.removeEventListener('touchend', maybeHandler);
      document.removeEventListener('keyup', onEscPress);
    };
  });

  return domNode;
}