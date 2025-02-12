import { Icon } from "@iconify/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Popup from "../partials/Popup";

interface PortfolioDetailsItemsProps {
  title: string;
  titleDescription: string;
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
  titleDescription,
  images,
  description,
  techTitle,
  tech,
  applicationType,
  linkTitle,
  links
}: PortfolioDetailsItemsProps) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const { t } = useTranslation("portfolio");


  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 py-10  lg:space-y-8">
      
      <div className="border-r-2 border-[#3C2F2F]">
        <h1 className="text-[#3C2F2F] text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="text-[#695050]">{titleDescription}</p>

        <div className="border border-[#3C2F2F] mb-8"></div>

        <div className="flex flex-col mb-8">
          <p
              className="text-lg leading-8 h-[30em] overflow-y-auto px-4 " 
              dangerouslySetInnerHTML={{
              __html: description 
              }}
          />
        </div>

        <div className="border border-[#3C2F2F]"></div>

        <div className="flex justify-center py-2">
          <div className="border-r-2 border-[#3C2F2F] ">
            <p className="text-sm text-center font-semibold tracking-wide text-text-primary opacity-70">
              {linkTitle}
            </p>
            <ul className="flex items-center space-x-4 justify-center px-8">
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

          <div className="px-8 mb-12 md:mb-0">
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

     <div className="flex flex-col md:flex-row gap-4 w-full" style={{ marginTop: 0 }}>
        <div
        className="sidebar h-auto md:w-12 self-stretch bg-[#4b8668] dark:bg-accent-secondary md:ml-4 flex justify-center items-center"
        style={{ marginTop: 0, position: 'relative', zIndex: 10 }}
        >
        <h6 className="md:rotate-90 md:transform text-3xl font-bold m-0 text-[#edd8bf] dark:text-[#240313]">{applicationType}</h6>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full bg-[#4b8668] dark:bg-accent-secondary">
            <div className="grid gap-4 pb-4 pl-4 pt-4">
                {/* Image 1 */}
                <div className="relative w-full">
                <img
                    className="h-[5em] w-full rounded-lg object-cover object-center"
                    src={images && images[0] ? images[0].src : ""}
                    alt={images && images[0] ? images[0].alt : "Photo 1"}
                />
                </div>
                {/* Image 2 */}
                <div className="relative w-full">
                <img
                    className="h-[17em] w-full rounded-lg object-cover object-center"
                    src={images && images[1] ? images[1].src : ""}
                    alt={images && images[1] ? images[1].alt : "Photo 2"}
                />
                </div>
                {/* Image 3 */}
                <div className="relative w-full">
                <img
                    className="h-[8em] w-full rounded-lg object-cover object-center"
                    src={images && images[2] ? images[2].src : ""}
                    alt={images && images[2] ? images[2].alt : "Photo 3"}
                />
                </div>
            </div>

            <div className="grid gap-4 pb-4 pr-4 pt-4">
                {/* Image 4 */}
                <div className="relative w-full">
                <img
                    className="h-[17em] w-full rounded-lg object-cover object-center"
                    src={images && images[3] ? images[3].src : ""}
                    alt={images && images[3] ? images[3].alt : "Photo 4"}
                />
                </div>
                {/* Image 5 */}
                <div className="relative w-full">
                <img
                    className="h-[8em] w-full rounded-lg object-cover object-center"
                    src={images && images[4] ? images[4].src : ""}
                    alt={images && images[4] ? images[4].alt : "Photo 5"}
                />
                </div>
                {/* Image 6 */}
                <div className="relative w-full">
                <img
                    className="h-[5em] w-full rounded-lg object-cover object-center"
                    src={images && images[5] ? images[5].src : ""}
                    alt={images && images[5] ? images[5].alt : "Photo 6"}
                />
                </div>
            </div>
        </div>

  </div>
  </div>

  );
};

export default PortfolioDetailsItems;
