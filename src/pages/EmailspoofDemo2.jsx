import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const EmailspoofDemo2 = ({ token }) => {
  const navigate = useNavigate();

  function handleNext(){
    sessionStorage.removeItem('token');
    navigate('/EmailspoofDemo3');  
  }

  function handleHome(){
    sessionStorage.removeItem('token');
    navigate('/home');
  }

  return (
    <div className="container">
      <h3 className="title">Legitimate Vs. Fake Emails</h3>

      <div className="code-explanation light-grey-box">
      <p className="content" style={{ fontSize: "16px" }}>
      Hackers often attempt to disguise fraudulent emails as legitimate ones using techniques 
      that are difficult for users to detect. It is crucial to watch for subtle discrepancies 
      such as typos, unusual spacing, or deceptive lettering. For example, attackers may use a 
      combination of "r" and "n" to mimic the appearance of "m," tricking recipients into 
      believing the email is authentic.
      </p>
      </div>

    
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <img src="/images/microsoftexample1.png" alt="Fake Microsoft Email Example" 
            style={{ width: "45%", border: "1px solid black" }} />
        <img src="/images/microsoftexample2.png" alt="Legitimate Microsoft Email Example" 
            style={{ width: "45%", border: "1px solid black" }} />
      </div>
     
<br></br>

    <div className="code-explanation light-grey-box">
      <p className="content" style={{ fontSize: "16px" }}>
      In addition to visual deception, phishing emails may contain urgent language designed to 
      pressure recipients into acting quickly. Phrases like "Your account has been compromised!" 
      or "Immediate action required!" create a sense of urgency, prompting users to click malicious 
      links or provide sensitive information without carefully verifying the sender.
      </p>

      <p className="content" style={{ fontSize: "16px" }}>
      Legitimate companies will typically address recipients by name rather than using generic
      greetings like "Dear Customer" or "Dear User." Additionally, official emails often come
      from verified domains, whereas fake emails may use addresses with slight alterations, such
      as <span style={{ color: "blue" }}>support@amaz0n.com</span> instead of 
      <span style={{ color: "blue" }}> support@amazon.com</span>.
      </p>

    </div>
<br></br>
    <div className="code-explanation light-grey-box">
      <p className="content" style={{ fontSize: "16px" }}>
      Another red flag is the presence of unexpected attachments or links. Fraudulent emails often 
      include malicious files disguised as invoices, security updates, or delivery notifications. 
      Hovering over a link before clicking can reveal a mismatched URL, indicating a potential phishing 
      attempt.
      </p>

      <p className="content" style={{ fontSize: "16px" }}>
      To verify an email’s legitimacy, users should cross-check the sender’s email address, avoid clicking 
      on suspicious links, and contact the organization directly using official contact details. Email security 
      measures we will review later such as spam filters and multi-factor authentication can further reduce the 
      risk of falling victim to phishing attacks.
      </p>
      </div>

      <button onClick={handleNext} className="button">Continue</button>
      <button onClick={handleHome} className="button">Return Home</button>
    </div>
  );
};

export default EmailspoofDemo2;

