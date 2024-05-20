import React from 'react';
import './CourseSection.css';
import { TbClockHour4 } from "react-icons/tb";
import ProgressBar from './ProgressBar';
import step1 from './asset/steps.png'
import step2 from './asset/steps (1).png'
import step3 from './asset/steps (2).png'
import bannerdesign from './asset/scribble final version-24.png'
import step1img from './asset/image 533.png'
import mobstep1 from './asset/Frame 1.png'
import mobstep2 from './asset/Frame 2.png'
import mobstep3 from './asset/Frame 3.png'

const CourseSection = () => {
  return (
    <>
      <section className="course-section">
        <h2 className='pc-course'>Don't miss out on this&nbsp;
          <span>limited-time &nbsp;</span></h2>
        <h2 className='pc-course'><span>&nbsp; opportunity&nbsp;</span> to learn for&nbsp; <span>Free!</span></h2>

        <div className='mobileview-course'>
          <h2 className='mobile-course'>Don't miss out on this</h2>
          <h2 className='mobile-course'><span>limited-time opportunity</span></h2>
          <h2 className='mobile-course'>to learn for&nbsp; <span>Free!</span></h2></div>
        <div className='course-section-banner'>
          <img src={bannerdesign} alt='' />
          <h2>100% Refund Offer 😎 </h2>
          <div><span className='seat-left'>20 Seats Left</span><ProgressBar /></div>
          <div className='offer-deal'><TbClockHour4 />Offer ends in 10:00Mins</div>
        </div>
      </section>
      <div className="how-it-works">
        <h3 className='how-it-works-heading'>How does it work?</h3>
        <div className='how-it-works-inner'>
          <div className='line'></div>
          <div className='box'></div>
          <div className='how-it-works-innermain'>
            <div className='imgpc'>
              <img src={step1} alt='' />
            </div>
            <div className='imgmobile'>
              <img src={mobstep1} alt='' />
              <div className='mob-line'></div>
              <div className='mob-box'></div>
            </div>
            <div>
              <div className="main">
                <h3 className='main-heading'>Step 1 : Enroll into your favorite course for only ₹1,499</h3>
                <div className="main-img">
                  <img src={step1img} alt="" />
                </div>
                <div className="last">
                  <p>Start Learning with <strong>Lifetime Course Access.</strong></p>
                </div>
              </div>
            </div>
          </div>
          <div className='how-it-works-innermain'>
            <div className='imgpc'>
              <img src={step2} alt='' />
            </div>
            <div className='imgmobile'>
              <img src={mobstep2} alt='' />
            </div>
            <div>
              <div className="main">
                <h3 className='main-heading'>Step 2: Complete Course & Assignments within 2 Years!</h3>
                <div className="main-img">
                  <div className='main-img-inner'>
                    <span className='imgreplace'>2</span>
                    <span className='imgtext'>years time from the date of enrollment</span>
                  </div>
                </div>
                <div className="last">
                  <p>Finish the course within <strong>2 Years</strong>to Qualify for Refund.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='how-it-works-innermain'>
            <div className='imgpc'>
              <img src={step3} alt='' />
            </div>
            <div className='imgmobile'>
              <img src={mobstep3} alt='' />
            </div>
            <div>
              <div className="main">
                <h3 className='main-heading'>Step 3: Receive 100% Refund upon completion</h3>
                <div className="main-img">
                  <div className='main-img-inner'>
                    <span className='imgreplace'>100%</span>
                    <span className='imgtext'>Enrollment Fee is refunded</span>
                  </div>
                </div>
                <div className="last">
                  <p>Upon Course Completion within <strong>2 Years</strong>, Get Your <strong>₹1,499 Back.</strong></p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default CourseSection;
