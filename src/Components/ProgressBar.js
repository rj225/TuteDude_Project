import React from 'react';
import './Progressbar.css'; 

const ProgressBar = () => {
  return (
    <div className="progress-container">
      <div className="progress-filler">
        <span className="progress-label"></span>
      </div>
    </div>
  );
};

export default ProgressBar;
