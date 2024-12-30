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
  style?: React.CSSProperties;
}

const Title = ({ id, title, dot, children, className, subHeadingClassName, sticky, style }: IProps) => {
  return (
    <motion.div
      id={id}
      className={`text-center pt-4 md:pt-20 md:mb-20 px-4 pb-2 lg:pb-0 ${className || ""} ${
        sticky ? "sticky z-10 top-[-2rem] md:top-[-8rem]" : ""
      }`}
      style={style}
    >
      <TitleAnimation title={title} dot={dot} />
      <h3
        className={`-mt-[0em] lg:-mt-[0.8em] md:pb-0 leading-0 md:leading-[-0.8em] lg:leading-[3.9em] xl:leading-[4em]${
          subHeadingClassName || "text-text-secondary"
        }`}
      >
        {children}
      </h3>
    </motion.div>
  );
};

export default Title;
