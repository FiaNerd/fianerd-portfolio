import { useTranslation } from 'react-i18next';

interface IGraphicItem {
  urlTitle?: string;
  client: string;
  technologies: string[];
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

  // Fetch titles dynamically
  const titles = t('graphicItemsPortfolioTitles', { returnObjects: true }) as {
    clientTitle?: string;
    technologiesTitle?: string;
    tagsTitle?: string;
    goalsTitle?: string;
    roleTitle?: string;
    challengesTitle?: string;
    resultsTitle?: string;
    testimonialTitle?: string;
  };

  return (
    <div className="grid gap-8">
      {graphicItemsPortfolio.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          {/* Client Section */}
          <div>
            <h4 className="mb-0 text-bg-secondary dark:text-text-accent font-bold">
              {titles.clientTitle}
            </h4>
            <p dangerouslySetInnerHTML={{ __html: item.client }} />
          </div>

          {/* Technologies Section */}
          <div>
            <h4 className="mb-2 text-bg-secondary dark:text-text-accent font-bold">
              {titles.technologiesTitle}
            </h4>

            <div className="flex flex-wrap gap-x-2">
              {item.technologies?.map((tech, techIndex) => (
                <p
                  key={techIndex}
                  className="px-2 py-1 border-bg-secondary border-2  dark:border-text-accent rounded text-sm"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>

          {/* Goals Section */}
          {item.goals && (
            <div>
              <h4 className="mb-0 text-bg-secondary dark:text-text-accent font-bold">
                {titles.goalsTitle}
              </h4>
              <p>{item.goals}</p>
            </div>
          )}

          {/* Role Section */}
          {item.role && (
            <div>
              <h4 className="mb-0 text-bg-secondary dark:text-text-accent font-bold">
                {titles.roleTitle}
              </h4>
              <p>{item.role}</p>
            </div>
          )}

          {/* Challenges Section */}
          {item.challenges && (
            <div>
              <h4 className="mb-0 text-bg-secondary dark:text-text-accent font-bold">
                {titles.challengesTitle}
              </h4>
              <p>{item.challenges}</p>
            </div>
          )}

          {/* Results Section */}
          {item.results && (
            <div>
              <h4 className="mb-0 text-bg-secondary dark:text-text-accent font-bold">
                {titles.resultsTitle}
              </h4>
              <p>{item.results}</p>
            </div>
          )}

          {/* Testimonial Section */}
          {item.testimonial && (
            <div>
              <h4 className="mb-0 text-bg-secondary dark:text-text-accent font-bold">
                {titles.testimonialTitle}
              </h4>
              <p>{item.testimonial}</p>
            </div>
          )}

          {/* Result */}
          {item.results && (
            <div>
              <h4 className="mb-0 text-bg-secondary dark:text-text-accent font-bold">
                {titles.resultsTitle}
              </h4>
              <p>{item.results}</p>
            </div>
          )}

          {/* Tags Section */}
          <div>
            <h4 className="mb-2 text-bg-secondary dark:text-text-accent font-bold">
              {titles.tagsTitle}
            </h4>

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
