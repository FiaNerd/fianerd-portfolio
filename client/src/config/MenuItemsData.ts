/* eslint-disable @typescript-eslint/no-explicit-any */
// src/config/Navigation.ts
import {
  faCaretDown,
  faCaretRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import HomePage from '../pages/HomePage';

export interface Route {
  url: string;
  title: string; // This will be a translation key now
  nav?: React.ComponentType<any>;
  subMenu?: Route[];
  dropdown?: Route[];
  icon?: IconDefinition;
}

export const navRoutes: Route[] = [
  {
    title: 'home', // Use translation key
    url: '/',
    nav: HomePage,
  },
  {
    title: 'about', // Use translation key
    url: '/',
  },
  {
    title: 'portfolio', // Use translation key
    url: '/',
    icon: faCaretDown,
    subMenu: [
      {
        title: 'webb', // Use translation key
        url: '/web-dev',
        icon: faCaretRight,
        subMenu: [
          {
            title: 'allProjects', // Use translation key
            url: '/alla-projekt',
          },
          {
            title: 'frontend', // Use translation key
            url: '/frontend',
          },
          {
            title: 'backend', // Use translation key
            url: '/backend',
          },
          {
            title: 'fullstack', // Use translation key
            url: '/fullstack',
          },
        ],
        dropdown: [
          {
            title: 'extra_menu', 
            url: '/extra-menu',
          },
        ],
      },
      {
        title: 'grafisk',
        url: '/graphic-design',
      },
    ],
  },
  // {
  //   title: 'kontakt', // Use translation key
  //   url: '/',
  // },
];
