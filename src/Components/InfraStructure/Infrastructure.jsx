import React from "react";

export const Infrastructure = () => {
  return (
    <div className="container my-5">
      {/* Heading */}
      <h2 className="fw-bold mb-4">Infrastructure</h2>

      {/* Infrastructure Sections */}
      <div className="mb-5">
        <h5 className="fw-bold">
          KPR'S Pumps Manufacturing Division at Shivane in Pune.
        </h5>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Manufacturing Division"
          className="img-fluid rounded shadow my-3"
        />
      </div>

      <div className="mb-5">
        <h5 className="fw-bold">
          KPR'S Pumps Management & Support Division at Shivane in Pune.
        </h5>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Management Division"
          className="img-fluid rounded shadow my-3"
        />
      </div>

      <div className="mb-5">
        <h5 className="fw-bold">
          KPR'S Pumps Manufacturing Unit at Shivane in Pune.
        </h5>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Manufacturing Unit"
          className="img-fluid rounded shadow my-3"
        />
      </div>
    </div>
  );
};
