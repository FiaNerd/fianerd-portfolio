import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AboutMe from "../component/about/AboutMe";
import AboutNav from "../component/about/AboutNav";
import HeroSection from "../component/heroSection/HeroSection";
import Section from "../component/Partial/Section";
import TitleAnimation from "../component/Partial/TitleAnimation";
import { useSmoothScroll } from "../hook/useSmoothScroll";
import { useTranslation } from "react-i18next";
import Skills from "../component/Skills";

const HomePage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  const {t} = useTranslation('home');

  useEffect(() => {
    const header = document.querySelector("header");

    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useSmoothScroll();

  return (
    <>
      <div
        style={{ paddingTop: `${headerHeight}px`,  transition: "padding-top 0.3s ease", }}
        className="bg-blend-multiply"
      >
        <Section
          id="home"
          style={{ height: `calc(100% - ${headerHeight}px)` }}
          className="relative"
        >
          <HeroSection />
        </Section>
      </div>

      <motion.div
        id="profile"
        className="text-center mb-8 text-text-heading md:mt-[2em]"
      >
        <TitleAnimation title={t("titleProfile")} dot="." />
        <h3 className="-mt-[0.8em] lg:-mt-[1.5em] leading-[2rem] md:leading-[5rem]">{t("intro")}</h3>
      </motion.div>

      <AboutNav />
      <Section bgColor="bg-bg-plate mb-8">
         <AboutMe />
      </Section>
      
      <Skills />

    </>
  );
};

export default HomePage;
