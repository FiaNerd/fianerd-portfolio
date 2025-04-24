// import { useEffect, useRef } from 'react';

// // Custom hook for detecting clicks outside of a specific element
// export const useClickOutside = <T extends HTMLElement>(
//   callback: () => void
// ) => {
//   const ref = useRef<T>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         callback();
//       }
//     };

//     // Attach the event listener to the document
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       // Clean up the event listener when the component unmounts
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [callback]);

//   return ref;
// };

import { useEffect, useRef } from 'react';

export function useClickOutside<T extends HTMLElement>(handler: () => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return ref;
}
