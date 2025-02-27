import { useState } from "react";
import ImageSlider from "../partials/ImageSlider";
import Modal from "../partials/Modal";

interface PortfolioImageDetailsProps {
  images: { src: string; alt: string; span?: string }[];
}

const PortfolioImageDetails = ({ images }: PortfolioImageDetailsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setActiveIndex(images ? images.findIndex(img => img.src === image.src) : 0);
    setModalTitle(image.alt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 gap-4 w-full h-auto p-4 bg-[#4b8668] dark:bg-accent-secondary rounded-lg ">
        {images?.map((image: { src: string; alt: string; span?: string }, index: number) => (
          <div
            key={index}
            className={`relative cursor-zoom-in rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105
              ${image.span === "tall" ? "row-span-2 h-[300px]" : ""}
              ${image.span === "wide" ? "row-span-1 h-[150px]" : ""}
            `}
            onClick={() => openModal(image)}
          >
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image.src}
              alt={image.alt}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#4b8668] dark:bg-[#240313] opacity-0 transition-opacity duration-300 hover:opacity-70"></div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <Modal show={isModalOpen} onClose={closeModal} title={modalTitle}>
          <ImageSlider
            images={images ? images.map((image: { src: string; alt: string }) => ({ image_url: image.src, caption: image.alt })) : []}
            active={activeIndex}
            setActive={setActiveIndex}
            setTitle={setModalTitle}
          />
        </Modal>
      )}
    </>
  );
};

export default PortfolioImageDetails;