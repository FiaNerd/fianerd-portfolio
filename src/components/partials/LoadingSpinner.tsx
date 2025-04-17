// filepath: /Applications/MAMP/htdocs/my_projects/fianerd-portfolio/src/components/LoadingSpinner.js
import { useTranslation } from 'react-i18next';
import styles from '../../styles/LoadingSpinner.module.css';

const LoadingSpinner = () => {
  const { t } = useTranslation(['common']);
  return (
    <div>
      <div className={`${styles.loader} mb-8`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h3 className="text-center">{t('loading')}</h3>
    </div>
  );
};

export default LoadingSpinner;
