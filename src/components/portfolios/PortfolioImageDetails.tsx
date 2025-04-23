import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { useState } from 'react';
import { DetailsItemsProps } from '../../interfaces/PortfolioInterface';

const PortfolioImageDetails = ({ images }: DetailsItemsProps) => {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpenLightbox(true);
  };

  return (
    <>
      {/* Responsive Grid */}
      <div
        className={`grid ${
          (images?.length ?? 0) === 1
            ? 'grid-cols-1 h-full' // Single image takes full height and width
            : 'grid-cols-1 md:grid-cols-2 gap-4'
        } w-full p-4 bg-[#4b8668] dark:bg-accent-secondary rounded-lg`}
      >
        {(images ?? []).map((image, index) => (
          <div
            key={index}
            className={`relative cursor-zoom-in overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 ${
              (images?.length ?? 0) === 1
                ? 'h-[50vh] md:h-[60vh] lg:h-full'
                : 'h-[15vh] md:h-[20vh] lg:h-full'
            }`}
            onClick={() => handleOpenLightbox(index)}
          >
            <img
              className={`absolute inset-0 w-full h-full object-cover ${
                (images?.length ?? 0) === 1 ? 'rounded-none' : 'rounded-lg'
              }`}
              src={image.src}
              alt={image.alt}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#4b8668] dark:bg-[#240313] opacity-0 transition-opacity duration-300 hover:opacity-70"></div>
          </div>
        ))}
      </div>

      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        index={currentIndex}
        slides={(images ?? []).map((image) => ({
          src: image.src,
          alt: image.alt,
        }))}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />
    </>
  );
};

export default PortfolioImageDetails;
