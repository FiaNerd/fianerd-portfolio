// SidebarGraphicPortfolio.tsx
import { useState, useEffect } from 'react';
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
import {
  GraphicDetailsProps,
  SidebarGraphicPortfolioProps,
} from '../../../interfaces/GraphicInterface';
import Button from '../../partials/Button';

const SidebarGraphicPortfolio = ({
  isVisible,
  onClose,
  graphicDetails,
}: SidebarGraphicPortfolioProps) => {
  const { t } = useTranslation(['portfolio/graphicPortfolioSection', 'common']);
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      clientTitle: graphicDetails.clientTitle,
      client: graphicDetails?.client,
      subTitle: graphicDetails?.subTitle,
      techTitle: graphicDetails?.techTitle,
      tech:
        graphicDetails?.tech?.map(
          (technology: { name: string; icon: string }) => ({
            name: technology.name,
            icon: technology.icon,
          })
        ) || [],
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
              <Button
                variant="text"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xl transition-all duration-200 bg-none hover:scale-105 w-auto py-1"
              >
                <Icon icon="ic:twotone-arrow-back-ios" width="24" height="24" />
                {t('common:goBack').toUpperCase()}
              </Button>
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
