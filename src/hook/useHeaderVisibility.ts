// import { useEffect, useState } from 'react';

// export const useHeaderVisibility = () => {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     let lastScrollY = 0;
//     const onScroll = () => {
//       const currentScrollY = window.scrollY;
//       setVisible(currentScrollY < lastScrollY || currentScrollY === 0);
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   return visible;
// };

