interface PortfolioDetailsItemsProps {
    title: string;
    images?: { src: string; alt: string; span?: string }[]; // Optional span property
    description: string;
    tech: { name: string; icon: string }[];
  }
  
  const PortfolioDetailsItems = ({
    title,
    images,
    description,
    tech,
  }: PortfolioDetailsItemsProps) => {
    return (
      <div className="max-w-screen-xl mx-auto grid grid-flow-col px-4 py-10 text-[#3C2F2F] space-y-8">

        <div className="border-r-2 border-[#3C2F2F] mb-8 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{title}</h1>
          <div className="border border-[#3C2F2F] mb-8"></div>
          <p
            className="text-lg leading-8"
            dangerouslySetInnerHTML={{ __html: description }}
          />
           <div className="border border-[#3C2F2F] mb-8"></div>
        </div>
  
        <div className="flex flex-wrap ">
          {tech.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={item.icon} alt={item.name} className="w-8 h-8" />
              <span className="text-md font-medium">{item.name}</span>
            </div>
          ))}
        </div>
  
        <div className="sidebar h-auto w-12 self-stretch mt-0 bg-white ml-4">
            <h6 className="rotate-90 transform text-3xl font-bold text-center items-center m-0">
                Gallery
            </h6>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 mt-0 gap-4 auto-rows-[200px]">
          {images?.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl ${
                image.span ? image.span : ''
              }`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default PortfolioDetailsItems;
  