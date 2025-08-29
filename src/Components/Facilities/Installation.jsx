import React from "react";
import { motion } from "framer-motion";

// ✅ Import assets so Vite includes them in build
import facilityImg from "../../assets/facility.png";
import installationVideo from "../../assets/installation.mp4";

export const Installation = () => {
  return (
    <div className="container py-5">
      {/* Title */}
      <h2 className="fw-bold mb-5 text-center text-primary">Installation</h2>

      <div className="row g-4">
        {/* Left Card - Text */}
        <div className="col-md-7">
          <motion.div
            className="card shadow-lg border-0 rounded-4 h-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02, boxShadow: "0px 12px 25px rgba(0,0,0,0.15)" }}
          >
            <div className="card-body p-4">
              <p className="fs-5 lh-lg text-secondary mb-0">
                <strong className="text-dark">KPR’S PUMP</strong> provides{" "}
                <span className="fw-semibold text-primary">installation services</span>{" "}
                at customer sites, only if specifically requested.  
                However, if the time and location are not convenient, this facility may not be possible.  
                Installation and service charges are applicable.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Card - Image */}
        <div className="col-md-5">
          <motion.div
            className="card shadow-lg border-0 rounded-4 h-100 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <img
              src={facilityImg}
              alt="Installation Facility"
              className="img-fluid rounded-4"
            />
          </motion.div>
        </div>
      </div>

      {/* Video Card */}
      <div className="row mt-5 justify-content-center">
        <div className="col-lg-10">
          <motion.div
            className="card shadow-lg border-0 rounded-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
              <video className="w-100 h-100" controls>
                <source src={installationVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
