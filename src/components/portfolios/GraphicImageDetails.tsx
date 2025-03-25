import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useTranslation } from 'react-i18next';

const GraphicImageDetails = () => {
  const { t } = useTranslation('portfolio/graphicPortfolioSection');

  const graphicImages = t('graphicItemsPortfolio', {
    returnObjects: true,
  }) as {
    image: string;
    title: string;
    subTitle: string;
    description: string;
    ctaButton: string;
    urlTitle: string;
  }[];

  return (
    <div className="p-4 flex justify-center">
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Kolumn 1 (3 bilder, förskjutna) */}
          <div className="grid md:grid-rows-2 lg:grid-rows-3 gap-4 lg:place-self-center">
            <ImageItem image={graphicImages[0]} />
            <ImageItem image={graphicImages[1]} />
            <ImageItem image={graphicImages[2]} />
          </div>

          {/* Kolumn 2 (4 bilder, huvudkolumnen) */}
          <div className="grid md:grid-rows-2 lg:grid-rows-4 gap-4">
            <ImageItem image={graphicImages[3]} />
            <ImageItem image={graphicImages[4]} />
            <ImageItem image={graphicImages[5]} />
            <ImageItem image={graphicImages[6]} />
          </div>

          {/* Kolumn 3 (3 bilder, förskjutna) */}
          <div className="grid md:grid-rows-2 lg:grid-rows-3 gap-4 lg:place-self-center">
            <ImageItem image={graphicImages[7]} />
            <ImageItem image={graphicImages[8]} />
            <ImageItem image={graphicImages[9]} />
          </div>
        </div>
      </LightGallery>
    </div>
  );
};

// Bildkomponent
const ImageItem = ({ image }: { image: any }) => (
  <a
    href={image.image}
    data-src={image.image}
    data-sub-html={`<h4>${image.title}</h4><p>${image.description}</p>`}
    className="cursor-zoom-in block w-full h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
  >
    <img
      src={image.image}
      alt={image.title}
      className="w-full h-full object-cover shadow-md"
    />
  </a>
);

export default GraphicImageDetails;
