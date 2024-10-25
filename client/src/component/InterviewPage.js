import React, { useState } from 'react';
import InterviewForm from './InterviewForm'; 
import './InterviewPage.css'; 

function InterviewPage() {
  const [formVisible, setFormVisible] = useState(false);

  const handleClick = () => {
    setFormVisible(true); 
  };

  return (
    <div className="interview-page-container">
      {!formVisible && (
        <button className="interview-page-button" onClick={handleClick}>
          Create Interview
        </button>
      )}
      {formVisible && <InterviewForm />} 
    </div>
  );
}

export default InterviewPage;
