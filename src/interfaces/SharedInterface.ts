export interface Link {
  type: string;
  url: string;
  icon: string;
}

export interface Tech {
  name: string;
  icon: string;
}

export interface ImageDetails {
  src: string;
  alt: string;
  span?: string;
}

export interface ReletedProjectsProps {
  name: string;
}

// export interface SectionId {
//   sectionId: string;
// }

// export interface UrlTitle {
//   urlTitle?: string;
// }

export type SectionId = string; // Simplify SectionId to a string
export type UrlTitle = string; // Simplify UrlTitle to a string
