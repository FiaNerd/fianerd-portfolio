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
  day: string;
  month: string;
  title: string;
  titleDescription: string;
  date: string;
  content: string;
  httpHomepage?: string;
  img?: string;
  suffix?: string;
  titleTeche: string;
  technologies?: string[];
  // technologies?: { url: string; icon: string; type: string }[];
  status?: string;
  keyFeatures?: string[];
  titleKeyFeature?: string;
  duration?: string;
}
