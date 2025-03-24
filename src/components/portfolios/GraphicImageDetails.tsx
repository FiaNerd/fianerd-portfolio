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

  console.log(graphicImages);

  return (
    <div>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        {graphicImages.map((image, index) => (
          <a
            key={index}
            href={image.image}
            data-sub-html={`<h4>${image.title}</h4><p>${image.description}</p>`}
          >
            <img src={image.image} alt={image.title} />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default GraphicImageDetails;
