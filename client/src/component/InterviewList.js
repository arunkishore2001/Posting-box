import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './InterviewList.css';

function InterviewList() {
  const [interviews, setInterviews] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/interviews`); 
        setInterviews(response.data);
      } catch (error) {
        console.error('Error fetching interview data:', error);
      }
    };

    fetchData();
  }, [API_BASE_URL]);

  return (
    <div className="interview-list">
      <h2>Interview Information</h2>
      {interviews.length === 0 ? (
        <p>No interviews available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Job Description</th>
              <th>Experience Level</th>
              <th>Candidate Email</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview) => (
              <tr key={interview._id}>
                <td>{interview.jobTitle}</td>
                <td>{interview.jobDescription}</td>
                <td>{interview.experienceLevel}</td>
                <td>{interview.addCandidate}</td>
                <td>{new Date(interview.endDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default InterviewList;
