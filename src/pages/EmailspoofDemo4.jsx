import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const EmailspoofDemo4 = ({ token }) => {
  const navigate = useNavigate();
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardCountry, setCardCountry] = useState('');  // New state for country
  const [cardSaved, setCardSaved] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const [showTab, setShowTab] = useState(false);

  function handleHome(){
    sessionStorage.removeItem('token');
    navigate('/home');
  }
  
  function handleCardNameChange(event) {
    setCardName(event.target.value);
  }

  function handleCardNumberChange(event) {
    setCardNumber(event.target.value);
  }

  function handleCardCVVChange(event) {
    setCardCVV(event.target.value);
  }

  function handleCardCountryChange(event) {
    setCardCountry(event.target.value);  // Handle change for the country input
  }

  function handleSubmit() {
    // Simulate saving the card information in a hacker's database
    console.log('Card info saved in hacker database:', {
      cardName,
      cardNumber,
      cardCVV,
      cardCountry  // Include country info in the saved data
    });
    setCardSaved(true);
    setShowTab(true);  // Show the hacker message tab

    // Redirect to a mock password change page (instead of real one)
    setTimeout(() => {
      setShowTab(false);  // Hide the hacker message tab after 3 seconds
      navigate('/EmailspoofDemo5'); // Redirect to mock page
    }, 3000);
  }

  function handleLinkClick() {
    setLinkClicked(true);
    setShowCardForm(true); // Show the card info form after clicking the link
  }

  return (
    <div className="container">
      <h3>Demo: Banking Information</h3>

      {/* If the link has not been clicked, show the initial content */}
      {!linkClicked && (
        <>
          <p>You have received an urgent email asking you to change your password. The email requests that you click a link to proceed:</p>
          <div className="code-explanation light-grey-box">
            <p className="left-aligned-paragraph"> 
              <strong>Subject: Urgent! Immediate Action Required for Your Bank Account Identity</strong>
            </p>
            <p className="left-aligned-paragraph">
              Dear Customer, <br /><br />
              We have detected unusual activity in your account and need to confirm your location and identity to ensure that no unauthorized actions have been made.<br />
              To continue using your account without any interruptions, please log in and verify your details immediately.<br /><br />
              Please follow these steps:<br />
              Click on the link below to access your account and verify your information:<br />
            </p>

            <button 
              onClick={handleLinkClick} 
              className="button red-button"
            >
              https://gotobankinfo-verify.com
            </button>

            <p className="left-aligned-paragraph">
              You will be prompted to confirm your location and provide additional verification details to ensure the safety of your account.<br /><br />
              Important Note:<br />
              Failure to verify your account within 48 hours may result in a temporary restriction of certain account features. To avoid this, please log in and complete the verification process as soon as possible.<br /><br />
              Thank you for your prompt attention to this matter,<br />
              Official Bank Name<br />
              Customer Support Team
            </p>
          </div>
        </>
      )}

      {/* Once the link is clicked, show the new title and the card form */}
      {linkClicked && (
        <>
          <h3>We are now visiting https://gotobankinfo-verify.com...</h3>
          {showCardForm && !cardSaved && (
            <div>
              <p>Please enter your card details to continue:</p>
              <p style={{ color: '#D3D3D3' }}>
                **Ex: Cardholder Name: John Johnny, Card Number: 1111 2222 3333 4444, Card CVV: 123, Card Country: Canada**
              </p>

              <input 
                type="text" 
                value={cardName} 
                onChange={handleCardNameChange} 
                placeholder="Cardholder Name" 
                className="input-field" 
              />
              <input 
                type="text" 
                value={cardNumber} 
                onChange={handleCardNumberChange} 
                placeholder="Card Number" 
                className="input-field" 
              />
              <input 
                type="text" 
                value={cardCVV} 
                onChange={handleCardCVVChange} 
                placeholder="Card CVV" 
                className="input-field" 
              />
              <input 
                type="text" 
                value={cardCountry}  // New field for country
                onChange={handleCardCountryChange} 
                placeholder="Card Country" 
                className="input-field" 
              />
              <button onClick={handleSubmit} className="button">Submit</button>
            </div>
          )}

          {cardSaved && (
            <div>
              <p>Your location and identity have been confirmed. Account has been secured, for any further questions please contact us at +1 111 111-1111 or email us at officialbankname@support.com. <br></br><br></br>You will be redirected to a secure page shortly...</p>
            </div>
          )}

          {showTab && (
            <div className="hacker-tab">
              <p style={{ fontWeight: "bold", color: "red" }}>
                NOTE: Card details have been saved to the attacker's database! 
              </p>
            </div>
          )}
        </>
      )}
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", marginTop: "20px" }}>
        <button onClick={handleHome} className="button" style={{ width: "900px", height: "37px", fontSize: "14px", textAlign: "center" }}>Return Home</button>
      </div>

    </div>
  );
};

export default EmailspoofDemo4;
