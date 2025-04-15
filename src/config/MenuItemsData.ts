import { faCaretDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import HomePage from '../pages/HomePage';

export interface Route {
  url: string;
  title: string; // This is the translation key
  nav?: React.ComponentType<any>;
  subMenu?: Route[];
  dropdown?: Route[];
  icon?: IconDefinition;
  description?: string;
  sectionId?: string;
}

export const navRoutes: Route[] = [
  {
    title: 'home',
    url: '/profile',
    sectionId: 'home',
    nav: HomePage,
  },
  {
    title: 'profile',
    url: '/profile',
    sectionId: 'who-am-i',
    icon: faCaretDown,
    subMenu: [
      {
        title: 'me',
        url: '/profile',
        sectionId: 'who-am-i',
        description: 'meDescription',
      },
      {
        title: 'skillsWeb',
        url: '/profile',
        sectionId: 'web-skills',
        description: 'skillsWebDescription',
      },
      {
        title: 'skillsGraphic',
        url: '/profile',
        sectionId: 'graphic-skills',
        description: 'skillsGraphicDescription',
      },
      {
        title: 'otherSkills',
        url: '/profile',
        sectionId: 'additional-skills',
        description: 'otherSkillsDescription',
      },
      {
        title: 'programsAndSoftwares',
        url: '/profile',
        sectionId: 'programs-and-softwares',
        description: 'programsAndSoftwaresDescription',
      },
      {
        title: 'experience',
        url: '/profile',
        sectionId: 'experience',
        description: 'experienceDescription',
      },
      {
        title: 'education',
        url: '/profile',
        sectionId: 'education',
        description: 'educationDescription',
      },
      {
        title: 'hobbies',
        url: '/profile',
        sectionId: 'hobbies',
        description: 'hobbiesDescription',
      },
    ],
  },
  {
    title: 'portfolio',
    url: '/portfolio',
    sectionId: 'my-work',
    icon: faCaretDown,
    subMenu: [
      {
        title: 'top5best-projects',
        url: '/portfolio',
        sectionId: 'top-5-projects',
        description: 'top5best-projectsDescription',
      },
      {
        title: 'frontend',
        url: '/portfolio',
        sectionId: 'frontend',
        description: 'frontendDescription',
      },
      {
        title: 'backend',
        url: '/portfolio',
        sectionId: 'backend',
        description: 'backendDescription',
      },
      {
        title: 'fullstack',
        url: '/portfolio',
        sectionId: 'fullstack',
        description: 'fullstackDescription',
      },
      {
        title: 'graphic-design',
        url: '/portfolio',
        sectionId: 'graphic-design',
        description: 'graphicDescription',
      },
    ],
  },
  {
    title: 'blog',
    url: '/blog',
    sectionId: 'blog',
  },
];
