import React from 'react';

interface SlideProps {
  image_url: string;
  caption: string;
  active: boolean;
}

const Slide = ({ image_url, caption, active }: SlideProps) => {
  return (
    <div className={`relative w-full h-full ${active ? "block animate-fade" : "hidden"}`}>
      <img src={image_url} alt={caption} className="w-full h-full object-contain" />
    </div>
  );
};

export default Slide;