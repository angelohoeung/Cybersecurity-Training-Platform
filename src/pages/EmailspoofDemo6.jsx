import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const EmailspoofDemo6 = ({ token }) => {
  const navigate = useNavigate();

  function handleNext() {
    sessionStorage.removeItem('token');
    navigate('/EmailspoofDemo7');
  }

  function handleHome() {
    sessionStorage.removeItem('token');
    navigate('/home');
  }

  return (
    <div className="container">
      
      <div className="attack-info">
        <h2>Mitigation Techniques</h2>
        <p>
        Updating your DNS records to include a Sender Policy Framework (SPF) entry lets you specify 
        which servers are authorized to send emails on behalf of your domain. This helps detect and 
        block spoofed emails from attackers. Consider the following:
        </p>
        <pre className="code-snippet light-grey-box">
          <code>
          example.com. IN TXT "v=spf1 ip4:192.168.1.1 include:mail.example.com include:_spf.google.com -all"
          </code>
        </pre>
        <div className="code-explanation light-grey-box">
          <h3>What&apos;s happening in this SPF record?</h3>
          <ul>
            <li>
              <strong>"v=spf1"</strong>: Declares the use of SPF version 1.
            </li>
            <li>
              <strong>"ip4:192.168.1.1"</strong>: Specifies an authorized mail server IP address, in this case allowing emails from the server with IP address 192.168.1.1.
            </li>
            <li>
              <strong>"include:mail.example.com"</strong>: Authorizes the mail server (Ex: mail.example.com) to send emails for your domain.
            </li>
            <li>
              <strong>"include:_spf.google.com"</strong>: Authorizes Google's email servers to send emails for your domain.
            </li>
            <li>
              <strong>"-all"</strong>: Indicates that all other servers are not authorized to send mail for this domain.
            </li>
          </ul>
          <p>
            This ensures that only designated servers can send emails on behalf of your domain,
            helping to prevent email spoofing attacks.
          </p>
        </div>
      </div>
      
      <div className="attack-info">
        <br></br>
        <br></br>
        <p>
        Additionally, using Domain Key Identified Mail (DKIM) allows you to verify that an email was truly sent 
        from your domain and ensures that the message hasn’t been altered while on its way to the 
        recipient. Consider the following:
        </p>
        <pre className="code-snippet light-grey-box">
          <code>
            default._domainkey.example.com. IN TXT "v=DKIM1; k=rsa; p=PUBLIC_KEY_HERE"
          </code>
        </pre>
        <div className="code-explanation light-grey-box">
          <h3>What&apos;s happening in this DKIM record?</h3>
          <ul>
            <li>
              <strong>"v=DKIM1"</strong>: Declares the use of DKIM version 1.
            </li>
            <li>
              <strong>"k=rsa"</strong>: Specifies that RSA encryption is used.
            </li>
            <li>
              <strong>"p=PUBLIC_KEY_HERE"</strong>: The public key used to verify the email signature.
            </li>
          </ul>
          <p>
          Simply put, DKIM attaches a unique digital signature to the header of an email. When the 
          recipient’s mail server receives the email, it recalculates the signature based on the content 
          and compares it to the original signature in the header. If they match, it confirms the email
          was sent by the authorized domain and hasn’t been altered during transit.
          </p>
          
          <p>This process helps 
          protect against email tampering, phishing, and other malicious activities by ensuring the integrity 
          and authenticity of the message.</p>
        </div>
      </div>
      
      <button onClick={handleNext} className="button">Continue</button>
      <button onClick={handleHome} className="button">Return to Home</button>
    </div>
  );
};

export default EmailspoofDemo6;
