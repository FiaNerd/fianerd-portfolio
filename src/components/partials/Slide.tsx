
interface SlideProps {
    image_url: string;
    caption: string;
    active: boolean;
  }
  
  const Slide = ({ image_url, caption, active }: SlideProps) => {

    
    return (
      <div className={`relative w-full h-full mx-auto ${active ? "block animate-fade" : "hidden"}`}>
        <img src={image_url} alt={caption} className="max-w-[40em] max-h-[25em] object-cover" />
      </div>
    );
  };
  
  export default Slide;