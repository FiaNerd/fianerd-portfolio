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
}

export const navRoutes: Route[] = [
  {
    title: 'home',
    url: '/profile#home',
    nav: HomePage,
  },
  {
    title: 'profile',
    url: '/profile#who-am-i',
    icon: faCaretDown,
    subMenu: [
      {
        title: 'me',
        url: '/profile/who-am-i#who-am-i',
        description: 'meDescription',
      },
      {
        title: 'skillsWeb',
        url: '/profile/web-skills#web-skills',
        description: 'skillsWebDescription',
      },
      {
        title: 'skillsGraphic',
        url: '/profile/graphic-skills#graphic-skills',
        description: 'skillsGraphicDescription',
      },
      {
        title: 'otherSkills',
        url: '/profile/additional-skills#additional-skills',
        description: 'otherSkillsDescription',
      },
      {
        title: 'programsAndSoftwares',
        url: '/profile/programs-and-softwares#programs-and-softwares',
        description: 'programsAndSoftwaresDescription',
      },
      {
        title: 'experience',
        url: '/profile/experience#experience',
        description: 'experienceDescription',
      },
      {
        title: 'education',
        url: '/profile/education#education',
        description: 'educationDescription',
      },
      {
        title: 'hobbies',
        url: '/profile/hobbies#hobbies',
        description: 'hobbiesDescription',
      },
    ],
  },
  {
    title: 'portfolio',
    url: '/portfolio#portfolio',
    icon: faCaretDown,
    subMenu: [
      {
        title: 'top5best-projects',
        url: '/portfolio/top-5-projects#top-5-projects',
        description: 'top5best-projectsDescription',
      },
      {
        title: 'frontend',
        url: '/portfolio/frontend#frontend',
        description: 'frontendDescription',
      },
      {
        title: 'backend',
        url: '/portfolio/backend#backend',
        description: 'backendDescription',
      },
      {
        title: 'fullstack',
        url: '/portfolio/fullstack#fullstack',
        description: 'fullstackDescription',
      },
      {
        title: 'graphic-design',
        url: '/portfolio/graphic-design#graphic-design',
        description: 'graphicDescription',
      },
    ],
  },
  {
    title: 'blog',
    url: '/blog',
  },
];
