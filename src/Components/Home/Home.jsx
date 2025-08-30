import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Slider } from "../Slider/Slider";
import { AboutUsSummary } from "../AboutUs/AboutUsSummry";
import { ContactUsSummary } from "../ContactUS/ContactUsSummry";
import { motion } from "framer-motion";
import "./Home.css"; // 👈 add css file for gradient styles

export const Home = () => {
  const [hovered, setHovered] = useState(null);

  const cards = [
    {
      id: 1,
      icon: "⚙️",
      title: "OUR PRODUCTS",
      text: (
        <>
          <Link to="/products/dewateringpumps" className="text-dark">Dewatering Pumps</Link>,{" "}
          <Link to="/products/sewagepumps" className="text-dark">Sewage Pumps</Link>,{" "}
          <Link to="/products/nonclogpumps" className="text-dark">Non Clog Pumps</Link>,{" "}
          <Link to="/products/dewateringsystem" className="text-dark">Dewatering Systems</Link>,{" "}
          <Link to="/products/submersibledewatering" className="text-dark">Submersible Dewatering Pumps</Link> and{" "}
          <Link to="/products/slurrypumps" className="text-dark">Slurry Pumps</Link>
        </>
      ),
      link: <Link to="/enquiry" className="fw-bold text-uppercase text-dark">Request a Quote</Link>,
    },
    {
      id: 2,
      icon: "🏬",
      title: "ABOUT COMPANY",
      text: (
        <>
          The company has branch offices in Delhi (India) and Dubai & Bahrain.  
          At present, the company exports 60% of its products to G.C.C. countries and more.
        </>
      ),
      link: <Link to="/about" className="fw-semibold text-dark">Read More</Link>,
    },
    {
      id: 3,
      icon: "➕",
      title: "FACILITIES",
      text: (
        <>
          KPR'S Pump provides installation facilities at customer sites,  
          only if the customer requests installation.
        </>
      ),
      link: (
        <div className="dropdown">
          <button
            className="btn btn-link fw-semibold text-dark dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Read More
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <Link className="dropdown-item" to="/facilities/installation">
                Installation
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/facilities/transportation">
                Transportation
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <Slider />

      {/* Info Section with Animated Cards */}
      <div className="container my-5">
        <div className="row g-4">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="col-md-4"
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              initial={{ scale: 1, zIndex: 1 }}
              animate={{
                scale: hovered === card.id ? 1.08 : 1,
                zIndex: hovered === card.id ? 10 : 1,
                opacity: hovered && hovered !== card.id ? 0.6 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="card gradient-card shadow-sm h-100 p-4 text-center rounded-3">
                <div className="mb-3 fs-1">{card.icon}</div>
                <h5 className="fw-bold">{card.title}</h5>
                <p className="text-dark">{card.text}</p>
                {card.link}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Areas */}
      <div className="text-center mb-4">
        <h4 className="fw-bold">Application Areas</h4>
        <h5 className="text-muted">Dewatering Pumps</h5>
      </div>

      <div className="container">
        <div className="row text-center g-4">
          {/* Construction Sites */}
          <div className="col-md-4">
            <motion.div
              className="card gradient-card shadow-sm h-100 p-3 rounded-3"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-3 fs-1">📄</div>
              <h6 className="fw-semibold">Construction Sites</h6>
              <p className="text-dark small">
                Keep your construction site dry and safe with reliable dewatering
                pumps, preventing water-related delays and hazards.
              </p>
              <Link to="/applications/construction" className="fw-semibold text-dark">
                Read More →
              </Link>
            </motion.div>
          </div>

          {/* Mining Operations */}
          <div className="col-md-4">
            <motion.div
              className="card gradient-card shadow-sm h-100 p-3 rounded-3"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-3 fs-1">⛏️</div>
              <h6 className="fw-semibold">Mining Operations</h6>
              <p className="text-dark small">
                Efficiently manage water accumulation in mining excavations and
                tunnels, promoting a secure working environment.
              </p>
              <Link to="/applications/mining" className="fw-semibold text-dark">
                Read More →
              </Link>
            </motion.div>
          </div>

          {/* Disaster Recovery */}
          <div className="col-md-4">
            <motion.div
              className="card gradient-card shadow-sm h-100 p-3 rounded-3"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-3 fs-1">🗂️</div>
              <h6 className="fw-semibold">Disaster Recovery</h6>
              <p className="text-dark small">
                In emergencies, our dewatering pumps play a crucial role in floodwater
                mitigation and recovery efforts.
              </p>
              <Link to="/applications/disaster-recovery" className="fw-semibold text-dark">
                Read More →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <AboutUsSummary />
      <ContactUsSummary />
    </>
  );
};
