import { motion } from "framer-motion";
import TitleAnimation from "./TitleAnimation";

interface IProps {
  id: string;
  title: string;
  dot: string;
  children: string;
  className?: string; 
  subHeadingClassName?: string; 
  sticky?: boolean;
}

const Title = ({ id, title, dot, children, className, subHeadingClassName, sticky }: IProps) => {
  return (
    <motion.div
      id={id}
      className={`text-center pt-4 md:pt-20 md:mb-20 px-4 bg-bg-primary ${className || ""} ${
        sticky ? "sticky z-10 top-[-2rem] md:top-[-8rem]" : ""
      }`}
    >
      <TitleAnimation title={title} dot={dot} />
      <h3
        className={`-mt-[0em] lg:-mt-[0.3em] pb-4 md:pb-0 leading-0 md:leading-[2.5em] lg:leading-[4em] ${
          subHeadingClassName || "text-text-secondary"
        }`}
      >
        {children}
      </h3>
    </motion.div>
  );
};

export default Title;
