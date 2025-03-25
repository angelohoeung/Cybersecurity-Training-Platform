import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../AttackTwo.css';

const XssHome = () => {
  const navigate = useNavigate();

  function handleNext(){
    navigate('/CrossSiteScripting/XssDemo'); 
  }

  function handleHome(){
    sessionStorage.removeItem('token');
    navigate('/home');
  }

  return (
    <div className="container">
      <h3 className="title">Cross-Site Scripting</h3>
      <p className="content">
        Cross-Site Scripting (XSS) is a security vulnerability that allows an attacker to inject malicious scripts into a website. 
        When other users visit the affected site, the malicious script runs in their browser, potentially stealing their data or performing actions on their behalf. 
      </p>
      <img src="../images/xssHome.png" alt="XSS Home" className="clickjacking-image"></img>
      <button onClick={handleNext} className="button">Click To Begin</button>
      <button onClick={handleHome} className="button">Return Home</button>
    </div>
  );
};

export default XssHome;  
