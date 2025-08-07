import React, { useState } from 'react';


export const Enquiry = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    address: '',
    country: '',
    phone: '',
    email: '',
    requirements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    console.log(formData);
    setFormData({
      companyName: '',
      contactPerson: '',
      address: '',
      country: '',
      phone: '',
      email: '',
      requirements: '',
    });
  };

 

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg rounded">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0 text-center">Enquiry Form</h4>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label className="col-md-4 col-form-label">Name of Company: *</label>
              <div className="col-md-8">
                <input type="text" className="form-control" name="companyName" value={formData.companyName} onChange={handleChange} required />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-md-4 col-form-label">Name of Contact Person: *</label>
              <div className="col-md-8">
                <input type="text" className="form-control" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-md-4 col-form-label">Address / City / Location: *</label>
              <div className="col-md-8">
                <textarea className="form-control" name="address" rows="2" value={formData.address} onChange={handleChange} required></textarea>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-md-4 col-form-label">Country: *</label>
              <div className="col-md-8">
                <select className="form-select" name="country" value={formData.country} onChange={handleChange} required>
                  <option value="">-- Select a country --</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-md-4 col-form-label">Tel. No. / Cell No.: *</label>
              <div className="col-md-8">
                <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-md-4 col-form-label">Email: *</label>
              <div className="col-md-8">
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-md-4 col-form-label">Requirements Details: *</label>
              <div className="col-md-8">
                <textarea className="form-control" name="requirements" rows="2" value={formData.requirements} onChange={handleChange} required></textarea>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success px-4 me-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
