export interface IBlogCard {
  urlTitle: string;
  title: string;
  titleDescription: string;
  month: string;
  day: string;
  content: string;
  suffix: string;
  img: string;
  status: string;
}

export interface IBlogDetails {
  urlTitle: string;
  title: string;
  titleDescription: string;
  day: string;
  month: string;
  content: string;
  httpHomepage: string;
  img: string;
  suffix: string;
  technologies: string[];
  status: string;
  keyFeature: string;
}
