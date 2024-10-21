import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IFadeInProps {
  customVars?: {
    hidden: { opacity: number; scale: number };
    visible: {
      opacity: number;
      scale: number;
      transition: {
        delay: number;
        duration: number;
        ease: number[];
      };
    };
  };
  delay?: number;
  duration?: number;
  repeat?: boolean;
  threshold?: number;
}

export default function useFadeIn({
  customVars,
  delay,
  duration,
  repeat = false,
  threshold,
}: IFadeInProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: threshold || 0.1,
    triggerOnce: !repeat,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const vars = customVars || {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay || 1,
        duration: duration || 0.8,
        ease: [0.2, 0.5, 0.3, 0.9], 
      },
    },
  };

  return { ref, ctrls, vars, repeat };
}
