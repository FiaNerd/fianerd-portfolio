import { Icon } from "@iconify/react";
import Slide from "./Slide";

interface ImageSliderProps {
  images: { image_url: string; caption: string }[];
  active: number;
  setActive: (active: number) => void;
}

const ImageSlider = ({ images, active, setActive }: ImageSliderProps) => {
  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="relative max-w-full mx-auto">
      <div className="relative overflow-hidden">
        {images.map((e, i) => (
          <Slide key={e.caption} {...e} active={i === active} />
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer z-10 left-2" onClick={onPrev}>
        <Icon icon="iconamoon:arrow-left-2-bold" width="50" height="50" />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer z-10 right-2" onClick={onNext}>
        <Icon icon="iconamoon:arrow-right-2-bold" width="50" height="50" />
      </div>
    </div>
  );
};

export default ImageSlider;