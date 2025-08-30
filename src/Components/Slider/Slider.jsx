import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider5.png";
import "./Slider.css";

const images = [slider1, slider2, slider3, slider4, slider5];
const productNames = [
  "Dewatering Pump",
  "Non Clog Pump",
  "Sewage Pump",
  "Submersible Dewatering Pump",
  "Slurry Pump",
];

export const Slider = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => {
        const next = (prev + 1) % images.length;
        return [next, 1]; // ✅ direction = forward
      });
      setIsFirst(false);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="slider-container position-relative overflow-hidden">
    {/* Product Name */}
      <AnimatePresence mode="wait">
        <motion.h3
  key={productNames[current]}
  className="slider-title text-uppercase fw-bold text-white text-center"
  initial={{ y: -40, opacity: 0 }}  // 🔼 animate from top now
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: -40, opacity: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
>
  {productNames[current]}
</motion.h3>

      </AnimatePresence>
      {/* Image */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          alt={productNames[current]}
          className="slider-image"
          custom={direction}
          variants={variants}
          initial={isFirst ? false : "enter"}
          animate="center"
          exit="exit"
          transition={{
            duration: isFirst ? 0 : 1.2,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="overlay"></div>

      

      {/* Dots Indicator */}
      <div className="dots-container">
        {images.map((_, index) => (
          <motion.span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            animate={{
              scale: index === current ? 1.3 : 1,
              backgroundColor: index === current ? "#e87808ff" : "#bbb",
            }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </div>
    </div>
  );
};
