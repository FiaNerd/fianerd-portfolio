// import { useEffect, useRef } from 'react';

// export const useClickOutside = <T extends HTMLElement>(callback: () => void) => {
//   const ref = useRef<T>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent | TouchEvent) => {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         callback();
//       }
//     };

//     document.addEventListener('mouseup', handleClickOutside);
//     document.addEventListener('touchend', handleClickOutside);

//     return () => {
//       document.removeEventListener('mouseup', handleClickOutside);
//       document.removeEventListener('touchend', handleClickOutside);
//     };
//   }, [callback]);

//   return ref;
// };

import { useEffect, useRef } from 'react';

// Custom hook for detecting clicks outside of a specific element
export const useClickOutside = <T extends HTMLElement>(
  callback: () => void
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};
