import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IProps {
  text: string;
  dot: string;
}

const TitleAnimation = ({ text, dot }: IProps) => {
  
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.h1
      ref={ref}
      aria-label={text}
      role="heading"
      initial="hidden"
      animate="visible" 
      className="text-5xl text-text-heading font-bold font-heading mb-2 lg:text-[102px] tracking-tighter"
      variants={wordAnimation}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          variants={wordAnimation}
          transition={{
            delayChildren: index * 0.25,
            staggerChildren: 0.05,
          }}
          className="inline-block"
        >
          {word.split("").map((character, charIndex) => (
            <motion.span
              aria-hidden="true"
              key={charIndex}
              variants={characterAnimation}
              className="inline-block"
            >
              {character}
            </motion.span>
          ))}
        </motion.span>
      ))}
      <motion.span
        initial="hidden"
        animate="visible"
        variants={characterAnimation}
        className="text-[6rem] lg:text-[12rem] ml-[-0.04em] inline-block"
      >
        {dot}
      </motion.span>
    </motion.h1>

  );
};

export default TitleAnimation;
