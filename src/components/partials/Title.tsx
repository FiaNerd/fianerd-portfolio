import { motion } from "framer-motion";
import TitleAnimation from "./TitleAnimation";

interface IProps {
  id?: string;
  title?: string;
  dot?: string;
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
      className={`flex flex-col items-center text-center${className || ""} ${sticky ? "sticky left-0 top-0 z-20 mb-12 mb:20" : ""}`}
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