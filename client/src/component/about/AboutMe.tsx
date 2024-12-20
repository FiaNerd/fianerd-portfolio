import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useFadeIn from "../../hook/useFadeIn";
import Button from "../Partial/Button";

const AboutMe = () => {
  const { t } = useTranslation("aboutMe");
  const [isExpanded, setIsExpanded] = useState(false);

  const { ref, ctrls, vars } = useFadeIn({ delay: 0.5, duration: 1, repeat: true });

  const handleToggleText = () => {
    setIsExpanded(!isExpanded);
  }

  return (

      <div className="max-w-screen-xl	mx-auto grid grid-col-1 p-4 md:gap-10">
        <motion.div ref={ref} initial="hidden" animate={ctrls} variants={vars} className="mx-auto">

          <img src="/assets/images/profile-img-mobile.jpg" alt="Fia nerd" className="mx-auto lg:float-left mb-8 lg:mb-0 md:pr-8 max-w-full h-auto object-cover "/>
      

        {/* <picture>
          <source srcSet="/assets/images/profile-img-mobile.jpg" media="(min-width:md)" />
          <img src="/assets/images/profile-img-desktop.jpg" alt="Description" className="mx-auto md:float-left mb-8 md:pr-8 max-w-full h-auto object-cover"/>
        </picture> */}

        <h2 className="text-h2 m-0 font-bold text-text-sub-heading not-italic">{t('title')}</h2>
        <p className="italic">{t('intro')}</p>
        <p>{t('introBio')}</p>
        <h3 className="text-text-sub-heading font-bold not-italic">{t('myBackgroundTitle')}</h3>
        
        <p
            className={`${
              isExpanded ? "line-clamp-none" : "line-clamp-5 lg:line-clamp-[10]"
            }`} 
          >
            {t('myBackgroundText')}
          </p>
               
        { isExpanded && (
          <>

          <h3 className="m-0 font-bold text-text-sub-heading not-italic">{t('myJourneyTitle')}</h3>
          <p>{t('myJourneyText')}</p>
           {/* <img src="/assets/images/profile-img-mobile.jpg" alt="Fia nerd" className="hidden lg:block mx-auto lg:float-right mb-8 md:mb-0 md:pr-8 max-w-sm h-auto object-cover "/> */}
           <h4 className=" m-0 font-bold text-text-sub-heading not-italic">{t('myFilosofiTitle')}</h4>
           <h4 className=" not-italic m-0">{t('myFilosofiSubtitle')}</h4>
           <p className="m-0">{t('myFilosofiText1')}</p>
           <p className="m-0">{t('myFilosofiText2')}</p>
           <p>{t('myFilosofiText3')}</p>
           <p>{t('myFilosofiText4')}</p>
           <h3 className="font-bold text-text-sub-heading">{t('createTogheterTitle')}</h3>
           <p>{t('createTogheterText')}</p>
          </>
        )}

        <Button
            className="float-right text-lg md:text-xl text-accent-secondary hover:text-accent-primary "
            onClick={handleToggleText}
          >
            {isExpanded ? t('ctaLess') : t('cta')}
          </Button>  
        </motion.div>
      </div>
  );
};

export default AboutMe;
