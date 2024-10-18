import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const SqlPrevention = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/attackone'); 
  };

  const handleDownloadCertificate = () => {
    const certificateUrl = "images/certificate1.png"; 
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = 'certificate.png'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const audio = new Audio('/sounds/Sound Effects - Fireworks.mp3');
    audio.play();
  };

  return (
    <div className="container"> 
      <h3 className="title">Congratulations!</h3>
      <div style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }}>
        <img src="images/certificate1.png" alt="certificate" className="imageFadeIn" style={{ maxWidth: '100%' }}></img>
      </div>
      <button onClick={handleDownloadCertificate} className="button" style={{ marginBottom: '20px' }}>Download Certificate</button>
      <p className="content"><b>Thank you for completing the CyberGuard SQL Injection Prevention Tutorial!</b></p>
      <p className="content">SQL injection is a critical security risk for web applications. By learning about prevention techniques, you are taking proactive steps to protect your applications and data from malicious attacks.</p>
      <ul className="content">
        <li>Use parameterized queries and prepared statements to separate SQL code from user input.</li>
        <li>Implement input validation and sanitize user inputs to prevent malicious input from being executed as SQL commands.</li>
        <li>Escape special characters in user inputs to prevent them from being interpreted as SQL commands.</li>
        <li>Regularly update and patch database management systems and application frameworks to address known vulnerabilities.</li>
        <li>Implement web application firewalls (WAFs) to monitor and filter HTTP traffic for potential SQL injection attacks.</li>
      </ul>
      <button onClick={handleBack} className="button">Back to Demo</button>
    </div>
  );
};

export default SqlPrevention;
