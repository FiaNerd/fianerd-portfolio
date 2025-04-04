import { motion } from 'framer-motion';
import ProgramAndSoftware from './ProgramAndSoftware';
import useFadeIn from '../../../hook/useFadeIn';
import useScrollUpdateURL from '../../../hook/useScrollUpdate';
import useHeaderHeight from '../../../hook/useHeaderHeight';
import Competencies from './Competencies';

const OtherSkills = () => {
  // Animations for the image and text
  const fadeLeft = useFadeIn({ direction: 'left', delay: 0.5, duration: 1 });
  const fadeRight = useFadeIn({ direction: 'right', delay: 0.7, duration: 1 });

  const { headerHeight, isHeaderVisible } = useHeaderHeight();

  // Include 'programs-and-softwares' in the sectionIds array
  // useScrollUpdateURL(
  //   ['other-skills','programs-and-softwares'],
  //   '',
  //   headerHeight,
  //   isHeaderVisible
  // );

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-10 md:py-12 grid grid-rows-1 lg:grid-cols-2 gap-8 xl:px-20 text-center mb-12 lg:mb-20 justify-center">
      <motion.div
        ref={fadeLeft.ref}
        initial="hidden"
        animate={fadeLeft.ctrls}
        variants={fadeLeft.vars}
        className=" "
      >
        <section id="other-skills">
          <Competencies />
        </section>
      </motion.div>

      <motion.div
        ref={fadeRight.ref}
        initial="hidden"
        animate={fadeRight.ctrls}
        variants={fadeRight.vars}
      >
        <section id="programs-and-softwares">
          <ProgramAndSoftware />
        </section>
      </motion.div>
    </div>
  );
};

export default OtherSkills;
