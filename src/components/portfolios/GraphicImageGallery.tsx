import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import { useTranslation } from 'react-i18next';
import GraphicGalleryItems from './GraphicImageItems';
import { useNavigate } from 'react-router-dom';

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

  // Split the images into 3 chunks for 3 columns
  const column1 = graphicImages.slice(0, 3);
  const column2 = graphicImages.slice(3, 7);
  const column3 = graphicImages.slice(7, 10);

  const navigate = useNavigate();

  const handleImageClick = (urlTitle: string) => {
    navigate(`/portfolio/graphic-design/${encodeURIComponent(urlTitle)}`);
  };

  return (
    <>
      <div className="p-4 flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="grid md:grid-rows-2 lg:grid-rows-3 gap-4 lg:place-self-center">
            {column1.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(image.urlTitle)}>
                <GraphicGalleryItems image={image} />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="grid md:grid-rows-4 lg:grid-rows-4 gap-4">
            {column2.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(image.urlTitle)}>
                <GraphicGalleryItems image={image} />
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="grid lg:grid-rows-2 gap-4 lg:place-self-center">
            {column3.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(image.urlTitle)}>
                <GraphicGalleryItems image={image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicImageGallery;
