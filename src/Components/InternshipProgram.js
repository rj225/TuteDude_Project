// src/components/InternshipProgram.js
import React from 'react';
import './InternshipProgram.css';
import internshipimage from './asset/Frame 23.png'
import line1 from './asset/Line 2.png'
import line2 from './asset/Line 3.png'
import line3 from './asset/Line 5.png'
import line4 from './asset/Line 4.png'

const InternshipProgram = () => {
  return (
    <section className="internship-program">
      <h2>How does the Internship Program works?</h2>
      <div className="internship-steps1">
        <div id='s1' className="step">
          <span className="icon"><img src={internshipimage} alt='intenship'/> <span className='line1'><img src={line1} alt='error'/></span></span>
          <p>Learn from our structured pre-recorded courses made by experts to meet industry needs</p>
        </div>
        <div className="step">
          <span className="icon"><img src={internshipimage} alt='intenship'/><span className='line2'>
            <img className='line2img' src={line2} alt='error'/></span>
            <span className='line3'><img src={line3} alt='error'/></span></span>
          <p>Personal mentors to guide and help you throughout your journey as a friend</p>
        </div>
        <div className="step">
          <span className="icon"><img src={internshipimage} alt='intenship'/><span className='line4'><img src={line4} alt='error'/></span></span>
          <p>Get guaranteed paid internships after completion of the program along with course completion certificates</p>
        </div>
        </div>
        <div className="internship-steps2">
        <div className="step">
          <span className="icon"><img src={internshipimage} alt='intenship'/></span>
          <p>1:1 live doubt solving support available throughout the day to clear your doubts instantly </p>
        </div>
        <div className="step">
          <span className="icon"><img src={internshipimage} alt='intenship'/></span>
          <p>Build major projects which make your resume stand apart </p>
        </div>
      </div>

      <div className="internship-stepsmob">
        <div className="step">
          <span id='internship-stepsmob-icon1' className="icon"><img src={internshipimage} alt='intenship'/> <span className='intership-setp-line'></span> </span>
          <p>Learn from our structured pre-recorded courses made by experts to meet industry needs</p>
        </div>
        <div className="step">
          <span className="icon"><img src={internshipimage} alt='intenship'/></span>
          <p>1:1 live doubt solving support available throughout the day to clear your doubts instantly </p>
        </div>
        <div className="step">
          <span className="icon"><img src={internshipimage} alt='intenship'/><span className='line2'>
            <img className='line2img' src={line2} alt='error'/></span>
            <span className='line3'><img src={line3} alt='error'/></span></span>
          <p>Personal mentors to guide and help you throughout your journey as a friend</p>
        </div>
        <div className="step">
          <span className="icon"><img src={internshipimage} alt='intenship'/></span>
          <p>Build major projects which make your resume stand apart </p>
        </div>
        <div className="step">
          <span className="icon"><img src={internshipimage} alt='intenship'/><span className='line4'><img src={line4} alt='error'/></span></span>
          <p>Get guaranteed paid internships after completion of the program along with course completion certificates</p>
        </div>
        
        </div>
      <button className="apply-button">Apply now for ₹ 2999</button>
    </section>
  );
};

export default InternshipProgram;
