import { motion } from "framer-motion";
import TitleAnimation from "./TitleAnimation";

interface IProps {
    id: string;
    title: string;
    dot: string;
    children: string;
    className?: string;
}

const Title = ({ id, title, dot, children, className }: IProps) => {
  return (
    <motion.div id={id} className={`text-center pt-12 md:pt-20 px-4 ${className || ""}`}>
      <TitleAnimation title={title} dot={dot} />
      <h3 className={`-mt-[0.3em]  leading-9 md:leading-[2.5em] lg:leading-[4.6em] ${className || ""}}`}>
        {children}
      </h3>
    </motion.div>
  );
};

export default Title;
