import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmailspoofDemo5 = () => {
  const navigate = useNavigate();

  // Styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    marginTop: '50px',
    gap: '40px',
  };

  const leftBoxStyle = {
    width: '250px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontSize: '14px',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const formStyle = {
    width: '400px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginLeft: '30px',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  };

  const headerStyle = {
    backgroundColor: 'white',
    color: '#333',
    padding: '10px',
    textAlign: 'center',
    fontSize: '18px',
    borderBottom: '2px solid #ddd',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderBottom: '2px solid #ddd',
  };

  const navButtonStyle = {
    backgroundColor: 'white',
    color: '#333',
    border: '1px solid #ccc',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div>
      {/* White header line */}
      <div style={headerStyle}>
        We are now visiting https://officialbankname.com...
      </div>

      {/* Navigation buttons */}
      <div style={buttonContainerStyle}>
        <button style={navButtonStyle}>Home</button>
        <button style={navButtonStyle}>Services</button>
        <button style={navButtonStyle}>About Us</button>
      </div>

      <div style={containerStyle}>
        {/* Left-hand side improved white box */}
        <div style={leftBoxStyle}>
  
  <p style={{ marginBottom: '15px', color: 'red', fontWeight: 'bold' }}>
    After having entered your bank information to supposedly verify your identity, the attacker will store 
    the information and redirect you to the official bank website to lead you to believe that you have been on the
    official site the whole time.
  </p>
          
          {/* Continue Button */}
          <button
            style={{
              backgroundColor: '#0073e6',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '16px',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
              width: '100%',
            }}
            onClick={() => navigate('/EmailspoofDemo6')}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#005bb5')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#0073e6')}
          >
            Continue
          </button>
        </div>

        {/* Right-hand side search engine mockup */}
        <div style={formStyle}>
          <h3 style={titleStyle}>What can we help you find?</h3>

          {/* Bank image */}
          <div style={{ width: '100%', height: '150px', marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="/images/bank-image.png" 
              alt="Bank" 
              style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }} 
            />
          </div>

          {/* Search Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <input
              type="text"
              placeholder="Search banking services, loans, accounts..."
              style={{
                width: '80%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            />
            <button
              style={{
                backgroundColor: 'grey',  // Grey search button
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                marginLeft: '10px',
                cursor: 'pointer',
                fontSize: '16px',
                borderRadius: '5px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = 'darkgrey')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'grey')}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailspoofDemo5;


