
import React, { useState } from 'react';
import './InterviewForm.css';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
function InterviewForm() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    experienceLevel: '',
    addCandidate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/interviews`, formData);
      console.log(response.data);
      alert('Interview created successfully');
    } catch (error) {
      console.error('Error creating interview:', error);
    }
  };

  return (
    <form className="interview-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="jobTitle">Job Title</label>
        <input type="text" id="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Enter Job Title" />
      </div>
      <div className="form-group">
        <label htmlFor="jobDescription">Job Description</label>
        <textarea id="jobDescription" value={formData.jobDescription} onChange={handleChange} placeholder="Enter Job Description"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="experienceLevel">Experience Level</label>
        <select id="experienceLevel" value={formData.experienceLevel} onChange={handleChange}>
          <option value="">Select Experience Level</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid-Level</option>
          <option value="senior">Senior</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="addCandidate">Add Candidate</label>
        <input type="email" id="addCandidate" value={formData.addCandidate} onChange={handleChange} placeholder="xyz@gmail.com" />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <input type="date" id="endDate" value={formData.endDate} onChange={handleChange} />
      </div>
      <button type="submit" className="send-button">Send</button>
    </form>
  );
}

export default InterviewForm;
