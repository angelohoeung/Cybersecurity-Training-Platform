import React from 'react';
import { useNavigate } from 'react-router-dom';
import './videos.css';

const Lessons = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the home page
  const handleNavigateToHome = () => {
    navigate('/home');
  };

  // Function to handle navigation to attack pages
  const handleNavigateToAttack = (attack) => {
    navigate(`/${attack}`); // Assuming your attack routes follow a pattern
  };

  return (
    <div className="lessons-container">
      <h2 className="lessons-header">Lessons</h2>
      <p className="lessons-description">Choose from the following lessons to begin your interactive learning experience:</p>
      <div className="card-container">
        {/* Card for Attack One */}
        <div className="card" onClick={() => handleNavigateToAttack('attackone')}>
          <img src="images/sqlinjection.png" alt="SQL Injection" />
          <button>SQL Injection</button>
        </div>

        {/* Card for Attack Two */}
        <div className="card" onClick={() => handleNavigateToAttack('attacktwo')}>
          <img src="images/clickjacking.png" alt="click jacking" />
          <button>Click-Jacking</button>
        </div>

        {/* Card for Attack Three */}
        <div className="card" onClick={() => handleNavigateToAttack('Deepfakehome')}>
          <img src="images/aipic2.png" alt="AI Attack" />
          <button>Malvertising</button>
        </div>


        {/* Card for Attack Four */}
        <div className="card" onClick={() => handleNavigateToAttack('regexinjection/home')}>
          <img src="images/regexinjection.png" alt="Regex Injection" />
          <button>Regex Injection</button>
        </div>


      {/* Card for Attack Five */}
       <div className="card" onClick={() => handleNavigateToAttack('EmailspoofHome')}>
          <img src="images/spoofing.png" alt="Email Spoofing" />
          <button>Email Spoofing</button>
        </div>

      {/* Card for Attack Six */}
        <div className="card" onClick={() => handleNavigateToAttack('CrossSiteScripting/XssHome')}>
          <img src="images/xss.jpg" alt="Cross-Site Scripting" />
          <button>Cross-Site Scripting</button>
        </div>


      {/* Card for Attack Seven */}
        <div className="card" onClick={() => handleNavigateToAttack('dosattack/home')}>
          <img src="images/ddos-attack.png" alt="Denial of Service" />
          <button>Denial of Service</button>
        </div>


      </div>
      <button className="home-button" onClick={handleNavigateToHome}>Go Home</button>
    </div>
  );
};

export default Lessons;
