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
    <motion.div id={id} className={"text-center md:mt-[2em] pt-4 px-4"}>
        <TitleAnimation title={title} dot={dot} />
        <h3 className="-mt-[0.3em] lg:-mt-[1em] leading-9 md:leading-[2.5em] lg:leading-[4.6em] ">{children}</h3>
    </motion.div>
  );
};

export default Title;