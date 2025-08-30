import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Enquiry.css";

export const Enquiry = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    address: "",
    country: "",
    phone: "",
    email: "",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset fields AFTER out animation (1s delay)
    setTimeout(() => {
      setFormData({
        companyName: "",
        contactPerson: "",
        address: "",
        country: "",
        phone: "",
        email: "",
        requirements: "",
      });
    }, 1000);

    // Hide success after 4s
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Field animations (staggered entry + exit)
  const fieldVariant = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.12, type: "spring", stiffness: 90 },
    }),
    exit: { y: -40, opacity: 0, scale: 0.9, transition: { duration: 0.5 } },
  };

  return (
    <div className="enquiry-wrapper">
      <motion.div
        className="enquiry-card"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.div
          className="card-header-custom"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-center">📩 Enquiry Form</h2>
        </motion.div>

        <div className="card-body p-4">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="success-message"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                🎉 Thank you! Your enquiry was submitted successfully.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <AnimatePresence>
                  {[
                    { label: "Name of Company", name: "companyName", type: "text" },
                    { label: "Name of Contact Person", name: "contactPerson", type: "text" },
                    { label: "Address / City / Location", name: "address", type: "textarea" },
                    { label: "Country", name: "country", type: "select" },
                    { label: "Tel. No. / Cell No.", name: "phone", type: "tel" },
                    { label: "Email", name: "email", type: "email" },
                    { label: "Requirements Details", name: "requirements", type: "textarea" },
                  ].map((field, i) => (
                    <motion.div
                      key={field.name}
                      className="mb-3"
                      custom={i}
                      variants={fieldVariant}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <label className="form-label">{field.label} *</label>
                      {field.type === "textarea" ? (
                        <motion.textarea
                          className="form-control"
                          name={field.name}
                          rows="2"
                          value={formData[field.name]}
                          onChange={handleChange}
                          required
                          whileFocus={{
                            scale: 1.02,
                            borderColor: "#9333ea",
                            boxShadow: "0 0 8px rgba(147,51,234,0.4)",
                          }}
                          animate={{ boxShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 6px rgba(147,51,234,0.4)", "0 0 0px rgba(0,0,0,0)"] }}
                          transition={{ repeat: Infinity, duration: 3 }}
                        />
                      ) : field.type === "select" ? (
                        <motion.select
                          className="form-select"
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          required
                          whileFocus={{
                            scale: 1.02,
                            borderColor: "#2563eb",
                            boxShadow: "0 0 8px rgba(37,99,235,0.4)",
                          }}
                        >
                          <option value="">-- Select a country --</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          <option value="UK">UK</option>
                          <option value="Canada">Canada</option>
                        </motion.select>
                      ) : (
                        <motion.input
                          type={field.type}
                          className="form-control"
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          required
                          whileFocus={{
                            scale: 1.02,
                            borderColor: "#16a34a",
                            boxShadow: "0 0 8px rgba(22,163,74,0.4)",
                          }}
                          animate={{ boxShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 6px rgba(22,163,74,0.4)", "0 0 0px rgba(0,0,0,0)"] }}
                          transition={{ repeat: Infinity, duration: 4 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                <div className="text-center mt-4">
                  <motion.button
                    type="submit"
                    className="submit-btn"
                    whileHover={{ scale: 1.1, backgroundColor: "#9333ea" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    🚀 Submit
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
