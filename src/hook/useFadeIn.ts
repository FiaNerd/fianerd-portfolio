import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface IFadeInProps {
  customVars?: {
    hidden: { opacity: number; scale?: number; x?: number; y?: number };
    visible: {
      opacity: number;
      scale?: number;
      x?: number;
      y?: number;
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
  direction?: 'left' | 'right' | 'up' | 'down'; 
}

export default function useFadeIn({
  customVars,
  delay,
  duration,
  repeat = false,
  threshold,
  direction = 'up', // Default direction
}: IFadeInProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: threshold || 0.1,
    triggerOnce: !repeat,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start('visible');
    } else {
      ctrls.start('hidden');
    }
  }, [ctrls, inView]);

  const vars = customVars || {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? 100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: delay || 1,
        duration: duration || 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return { ref, ctrls, vars, repeat };
}
