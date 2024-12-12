import { motion } from "framer-motion";
import useAnimateIn from "../../hook/useAnimation";
import { useEffect, useState } from "react";

interface IProps {
  text: string;
  dot: string;
  onComplete?: () => void;
}

const TitleAnimation = ({ text, dot, onComplete }: IProps) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [text]);
  
  const characterCount = text.length + 1; 
  const durationPerChar = 0.1; 
  const totalDuration = characterCount * durationPerChar; 

  const { ref, ctrls } = useAnimateIn({
    delay: 0,
    distance: '1rem',
    duration: totalDuration,
    repeat: false,
    threshold: 1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: durationPerChar,
        when: "beforeChildren",
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      key={animationKey} 
      ref={ref}
      aria-label={text}
      role="heading"
      initial="hidden"
      animate={ctrls}
      onAnimationComplete={onComplete}
      className="text-5xl text-text-heading font-bold font-heading mb-2 lg:text-[102px] tracking-tighter"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {text.split("").map((character, charIndex) => (
          <motion.span
            aria-hidden="true"
            key={charIndex}
            variants={child}
            className="inline-block"
          >
            {character}
          </motion.span>
        ))}
        <motion.span
          variants={child}
          className="text-[6rem] lg:text-[12rem] ml-[-0.04em] inline-block"
        >
          {dot}
        </motion.span>
      </motion.div>
    </motion.h1>
  );
};

export default TitleAnimation;
