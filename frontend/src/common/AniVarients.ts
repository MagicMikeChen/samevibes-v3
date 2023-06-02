export const dropIn = {
  initial: { scale: 0.7, y: '-100vh', opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.1, type: 'spring', damping: 10 },
  },
  exit: {
    scale: 0.5,
    y: '100vh',
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const zWaveVariants = {
  initial: { scale: 1, y: 30, x: 60, opacity: 1 },
  enter: {
    scale: 1,
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.48, 0.15, 0.25, 0.96], yoyo: 8 },
  },
  exit: {
    scale: 1,
    y: 0,
    x: 0,
    opacity: 0.6,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export const fadeInVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};
export const spinVariants = {
  initial: { rotate: 180,     opacity: 0,  },
  enter: {
    rotate: 720,
    opacity: 1,

    // loop: Infinity,
    transition: {  duration: 2 },
  },
  exit: {
    rotate: 180,
    opacity: 1,

  },
};
export const toTopVariants = {
  initial: { scale: 1, y: '100vh', opacity: 0.6 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 1,
    y: '80vh',
    opacity: 0.6,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export const toBottomVariants = {
  initial: { scale: 1, y: '-100vh', opacity: 0.6 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 1,
    y: '-100vh',
    opacity: 0.5,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};
export const toBottomFadeOutVariants = {
  initial: { scale: 1, y: '-100vh', opacity: 0.6 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 1,
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

export const toLeftVariants = {
  initial: { scale: 1, x: '100vh', opacity: 0.5 },
  enter: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 1,
    x: '40vh',
    opacity: 0,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export const toRightVariants = {
  initial: { scale: 1, x: '-100vh', opacity: 0.5 },
  enter: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 1,
    x: '-40vh',
    opacity: 0,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};
export const navStaggerVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};
export const navItemMoveInVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};