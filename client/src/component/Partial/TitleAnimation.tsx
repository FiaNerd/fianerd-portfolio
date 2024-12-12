import { motion } from "framer-motion";
import useAnimateIn from "../../hook/useAnimation";
import { useEffect, useState } from "react";

interface IProps {
  title: string;
  dot: string;
  onComplete?: () => void;
  style?: React.CSSProperties;
}

const TitleAnimation = ({ title, dot, onComplete, style }: IProps) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [title]);

  const characterCount = title.length + 1;
  const durationPerChar = 0.1;
  const totalDuration = characterCount * durationPerChar;

  const { ref, ctrls } = useAnimateIn({
    delay: 0,
    distance: "1rem",
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

  const words = title.split(" ");

  return (
    <motion.h1
      key={animationKey}
      ref={ref}
      aria-label={title}
      role="heading"
      initial="hidden"
      animate={ctrls}
      onAnimationComplete={onComplete}
      className="text-5xl font-bold font-heading mb-2 lg:text-[102px] tracking-tighter whitespace-break-spaces"
      style={style}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="inline"
      >
        {/* Map over words */}
        {words.map((word, wordIndex) => (
          <motion.span
            aria-hidden="true"
            key={wordIndex}
            variants={child}
            className="inline"
          >
            {word}
            {/* Add a space between the words */}
            {wordIndex < words.length - 1 && " "}
          </motion.span>
        ))}
        <motion.span
          variants={child}
          className="text-[6rem] lg:text-[12rem] ml-[-0.04em] leading-[1rem]"
        >
          {dot}
        </motion.span>
      </motion.div>
    </motion.h1>
  );
};

export default TitleAnimation;
