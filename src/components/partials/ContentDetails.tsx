import { Icon } from '@iconify/react';
import { IBlogContentProps } from '../../interfaces/BlogInterface';

const ContentDetails = ({
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

      {/* <div className="flex flex-rows gap-4 px-4 justify-evenly"> */}
        <p
          className="text-bg-secondary dark:text-text-accent items-center font-bold"
        >
          {suffix}
        </p>

        <div className="flex flex-col lg:flex-row gap-2 items-center">
            <a
              href={http}
              target="_blank"
              className="grid grid-cols-[20%_80%] align-items text-bg-secondary dark:text-text-accent cusros-pointer hover:underline hover:underline-offset-4 transition-all duration-200"
            >
              <Icon
                icon={icon.name}
                width={icon.width}
                height={icon.height}
                style={{ color: icon.color }}
                className="text-btn-bg hover:text-bg-hover cursor-pointe items-center jusify-center"
              />
            <p className="text-xs lg:text-sm mb-0 text-align hover:text-bg-secondary dark:hover:text-text-accent">{privateText}</p>
            </a>

        </div>
      </div>
    // </div>
  );
};

export default ContentDetails;
