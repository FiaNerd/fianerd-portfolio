import { motion } from "framer-motion";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AboutMe from "../component/about/AboutMe";
import AboutNav from "../component/about/AboutNav";
import HeroSection from "../component/heroSection/HeroSection";
import Section from "../component/Partial/Section";
import TitleAnimation from "../component/Partial/TitleAnimation";
import { useSmoothScroll } from "../hook/useSmoothScroll";

const HomePage = () => {
  const location = useLocation();
  const [headerHeight, setHeaderHeight] = useState(0);

  // Dynamically adjust header height
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

  // // Handle scrolling to sections
  // useEffect(() => {
  //   const scrollToSection = () => {
  //     const targetId = location.hash.replace("#", "");
  //     if (targetId) {
  //       const targetElement = document.getElementById(targetId);
  //       if (targetElement) {
  //         targetElement.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //   };

  //   scrollToSection();
  // }, [location]);

  useSmoothScroll();

  return (
    <>
      <div
        style={{ paddingTop: `${headerHeight}px` }}
        className="bg-blend-multiply"
      >
        <Section
          id="home"
          style={{ minHeight: `calc(100% - ${headerHeight}px)` }}
          className="relative"
        >
          <HeroSection />
        </Section>
      </div>

      <motion.div
        id="profile"
        className="text-center mb-8 text-text-heading md:mt-[2em]"
      >
        <TitleAnimation text={t("profile")} dot="." />
        <h3 className="-mt-[0.8em] lg:-mt-[1.5em]">{t("intro")}</h3>
      </motion.div>

      <AboutNav />
      <AboutMe />
    </>
  );
};

export default HomePage;
