import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const EmailspoofDemo4 = ({ token }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const [showTab, setShowTab] = useState(false);

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    // Simulate saving the password in a hacker's database
    console.log('Password saved in hacker database: ', password);
    setPasswordSaved(true);
    setShowTab(true);  // Show the hacker message tab

    // Redirect to a mock password change page (instead of real one)
    setTimeout(() => {
      setShowTab(false);  // Hide the hacker message tab after 3 seconds
      navigate('/EmailspoofDemo5'); // Redirect to mock page
    }, 3000);
  }

  function handleNext() {
    sessionStorage.removeItem('token');
    navigate('/EmailspoofDemo5');  
  }

  function handleHome() {
    sessionStorage.removeItem('token');
    navigate('/home');
  }

  function handleLinkClick() {
    setLinkClicked(true);
    setShowPasswordForm(true);
  }

  return (
    <div className="container">
      <h3 className="title">Demo: Password Change</h3>
      <p className="content">
        You have received an urgent email asking you to change your password. The email requests that you click the following link below to proceed.
      </p>

      {!linkClicked && (
        <button 
          onClick={handleLinkClick} 
          className="button red-button"
        >
          https://gotopassword-changing.com
        </button>
      )}

      {showPasswordForm && !passwordSaved && (
        <div>
          <p>Please enter your current password to continue:</p>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            placeholder="Current Password" 
            className="input-field" 
          />
          <button onClick={handleSubmit} className="button">Submit</button>
        </div>
      )}

      {passwordSaved && (
        <div>
          <p>Your password has been saved. You will be redirected to a password change page shortly...</p>
        </div>
      )}

      {showTab && (
        <div className="hacker-tab">
          <p style={{ fontWeight: "bold", color: "red" }}>
            Current password has been saved to the attacker's database!
          </p>
        </div>

      )}
    </div>
  );
};

export default EmailspoofDemo4;
