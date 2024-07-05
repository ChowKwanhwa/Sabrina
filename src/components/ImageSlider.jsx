import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './ImageSlider.css';

const images = [
  '/lying2-1@2x.png',
  '/bikiniwhite2-1@2x.png',
  '/crunched1-1@2x.png',
];

const ImageSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([wrap(page + newDirection, images.length), newDirection]);
  };

  const wrap = (index, length) => {
    if (index < 0) {
      return length - 1;
    } else if (index >= length) {
      return 0;
    }
    return index;
  };

  return (
    <div className="image-carousell-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="img"
          key={page}
          src={images[page]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </div>
  );
};

export default ImageSlider;
