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
    <div className="flex items-center justify-center max-w-full mx-auto">
      <div className="text-2xl cursor-pointer z-10" onClick={onPrev}>
        <Icon icon="iconamoon:arrow-left-2-bold" width="50" height="50" />
      </div>
      <div className="relative overflow-hidden flex-grow max-h-[80vh]">
        {images.map((e, i) => (
          <Slide key={e.caption} {...e} active={i === active} />
        ))}
      </div>
      <div className="text-2xl cursor-pointer z-10" onClick={onNext}>
        <Icon icon="iconamoon:arrow-right-2-bold" width="50" height="50" />
      </div>
    </div>
  );
};

export default ImageSlider;