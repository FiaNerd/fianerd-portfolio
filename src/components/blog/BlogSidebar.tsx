import React from 'react';

interface BlogSidebarProps {
  titleTeche: string;
  technologies: string[];
  titleKeyFeature: string;
  keyFeatures: string[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  titleTeche,
  technologies,
  titleKeyFeature,
  keyFeatures,
}) => {
  return (
    <div className="bg-[#000] p-4 lg:col-span-1">
      <div className="mb-8 ">
        <h5 className="dark:text-black font-bold highlight highlight-bg-secondary dark:highlight-text-accent highlight-variant-18 highlight-spread-x-xl highlight-spread-y-sm">
          {titleTeche}
        </h5>
        <div>
          {technologies.map((tech, index) => (
            <p
              key={index}
              className="text-sm tracking-wide text-hover-text dark:text-text-primary"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h5 className="dark:text-black font-bold highlight highlight-bg-secondary dark:highlight-text-accent highlight-variant-18 highlight-spread-x-xl highlight-spread-y-sm">
          {titleKeyFeature}
        </h5>
        <div>
          {keyFeatures.map((feature, index) => (
            <p
              key={index}
              className="text-sm tracking-wide text-hover-text dark:text-text-primary"
            >
              {feature}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
