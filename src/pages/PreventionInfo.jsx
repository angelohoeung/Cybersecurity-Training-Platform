import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const PreventionInfo = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/attackTwo'); 
  };

  const handleDownloadCertificate = () => {
    const certificateUrl = "images/certificate2.png"; 
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
        <img src="images/certificate2.png" alt="certificate" className="imageFadeIn" style={{ maxWidth: '100%' }}></img>
      </div>
      <button onClick={handleDownloadCertificate} className="button" style={{ marginBottom: '20px' }}>Download Certificate</button>
      <p className="content"><b>Thank you for Completing the CyberGuard ClickJacking Demo, Always Remember:</b></p>
      <ul className="content">
        <li>Use X-Frame-Options HTTP header to prevent your pages from being framed.</li>
        <li>Implement Content Security Policy (CSP) to control the sources for your page's content.</li>
        <li>Be cautious with iframe elements and ensure they are from trusted sources.</li>
        <li>Regularly update and patch all software to mitigate known vulnerabilities.</li>
      </ul>
      <button onClick={handleBack} className="button">Back to Demo</button>
    </div>
  );
};

export default PreventionInfo;
