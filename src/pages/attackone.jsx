import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css'; // Import the provided CSS file

const AttackOne = ({ token }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    sessionStorage.removeItem('token');
    navigate('/SqlStart');
  };

  const handleHome = () => {
    sessionStorage.removeItem('token');
    navigate('/home');
  };

  return (
    <div className="container">
      <h3 className="title">SQL Injection</h3>
      <p className="content">
        These attacks can pose significant security risks if proper input validation and parametized queries aren't mitigated.
      </p>
      <img src="images/SqlIntro.png" alt="SQL Injection Intro" className="image"></img>
      <button onClick={handleNext} className="button">Click To Begin</button>
      <button onClick={handleHome} className="button">Return Home</button>
    </div>
  );
};

export default AttackOne;
