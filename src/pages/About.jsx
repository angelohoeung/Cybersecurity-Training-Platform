import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './videos.css';

const About = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to handle "Go Back" button click
  const handleGoBack = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-card">
          <img src="images/CG.png" alt="Cyberguard" className="text" style={{ width: '720px', height: 'auto' }} />

          <p className="about-text">
            CyberGuard is a dedicated platform committed to empowering individuals and organizations with essential cybersecurity knowledge and skills. Founded by a team of passionate experts, we strive to provide comprehensive resources and interactive lessons to equip our users with the necessary tools to navigate the complex landscape of cybersecurity.
          </p>
        </div>

        <div className="section">
          <h3 className="about-section-header">Contributors</h3>
          <div className="contributor">
            <h4 className="contributor-name">Luke Knehler</h4>
            <img src="images/Luke2.png" alt="Luke pic" className="text" style={{ width: '200px', height: 'auto' }} />
            <p className="contributor-description">
              Luke Knehler, the Project Manager of the platform, worked on the Clickjacking demo, as well as working on the front-end of the website and the graphic design.
            </p>
            </div>
            <div className="contributor">
              <h4 className="contributor-name">Danny Duronio</h4>
              <img src="images/danny.png" alt="Danny pic" className="text" style={{ width: '200px', height: 'auto' }} />
              <p className="contributor-description">
                Danny Duronio, the lead developer in the project, created the SQL Injection Demo, as well as being responsible for the back-end development of the website.
              </p>
            </div>
            <div className="contributor">
              <h4 className="contributor-name">Tayo Alalade</h4>
              <img src="images/Tayo.png" alt="Tayo pic" className="text" style={{ width: '200px', height: 'auto' }} />
              <p className="contributor-description">
              Tayo Alalade contributed to both front-end and back-end development, and developed the Malvertising Demo, showcasing Artificial Intelligence capabilities.
              </p>
          </div>
        </div>

        <div className="section">
          <h3 className="about-section-header">Future Plans</h3>
          <p className="about-text">
            At CyberGuard, our commitment to advancing cybersecurity knowledge remains unwavering. We are dedicated to expanding our library of attack simulations and lessons, ensuring our users stay ahead of emerging threats in an ever-evolving digital landscape.
          </p>
        </div>

        <div className="section">
          <p className="copyright-text">© 2024 CyberGuard. All rights reserved.</p>
        </div>

        <button onClick={handleGoBack} className="button-go-back">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default About;