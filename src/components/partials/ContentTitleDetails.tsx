import React from 'react';

interface IContentTitleDetails {
  title: string;
  day?: string;
  month?: string;
  year?: string;
  yearText?: string;
  subTitle: string;
}

const ContentTitleDetails: React.FC<IContentTitleDetails> = ({
  title,
  month,
  year,
  day,
  subTitle,
  yearText,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-rows text-start items-center gap-4">
        {/* Date Section */}
        {(month || day || year) && (
          <div className="border-r-2 border-[#3C2F2F] mb-2">
            {month && (
              <h5 className="font-semibold px-2 mb-0 leading-0">{month}</h5>
            )}
            {day && (
              <h4 className="text-bg-secondary dark:text-text-accent font-bold px-2 leading-none">
                {day}
              </h4>
            )}
            {year && (
              <>
                <h5 className="font-semibold px-2 pb-0 leading-0">
                  {yearText}
                </h5>
                <h5 className="font-semibold px-2 pb-0 leading-0">{year}</h5>
              </>
            )}
          </div>
        )}

        {/* <div> */}
          {/* Title */}
          <h1 className="text-[#3C2F2F] text-3xl md:text-5xl font-bold ">
            {title}
          </h1>
        {/* </div> */}
      </div>
          <p className="text-[#695050]">{subTitle}</p>

      {/* Description */}

      {/* Divider */}
      <div className="border border-[#3C2F2F] h-full mb-8"></div>
    </div>
  );
};

export default ContentTitleDetails;
