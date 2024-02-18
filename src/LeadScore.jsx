import React from 'react';
// import './LeadScore.css'; // Add your styling for the lead score here

const LeadScore = ({ score }) => {
  return (
    <div className="lead-score-container">
      {/* Your lead score component goes here */}
      <div className="lead-score">{score}</div>
    </div>
  );
};

export default LeadScore;
