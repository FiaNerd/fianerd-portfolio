/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  faCaretDown,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import HomePage from '../pages/HomePage';

export interface Route {
  url: string;
  title: string; // This is translation key
  nav?: React.ComponentType<any>;
  subMenu?: Route[];
  dropdown?: Route[];
  icon?: IconDefinition;
  description?: string;
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
    icon: faCaretDown,
    subMenu: [
      {
        title: 'me',
        url: '/#me',
        description: 'meDescription',
      },
      {
        title: 'skillsWeb',
        url: '/#web',
        description: 'skillsWebDescription',
      },
      {
        title: 'skillsGraphic',
        url: '/#graphic',
        description: 'skillsGraphicDescription',
      },
      {
        title: 'otherSkills',
        url: '/#other-skills',
        description: 'otherSkillsDescription',
      },
      {
        title: 'programsAndSoftwares',
        url: '/#other-skills',
        description: 'programsAndSoftwaresDescription',
      },
      {
        title: 'experience',
        url: '/#experience', 
        description: 'experienceDescription',
      },
      {
        title: 'education',
        url: '/#education',
        description: 'educationDescription',
      },
      {
        title: 'hobbies',
        url: '/#hobbies',
        description: 'hobbiesDescription',
      },
    ],
  },
  {
    title: 'portfolio',
    url: '/portfolio', 
    icon: faCaretDown,
      subMenu: [
        {
          title: 'top5best-projects',
          url: '/portfolio/#top5projects',
          description: 'top5best-projectsDescription',
        },
        {
          title: 'allProjects',
          url: '/portfolio/#alla-projekt',
          description: 'allProjectsDescription',
        },
        {
          title: 'frontend',
          url: '/portfolio/#frontend',
          description: 'frontendDescription',
        },
        {
          title: 'backend',
          url: '/portfolio/#backend',
          description: 'backendDescription',
        },
        {
          title: 'fullstack',
          url: '/portfolio/#fullstack',
          description: 'fullstackDescription',
        },
        {
          title: 'grafisk',
          url: '/portfolio/#graphic-design',
          description: 'grafiskDescription',
        },
      ],
    },
  {
    title: 'news',
    url: '/news',
  },
];
