import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useVisibility from '../../hook/useVisibility';

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
      setCompleted(15);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isVisible, percentage]);

  return (
    <div ref={ref} className={`relative w-full bg-gray-400 rounded-full h-4 mb-[1em] ${className}`}>
      <motion.div
        className="absolute top-0 left-0 bg-gradient-to-r from-amber-950 dark:from-hover-text to-text-sub-heading dark:to-accent-primary h-full"
        initial={{ width: 0 }}
        animate={{ width: `${completed}%` }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <motion.span
          className="absolute inset-y-0 inset-x-[12px] flex items-center text-sm text-bg-primary font-semibold"
          initial={{ x: 0 }}
          animate={{ x: `${completed}%` }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          {completed}%
        </motion.span>
      </motion.div>
    </div>
  );
};

export default ProgressBar;
