export namespace Portfolio {

  export interface Link {
    type: string;
    url: string;
    icon: string;
  }

  export interface Tech {
    name: string;
    icon: string;
  }

  export interface PortfolioItems {
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
    sectionId?: string;
  }

  export interface Section {
    sectionId: string;
    title: string;
    items: PortfolioItems[];
  }

  export interface SectionId {
    sectionId: string;
  }

  export interface DetailsItemsProps {
    title: string;
    titleDescription: string;
    images?: { src: string; alt: string; span?: string }[];
    description: string;
    techTitle: string;
    tech: Tech[];
    applicationTypeDetail: {
      text: string;
      icon: {
        name: string;
        width: number;
        height: number;
        color: string;
      };
      suffix: string;
    };
    linkTitle?: string;
    links?: Link[];
  }

  export interface ImageDetails {
    src: string;
    alt: string;
    span?: string;
  }
  
  export interface ImageDetailsProps {
    images: ImageDetails[]; // Now this directly refers to an array of ImageDetails
  }
}
