/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Popup from "./Popup";

interface PortfolioCardProps {
  title: string;
  applicationType: string;
  subTitle: string;
  description: string;
  img: string;
  projectType: string;
  linkTitle: string;
  links: { type: string; url: string; icon: string }[];
  techTitle: string;
  tech: { name: string; icon: string }[];
  ctaButton: string;
  projectDuration: string;
  titleDescription: string
}

const PortfolioCard = ({ title, applicationType, subTitle, description, img, projectType, linkTitle, links,techTitle, tech, ctaButton, projectDuration, titleDescription}: PortfolioCardProps) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const truncatedDescription = description.length > 110 ? `${description.substring(0, 110)}...` : description;

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col h-full w-full bg-bg-primary dark:bg-[#240313] rounded-lg">
        <img
          className="rounded-lg rounded-b-none object-cover w-full h-40"
          src={img}
          alt={title}
          loading="lazy"
        />
        <div className="flex justify-between -mt-4 px-4">
          <span
            className="inline-block h-min ring-4 bg-accent-primary ring-bg-primary dark:ring-[#240313] rounded-full text-sm md:text-sm font-medium tracking-wide text-[#f3d758] px-4 py-2"
          >{applicationType}</span >
          <span
            className="flex h-min space-x-1 items-center rounded-full bg-bg-primary dark:bg-[#240313] font-medium"
          >
            <p className="text-[#240313] dark:text-[#f3d758] font-semibold text-sm md:text-sm tracking-wide px-4 py-2">
              {subTitle}
            </p>
          </span>
        </div>

        <div className="py-2 px-4">
          <h4 className="text-sm leading-6 tracking-wide text-accent-secondary opacity-40 mb-0">{projectType.toLocaleUpperCase()}</h4>
          <h1
            className="text-xl font-medium leading-6 tracking-wide text-accent-secondary cursor-pointer"
          >
            <NavLink to="#">{title}</NavLink>
            <p className="text-xs font-light mb-0">{titleDescription}</p>
            <p className="italic text-xs text-accent-primary" dangerouslySetInnerHTML={{__html: projectDuration}}/>
          </h1>
        </div>

        <div className="px-4 space-y-2 ">
          <p className="text-text-secondary text-sm leading-5 tracking-wide" dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
          <Button
            className="w-full flex flex-row gap-2 justify-center items-center bg-btn-bg text-bg-primary border-2 border-btn-bg hover:border-bg-hover hover:bg-bg-hover  tracking-wide">
            <Icon icon="ix:explore" width="30" height="30" /> {ctaButton}
          </Button >
        </div>

        <div className="flex items-end  w-full px-2 mt-4">
          <div className="flex border-t border-gray-700 w-full pt-3">

            {/* Links Section */}
            <div className="flex flex-col border-r border-gray-700 w-full">
              <p className="text-sm text-center font-semibold tracking-wide text-text-primary opacity-70">
                {linkTitle}
              </p>
              <ul className="flex items-center px-2 space-x-4 justify-center">
                {links.map((item: any, index: number) => (
                  <>
                  <li key={index} className="justify-center items-center flex flex-col cursor-pointer">
                    <NavLink to={item.url} className="flex flex-col items-center" target="_blank" rel="noopener noreferrer">
                      <Icon icon={item.icon} width="24" height="24" className="text-btn-bg hover:text-bg-hover" />
                      <p className="text-xs font-light tracking-wider text-text-primary">{item.type}</p>
                    </NavLink>
                  </li>
                 
                  </>
                ))}
              </ul>
            </div>

            {/* Tech Section */}
            <div className="flex flex-col ">
                <p className="text-sm text-center font-semibold tracking-wide text-text-primary opacity-70">{techTitle}</p>
              <ul className="items-center p-2 grid grid-flow-col grid-rows-2 gap-2">
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
      </div>
    </section>
  );
}

export default PortfolioCard;