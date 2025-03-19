import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useHeaderHeight from '../../hook/useHeaderHeight';
import useSmoothScroll from '../../hook/useSmoothScroll';
import Title from '../../components/partials/Title';
import NewsCards from '../../components/news/NewsCards';

const NewsPage = () => {
  const { t } = useTranslation('news');
  const headerHeight = useHeaderHeight();

  useSmoothScroll(headerHeight);

  return (
    <section id="news" className="" style={{
      paddingTop: `${headerHeight}px`,
      transition: "padding-top 0.3s ease",
    }}>
        <Title title={t('newsTitle')} children={t('subTitleNews')} sticky/>

        <NewsCards />
     
    </section>
  );
};

export default NewsPage;