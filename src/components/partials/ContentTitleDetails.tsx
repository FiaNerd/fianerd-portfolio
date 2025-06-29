import type { ContentTitleDetails } from '../../interfaces/ContentTitleDetailsInterface';
const ContentTitleDetails = ({
  title,
  clientTitle,
  client,
  day, 
  month,
  year,
  yearText,
}: ContentTitleDetails) => {
  return (
    <>
      <div className="flex flex-col px-8">
        <div className="flex flex-rows gap-4">
          {/* Date Section */}
          {(month || day || year || yearText) && (
            <div className="border-r-2 border-[#3C2F2F]  mb-2">
              {month && (
                <h5 className="font-semibold px-2 mb-0 leading-0">{month}</h5>
              )}
              {day && (
                <h4 className="text-bg-secondary dark:text-text-accent text-end font-bold px-2 leading-none mb-0">
                  {day}
                </h4>
              )}
              {yearText && (
                <h5 className="font-semibold text-end mb-0 px-2 pb-0 leading-0">
                  {yearText}
                </h5>
              )}
              {year && (
                <>
                  <h4 className="text-bg-secondary text-end dark:text-text-accent font-bold px-2 leading-none mb-0">
                    {year}
                  </h4>
                </>
              )}
            </div>
          )}

          <div className="flex flex-col mb-4">
            {/* Title */}
            <h2 className="text-[#3C2F2F] mb-0 font-bold ">{title}</h2>
            <div className="flex flex-rows gap-4">
              <span className="text-[#695050] font-bold">{clientTitle}</span>
              <span>{client}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border border-[#3C2F2F] h-full mb-8"></div>
      </div>
    </>
  );
};

export default ContentTitleDetails;
