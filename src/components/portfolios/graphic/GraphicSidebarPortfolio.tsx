// SidebarGraphicPortfolio.tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import ContentDetails from '../../partials/ContentDetails';
import ContentTitleDetails from '../../partials/ContentTitleDetails';
import HeroDetails from '../../partials/HeroDetails';
import GraphicPortfolioContentAbout from './GraphicPortfolioContentAbout';
import { useClickOutside } from '../../../hook/useClickOutside';
import useFadeIn from '../../../hook/useFadeIn';
import { motion } from 'framer-motion';

interface Technology {
  name: string;
  icon: string;
}

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
    tecthTitle?: string;
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
<<<<<<< HEAD:src/components/portfolios/graphic/SidebarGraphicPortfolio.tsx
  const lightGallery = useRef<any>(null);
=======
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
>>>>>>> hotfix/navigation:src/components/portfolios/graphic/GraphicSidebarPortfolio.tsx

  useEffect(() => {
    if (!isVisible) {
      setOpenLightbox(false);
    }
  }, [isVisible]);

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpenLightbox(true);
  };

  const handleCloseLightbox = () => {
    setOpenLightbox(false);
  };

  const sidebarRef = useClickOutside<HTMLDivElement>(onClose);

  if (!isVisible || !graphicDetails) {
    return null;
  }

  const graphicItemsPortfolio = [
    {
      clientTitle: graphicDetails?.clientTitle,
      client: graphicDetails?.client,
      subTitle: graphicDetails?.subTitle,
      techTitle: graphicDetails?.tecthTitle,
      tech:
        graphicDetails?.tech?.map((technology) => ({
          name: technology.name,
          icon: technology.icon,
        })) || [],
      goals: graphicDetails?.goals,
      role: graphicDetails?.role,
      challenges: graphicDetails?.challenges,
      results: graphicDetails?.results,
      testimonial: graphicDetails?.testimonial,
      tags: graphicDetails?.tags,
      relatedProjects: graphicDetails?.relatedProjects,
      demands: graphicDetails?.demands,
      ctaLink: graphicDetails?.ctaLink,
      ctaButton: graphicDetails?.ctaButton,
    },
  ];

  // Fetch titles dynamically
  const titles = t('graphicItemsPortfolioTitles', { returnObjects: true }) as {
    clientTitle?: string;
  };

  const fadeInRight = useFadeIn({
    direction: 'right',
    delay: 0.7,
    duration: 1,
  });

  return (
    <>
      <motion.div
        ref={fadeInRight.ref}
        initial="hidden"
        animate={fadeInRight.ctrls}
        variants={fadeInRight.vars}
        className="fixed inset-0 z-50 flex"
      >
        <div className="fixed inset-0 bg-black bg-opacity-80" />
        <aside
          ref={sidebarRef}
          className="relative bg-bg-primary flex flex-col gap-2 h-full z-40 overflow-y-auto ml-auto max-w-[700px] w-full"
        >
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

          <div className="px-8 mb-12">
            <div className="flex flex-col mb-8 items-start lg:flex-row">
              <button
                onClick={onClose}
                className="font-sub-heading inline-flex items-center gap-2 text-xl transition-all duration-200 bg-none hover:scale-105 text-btn-bg hover:text-bg-hover dark:hover:text-bg-hover w-auto py-1"
              >
                <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
<<<<<<< HEAD:src/components/portfolios/graphic/SidebarGraphicPortfolio.tsx
                {t('common:goBack')}
=======
                {t('common:goBack').toUpperCase()}
>>>>>>> hotfix/navigation:src/components/portfolios/graphic/GraphicSidebarPortfolio.tsx
              </button>
            </div>

            <ContentTitleDetails
              title={graphicDetails?.title || ''}
              yearText={graphicDetails?.yearText || 'N/A'}
              year={graphicDetails?.year || ''}
              clientTitle={titles?.clientTitle || ''}
              client={graphicDetails?.client || ''}
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

            <div
              className="lg:col-span-1 mb-12 cursor-zoom-in"
              onClick={() => handleOpenLightbox(0)}
            >
              <img
                src={graphicDetails.image}
                alt={graphicDetails.alt}
                className="w-full md:w-[70%] h-auto mx-auto rounded-lg shadow-md"
              />
            </div>

            <GraphicPortfolioContentAbout
              graphicItemsPortfolio={graphicItemsPortfolio}
            />
          </div>
        </aside>

        <Lightbox
          open={openLightbox}
          close={handleCloseLightbox}
          index={currentIndex}
          slides={graphicDetails.images.map((image) => ({
            src: image.src,
            title: graphicDetails.title,
            alt: graphicDetails.alt,
          }))}
          carousel={{ finite: graphicDetails.images.length <= 1 }}
          render={{
            buttonPrev:
              graphicDetails.images.length <= 1 ? () => null : undefined,
            buttonNext:
              graphicDetails.images.length <= 1 ? () => null : undefined,
          }}
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </motion.div>
    </>
  );
};

export default SidebarGraphicPortfolio;
