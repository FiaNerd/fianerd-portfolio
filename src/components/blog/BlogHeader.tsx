import React from 'react';

interface BlogHeaderProps {
  title: string;
  month: string;
  day: string;
  titleDescription: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  month,
  day,
  titleDescription,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-rows text-start items-center gap-4 ">
        <div className="border-r-2 border-[#3C2F2F] mb-2">
          <h5 className="font-semibold px-2 mb-0 leading-0">{month}</h5>
          <h4 className="text-bg-secondary dark:text-text-accent font-bold px-2 leading-none">
            {day}
          </h4>
        </div>
        <h1 className="text-[#3C2F2F] text-3xl md:text-5xl font-bold">
          {title}
        </h1>
      </div>
      <p className="text-[#695050]">{titleDescription}</p>
      <div className="border border-[#3C2F2F] mb-8"></div>
    </div>
  );
};

export default BlogHeader;
