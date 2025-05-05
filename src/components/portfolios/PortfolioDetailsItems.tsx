import { Icon } from '@iconify/react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Popup from '../partials/Popup';
import PortfolioImageDetails from './PortfolioImageDetails';
import useFadeIn from '../../hook/useFadeIn';
import { motion } from 'framer-motion';
import {
  DetailsItemsProps,
  LinkItem,
} from '../../interfaces/PortfolioInterface';

const PortfolioDetailsItems = ({
  title = 'Untitled',
  titleDescription = 'No description available',
  images = [],
  description = 'No description available',
  techTitle = '',
  tech = [],
  applicationTypeDetail = {
    text: '',
    icon: { name: '', width: 0, height: 0, color: '' },
    suffix: '',
  },
  linkTitle = '',
  links = [],
}: DetailsItemsProps) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const fadeInLeft = useFadeIn({ direction: 'left', delay: 0.5, duration: 1 });
  const fadeInRight = useFadeIn({
    direction: 'right',
    delay: 0.7,
    duration: 1,
  });

  return (
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:space-y-8">
      <motion.div
        ref={fadeInLeft.ref}
        initial="hidden"
        animate={fadeInLeft.ctrls}
        variants={fadeInLeft.vars}
      >
        <h1 className="text-[#3C2F2F] text-3xl md:text-5xl font-bold">
          {title}
        </h1>
        <p className="text-[#695050]">{titleDescription}</p>

        <div className="border border-[#3C2F2F] mb-8"></div>

        <div className="flex flex-col mb-8 border-r-2 border-[#3C2F2F]">
          <p
            className="text-lg leading-8 h-[30em] overflow-y-auto px-4"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>

        <div className="border border-[#3C2F2F]"></div>

        <div className="grid grid-cols-[40%_60%] justify-center py-2 mb-12 lg:mb-0 mx-auto">
          <div className="border-r-2 border-[#3C2F2F]">
            <p className="text-sm text-center font-semibold tracking-wide text-text-primary opacity-70">
              {linkTitle}
            </p>

            <ul className="flex items-center space-x-4 justify-center px-2 lg:px-8">
              {links.length > 0 &&
                links.map((item: LinkItem, index: number) => (
                  <NavLink
                    to={item.url}
                    className="flex flex-col items-center cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li
                      key={index}
                      className="justify-center items-center flex flex-col cursor-pointer"
                    >
                      <Icon
                        icon={item.icon}
                        width="24"
                        height="24"
                        className="text-btn-bg hover:text-bg-hover"
                      />
                      <p className="text-xs font-light tracking-wider text-text-primary">
                        {item.type}
                      </p>
                    </li>
                    <p className="text-xs font-light tracking-wider text-text-primary">
                      {item.privateText ? item.privateText : item.text}
                    </p>
                  </NavLink>
                ))}
            </ul>
          </div>

          <div className="md:mb-0 mx-auto">
            <p className="text-sm text-center font-semibold tracking-wide text-text-primary opacity-70">
              {techTitle}
            </p>
            <ul className="items-center pb-4 grid grid-cols-3 md:grid-cols-5 justify-center gap-8">
              {tech.length > 0 &&
                tech.map((item: any, index: number) => (
                  <li key={item.name}>
                    <div className="relative">
                      <Icon
                        icon={item.icon}
                        width="24"
                        height="24"
                        className="text-gray-400"
                        onMouseEnter={() => setHoveredTech(item.name)}
                        onMouseLeave={() => setHoveredTech(null)}
                      />
                      {hoveredTech === item.name && (
                        <Popup text={item.name} show={true} />
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={fadeInRight.ref}
        initial="hidden"
        animate={fadeInRight.ctrls}
        variants={fadeInRight.vars}
        className="flex flex-col lg:flex-row gap-4 w-full  mb-12"
        style={{ marginTop: 0 }}
      >
        <div
          className="sidebar h-auto lg:w-[2.7em] self-stretch bg-[#4b8668] dark:bg-accent-secondary lg:ml-4 flex justify-center items-center "
          style={{ marginTop: 0, position: 'relative' }}
        >
          <div className="flex flex-row lg:flex-col items-center justify-evenly h-full">
            <h6 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#edd8bf] dark:text-[#240313] lg:rotate-90 lg:transform">
              {applicationTypeDetail.text || 'N/A'}
            </h6>
            {applicationTypeDetail.icon?.name && (
              <Icon
                icon={applicationTypeDetail.icon.name}
                width={applicationTypeDetail.icon.width || 24} // Default width
                height={applicationTypeDetail.icon.height || 24} // Default height
                style={{ color: applicationTypeDetail.icon.color || '#000' }} // Default color
                className="w-[1.4em] lg:w-auto lg:rotate-90 md:transform"
              />
            )}
            <h6 className="text-nowrap text-lg md:text-2xl lg:text-3xl font-bold text-[#edd8bf] dark:text-[#240313] lg:rotate-90 lg:transform">
              {applicationTypeDetail.suffix || ''}
            </h6>
          </div>
        </div>

        <PortfolioImageDetails images={images || []} />
      </motion.div>
    </div>
  );
};

export default PortfolioDetailsItems;
