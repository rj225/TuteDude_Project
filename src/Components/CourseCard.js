import React from 'react';
import './CourseCard.css';
import eye from './asset/eye.png'

const CourseCard = ({ title , content}) => {
  return (
    <div className="course-card">
      <div className='course-card-content'>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      
      <div className='button'><img src={eye} alt='view'/><span>View Curriculum</span></div>
    </div>
  );
};

export default CourseCard;
