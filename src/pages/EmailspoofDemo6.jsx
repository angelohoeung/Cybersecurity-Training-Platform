import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const EmailspoofDemo6 = ({ token }) => {
  const navigate = useNavigate();

  function handleNext(){
    sessionStorage.removeItem('token');
    navigate('/EmailspoofQuiz');  
  }

  function handleHome(){
    sessionStorage.removeItem('token');
    navigate('/home');
  }

  return (
    <div className="container">
      <h1 className="title">Prevention Techniques</h1>
      <p className="content">
        As we saw, the attacker can incorporate a middle-step to a company's secure link that will trick the victim into giving their personal information. 
      </p>
      <p className="content">
      <strong style={{ color: '#FF0000' }}>Let's review what features to take note of...</strong> 
      </p>

      <h6 className="title" style={{ fontSize: '36px' }}>Detecting Spoofed Emails:</h6>
        <p className="content" style={{ fontSize: '20px' }}>
        <strong style={{ color: '#808080' }}>Lookalike Domains</strong> → Slight modifications to lettering of a legitimate email address.
        <br />
        <strong style={{ color: '#808080' }}>Display Name Spoofing</strong> → Using a trusted name while using a different email address.
        <br />
        <strong style={{ color: '#808080' }}>Compromised Accounts</strong> → Attacker using a real account to send malicious emails.
        <br />
        <strong style={{ color: '#808080' }}>Spelling and Grammar Issues</strong> → Unusual typos or sentence structures.
        <br />
        <strong style={{ color: '#808080' }}>Urgent or Unusual Requests</strong> → Pressure to act quickly or provide sensitive information. 
        <br />
        <strong style={{ color: '#808080' }}>Suspicious Attachments or Links</strong> → Unexpected files you’ve never received before.
        </p>

<h6 className="title" style={{ fontSize: '36px' }}>Actions To Take:</h6>
        <p className="content" style={{ fontSize: '20px' }}>
        <strong style={{ color: '#808080' }}>Check Email Headers</strong> → Verify authenticity.
        <br />
        <strong style={{ color: '#808080' }}>Verify Links Before Clicking</strong> → Hover over links to see actual destinations.
        <br />
        <strong style={{ color: '#808080' }}>Use Security Tools</strong> → Email security software and browser extensions.
        </p>

<h6 className="title" style={{ fontSize: '36px' }}>How To Avoid:</h6>
<p className="content" style={{ fontSize: '20px' }}>
  <strong style={{ color: '#808080' }}>Educate</strong> → Complete this activity to feel secure in recognizing spoofed emails.
  <br />
  <strong style={{ color: '#808080' }}>MFA (Multi-Factor Authentication)</strong> → Reducing the risk of your email being used to spoof others.
  <br />
  <strong style={{ color: '#808080' }}>Report Suspicious Emails</strong> → Do not be afraid to report any concerns or make calls to confirm the validity of an email.
</p>


      <button onClick={handleNext} className="button">Continue to Quiz</button>
    </div>
  );
};


export default EmailspoofDemo6;