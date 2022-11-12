import React from "react";
import { motion } from "framer-motion";
import { pageAni } from "../Animations";
import BannerText from "../Components/BannerText";
import WorksGallery from "../Components/WorksGallery";

function Porfolio({ works }) {
  // console.log(works);
  return (
    <motion.div variants={pageAni} initial="hidden" animate="show" exit="exit">
      <BannerText />
      <WorksGallery works={works} />
    </motion.div>
  );
}

export default Porfolio;
