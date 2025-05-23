import { Icon } from '@iconify/react';
import Button from '../../partials/Button';

const GraphicImageItems = ({
  image,
  setIsSidebarOpen,
  setSelectedUrlTitle,
}: {
  image: any;
  setIsSidebarOpen: (isOpen: boolean) => void;
  setSelectedUrlTitle: (urlTitle: string | null) => void;
}) => {
  const handleButtonClick = () => {
    setSelectedUrlTitle(image.urlTitle); // Set the selected image's URL title
    setIsSidebarOpen(true); // Open the sidebar
  };

  return (
    <div className="w-full h-full rounded-lg ">
      {/* Image Container */}
      <div className="md:h-full relative group hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg overflow-hidden">
        {/* Image */}
        <img
          src={image.image}
          alt={image.alt}
          className="w-full h-full object-cover shadow-md"
        />

        {/* Text in Top-Left Corner */}
        <h3 className="absolute top-2 left-2 bg-black/70 text-sm px-2 py-1 rounded-md z-10 text-blue-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {image.title}
          <br />
          <span className="text-slate-400 text-xs">{image.subTitle}</span>
        </h3>

        {/* Hover Overlay */}
        <div className="absolute hidden inset-0 bg-black/60 md:flex md:flex-col justify-end text-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {/* Button at the Bottom (Hover) */}
          <Button
            onClick={handleButtonClick}
            className="bg-btn-bg hover:bg-bg-hover flex items-center justify-center gap-2 w-full max-w-xs mx-auto mb-8"
          >
            <Icon icon="ix:explore" width="20" height="20" />
            <span>{image.ctaButton}</span>
          </Button>
        </div>
      </div>

      {/* Button Below Image (Visible Only on Mobile and Tablet) */}
      <div className="md:hidden mt-8 mb-8 flex justify-center">
        <Button
          onClick={handleButtonClick}
          className="bg-btn-bg hover:bg-bg-hover flex items-center justify-center gap-2 w-full max-w-xs"
        >
          <Icon icon="ix:explore" width="20" height="20" />
          <span>{image.ctaButton}</span>
        </Button>
      </div>
    </div>
  );
};

export default GraphicImageItems;
