import { useState } from "react";
import ImageSlider from "../partials/ImageSlider";
import Modal from "../partials/Modal";

interface PortfolioImageDetailsProps {
  images?: { src: string; alt: string; span?: string }[];
}

const PortfolioImageDetails = ({ images }: PortfolioImageDetailsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setActiveIndex(images ? images.findIndex(img => img.src === image.src) : 0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full dark:bg-accent-secondary">
        <div className="grid gap-4 pb-4 pl-4 pt-4 overflow-hidden">
          {/* Image 1 */}
          <div className="relative w-full overflow-hidden bg-no-repeat cursor-zoom-in" onClick={() => openModal(images && images[0] ? images[0] : { src: "", alt: "" })}>
            <img
              className="h-[5em] w-full rounded-lg object-cover object-center transform transition duration-300 ease-in-out hover:scale-110"
              src={images && images[0] ? images[0].src : ""}
              alt={images && images[0] ? images[0].alt : "Photo 1"}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#4b8668] dark:bg-[#240313] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
          </div>
          {/* Image 2 */}
          <div className="relative w-full cursor-zoom-in" onClick={() => openModal(images && images[1] ? images[1] : { src: "", alt: "" })}>
            <img
              className="h-[17em] w-full rounded-lg object-cover object-center transform transition duration-300 ease-in-out hover:scale-110"
              src={images && images[1] ? images[1].src : ""}
              alt={images && images[1] ? images[1].alt : "Photo 2"}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#4b8668] dark:bg-[#240313] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
          </div>
          {/* Image 3 */}
          <div className="relative w-full cursor-zoom-in" onClick={() => openModal(images && images[2] ? images[2] : { src: "", alt: "" })}>
            <img
              className="h-[8em] w-full rounded-lg object-cover object-center transform transition duration-300 ease-in-out hover:scale-110"
              src={images && images[2] ? images[2].src : ""}
              alt={images && images[2] ? images[2].alt : "Photo 3"}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#4b8668] dark:bg-[#240313] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
          </div>
        </div>

        <div className="grid gap-4 pb-4 pr-4 pt-4 cursor-zoom-in">
          {/* Image 4 */}
          <div className="relative w-full" onClick={() => openModal(images && images[3] ? images[3] : { src: "", alt: "" })}>
            <img
              className="h-[17em] w-full rounded-lg object-cover object-center transform transition duration-300 ease-in-out hover:scale-110"
              src={images && images[3] ? images[3].src : ""}
              alt={images && images[3] ? images[3].alt : "Photo 4"}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#4b8668] dark:bg-[#240313] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
          </div>
          {/* Image 5 */}
          <div className="relative w-full cursor-zoom-in" onClick={() => openModal(images && images[4] ? images[4] : { src: "", alt: "" })}>
            <img
              className="h-[8em] w-full rounded-lg object-cover object-center transform transition duration-300 ease-in-out hover:scale-110"
              src={images && images[4] ? images[4].src : ""}
              alt={images && images[4] ? images[4].alt : "Photo 5"}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#4b8668] dark:bg-[#240313] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
          </div>
          {/* Image 6 */}
          <div className="relative w-full cursor-zoom-in" onClick={() => openModal(images && images[5] ? images[5] : { src: "", alt: "" })}>
            <img
              className="h-[5em] w-full rounded-lg object-cover object-center transform transition duration-300 ease-in-out hover:scale-110"
              src={images && images[5] ? images[5].src : ""}
              alt={images && images[5] ? images[5].alt : "Photo 6"}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#4b8668] dark:bg-[#240313] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
          </div>
        </div>
      </div>

      {isModalOpen && selectedImage && (
        <Modal show={isModalOpen} onClose={closeModal} title={selectedImage.alt}>
          <ImageSlider
            images={images ? images.map(image => ({ image_url: image.src, caption: image.alt })) : []}
            active={activeIndex}
            setActive={setActiveIndex}
          />
        </Modal>
      )}
    </>
  );
};

export default PortfolioImageDetails;