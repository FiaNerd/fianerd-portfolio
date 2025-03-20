export interface IBlogCard {
  id: string;
  title: string;
  date: string;
  content: string;
  httpHomepage?: string;
  img: string;
  suffix: string;
  technologies: string[];
  status: string;
  keyFeature?: string;
  keyFeatures?: string[];
}
