import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Popup from "../partials/Popup";

interface PortfolioDetailsItemsProps {
  title: string;
  images?: { src: string; alt: string; span?: string }[];
  description: string;
  techTitle: string;
  tech: { name: string; icon: string }[];
  applicationType: string;
  linkTitle?: string;
  links?: { type: string; url: string; icon: string }[];
}

const PortfolioDetailsItems = ({
  title,
  images,
  description,
  techTitle,
  tech,
  applicationType,
  linkTitle,
  links
}: PortfolioDetailsItemsProps) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation("portfolio");

//   const handleToggleText = () => {
//     if (isExpanded) {
//       const articleTop = document.getElementById('portfolio-details');
//       if (articleTop) {
//         articleTop.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//     setIsExpanded(!isExpanded);
//   };

//   const maxChars = 350;
//   const isLongText = description.length > maxChars;
//   const truncatedDescription = isLongText ? description.slice(0, maxChars) + "..." : description;

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 py-10 text-[#3C2F2F] lg:space-y-8">
      
      {/* First column */}
      <div className="border-r-2 border-[#3C2F2F]">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{title}</h1>
        <div className="border border-[#3C2F2F] mb-8"></div>

        <div className="flex flex-col gap-4">
          <p
            className="text-lg leading-8"
            dangerouslySetInnerHTML={{
              __html: description 
            }}
          />

          {/* {isLongText && (
            <button
              className="flex justify-end text-lg md:text-xl text-btn-bg hover:text-bg-hover bg-transparent underline underline-offset-4 px-8 mt-2 mb-4"
              onClick={handleToggleText}
            >
              {isExpanded ? t('portfolio.ctaLess') : t('portfolio.cta')}
            </button>
          )} */}
        </div>

        <div className="border border-[#3C2F2F]"></div>

        <div className="flex justify-center py-2">
          <div>
            <p className="text-sm text-center font-semibold tracking-wide text-text-primary opacity-70">
              {linkTitle}
            </p>
            <ul className="flex items-center space-x-4 justify-center border-r-2 border-[#3C2F2F] px-8">
              {links &&
                links.map((item: any, index: number) => (
                  <li key={index} className="justify-center items-center flex flex-col cursor-pointer">
                    <NavLink
                      to={item.url}
                      className="flex flex-col items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon icon={item.icon} width="24" height="24" className="text-btn-bg hover:text-bg-hover" />
                      <p className="text-xs font-light tracking-wider text-text-primary">{item.type}</p>
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>

          <div className="px-8">
            <p className="text-sm text-center font-semibold tracking-wide text-text-primary opacity-70">{techTitle}</p>
            <ul className="items-center pb-4 grid grid-flow-col justify-center gap-8">
              {tech.map((item: any, index: number) => (
                <li key={index} className="items-center">
                  <div className="relative">
                    <Icon
                      icon={item.icon}
                      width="24"
                      height="24"
                      className="text-gray-400"
                      onMouseEnter={() => setHoveredTech(item.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    />
                    {hoveredTech === item.name && <Popup text={item.name} show={true} />}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

<div className="px-8 ">
  <div className="flex gap-4 md:grid-cols-4 w-full">
    <div className="sidebar h-auto lg:w-12 self-stretch bg-white lg:ml-4 flex justify-center items-center" style={{marginTop: 0}}>
      <h6 className="lg:rotate-90 lg:transform text-3xl font-bold m-0">{applicationType}</h6>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="grid gap-4">
        <div className="relative w-full">
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={images && images[0] ? images[0].src : ""}        
            alt="gallery-photo"
          />
        </div>
        <div className="relative w-full">
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={images && images[1] ? images[1].src : ""}         
            alt="gallery-photo"
          />
        </div>
        {/* Image 3 */}
        <div className="relative w-full">
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={images && images[2] ? images[2].src : ""}         
            alt="gallery-photo"
          />
        </div>
      </div>

      <div className="grid gap-4">
        <div className="relative w-full">
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={images && images[3] ? images[3].src : ""}         
            alt="gallery-photo"
          />
        </div>

        <div className="relative w-full">
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={images && images[4] ? images[4].src : ""}         
            alt="gallery-photo"
          />
        </div>

        <div className="relative w-full h-[4em]">
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={images && images[5] ? images[5].src : ""}        
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>

  );
};

export default PortfolioDetailsItems;
