interface SlideProps {
  image_url: string;
  caption: string;
  active: boolean;
}

const Slide = ({ image_url, caption, active }: SlideProps) => {
  return (
    <div className={`relative max-w-full mx-auto ${active ? "block animate-fade" : "hidden"}`}>
      <img src={image_url} alt={caption} className="h-full mx-auto" />
      {/* <span className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">{caption}</span> */}
    </div>
  );
};

export default Slide;