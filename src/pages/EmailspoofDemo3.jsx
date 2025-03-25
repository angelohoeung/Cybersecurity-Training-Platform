import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackTwo.css';

const EmailSpoofingDemo3 = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState('');

  const emailExamples = [
    {
      image: '/images/EmailExampleOne.png',
      isPhishing: true,
      explanation: "⚠️ This is a spoofed email! Clues include:\n- The sender email 'paypai.com' is a misspelled version of 'paypal.com'.\n- Urgent language pressuring you to act quickly.\n- Suspicious link leading to a non-PayPal domain."
    },
    {
      image: '/images/EmailExampleTwo.png',
      isPhishing: false,
      explanation: "✅ This email appears legitimate. Here's why:\n- The sender address is correctly formatted and from a known domain.\n- The language is informative without unnecessary urgency.\n- The link points to the official bank website, which should be checked before clicking."
    },
    {
      image: '/images/EmailExampleThree.png',
      isPhishing: true,
      explanation: "⚠️ This is a spoofed email! Clues include:\n- 'company-it.com' may not be the actual internal company domain.\n- Generic sender name without specific details.\n- Requesting login credentials, which IT teams typically avoid via email."
    }
  ];

  function handleChoice(userChoice) {
    if (userChoice === emailExamples[step].isPhishing) {
      setFeedback(`✅ Correct! ${emailExamples[step].explanation}`);
    } else {
      setFeedback(`❌ Incorrect! ${emailExamples[step].explanation}`);
    }
  }

  function handleNext() {
    if (step < emailExamples.length - 1) {
      setStep(step + 1);
      setFeedback('');
    } else {
      navigate('/EmailspoofDemo4');
    }
  }

  function handleHome() {
    navigate('/home');
  }

  return (
    <div className="container">
      <h3 className="title">Email Spoofing Exercise</h3>
      <p className="content">Review the email below and decide if it is legitimate or a spoofed phishing attempt.</p>
      
      <div className="email-box">
        {emailExamples[step].image ? (
          <img src={emailExamples[step].image} alt="Email Example" className="email-image" style={{ border: '2px solid black', display: 'block', margin: '0 auto' }} />
        ) : (
          <>
            <p><strong>From:</strong> {emailExamples[step].sender}</p>
            <p><strong>Subject:</strong> {emailExamples[step].subject}</p>
            <p>{emailExamples[step].body}</p>
          </>
        )}
      </div>
      
      <div className="button-group">
        <button onClick={() => handleChoice(true)} className="button spoof">This is a Spoof</button>
        <button onClick={() => handleChoice(false)} className="button legit">This is Legitimate</button>
      </div>
      
      {feedback && <p className="feedback">{feedback}</p>}
      
      <button onClick={handleNext} className="button">{step < emailExamples.length - 1 ? 'Next Email' : 'Finish Exercise'}</button>
    </div>
  );
};

export default EmailSpoofingDemo3;


