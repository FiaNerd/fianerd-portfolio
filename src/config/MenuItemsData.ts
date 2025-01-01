/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  faCaretDown,
  faCaretRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import HomePage from '../pages/HomePage';

export interface Route {
  url: string;
  title: string; // This is translation key
  nav?: React.ComponentType<any>;
  subMenu?: Route[];
  dropdown?: Route[];
  // subMenuProfile?: Route[];
  skillsSubMenu?: Route[];
  experienceSubMenu?: Route[];
  icon?: IconDefinition;
}

export const navRoutes: Route[] = [
  {
    title: 'home',
    url: '/', // Home route
    nav: HomePage,
  },
  {
    title: 'profile',
    url: '/#profile', 
    icon: faCaretDown,
    subMenu: [
      {
        title: 'me',
        url: '/#me',
      },
      {
        title: 'skills',
        url: '/#skills',
        icon: faCaretRight,
        subMenu: [
          {
            title: 'skillsWeb',
            url: '/#web',
          },
          {
            title: 'skillsGraphic',
            url: '/#graphic',
          },
        ],
      },
      {
        title: 'experience',
        url: '/#experience', 
      },
      {
        title: 'education',
        url: '/#education',
      },
      {
        title: 'hobbies',
        url: '/#hobbies',
      },
    ],
  },
  {
    title: 'portfolio',
    url: '/portfolio', 
    icon: faCaretDown,
    subMenu: [
      {
        title: 'webb',
        url: '/web-dev',
        icon: faCaretRight,
        subMenu: [
          {
            title: 'allProjects',
            url: '/alla-projekt',
          },
          {
            title: 'frontend',
            url: '/frontend',
          },
          {
            title: 'backend',
            url: '/backend',
          },
          {
            title: 'fullstack',
            url: '/fullstack',
          },
        ],
      },
      {
        title: 'grafisk',
        url: '/graphic-design',
      },
    ],
  },
  {
    title: 'news',
    url: '/news',
  },
];
