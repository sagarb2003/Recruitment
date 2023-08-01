// Home.js

import React from "react";

import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    companySize: "",
    location: "",
    contactInfo: "",
    companyDescription: "",
    logo: null,
    websiteLink: "",
    socialMediaLink: "",
    companySpecialization: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogoUpload = (e) => {
    const logoFile = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, logo: logoFile }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
  };



  return (
    <>
      <div className="home-container">
        <div className="hero-section"></div>
        <img
          className="image-container"
          src="https://media.istockphoto.com/id/1387451522/photo/businesswoman-handshake-and-business-people-successful-business-concept.jpg?s=612x612&w=0&k=20&c=HQ6IaTKYqG-x682TjjLyVCyd-DL0K3CPFmIxBnmUYsw=
          "
          alt="logo"
        />
        <form className="company-form" onSubmit={handleSubmit}>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            placeholder="Enter Company Name"
          />

          <label htmlFor="industry">Company Industry</label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
            placeholder="e.g., technology, healthcare, finance"
          />

          <label htmlFor="companySize">Company Size</label>
          <input
            type="text"
            id="companySize"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            required
            placeholder="e.g., small, medium, large"
          />

          <label htmlFor="location">Company Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Enter Company Location"
          />

          <label htmlFor="contactInfo">Contact Info</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
            placeholder="Contact details of the person responsible for recruitment"
          />

          <label htmlFor="logo">Upload Company Logo</label>
          <input
            type="file"
            id="logo"
            name="logo"
            accept="image/*"
            onChange={handleLogoUpload}
            required
          />

          <label htmlFor="websiteLink">Website Link</label>
          <input
            type="text"
            id="websiteLink"
            name="websiteLink"
            value={formData.websiteLink}
            onChange={handleChange}
            placeholder="Enter Website Link"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Home;
