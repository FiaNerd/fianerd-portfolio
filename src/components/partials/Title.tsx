import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TitleAnimation from "./TitleAnimation";

interface IProps {
  id?: string;
  title?: string;
  titleClassName?: string;
  dot?: string;
  children: string;
  className?: string;
  subHeadingClassName?: string;
  sticky?: boolean;
  style?: React.CSSProperties;
  dangerouslyHTML?: string;
  light?: string;
  dark?: string;
}

const Title = ({
  id,
  title,
  titleClassName,
  dot,
  children,
  className = "",
  subHeadingClassName = "text-text-secondary dark:text-text-secondary",
  sticky = false,
  style,
  dangerouslyHTML,
  light,
  dark,
}: IProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Reset animation state when title changes (optional, based on your needs)
    setHasAnimated(false);
  }, [title]);

  const handleAnimationComplete = () => {
    setHasAnimated(true); // Mark as animated
  };

  const stickyClass = sticky ? "sticky left-0 top-0 z-20 mb-8 mb:20" : "";

  return (
    <motion.div
      id={id}
      className={`flex flex-col items-center text-center whitespace-nowrap ${className} ${light} ${dark} ${stickyClass}`}
      style={style}
    >
      <TitleAnimation
        title={title || ""}
        dot={dot || ""}
        dangerouslyHTML={dangerouslyHTML}
        onComplete={handleAnimationComplete}
        shouldAnimate={!hasAnimated}
        titleClassName={titleClassName}
      />
      <h3 className={`text-wrap ${subHeadingClassName}`}>{children}</h3>
    </motion.div>
  );
};

export default Title;
