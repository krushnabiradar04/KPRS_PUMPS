import React from "react";
import { motion } from "framer-motion";

// ✅ Import assets so Vite includes them in build
import facilityImg from "../../assets/facility.png";
import installationVideo from "../../assets/installation.mp4";

export const Installation = () => {
  return (
    <div className="container py-5">
      {/* Title */}
      <h2 className="fw-bold mb-4 text-center">Installation</h2>

      {/* Text + Image Row */}
      <div className="row align-items-center">
        {/* Left Column - Text */}
        <motion.div
          className="col-md-7"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="fs-5 lh-lg text-secondary">
            <strong className="text-dark">KPR’S PUMP</strong> is providing the
            facility of installation on customer’s sites, if and only customer
            demanding for installation. If place and time is not convenient for
            KPR’s PUMPS then it is not possible to provide this facility to
            customer. Charges are applicable for installation and service.
          </p>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          className="col-md-5 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={facilityImg}
            alt="Installation"
            className="img-fluid rounded shadow"
          />
        </motion.div>
      </div>

      {/* Video Row */}
      <motion.div
        className="row mt-5 justify-content-center"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="col-lg-10">
          <div className="ratio ratio-16x9 shadow rounded">
            <video className="w-100" controls>
              <source src={installationVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
