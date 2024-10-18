import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css'

const Malvertisinghome = () => {
  let navigate = useNavigate();
  
 
  function handleNext(){
    sessionStorage.removeItem('token');
    navigate('/Malvertisingdemo'); 
  }

  function handleHome(){
    sessionStorage.removeItem('token');
    navigate('/home');
  }

  
  return (
    <div className='container'>
      <h3 className='title'>Malvertising</h3>
          <p className='content'>
          Malvertising is a cyber threat that uses online ads to spread malware. These deceptive ads can quietly compromise security, 
          leading to data breaches or system damage. Our demo showcases AI defenses against such hidden attacks.</p>
          <img src='images/malvertising.jpg' alt='malvertising image one' className='clickjacking-image'></img>
      <button onClick={handleNext}>Click To Begin</button>
      <button onClick={handleHome}>Home</button>
    </div>
  );
};

export default Malvertisinghome;