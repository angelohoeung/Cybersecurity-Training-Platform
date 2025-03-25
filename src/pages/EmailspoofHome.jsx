import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const EmailspoofHome = ({ token }) => {
  const navigate = useNavigate();

  function handleNext(){
    sessionStorage.removeItem('token');
    navigate('/EmailspoofDemo');  
  }

  function handleHome(){
    sessionStorage.removeItem('token');
    navigate('/home');
  }

  return (
    <div className="container">
      <h3 className="title">Email Spoofing</h3>
      <p className="content">
      Email spoofing is a cyber threat where attackers forge the sender’s email address to make it appear as if the message comes from a trusted source. 
      This is often used for phishing, spreading malware, or tricking recipients into revealing their sensitive information. 
      </p>
      <img src="images/EmailspoofHome.png" alt="Email Spoofing Home" className="image"></img>
      <button onClick={handleNext} className="button">Click To Begin</button>
      <button onClick={handleHome} className="button">Return Home</button>
    </div>
  );
};

export default EmailspoofHome;  