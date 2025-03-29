import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroDetails from '../../partials/HeroDetails';
import { Icon } from '@iconify/react';
import ContentTitleDetails from '../../partials/ContentTitleDetails';
import ContentDetails from '../../partials/ContentDetails';
import GraphicPortfolioContentAbout from './GraphicPortfolioContentAbout';

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
    category: string;
    year: string;
    yearText: string;
    client: string;
    technologies: string;
    description: string;
    goals: string;
    role: string;
    challenges: string;
    results: string;
    testmonial: string;
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
  const { t } = useTranslation(['portfolio/graphicPortfolioSection']);

  if (!isVisible || !graphicDetails) {
    return null; // Don't render if the sidebar is not visible or no data is available
  }

  // Transform graphicDetails into an array
  const graphicItemsPortfolio = [
    {
      client: graphicDetails?.client,
      technologies: graphicDetails?.technologies,
      goals: graphicDetails?.goals,
      role: graphicDetails?.role,
      challenges: graphicDetails?.challenges,
      results: graphicDetails?.results,
      testimonial: graphicDetails?.testmonial,
      tags: graphicDetails?.tags,
      relatedProjects: graphicDetails?.relatedProjects,
      demands: graphicDetails?.demands,
      ctaLink: graphicDetails?.ctaLink,
      ctaButton: graphicDetails?.ctaButton,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-80 z-40"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside className="relative bg-bg-primary flex flex-col gap-2 h-full z-50 overflow-y-auto ml-auto max-w-[700px] w-full">
        {/* HeroDetails Component */}
        <div className="w-full">
          <HeroDetails
            title={graphicDetails?.title || ''}
            image={graphicDetails?.image || ''}
            subTitle={graphicDetails?.subTitle || ''}
            light="text-[#8d4970]"
            dark="dark:text-[#55ae63]"
          />
        </div>

        {/* Header Section */}
        <div className="px-8 mb-12">
          <div className="flex flex-col mb-8 items-start lg:flex-row">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xl transition-all duration-200 hover:scale-105 text-btn-bg hover:text-bg-hover dark:hover:text-bg-hover bg-transparent w-auto py-1"
            >
              <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
              {t('partialTranslation:goBack')}
            </button>
          </div>
          <ContentTitleDetails
            title={graphicDetails?.title || ''}
            yearText={graphicDetails?.yearText || 'N/A'}
            year={graphicDetails?.year || ''}
            subTitle={graphicDetails?.subTitle || ''}
          />

          <ContentDetails
            content={graphicDetails.description}
            suffix={''}
            http={''}
            icon={{
              name: '',
              width: 0,
              height: 0,
              color: '',
            }}
          />

          <div className="lg:col-span-1 mb-12 ">
            <img
              src={graphicDetails.image}
              alt={graphicDetails.alt}
              className="w-full md:w-[70%] h-auto mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* Pass the transformed data */}
          <GraphicPortfolioContentAbout
            graphicItemsPortfolio={graphicItemsPortfolio}
          />
        </div>
      </aside>
    </div>
  );
};

export default SidebarGraphicPortfolio;
