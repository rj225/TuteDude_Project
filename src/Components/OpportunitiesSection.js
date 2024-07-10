import React from 'react';
import './OpportunitiesSection.css';
import leftimg from './asset/new-certiciate-design1.png'
import rightimg from './asset/14327653_5474231 1.png'
import featureImage from './asset/award_star (2).png'

const OpportunitiesSection = () => {
  return (
    <section className="opportunities-section">
      <h2>Unlock <span> 6 Certificates</span> & <span>Internship Opportunities!</span></h2>
      <div className="opportunities-content">
        <div className='opportunities-content-inner' data-aos="flip-right">
          <h3 className='h31'>Get 6 Industry Recognized Certificates!</h3>
          <img src={leftimg} alt='error' />
          <div className='featuree'>
            <span className='inner-featuree'><img src={featureImage} alt='feature' />Official and Verified</span>
            <span className='inner-featuree'><img src={featureImage} alt='feature' />Enhances Credibility</span>
            </div>
        </div>
        <div className='opportunities-content-inner' data-aos="flip-left">
          <h3 className='h32'>Bag Internship Opportunities!</h3>
          <p>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
          <img id='opportunities-image' src={rightimg} alt='error' />
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;