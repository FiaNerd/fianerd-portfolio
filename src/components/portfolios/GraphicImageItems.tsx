const GraphicGalleryItems = ({ image }: { image: any }) => (
  <div className="block w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out">
    <img
      src={image.image}
      alt={image.alt}
      className="w-full h-full object-cover shadow-md"
    />
  </div>
);

export default GraphicGalleryItems;
