import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import zedCert from "../../assets/Certificate.png";

export const AboutUs = () => {
  return (
    <div className="about-container relative overflow-hidden py-5">
      {/* Animated Gradient Background */}
      <div className="animated-bg"></div>

      {/* Heading */}
      <div className="d-flex justify-content-center">
        <motion.h2
          className="mb-5 about-heading"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          About Us
        </motion.h2>
      </div>

      {/* Paragraphs with scroll reveal */}
      <div className="container">
        {[
          `<strong>KPR’S PUMPS</strong> has over 10 years of experience in submersible technology...`,
          `The company has branch offices in Delhi (India), Adrud in Dubai & Bahrain...`,
          `The quality, reliability, and overall performance of our products...`,
          `The maximum parts of the pump are in stainless steel construction...`,
        ].map((text, i) => (
          <motion.p
            key={i}
            dangerouslySetInnerHTML={{ __html: text }}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="about-text"
          />
        ))}

        <hr className="my-5" />

        {/* Pledge Section */}
        <motion.div
          className="pledge-section p-4 rounded shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <h4>KPR'S PUMPS pledge to you:</h4>
          <ul>
            <motion.li whileHover={{ x: 8, color: "#0d6efd" }}>
              Quality and reliability in all our products
            </motion.li>
            <motion.li whileHover={{ x: 8, color: "#0d6efd" }}>
              Strong service and support after the sale
            </motion.li>
            <motion.li whileHover={{ x: 8, color: "#0d6efd" }}>
              Lower total life cycle equipment costs
            </motion.li>
            <motion.li whileHover={{ x: 8, color: "#0d6efd" }}>
              Maximum value for your investment
            </motion.li>
          </ul>
        </motion.div>

        {/* Floating Certificate */}
        <motion.div
  className="text-center my-5"
  animate={{ x: [0, 15, 0, -15, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
>
  <motion.img
    src={zedCert}
    alt="ZED Bronze Certificate"
    className="img-fluid shadow-lg rounded aboutus-image"
    whileHover={{ scale: 1.08 }}
  />
</motion.div>

      </div>
    </div>
  );
};
