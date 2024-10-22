import { motion } from "framer-motion";
import useAnimateIn from "../../hook/useAnimation";

interface IProps {
  text: string;
  dot: string;
  onComplete: () => void; // New prop to notify when animation is complete
}

const TitleAnimation = ({ text, dot, onComplete }: IProps) => {
  const { ref, ctrls, vars } = useAnimateIn({
    delay: 0,
    distance: '1rem',
    duration: 1,
    repeat: false,
    threshold: 1,
  });

  return (
    <motion.h1
      ref={ref}
      aria-label={text}
      role="heading"
      initial="hidden"
      animate={ctrls}
      onAnimationComplete={onComplete} // Call onComplete when the animation is finished
      className="text-5xl text-text-heading font-bold font-heading mb-2 lg:text-[102px] tracking-tighter"
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={vars}
          transition={{
            delayChildren: index * 0.75,
            staggerChildren: 0.05,
          }}
          className="inline-block"
        >
          {word.split("").map((character, charIndex) => (
            <motion.span
              aria-hidden="true"
              key={charIndex}
              variants={vars}
              className="inline-block"
            >
              {character}
            </motion.span>
          ))}
        </motion.span>
      ))}
      <motion.span
        variants={vars}
        className="text-[6rem] lg:text-[12rem] ml-[-0.04em] inline-block"
      >
        {dot}
      </motion.span>
    </motion.h1>
  );
};

export default TitleAnimation;
