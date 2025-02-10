import { AnimationControls, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimateInProps {
  customVars?: {
    hidden: { opacity: number; y: string | number };
    visible: {
      opacity: number;
      y: string | number;
      transition: {
        delay: number;
        duration: number;
        ease: number[];
      };
    };
  };
  delay?: number;
  distance?: string | number;
  duration?: number;
  repeat?: boolean;
  threshold?: number;
}

export default function useAnimateIn({
  customVars,
  delay = 0,
  distance = '1rem',
  duration = 1,
  repeat = false,
  threshold = 0.75,
}: AnimateInProps) {
  const ctrls: AnimationControls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
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
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: duration * 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return { ref, ctrls, vars };
}
