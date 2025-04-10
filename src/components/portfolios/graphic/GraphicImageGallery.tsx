import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GraphicGalleryItems from './GraphicImageItems';
import SidebarGraphicPortfolio from './SidebarGraphicPortfolio';
import useSmoothScroll from '../../../hook/useSmoothScroll';

const GraphicImageGallery = () => {
  const { t } = useTranslation('portfolio/graphicPortfolioSection');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(700); // Initial sidebar width
  const [selectedUrlTitle, setSelectedUrlTitle] = useState<string | null>(null);

  const graphicImages = t('graphicItemsPortfolio', {
    returnObjects: true,
  }) as {
    urlTitle: string;
    title: string;
    subTitle: string;
    category: string;
    year: string;
    yearText: string;
    client: string;
    image: string;
    images: { src: string; alt: string; span?: string }[];
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
  }[];

  const column1 = graphicImages.slice(0, 3);
  const column2 = graphicImages.slice(3, 7);
  const column3 = graphicImages.slice(7, 11);

  const handleNavigation = (urlTitle: string) => {
    setSelectedUrlTitle(urlTitle); // Set the selected image URL title
    setIsSidebarOpen(true); // Open the sidebar
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false); // Close the sidebar
    setSelectedUrlTitle(null); // Clear the selected image when closing the sidebar
  };

  // useSmoothScroll(0);

  const selectedImageDetails = graphicImages.find(
    (image) => image.urlTitle === selectedUrlTitle
  ) || {
    ...graphicImages[0],
    tech: [],
    urlTitle: '',
    title: '',
    subTitle: '',
    image: '',
    images: [{ src: '', alt: '', span: '' }],
    category: '',
    year: '',
    yearText: '',
    client: '',
    description: '',
    goals: '',
    role: '',
    challenges: '',
    results: '',
    testimonial: '', 
    tags: [],
    relatedProjects: [],
    ctaLink: '',
    demands: '',
    alt: '',
    ctaButton: '',
  };

  return (
    <>
      <div className="p-4 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-8 md:gap-4 ">
          {/* Column 1 */}
          <div className="grid md:grid-rows-2 lg:grid-rows-3  gap-8 md:gap-4 lg:place-self-center">
            {column1.map((image, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(image.urlTitle)}
                className="cursor-pointer"
              >
                <GraphicGalleryItems
                  image={image}
                  setIsSidebarOpen={setIsSidebarOpen}
                  setSelectedUrlTitle={setSelectedUrlTitle}
                />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="grid md:grid-rows-4 lg:grid-rows-4 gap-8 md:gap-4 ">
            {column2.map((image, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(image.urlTitle)}
                className="cursor-pointer"
              >
                <GraphicGalleryItems
                  image={image}
                  setIsSidebarOpen={setIsSidebarOpen}
                  setSelectedUrlTitle={setSelectedUrlTitle}
                />
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="grid lg:grid-rows-2 gap-8 md:gap-4 lg:place-self-center">
            {column3.map((image, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(image.urlTitle)}
                className="cursor-pointer"
              >
                <GraphicGalleryItems
                  image={image}
                  setIsSidebarOpen={setIsSidebarOpen}
                  setSelectedUrlTitle={setSelectedUrlTitle}
                />
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
              graphicDetails={selectedImageDetails}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GraphicImageGallery;
