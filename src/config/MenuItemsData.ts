/* eslint-disable @typescript-eslint/no-explicit-any */
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
  subMenuProfile?: Route[];
  skillsSubMenu?: Route[];
  experienceSubMenu?: Route[];
  icon?: IconDefinition;
}

export const navRoutes: Route[] = [
  {
    title: 'home',
    url: '/#home',
    nav: HomePage,
  },
  {
    title: 'profile',
    url: '/#profile',
    icon: faCaretRight,
    subMenuProfile: [
      {
        title: 'skills', 
        url: '/#skills',
        skillsSubMenu: [
          {
            title: 'skillsWeb', 
            url: '/skills/web',
          },
          {
            title: 'skillsGraphic',
            url: '/skills/graphic',
          },
        ],
      },
      {
        title: 'experience',
        url: '/#work-experience',
        experienceSubMenu: [ 
          {
            title: 'experienceWeb',
            url: '/experience/web',
          },
          {
            title: 'experienceGraphic',
            url: '/experience/graphic',
          },
        ],
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
    url: '/',
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
