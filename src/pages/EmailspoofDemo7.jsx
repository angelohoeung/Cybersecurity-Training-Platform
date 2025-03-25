import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const EmailspoofDemo7 = ({ token }) => {
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(false); // State to toggle between enabled and disabled

  function handleNext() {
    sessionStorage.removeItem('token');
    navigate('/EmailspoofQuiz');
  }

  function handleHome() {
    sessionStorage.removeItem('token');
    navigate('/home');
  }

  // Toggle the security extension state
  function toggleExtension() {
    setEnabled(!enabled);
  }

  return (
    <div className="container">
      <div className="attack-info">
        <h2>Prevention Techniques</h2>
        <p>
          As we saw, the attacker can incorporate a middle-step to a company's 
          secure link that will trick the victim into giving their personal 
          information. Let's review what features to take note of...
        </p>
        <div className="code-explanation light-grey-box">
          <h3>Detecting Spoofed Emails:</h3>
          <ul>
            <li>
              <strong>Lookalike Domains</strong>: → Slight modifications to lettering of a legitimate email address.
            </li>
            <li>
              <strong>Display Name Spoofing</strong>: → Using a trusted name while using a different email address.
            </li>
            <li>
              <strong>Compromised Accounts</strong>: → Attacker using a real account to send malicious emails.
            </li>
            <li>
              <strong>Spelling and Grammar Issues</strong>: → Unusual typos or sentence structures.
            </li>
            <li>
              <strong>Urgent or Unsual Requests</strong>: → Pressure to act quickly or provide sensitive information.
            </li>
            <li>
              <strong>Suspicious Attatchments or Links</strong>: → Unexpected files you’ve never received before.
            </li>
          </ul>
        </div>
        <br></br>
        <div className="code-explanation light-grey-box">
          <h3>Actions to Take:</h3>
          <ul>
            <li>
              <strong>Check Email Headers</strong>: → Verify authenticity.
            </li>
            <li>
              <strong>Verify Links Before Clicking</strong>: → Hover over links to see actual destinations.
            </li>
            <li>
              <strong>Use Security Tools</strong>: → Email security software and browser extensions.
            </li>
          </ul>
        </div>

        <br></br>

        <p>
        Security tools like browser extensions can scan your email activity and alert you to potential 
        threats. For example, the NoSpoofing Chrome extension detects and blocks spoofed emails, adding 
        an extra layer of protection against phishing and fraud.
        </p>

        {/* Toggle images for enabling or disabling the extension */}
        <div className="extension-toggle">
          <p>Enable or disable the NoSpoofingsecurity browser extension below:</p>
          
          {/* Clickable image that toggles between enable/disable */}
          <div onClick={toggleExtension} className="image-container">
            <img 
              src={enabled ? "/images/enable-image.png" : "/images/disable-image.png"} 
              alt={enabled ? "Enable Security Browser Extension" : "Disable Security Browser Extension"} 
              className="toggle-image"
            />
          </div>
        </div>

        {/* Blue button */}
        <button 
          onClick={toggleExtension} 
          className="blue-button"
        >
          {enabled ? 'Disable Security Browser Extension' : 'Enable Security Browser Extension'}
        </button>

        <br></br>
        <br></br>
        <div className="code-explanation light-grey-box">
          <h3>How to Avoid:</h3>
          <ul>
            <li>
              <strong>Educate</strong>: → Complete this activity to feel secure in recognizing spoofed emails.
            </li>
            <li>
              <strong>MFA (Multi-Factor Authentication)</strong>: → Reducing the risk of your email being used to spoof others.
            </li>
            <li>
              <strong>Report Suspicious Emails</strong>: → Do not be afraid to report any concerns or make calls to confirm the validity of an email.
            </li>
          </ul>
        </div>
        
      </div>
      
      <button onClick={handleNext} className="button">Continue to Quiz</button>
    </div>
  );
};

export default EmailspoofDemo7;
