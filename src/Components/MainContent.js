// src/components/MainContent.js
import React from 'react';
import CourseCard from './CourseCard';
import CourseSection from './CourseSection';
import CompaniesSection from './CompaniesSection';
import OpportunitiesSection from './OpportunitiesSection';
import InternshipProgram from './InternshipProgram';
import './MainContent.css';
import image from './asset/Graduation hat.png'
import featureImage from './asset/award_star.png'
import innerbuttonplane from './asset/fi-br-paper-plane.png'
import innerbuttonintrogation from './asset/fi-br-interrogation.png'
import statlerners from './asset/Graduated.png'
import statstudentproject from './asset/Complete.png'
import statcourse from './asset/Online learning.png'
import statdoubtsolved from './asset/Question mark.png'

const MainContent = () => {
  return (
    <main>
      <section className="hero" data-aos="zoom-out" data-aos-offset="200">
        <span className='hero-Initiative'>
          <img src={image} alt='img' /> An &nbsp;<strong>IIT Delhi</strong>&nbsp; Alumini Initiative
        </span>
        <div className="hero-text">
          <div className='pc1'>
          <strong><h1>Become an Expert in the <br /> field of <span className='hero-coloured-text'>Data Science <br /> with 6 courses</span></h1></strong>
          <p className='hero-innertext'>A specially crafted Tech Kickstarter, with <strong>5+ extensive online courses</strong>.</p>
          </div>
          <div className='mobile1'>
          <strong><h1>Become an <br/> Expert in the <br /> field of <span className='hero-coloured-text'>Data Science <br /> with 6 courses</span></h1></strong>
          <p className='hero-innertextmobi'>A specially crafted Tech Kickstarter, with <strong>5+ extensive online courses</strong>.</p>
          </div>
          <div className='feature'>
            <span className='inner-feature'><img src={featureImage} alt='feature' />Personal Mentorship</span>
            <span className='inner-feature'><img src={featureImage} alt='feature' />Internship Assistance</span>
            <span className='inner-feature'><img src={featureImage} alt='feature' />Industry Certified Courses</span>
          </div>
          <div className="buttons">
            <button className='inner-button'>Enroll Now <img src={innerbuttonplane} alt='join' /> </button>
            <button className='inner-button'>Know More <img src={innerbuttonintrogation} alt='know more' /></button>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className='stats-innermain'> <img src={statcourse} alt='' /><div className='stat-innerdata'><div>24</div><div className='stat-innerdata-type'>Courses</div></div></div>
        <div className='stats-innermain'> <img src={statlerners} alt='' /><div className='stat-innerdata'><div>30K+</div><div className='stat-innerdata-type'>Learners</div> </div></div>
        <div className='stats-innermain'> <img src={statdoubtsolved} alt='' /><div className='stat-innerdata'><div>100K+</div> <div className='stat-innerdata-type'>Doubts Solved</div></div></div>
        <div className='stats-innermain'> <img src={statstudentproject} alt='' /><div className='stat-innerdata'><div>10K+ </div> <div className='stat-innerdata-type'>Student Projects</div></div></div>
      </section>
      <section className="course-curriculum">
        <h4 className='course-pc'>DATASCIENCE COURSE LEARNING PATH</h4>
        <h2 className='course-pc'><span>Data Science </span> Course Curriculum</h2>
        <h4 className='course-mobile'>FULL STACK COURSE LEARNING PATH</h4>
        <h2 className='course-mobile'><span>FULL STACK </span> Course Curriculum</h2>
        <div className='coursemain' data-aos="flip-left" data-aos-offset="200">
        <div className='course'><CourseCard title="C++" content="Learn C++ for strong programming fundamentals." /></div>
        <div className='course'><CourseCard title="MERN Stack"  content="Master the MERN stack for high-demand projects."/></div>
        <div className='course'><CourseCard title="Data Structure & Algorithm" content="Excel in Data Structures and Algorithms for interview success." /></div>
        <div className='course'><CourseCard title="Competitive Programming"  content="Excel in Data Structures and Algorithms for interview success."/></div>
        </div>
      </section>
      <CourseSection />
      <CompaniesSection />
      <OpportunitiesSection />
      <InternshipProgram />
    </main>
  );
};

export default MainContent;
