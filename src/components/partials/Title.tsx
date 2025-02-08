import { motion } from "framer-motion";
import TitleAnimation from "./TitleAnimation";

interface IProps {
  id?: string;
  title?: string;
  dot: string;
  children: string;
  className?: string; 
  subHeadingClassName?: string; 
  sticky?: boolean;
  style?: React.CSSProperties;
  dangerouslyHTML?: string;
}

const Title = ({ id, title, dot, children, className, subHeadingClassName, sticky, style, dangerouslyHTML }: IProps) => {
  return (
    <motion.div
      id={id}
      className={`flex flex-col top-0 items-center text-center mb-12 md:mb-20 ${className || ""} ${sticky ? "sticky z-20 top-0 left-0" : ""}`}
      style={style}
    >
      <TitleAnimation 
        title={title || ""} 
        dot={dot}
        dangerouslyHTML={dangerouslyHTML} 
        onComplete={() => {}}
      />


      <h3 className={`${subHeadingClassName || "text-text-secondary dark:text-text-secondary"}`}>
        {children}
      </h3>
    </motion.div>
  );
};

export default Title;