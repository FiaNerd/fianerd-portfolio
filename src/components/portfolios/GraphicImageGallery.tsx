import React, { useRef } from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import lgHash from 'lightgallery/plugins/hash';
import lgShare from 'lightgallery/plugins/share';
import lgZoom from 'lightgallery/plugins/zoom';
import { useTranslation } from 'react-i18next';
import GraphicGalleryItems from './GraphicImageItems';

const GraphicImageGallery = () => {
  const { t } = useTranslation('portfolio/graphicPortfolioSection');

  const graphicImages = t('graphicItemsPortfolio', {
    returnObjects: true,
  }) as {
    urlTitle: string;
    title: string;
    subTitle: string;
    description: string;
    image: string;
    alt: string;
    ctaButton: string;
  }[];

  const lightGallery = useRef<any>(null);

  // Open Lightbox at a specific index
  const openLightbox = (index: number) => {
    if (lightGallery.current) {
      lightGallery.current.openGallery(index);
    }
  };

  // Split the images into 3 chunks for 3 columns
  const column1 = graphicImages.slice(0, 3);
  const column2 = graphicImages.slice(3, 7);
  const column3 = graphicImages.slice(7, 10);

  return (
    <>
      <div className="p-4 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {/* Kolumn 1 */}
          <div className="grid md:grid-rows-2 lg:grid-rows-3 gap-4 lg:place-self-center">
            {column1.map((image, index) => (
              <GraphicGalleryItems key={index} image={image} />
            ))}
          </div>

          {/* Kolumn 2 */}
          <div className="grid md:grid-rows-4 lg:grid-rows-4 gap-4">
            {column2.map((image, index) => (
              <GraphicGalleryItems key={index} image={image} />
            ))}
          </div>

          {/* Kolumn 3 */}
          <div className="grid lg:grid-rows-2 gap-4 lg:place-self-center">
            {column3.map((image, index) => (
              <GraphicGalleryItems key={index} image={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicImageGallery;
