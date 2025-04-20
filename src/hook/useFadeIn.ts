import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
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
    threshold: threshold || 0.2, // Ensure at least 50% of the element is visible
    triggerOnce: !repeat, // Trigger only once unless repeat is true
  });

  // Dynamically detect screen size
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (inView) {
      requestAnimationFrame(() => {
        ctrls.start('visible');
      });
    } else {
      ctrls.start('hidden');
    }
  }, [ctrls, inView, isMobile]);

  // Set different animations for mobile and desktop
  const vars = customVars || {
    hidden: {
      opacity: 0,
      x: isMobile
        ? 0
        : direction === 'left'
        ? -100
        : direction === 'right'
        ? 100
        : 0, // No horizontal movement for mobile
      y: isMobile
        ? direction === 'up'
          ? 100
          : direction === 'down'
          ? -100
          : 0 // Vertical movement for mobile
        : 0, // No vertical movement for desktop
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: delay || 0.5,
        duration: duration || 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return { ref, ctrls, vars, repeat };
}
