import { useLayoutEffect, useState } from "react";
import { useSmoothScroll } from "../../hook/useSmoothScroll";
import Title from "../partials/Title";

interface HeroDetailsProps {
  title: string;
  titleDescription: string;
  image: string;
}

const HeroDetails = ({ title, image, titleDescription }: HeroDetailsProps) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height);
    }
  }, []);

  useSmoothScroll(headerHeight ? 0 : headerHeight);

  return (
    <>
    <div
      className="relative w-full h-full bg-cover mb-12 object-cover object-center"
      style={{ backgroundImage: `url(${image})`, paddingTop: `${headerHeight}px` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <Title  title={title} dot={"."} children={titleDescription}  className="text-6xl md:text-8xl text-[#4b8668] dark:text-[#86834b] bg-black py-2 px-12 rounded-lg"
          subHeadingClassName="text-amber-100"/>
      </div>
    </div>
    
    </>
  );
};

export default HeroDetails;
