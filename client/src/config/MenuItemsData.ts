/* eslint-disable @typescript-eslint/no-explicit-any */
// src/config/Navigation.ts

import {
  faCaretDown,
  faCaretRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import HomePage from '../pages/HomePage'

export interface Route {
  url: string
  title: string
  nav?: React.ComponentType<any>
  subMenu?: Route[]
  dropdown?: Route[]
  icon?: IconDefinition
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
    title: 'Portfolio',
    url: '/',
    icon: faCaretDown,
    subMenu: [
      {
        title: 'Webb',
        url: '/web-dev',
        icon: faCaretRight,
        subMenu: [
          {
            title: 'Alla projekt',
            url: '/alla-projekt',
          },
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
]
