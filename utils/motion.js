import { HTMLMotionProps, MotionProps, Variants } from "framer-motion";

export const headerVariants = {
  visible: {
    position: 'fixed',
    opacity: 1,
    y: 0,

    transition: {
      type: 'linear',
    },
  },
  hidden: {
    opacity: 0.7,
    y: -60,
    transition: {
      type: 'linear',
    },
    transitionEnd: {
      position: 'static',
    },
  },
};

export const fadeInUpAnimation = (delay = 0, ) => {
  return {
    initial: {
      opacity: 0,
      y: 100
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.5,
      delay: delay,
    },
  } ;
};
export const fadeInDownAnimation = (delay = 0, ) => {
  return {
    initial: {
      opacity: 0,
      y: -100
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.5,
      delay: delay,
    },
  } ;
};

export const fadeInAnimation = (duration = 0.5, delay = 0) => {
  return {
    exit: 'hidden',
    initial: 'hidden',
    transition: {
      duration,
      delay,
    },
    variants: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    },
    viewport: {
      once: true,
    },
    whileInView: 'visible',
  };
};
export const fadeInGrow = (delay = 0, duration = 0.4) => {
  return {
    exit: 'hidden',
    initial: 'hidden',
    transition: { duration, delay },
    variants: {
      hidden: {
        opacity: 0,
        scale: 0.4,
      },
      visible: {
        opacity: 1,
        scale: 1,
      },
    },
    viewport: {
      once: true,
    },
    whileInView: 'visible',
  } ;
};