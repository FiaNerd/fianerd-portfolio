import { Icon } from '@iconify/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IBlogContentProps } from '../../interfaces/BlogInterface';

const BlogContent = ({
  content,
  suffix,
  http,
  icon,
  privateText,
}: IBlogContentProps) => {
  return (
    <div className="flex flex-col mb-8 border-r-2 border-[#3C2F2F]">
      <p
        className="text-lg text-text-primary leading-8 max-h-[30em] mb-8 overflow-y-auto px-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="border border-[#3C2F2F] mb-2"></div>

      <div className="flex flex-rows gap-8 px-4 justify-evenly">
        <a
          href={http}
          target="_blank"
          rel="noopener noreferrer"
          className="text-bg-secondary dark:text-text-accent items-center font-bold cusros-pointer hover:underline"
        >
          {suffix}
        </a>

        <div className="border border-[#3C2F2F] mb-2"></div>

        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <NavLink
            to={http}
            target="_blank"
            className="text-bg-secondary dark:text-text-accent font-bold cusros-pointer hover:underline"
          >
            <Icon
              icon={icon.name}
              width={icon.width}
              height={icon.height}
              style={{ color: icon.color }}
              className="text-btn-bg hover:text-bg-hover cursor-pointe items-centerr"
            />
          </NavLink>
          <p className="text-xs lg:text-sm mb-0">{privateText}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
