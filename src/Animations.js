export const menuSliderAni = {
  hidden: {
    x: "-100%",
    opacity: 0.8,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0.8,
    x: "-100%",
    transition: { duration: 0.3, ease: "easeOut" },
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
    transition: { duration: 0.04, ease: "easeOut" },
  },
};
