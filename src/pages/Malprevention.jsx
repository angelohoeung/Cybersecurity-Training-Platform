import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const Malprevention = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home'); 
  };

  const handleDownloadCertificate = () => {
    const certificateUrl = "images/certificate3.png"; 
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = 'certificate3.png'; 
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
        <img src="images/certificate3.png" alt="certificate" className="imageFadeIn" style={{ maxWidth: '100%' }}></img>
      </div>
      <button onClick={handleDownloadCertificate} className="button" style={{ marginBottom: '20px' }}>Download Certificate</button>
      <p className="content"><b>Thank you for Completing the CyberGuard Malvertising Demo, Always Remember:</b></p>
      <ul className="content">
        <li>Stay Informed: Understand what malvertising is and how it can impact your online security.</li>
        <li>Use AI-Driven Ad Blockers: Implement AI-based ad blockers that analyze web content and behavioral patterns in real-time to identify and block malvertisements.</li>
        <li>Be Wary of Clicking Ads: Exercise caution when clicking on advertisements, even if they appear on reputable websites.</li>
        <li>Educate Yourself and Others: Stay informed about the latest malvertising techniques and share this knowledge with friends, family, and colleagues to promote a safer online environment for everyone.</li>
      </ul>
      <button onClick={handleBack} className="button">Back to home</button>
    </div>
  );
};

export default Malprevention;
