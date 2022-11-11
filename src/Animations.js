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
    transition: { duration: 0.1, ease: "easeOut" },
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
