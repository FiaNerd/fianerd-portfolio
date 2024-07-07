/* eslint-disable @typescript-eslint/no-explicit-any */
// src/config/Navigation.ts

import HomePage from '../pages/HomePage';

export interface Route {
  url: string;
  title: string;
  nav?: React.ComponentType<any>; // Optional component
  subMenu?: Route[]; // Submenu for the main dropdown
  dropdown?: Route[]; // Additional dropdown menu for 'Webb'
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
    subMenu: [
      {
        title: 'Webb',
        url: '/web-dev',
        subMenu: [
          {
            title: 'Frontend',
            url: '/frontend',
          },
          {
            title: 'Backend',
            url: '/backend',
          },
          {
            title: 'Fullstack',
            url: '/fullstack',
          },
        ],
        dropdown: [
          {
            title: 'Extra Menu',
            url: '/extra-menu',
          },
        ],
      },
      {
        title: 'Grafisk',
        url: '/graphic-design',
      },
    ],
  },
  {
    title: 'Kontakt',
    url: '/',
  },
];
