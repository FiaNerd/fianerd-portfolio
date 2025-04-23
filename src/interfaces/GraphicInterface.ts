import {
  Tech,
  ImageDetails,
  ReletedProjectsProps,
} from '../interfaces/SharedInterface';

import { SectionId, UrlTitle } from './SharedInterface';

export interface GraphicItem {
  urlTitle?: UrlTitle;
  subTitle?: string;
  techTitle?: string;
  tech: Tech[];
  goals: string;
  role: string;
  challenges: string;
  results: string;
  testimonial: string;
  tags: string[];
  relatedProjects: ReletedProjectsProps[];
  ctaLink: string;
  demands: string;
  ctaButton: string;
}

export interface GraphicPortfolioContentProps {
  graphicItemsPortfolio: GraphicItem[];
}

export interface SidebarGraphicPortfolioProps {
  isVisible: boolean;
  onClose: () => void;
  sidebarWidth?: number;
  setSidebarWidth?: React.Dispatch<React.SetStateAction<number>>;
  graphicDetails?: GraphicDetailsProps;
}

export interface GraphicDetailsProps {
  urlTitle: string;
  title: string;
  subTitle: string;
  image: string;
  images: ImageDetails[];
  category: string;
  year: string;
  yearText: string;
  clientTitle?: string;
  client: string;
  techTitle?: string;
  tech: Tech[];
  description: string;
  goals: string;
  role: string;
  challenges: string;
  results: string;
  testimonial: string;
  tags: string[];
  relatedProjects: ReletedProjectsProps[];
  ctaLink: string;
  demands: string;
  alt: string;
  ctaButton: string;
}

export interface GraphicPortfolioContentAboutProps {
  graphicItemsPortfolio: GraphicItem[];
}
