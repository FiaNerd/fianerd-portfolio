import { useTranslation } from 'react-i18next';
import Title from '../Partial/Title';

const Hobbies = () => {
    const { t } = useTranslation("hobbies");
  return (
   <>
   <Title title={t('titleHobbie')} id={'hobbies'} dot={'!'} children={t('subTitleHobbie')} className="text-hover-text dark:text-accent-primary bg-slate-950" subHeadingClassName="text-hover-text dark:text-text-secondary" sticky={true}/>
   </>
  )
}

export default Hobbies