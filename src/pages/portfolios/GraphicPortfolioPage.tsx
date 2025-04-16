import { useTranslation } from 'react-i18next';
import GraphicImageGallery from '../../components/portfolios/graphic/GraphicImageGallery';
import useFadeIn from '../../hook/useFadeIn';
import { motion } from 'framer-motion';

const GraphicPortfolioPage = () => {
  const { t } = useTranslation('portfolio/graphicPortfolioSection');

  const fadeInDown = useFadeIn({ direction: 'down', delay: 0.5, duration: 1 });

  return (
    <motion.section
      ref={fadeInDown.ref}
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
