import { useTranslation } from 'react-i18next';
import GraphicImageGallery from '../../components/portfolios/graphic/GraphicImageGallery';
import useFadeIn from '../../hook/useFadeIn';
import { motion } from 'framer-motion';

const GraphicPortfolioPage = () => {
  const { t } = useTranslation('portfolio/graphicPortfolioSection');

  // Add threshold to ensure the element is detected
  const fadeInDown = useFadeIn({
    direction: 'down',
    delay: 0.5,
    duration: 1,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={fadeInDown.ref} // Attach ref correctly
      initial="hidden"
      animate={fadeInDown.ctrls}
      variants={fadeInDown.vars}
      className="max-w-screen-2xl mx-auto px-4 mb-20"
    >
      <p
        className="text-center"
        dangerouslySetInnerHTML={{
          __html: t('portfolio/graphicPortfolioSection:top10graphicProjects'),
        }}
      />

      <GraphicImageGallery />
    </motion.section>
  );
};

export default GraphicPortfolioPage;
