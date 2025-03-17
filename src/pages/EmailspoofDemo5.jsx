import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmailspoofDemo5 = () => {
  const navigate = useNavigate();

  function handleSubmit() {
    // Simulate password change submission
    alert('Password has been officially changed!');
    navigate('/EmailspoofDemo6'); // Redirect to home after submitting
  }

  function handleHome() {
    sessionStorage.removeItem('token');
    navigate('/home'); // Return to home
  }

  // Inline styles for the mock password change page
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    marginTop: '50px',
  };

  const leftBoxStyle = {
    width: '200px',
    height: '300px',
    padding: '10px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginRight: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    color: '#808080', // Medium grey color
    fontWeight: 'normal', // Removes the bold font weight
  };
  
  

  const formStyle = {
    width: '400px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  };

  const inputContainerStyle = {
    marginBottom: '15px',
    textAlign: 'left',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const returnButtonStyle = {
    backgroundColor: '#f44336',
    ...buttonStyle, // Inheriting other button styles
  };

  const returnButtonHoverStyle = {
    backgroundColor: 'darkred',
  };

  return (
    <div style={containerStyle}>
      {/* Left-hand side small white box */}
      <div style={leftBoxStyle}>
        <p>After having entered your current password, the attacker will store the password and redirect you
            to the official change of password site of the company they are attempting to impersonate. 
            Enter a password in this mock official website! Example: Test123
        </p>
      </div>

      {/* Right-hand side form */}
      <div style={formStyle}>
        <h3 style={titleStyle}>Change Password</h3>
        <form onSubmit={handleSubmit}>
          <div style={inputContainerStyle}>
            <label htmlFor="new-password">New Password:</label>
            <input
              type="password"
              id="new-password"
              placeholder="Enter New Password"
              required
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="confirm-password">Confirm New Password:</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm New Password"
              required
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

export default EmailspoofDemo5;


