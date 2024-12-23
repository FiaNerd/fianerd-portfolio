import { motion } from "framer-motion";
import TitleAnimation from "./TitleAnimation";

interface IProps {
    id: string
    title: string
    dot: string
    children: string
}

const Title = ({id , title, dot, children} : IProps) => {
  return (
    <motion.div id={id} className={"text-center mb-8 md:mt-[2em] "}>
        <TitleAnimation title={title} dot={dot} />
        <h3 className="-mt-[0.8em] lg:-mt-[1.5em] leading-[2rem] md:leading-[3rem] lg:leading-[5rem]">{children}</h3>
    </motion.div>
  );
};

export default Title;