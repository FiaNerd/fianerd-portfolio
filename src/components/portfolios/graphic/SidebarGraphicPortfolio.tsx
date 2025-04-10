import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import HeroDetails from '../../partials/HeroDetails';
import { Icon } from '@iconify/react';
import ContentTitleDetails from '../../partials/ContentTitleDetails';
import ContentDetails from '../../partials/ContentDetails';
import GraphicPortfolioContentAbout from './GraphicPortfolioContentAbout';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
import LightGallery from 'lightgallery/react';

interface ISidebarGraphicPortfolioProps {
  isVisible: boolean;
  onClose: () => void;
  sidebarWidth?: number;
  setSidebarWidth?: React.Dispatch<React.SetStateAction<number>>;
  graphicDetails?: {
    urlTitle: string;
    title: string;
    subTitle: string;
    image: string;
    images: { src: string; alt: string; span?: string }[];
    category: string;
    year: string;
    yearText: string;
    clientTitle?: string;
    client: string;
    techTitle?: string;
    tech: { name: string; icon: string }[];
    description: string;
    goals: string;
    role: string;
    challenges: string;
    results: string;
    testimonial: string;
    tags: string[];
    relatedProjects: string[];
    ctaLink: string;
    demands: string;
    alt: string;
    ctaButton: string;
  };
}

const SidebarGraphicPortfolio = ({
  isVisible,
  onClose,
  graphicDetails,
}: ISidebarGraphicPortfolioProps) => {
  const { t } = useTranslation(['portfolio/graphicPortfolioSection', 'common']);
  const lightGallery = useRef<any>(null);

  console.log('isVisible:', isVisible);
  console.log('graphicDetails:', graphicDetails);

  if (!isVisible || !graphicDetails) {
    console.log('Sidebar is not visible or graphicDetails is missing.');
    return null;
  }

  const titles = t('graphicItemsPortfolioTitles', { returnObjects: true }) as {
    clientTitle?: string;
    techTitle?: string;
  };
  console.log('titles:', titles);

  const graphicItemsPortfolio = [
    {
      clientTitle:
        graphicDetails?.clientTitle || titles.clientTitle || 'Client: ',
      client: graphicDetails?.client || 'N/A',
      subTitle: graphicDetails?.subTitle || 'No subtitle available',
      techTitle:
        graphicDetails?.techTitle || titles.techTitle || 'Technologies',
      tech:
        graphicDetails?.tech?.map((technology) => ({
          name: technology.name || 'Unknown Technology',
          icon: technology.icon || '',
        })) || [],
      goals: graphicDetails?.goals || 'No goals provided',
      role: graphicDetails?.role || 'No role specified',
      challenges: graphicDetails?.challenges || 'No challenges specified',
      results: graphicDetails?.results || 'No results available',
      testimonial: graphicDetails?.testimonial || 'No testimonial available',
      tags: graphicDetails?.tags || [],
      relatedProjects: graphicDetails?.relatedProjects || [],
      demands: graphicDetails?.demands || 'No demands specified',
      ctaLink: graphicDetails?.ctaLink || '#',
      ctaButton: graphicDetails?.ctaButton || 'Learn More',
    },
  ];

  console.log('graphicItemsPortfolio:', graphicItemsPortfolio);

  return (
    <>
      <div className="fixed inset-0 z-50 flex overflow-hidden">
        <div
          className="absolute inset-0 bg-black opacity-80 z-40"
          onClick={onClose}
        ></div>
        <aside className="relative bg-bg-primary flex flex-col gap-2 h-full z-50 overflow-y-auto ml-auto max-w-[700px] w-full">
          <HeroDetails
            title={graphicDetails?.title || ''}
            image={graphicDetails?.image || ''}
            subTitle={graphicDetails?.subTitle || ''}
            light="text-[#8d4970]"
            dark="dark:text-[#55ae63]"
          />
          <ContentTitleDetails
            title={graphicDetails?.title || ''}
            yearText={graphicDetails?.yearText || 'N/A'}
            year={graphicDetails?.year || ''}
            clientTitle={titles?.clientTitle || ''}
            client={graphicDetails?.client || ''}
            subTitle={graphicDetails?.subTitle || ''}
          />
          <GraphicPortfolioContentAbout
            graphicItemsPortfolio={graphicItemsPortfolio}
          />
        </aside>
      </div>
    </>
  );
};

export default SidebarGraphicPortfolio;
