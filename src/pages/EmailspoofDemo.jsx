import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const EmailspoofDemo = ({ token }) => {
  const navigate = useNavigate();

  function handleNext(){
    sessionStorage.removeItem('token');
    navigate('/EmailspoofDemo2');  
  }

  function handleHome(){
    sessionStorage.removeItem('token');
    navigate('/home');
  }

  return (
    <div className="container">
      <h3 className="title">Introduction to Email Spoofing</h3>
      <p className="content" style={{ fontSize: "18px" }}>
        Email spoofing attacks often start with emails that seem to be genuine. These emails appear to come from trusted sources, such 
        as colleagues, banks, or official organizations, 
        and may request sensitive information or contain malicious attachments.
        The danger lies not in the email itself, but in the forged sender details that make the message seem authentic, 
        deceiving recipients into taking harmful actions.
      </p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", marginTop: "20px" }}>
        <button onClick={handleNext} className="button" style={{ width: "900px", height: "37px", fontSize: "14px", textAlign: "center" }}>Continue</button>
        <button onClick={handleHome} className="button" style={{ width: "900px", height: "37px", fontSize: "14px", textAlign: "center" }}>Return Home</button>
      </div>

    </div>
  );
};


export default EmailspoofDemo;
