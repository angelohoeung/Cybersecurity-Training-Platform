import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';


const AttackTwo = ({ token }) => {
  let navigate = useNavigate();
  
 
  function handleNext(){
    sessionStorage.removeItem('token');
    navigate('/ClickjackingDemo'); 
  }

  function handleHome(){
    sessionStorage.removeItem('token');
    navigate('/home');
  }

  
 

  return (
    <div className="container">
      <h3 className="title">Click-Jacking</h3>
      <p className="content">
        Clickjacking is a malicious technique where a user is tricked into clicking on something different than 
        they perceive, often by overlaying invisible frames or divs over visible content on a legitimate webpage. 
        <hr></hr>
      </p>
      <img src = 'images/click.png' alt="Clickjacking Attack Illustration" className="clickjacking-image"></img>
      <button onClick={handleNext} className="button">Click To Begin</button>
      <button onClick={handleHome} className="button">Return Home</button>
      
    </div>
  );
};

export default AttackTwo;