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
            <p className="contributor-description">
              Luke Knehler, the Project Manager of the platform, worked on the Clickjacking demo, as well as working on the front-end of the website and the graphic design.
            </p>
            </div>
            <div className="contributor">
              <h4 className="contributor-name">Danny Duronio</h4>
              <p className="contributor-description">
                Danny Duronio, the lead developer in the project, created the SQL Injection Demo, as well as being responsible for the back-end development of the website.
              </p>
            </div>
            <div className="contributor">
              <h4 className="contributor-name">Tayo Alalade</h4>
              <p className="contributor-description">
              Tayo Alalade contributed to both front-end and back-end development, and developed the Malvertising Demo, showcasing Artificial Intelligence capabilities.
              </p>
          </div>
          <div className="contributor">
              <h4 className="contributor-name">Angie Doka</h4>
              <p className="contributor-description">
              Angie Doka played a key role in both content development and technical implementation, creating the Email Spoofing Cyberthreat page to illustrate the risks of email-based attacks and phishing tactics.
              </p>
            </div>
            <div className="contributor">
              <h4 className="contributor-name">Gabriela Oljacic</h4>
              <p className="contributor-description">
              Gabriela Oljacic contributed to both the design and functionality of the Cross-Site Scripting Demo, developing an interactive showcase that highlights the dangers of hidden UI redirection and deceptive web elements.
              </p>
            </div>
            <div className="contributor">
              <h4 className="contributor-name">Angelo Hoeung</h4>
              <p className="contributor-description">
              Angelo Hoeung developed the Regex Injection demo, demonstrating the security risks of improperly handled regular expressions, developed email verification and deployment of the website, while also assisting in improving the overall quality of the website and enhancing code efficiency.
              </p>
            </div>
            <div className="contributor">
              <h4 className="contributor-name">Julio Costa Sanabria</h4>
              <p className="contributor-description">
              Julio Costa Sanabria developed the Denial of Service Demo, showcasing the impact of resource exhaustion attacks while highlighting mitigation strategies to enhance system resilience.
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
          <p className="copyright-text">© 2025 CyberGuard. All rights reserved.</p>
        </div>

        <button onClick={handleGoBack} className="button-go-back">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default About;
