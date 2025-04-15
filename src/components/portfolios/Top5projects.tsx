import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../partials/Button';
import { startTransition } from 'react';

const Top5Projects = () => {
  const { t } = useTranslation('portfolio/top5PortfolioSection');
  const navigate = useNavigate();

  const top5items = t('portfolio/top5PortfolioSection:top5Items', {
    returnObjects: true,
  }) as {
    image: string;
    title: string;
    subTitle: string;
    description: string;
    ctaButton: string;
    urlTitle: string;
  }[];

  const navigateToDetails = (urlTitle: string) => {
    startTransition(() => {
      navigate(`/portfolio/${urlTitle}`);
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <p>{t('portfolio/top5PortfolioSection:introTop5Portfolio')}</p>
      <section className="mb-12">
        <div className="py-4 px-2 mx-auto sm:py-4">
          {/* Grid container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 h-full">
            {top5items.map((item, index) => {
              let columnSpan = '';

              // Grid layout for index 0
              if (index === 0) {
                columnSpan = 'lg:col-span-2 lg:row-span-2';
              }
              // Grid layout for index 1 and 2
              else if (index === 1 || index === 2) {
                columnSpan = 'lg:col-span-1';
              }
              // Grid layout for index 3
              else if (index === 3) {
                columnSpan = 'lg:col-span-2 lg:row-span-1';
              }
              // Grid layout for index 4
              else if (index === 4) {
                columnSpan =
                  'sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-5 lg:row-start-1';
              }

              return (
                <div
                  key={index}
                  className={`${columnSpan} h-auto lg:h-full flex flex-col`}
                >
                  <div
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-pointer"
                    onClick={() => navigateToDetails(item.urlTitle)}
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />

                    <h3 className="bg-[#000]/80 rounded-br-lg z-10 text-lg font-medium text-[#2ea25f] dark:text-[#cb384c] absolute top-0 left-0 py-2 px-4 xs:text-xl md:text-xl group-hover:hidden">
                      {item.title} <br />
                      <span className="text-slate-400 text-sm">
                        {item.subTitle}
                      </span>
                    </h3>

                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <div className="flex flex-col items-center mx-auto gap-8 w-full px-2">
                        <p className="text-white text-sm">{item.description}</p>
                        <Button
                          onClick={() => navigateToDetails(item.urlTitle)}
                          className="bg-btn-bg hover:bg-bg-hover flex items-center justify-center gap-2 w-full max-w-xs"
                        >
                          <Icon icon="ix:explore" width="20" height="20" />
                          <span>{item.ctaButton}</span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="lg:hidden mt-4 mb-8">
                    <Button
                      onClick={() => navigateToDetails(item.urlTitle)}
                      className="bg-btn-bg hover:bg-bg-hover flex items-center justify-center gap-2 w-full  mx-auto"
                    >
                      <Icon icon="ix:explore" width="20" height="20" />
                      <span>{item.ctaButton}</span>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Top5Projects;
