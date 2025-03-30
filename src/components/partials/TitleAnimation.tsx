import { Icon } from "@iconify/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface IProps {
  title: string;
  titleClassName?: string;
  dot?: string;
  dangerouslyHTML?: string;
  onComplete?: () => void;
  style?: React.CSSProperties;
  className?: string;
  shouldAnimate?: boolean;
}

const TitleAnimation = ({
  title,
  titleClassName,
  dot,
  dangerouslyHTML,
  onComplete,
  style,
  className,
  shouldAnimate = true,
}: IProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);

  useEffect(() => {
    if (title !== currentTitle) {
      setCurrentTitle(title); 
      setHasAnimated(false);
      controls.start("hidden").then(() => {
        controls.start("visible"); 
      });
    }
  }, [title, currentTitle, controls]);

  useEffect(() => {
    if (inView && !hasAnimated && shouldAnimate) {
      controls.start("visible")
      .then(() => {
        setHasAnimated(true);
        if (onComplete) {
          onComplete(); 
        }
      });
    }
  }, [inView, controls, hasAnimated, shouldAnimate, onComplete]);

  const words = currentTitle.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { opacity: 1, scaleX: 1 },
  };

  return (
        <motion.h1
      ref={ref}
      aria-label={currentTitle}
      role="heading"
      initial="hidden"
      animate={controls}
      onAnimationComplete={onComplete}
      className={`font-heading font-bold mb-0 pt-4 inline-block text-wrap ${className} ${titleClassName || ""}`} // Combine className and titleClassName
      style={style}
    >
      {dangerouslyHTML ? (
        <span
          dangerouslySetInnerHTML={{ __html: dangerouslyHTML }}
          className={className}
        />
      ) : (
        <motion.div variants={containerVariants} className="inline">
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
                    delay: wordIndex * 0.5 + letterIndex * 0.1,
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
      {dot && (
        <motion.span
          variants={letterVariants}
          transition={{
            duration: 0.5,
            delay: words.reduce((acc, word) => acc + word.length, 0) * 0.1 + 0.3,
          }}
          className="inline-block align-baseline text-[6rem]"
          style={{ lineHeight: "1", position: "relative", verticalAlign: "baseline" }}
        >
          {dot === "!" || dot === "?" ? (
            <span className="-ml-4 text-[3rem] md:text-[5rem]">{dot}</span>
          ) : (
            <Icon icon="icon-park-outline:dot" className="-ml-5 md:-ml-8 text-[1.5rem] md:text-[3rem] lg:text-[4rem] translate-y-[0.3em]" />
          )}
        </motion.span>
      )}
    </motion.h1>
  );
};

export default TitleAnimation;
