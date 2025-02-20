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
      <div
        className="relative w-full h-[20rem] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Centered Title */}
        <div className="relative z-10 text-center flex flex-col justify-center">
          <Title
            title={title}
            dot={"."}
            children={titleDescription}
            className="text-6xl md:text-8xl text-[#4b8668] dark:text-[#86834b] bg-black py-2 px-4 xl:px-12 md:w-auto md:rounded-lg"
            subHeadingClassName="text-amber-100"
          />
        </div>
      </div>


  );
};

export default HeroDetails;
