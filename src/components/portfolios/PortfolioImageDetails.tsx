import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-pager.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lightgallery.css';
import lgHash from 'lightgallery/plugins/hash';
import lgShare from 'lightgallery/plugins/share';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import { useRef } from 'react';

interface PortfolioImageDetailsProps {
  images: { src: string; alt: string; span?: string }[];
}

const PortfolioImageDetails = ({ images }: PortfolioImageDetailsProps) => {
  const lightGallery = useRef<any>(null);

  const openLightbox = (index: number) => {
    if (lightGallery.current) {
      lightGallery.current.openGallery(index);
    }
  };

  return (
    <>
      {/* Responsive Grid */}
      <div
        className={`grid ${
          images.length === 1
            ? 'grid-cols-1 h-full' // Single image takes full height and width
            : 'grid-cols-1 md:grid-cols-2 gap-4'
        } w-full p-4 bg-[#4b8668] dark:bg-accent-secondary rounded-lg`}
      >
        {images?.map((image, index) => (
          <div
            key={index}
            className={`relative cursor-zoom-in overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 ${
              images.length === 1
                ? 'h-[50vh] md:h-[60vh] lg:h-full'
                : 'h-[15vh] md:h-[20vh] lg:h-full'
            }`}
            onClick={() => openLightbox(index)}
          >
            <img
              className={`absolute inset-0 w-full h-full object-cover ${
                images.length === 1 ? 'rounded-none' : 'rounded-lg'
              }`}
              src={image.src}
              alt={image.alt}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#4b8668] dark:bg-[#240313] opacity-0 transition-opacity duration-300 hover:opacity-70"></div>
          </div>
        ))}
      </div>

      {/* LightGallery Component */}
      <LightGallery
        onInit={(ref) => {
          if (ref) {
            lightGallery.current = ref.instance;
          }
        }}
        plugins={[lgZoom, lgShare, lgHash]}
        dynamic
        dynamicEl={images.map((image) => ({
          src: image.src,
          thumb: image.src,
          subHtml: `<h4>${image.alt}</h4>`,
        }))}
      />
    </>
  );
};

export default PortfolioImageDetails;
