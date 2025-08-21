import React from 'react'
import { Link } from 'react-router-dom'
import { Slider } from '../Slider/Slider'
import { AboutUsSummary } from '../AboutUs/AboutUsSummry'
import { ContactUsSummary } from '../ContactUS/ContactUsSummry'

export const Home = () => {
  return (
    <>
      <Slider />

      {/* Info Section */}
      <div className="container my-5">
        <div className="row text-center mb-5">
          {/* Our Products */}
          <div className="col-md-4">
            <div className="mb-3 fs-1">⚙️</div>
            <h5 className="fw-bold">OUR PRODUCTS</h5>
            <p>
              <Link to="/products/dewateringpumps" className="text-grey">Dewatering Pumps</Link>,{" "}
              <Link to="/products/sewagepumps" className="text-primary">Sewage Pumps</Link>,{" "}
              <Link to="/products/nonclogpumps" className="text-primary">Non Clog Pumps</Link>,{" "}
              <Link to="/products/dewateringsystem" className="text-primary">Dewatering Systems</Link>,{" "}
              <Link to="/products/submersibledewatering" className="text-primary">Submersible Dewatering Pumps</Link> and{" "}
              <Link to="/products/slurrypumps" className="text-primary">Slurry Pumps</Link>
            </p>
            <Link to="/enquiry" className="fw-bold text-uppercase">Request a Quote</Link>
          </div>

          {/* About Company */}
          <div className="col-md-4">
            <div className="mb-3 fs-1">🏬</div>
            <h5 className="fw-bold">ABOUT COMPANY</h5>
            <p className="text-muted">
              The company has branch offices in Delhi (India) and Dubai & Bahrain.  
              At present, the company exports 60% of its products to G.C.C. countries and more.
            </p>
            <Link to="/about" className="fw-semibold">Read More</Link>
          </div>

          {/* Facilities with Dropdown */}
          <div className="col-md-4">
            <div className="mb-3 fs-1">➕</div>
            <h5 className="fw-bold">FACILITIES</h5>
            <p className="text-muted">
              KPR'S Pump provides installation facilities at customer sites,  
              only if the customer requests installation.
            </p>

            <div className="dropdown">
              <button 
                className="btn btn-link fw-semibold dropdown-toggle" 
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
          </div>
        </div>

        {/* Application Areas */}
        <div className="text-center mb-4">
          <h4 className="fw-bold">Application Areas</h4>
          <h5 className="text-muted">Dewatering Pumps</h5>
        </div>
        
        <div className="row text-center">
          {/* Construction Sites */}
          <div className="col-md-4">
            <div className="mb-3 fs-1">📄</div>
            <h6 className="fw-semibold">Construction Sites</h6>
            <p className="text-muted small">
              Keep your construction site dry and safe with reliable dewatering pumps,  
              preventing water-related delays and hazards.
            </p>
            <Link to="/applications/construction" className="fw-semibold">Read More</Link>
          </div>

          {/* Mining Operations */}
          <div className="col-md-4">
            <div className="mb-3 fs-1">⛏️</div>
            <h6 className="fw-semibold">Mining Operations</h6>
            <p className="text-muted small">
              Efficiently manage water accumulation in mining excavations and tunnels,  
              promoting a secure working environment.
            </p>
            <Link to="/applications/mining" className="fw-semibold">Read More</Link>
          </div>

          {/* Disaster Recovery */}
          <div className="col-md-4">
            <div className="mb-3 fs-1">🗂️</div>
            <h6 className="fw-semibold">Disaster Recovery</h6>
            <p className="text-muted small">
              In emergencies, our dewatering pumps play a crucial role  
              in floodwater mitigation and recovery efforts.
            </p>
            <Link to="/applications/disaster-recovery" className="fw-semibold">Read More</Link>
          </div>
        </div>
      </div>

      <AboutUsSummary />
      <ContactUsSummary />
    </>
  )
}
