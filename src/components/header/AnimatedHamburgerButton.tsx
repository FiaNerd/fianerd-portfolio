import { motion, MotionConfig } from 'framer-motion';
import { AnimatedHamburgerProps } from '../../interfaces/MenuInterface';

const AnimatedHamburgerButton = ({
  isActive,
  toggleMenu,
}: AnimatedHamburgerProps) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        initial={false}
        animate={isActive ? 'open' : 'closed'}
        onClick={() => toggleMenu((prev: unknown) => !prev)}
        className="relative flex h-[3.8rem] w-[4rem] rounded-full bg-white/0 transition-colors dark:text-hover-text hover:bg-black/10 dark:hover:bg-white/10 "
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-nav-text dark:bg-accent-primary"
          style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-nav-text dark:bg-accent-primary"
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-nav-text dark:bg-accent-primary"
          style={{
            x: '-50%',
            y: '50%',
            bottom: '35%',
            left: 'calc(30% + 10px)',
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default AnimatedHamburgerButton;

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['35%', '50%', '50%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '35%'],
    },
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg'],
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg'],
    },
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['35%', '50%', '50%'],
      left: '50%',
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      bottom: ['50%', '50%', '35%'],
      left: 'calc(50% + 10px)',
    },
  },
};
