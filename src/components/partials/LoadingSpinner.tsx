// filepath: /Applications/MAMP/htdocs/my_projects/fianerd-portfolio/src/components/LoadingSpinner.js
import styles from '../../styles/LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div>

    <div className={`${styles.loader} mb-8`} >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <h3 className='text-center'>LOADING</h3>
    </div>
  );
};

export default LoadingSpinner;
