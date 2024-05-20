import React from 'react';
import './CompaniesSection.css';

const CompaniesSection = () => {
  return (
    <section className="companies-section">
      <h2 className='mobi-companies-section'><strong>Top Companies Hiring <span> Full Stack Developers </span></strong></h2>
      <h2 className='pc-companies-section'><strong>Top Companies Hiring <span>Data Scientist </span></strong></h2>
      <div className="companies-logos">
        <div id='logo1' className="logo">Logo</div>
        <div id='logo2' className="logo">Logo</div>
        <div className="logo">Logo</div>
        <div className="logo">Logo</div>
        <div className="logo">Logo</div>
      </div>
    </section>
  );
};

export default CompaniesSection;
