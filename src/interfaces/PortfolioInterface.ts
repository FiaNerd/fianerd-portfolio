import { ImageDetails, Link, SectionId, Tech } from './SharedInterface';

export interface PortfolioItems {
  sectionId: string;
  title: string;
  urlTitle: string;
  applicationType: string;
  subTitle: string;
  description: string;
  img: string;
  projectType: string;
  linkTitle: string;
  links: Link[];
  techTitle: string;
  tech: Tech[];
  ctaButton: string;
  projectDuration: string;
  titleDescription: string;
}

export interface Section {
  sectionId: SectionId;
  title: string;
  items: PortfolioItems[];
}

export interface DetailsItemsProps {
  title?: string;
  titleDescription?: string;
  images?: ImageDetails[];
  description?: string;
  techTitle?: string;
  tech?: Tech[];
  applicationTypeDetail?: {
    text?: string;
    icon?: {
      name?: string;
      width?: number;
      height?: number;
      color?: string;
    };
    suffix?: string;
  };
  linkTitle?: string;
  links?: Link[];
}

export interface LinkItem {
  url: string;
  icon: string;
  type: string;
  text?: string;
  privateText?: string;
}
