import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import useVisibility from '../../../hook/useVisibility';

interface IProps {
  percentage: number;
  className?: string;
}

const ProgressBar: React.FC<IProps> = ({ percentage, className }) => {
  const [ref, isVisible] = useVisibility();
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isVisible) {
      intervalId = setInterval(() => {
        setCompleted(prev => {
          if (prev < percentage) {
            return prev + 1;
          } else {
            clearInterval(intervalId);
            return percentage;
          }
        });
      }, 20);
    } else {
      setCompleted(20);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isVisible, percentage]);

  return (
    <div ref={ref} className={`relative w-full bg-bg-secondary rounded-full h-4 mb-[1em] ${className}`}>
      <motion.div
        className="absolute top-0 left-0 bg-gradient-to-r from-text-secondary dark:from-hover-text to-text-sub-heading dark:to-accent-primary h-full"
        initial={{ width: 0 }}
        animate={{ width: `${completed}%` }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <motion.span
          className="absolute h-full flex items-center text-sm text-bg-primary font-semibold"
          initial={{ x: 0 }}
          animate={{ x: `${completed}%` }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{ left: '55%', transform: 'translateX(-100%)' }}
        >
          {completed}%
        </motion.span>
      </motion.div>
    </div>
  );
};

export default ProgressBar;
