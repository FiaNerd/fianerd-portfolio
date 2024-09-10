import { useTranslation } from "react-i18next";

const AboutMe = () => {
    const { t } = useTranslation('aboutMe');

    return (
            <div className="bg-bg-plate grid grid-cols-1 p-4 md:gap-10 md:grid-cols-2">
            <img src="./public/assets/images/me.jpeg" alt="Fia nerd" className=""/>
            <div>
            <h2>{t('title')}</h2>
            <p>{t('intro')}</p>
            <p>{t('bio')}</p>
            </div>
        </div>
    );
};

export default AboutMe;