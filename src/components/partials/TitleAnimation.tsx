import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface IProps {
  title: string;
  dot: string;
  dangerouslyHTML?: string;
  onComplete: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const TitleAnimation = ({ title, dot, dangerouslyHTML, onComplete, style, className }: IProps) => {
  const [animationKey, setAnimationKey] = useState(0);
  const controls = useAnimation();
  
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [title]);

  const words = title.split(" ");
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const wordVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { opacity: 1, scaleX: 1 }, 
  };

  return (
    <motion.h1
      key={animationKey}
      ref={ref}
      aria-label={title}
      role="heading"
      initial="hidden"
      animate={controls}
      onAnimationComplete={onComplete}
      className={`text-[2rem] md:text-[3.6rem] lg:text-[4.6rem] font-heading font-bold mb-0 pt-4 inline-block whitespace-nowrap ${className}`}
      style={style}
    >
      {dangerouslyHTML ? (
        <span
          dangerouslySetInnerHTML={{ __html: dangerouslyHTML }}
          className={className}
        />
      ) : (
        <motion.div variants={containerVariants} className="inline-block">
          {words.map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              variants={wordVariants}
              className="inline-block mr-4"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={letterVariants}
                  transition={{
                    duration: 0.15,  
                    delay: letterIndex * 0.1, 
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </motion.div>
      )}
        <motion.span
          variants={letterVariants}
          transition={{
            duration: 0.5,
            delay: words.reduce((acc, word) => acc + word.length, 0) * 0.1 + 0.3, 
          }}
          className="inline-block ml-[-0.20em] relative text-[6rem] md:text-[3rem] lg:text-[4rem]"
          style={{ transform: "scale(1.5)", lineHeight: "1" }}
        >
          {dot}
        </motion.span>
    </motion.h1>
  );
};

export default TitleAnimation;