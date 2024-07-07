// src/config/Navigation.ts

import HomePage from '../pages/HomePage';

export interface Route {
  url: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nav?: React.ComponentType<any>;
  subMenu?: Route[];
}

export const navRoutes: Route[] = [
  {
    title: 'Hem',
    url: '/',
    nav: HomePage,
  },
  {
    title: 'Om mig',
    url: '/',
  },
  {
    title: 'Projekt',
    url: '/',
    subMenu:[
      {
        title: 'Webb',
        url: 'web-dev'
      },
      {
        title: 'Grafisk',
        url: 'graphic-design'
      }
    ]
    },
  {
    title: 'Kontakt',
    url: '/',
  },
];
