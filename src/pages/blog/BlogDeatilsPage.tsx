import { useTranslation } from 'react-i18next';
import useSmoothScroll from '../../hook/useSmoothScroll';
import useHeaderHeight from '../../hook/useHeaderHeight';
import Title from '../../components/partials/Title';

const BlogDeatilsPage = () => {
  const { t } = useTranslation('blogPost');
  const headerHeight = useHeaderHeight();

  useSmoothScroll(headerHeight);

  return (
    <div
      style={{
        paddingTop: `${headerHeight}px`,
        transition: 'padding-top 0.3s ease',
      }}
    >
      
    </div>
  );
};

export default BlogDeatilsPage;
