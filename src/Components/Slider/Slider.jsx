import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import slider4 from '../../assets/slider4.png';
import slider5 from '../../assets/slider5.png';
import './Slider.css';

const images = [slider1, slider2, slider3, slider4, slider5];
const productNames = [
  "Dewatering Pump",
  "Non Clog Pump",
  "Sewage Pump",
  "Submersible Dewatering Pump",
  "Slurry Pump"
];

export const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setIsFirst(false);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="product-name"><h2>{productNames[current]}</h2></div>
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current]}
          alt="slider"
          className="slider-image"
          initial={isFirst ? false : { x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: isFirst ? 0 : 1.5 }}
        />
      </AnimatePresence>
    </div>
  );
};
