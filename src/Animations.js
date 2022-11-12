export const pageAni = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      easing: "ease",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    // y: 300,
    opacity: 0,
    transition: { delay: 0.08, duration: 0.1, easing: "ease" },
  },
};

export const menuSliderAni = {
  hidden: {
    x: "-100%",
    opacity: 0.8,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0.8,
    x: "-100%",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};
export const itemAni = {
  hidden: {
    x: "-50%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};
