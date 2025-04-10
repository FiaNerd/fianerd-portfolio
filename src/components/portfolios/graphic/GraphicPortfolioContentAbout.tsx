import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

interface IGraphicItem {
  urlTitle?: string;
  subTitle?: string;
  techTitle?: string;
  tech: { name: string; icon: string }[];
  goals: string;
  role: string;
  challenges: string;
  results: string;
  testimonial: string;
  tags: string[];
  relatedProjects: string[];
  ctaLink: string;
  demands: string;
  ctaButton: string;
}

interface GraphicPortfolioContentAboutProps {
  graphicItemsPortfolio: IGraphicItem[];
}

const GraphicPortfolioContentAbout = ({
  graphicItemsPortfolio,
}: GraphicPortfolioContentAboutProps) => {
  const { t } = useTranslation('portfolio/graphicPortfolioSection');

  if (!graphicItemsPortfolio || graphicItemsPortfolio.length === 0) {
    return <p className="text-sm text-gray-500">No data available</p>;
  }

  // Fetch titles dynamically
  const titles = t('graphicItemsPortfolioTitles', { returnObjects: true }) as {
    clientTitle?: string;
    subTitle?: string;
    techTitle?: string;
    tech?: string;
    tagsTitle?: string;
    goalsTitle?: string;
    roleTitle?: string;
    challengesTitle?: string;
    resultsTitle?: string;
    testimonialTitle?: string;
  };

  console.log('titles:', titles);
  console.log('graphicItemsPortfolio:', graphicItemsPortfolio);
  console.log('graphicItemsPortfolio:', graphicItemsPortfolio);

  return (
    <div className="grid gap-8">
      {graphicItemsPortfolio.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          {/* Client Section */}
          <h4 className="font-bold mx-auto">{item.subTitle}</h4>

          {/* Technologies Section */}
          <div>
            <div>
              {item.tech && (
                <h5 className="mb-2 text-bg-secondary dark:text-text-accent font-bold">
                  {item.techTitle ||
                    titles.techTitle ||
                    'No technology title available'}
                </h5>
              )}
            </div>

            <div className="flex flex-wrap gap-x-2">
              {item.tech?.length ? (
                item.tech.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2 px-2 py-1 dark:border-text-accent rounded text-sm"
                  >
                    <Icon
                      icon={tech.icon}
                      width="24"
                      height="24"
                      className="text-btn-bg hover:text-bg-hover"
                    />
                    {/* Render the name */}
                    <span>{tech.name}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No technologies listed</p>
              )}
            </div>
          </div>

          {/* Goals Section */}
          {item.goals && (
            <div>
              <h5 className="mb-0 text-bg-secondary dark:text-text-accent font-bold">
                {titles.goalsTitle}
              </h5>
              <p>{item.goals}</p>
            </div>
          )}

          {/* Role Section */}
          {item.role && (
            <div>
              <h5 className="mb-0 text-bg-secondary dark:text-text-accent font-bold">
                {titles.roleTitle}
              </h5>
              <p>{item.role}</p>
            </div>
          )}

          {/* Challenges Section */}
          {item.challenges && (
            <div>
              <h5 className="mb-0 text-bg-secondary dark:text-text-accent font-bold">
                {titles.challengesTitle}
              </h5>
              <p>{item.challenges}</p>
            </div>
          )}

          {/* Results Section */}

          {/* Testimonial Section */}
          {item.testimonial && (
            <div>
              <h5 className="mb-0 text-bg-secondary dark:text-text-accent font-bold">
                {titles.testimonialTitle}
              </h5>
              <p>{item.testimonial}</p>
            </div>
          )}
          {/* Tags Section */}
          <div>
            <h5 className="mb-2 text-bg-secondary dark:text-text-accent font-bold">
              {titles.tagsTitle}
            </h5>

            <div className="flex flex-wrap gap-x-2">
              {item.tags?.map((tag, tagIndex) => (
                <p
                  key={tagIndex}
                  className="px-2 py-1 border-bg-secondary border-2  dark:border-text-accent rounded text-sm"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GraphicPortfolioContentAbout;
