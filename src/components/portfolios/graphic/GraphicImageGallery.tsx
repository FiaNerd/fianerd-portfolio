import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import GraphicGalleryItems from './GraphicImageItems';
import SidebarGraphicPortfolio from './SidebarGraphicPortfolio';

const GraphicImageGallery = () => {
  const { t } = useTranslation('portfolio/graphicPortfolioSection');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(700); // Initial sidebar width
  const [selectedUrlTitle, setSelectedUrlTitle] = useState<string | null>(null); // Track the selected image

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
  const column3 = graphicImages.slice(7, 11);

  const navigate = useNavigate();

  const handleImageClick = (urlTitle: string) => {
    setSelectedUrlTitle(urlTitle); // Set the selected image's URL title
    setIsSidebarOpen(true); // Open the sidebar
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedUrlTitle(null); // Clear the selected image when closing the sidebar
  };

  // Find the selected image details based on the selectedUrlTitle
  const selectedImageDetails = graphicImages.find(
    (image) => image.urlTitle === selectedUrlTitle
  );

  return (
    <>
      <div className="p-4 flex justify-center">
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

        {isSidebarOpen && (
          <div className="relative">
            <SidebarGraphicPortfolio
              isVisible={isSidebarOpen}
              onClose={handleCloseSidebar}
              sidebarWidth={sidebarWidth}
              setSidebarWidth={setSidebarWidth}
              imageDetails={
                selectedImageDetails
                  ? {
                      ...selectedImageDetails,
                      subTitleGraphicPortfolio: selectedImageDetails.subTitle,
                      descriptionGraphicPortfolio: selectedImageDetails.description,
                    }
                  : undefined
              } 
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GraphicImageGallery;
