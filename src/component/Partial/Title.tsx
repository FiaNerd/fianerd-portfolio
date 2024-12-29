import { motion } from "framer-motion";
import TitleAnimation from "./TitleAnimation";

interface IProps {
  id: string;
  title: string;
  dot: string;
  children: string;
  className?: string; 
  subHeadingClassName?: string; 
}

const Title = ({ id, title, dot, children, className, subHeadingClassName }: IProps) => {
  return (
    <motion.div
      id={id}
      className={`text-center pt-12 md:pt-20 px-4 ${className || ""}`}
    >
      <TitleAnimation title={title} dot={dot} />
      <h3
        className={`-mt-[0.6em] lg:-mt-[0.3em] leading-0 md:leading-[2.5em] lg:leading-[3.1em] ${
          subHeadingClassName || "text-text-secondary"
        }`}
      >
        {children}
      </h3>
    </motion.div>
  );
};

export default Title;
