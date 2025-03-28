import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ClickjackingDemo';

const XssMore = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/CrossSiteScripting/XssPrevention'); 
  };

  const handleExit = () => {
    navigate('/home');
  };

  const handleBack = () => {
    navigate('/CrossSiteScripting/XssDemo');
  };

  return (
    <div className="container">
      <h3 className="title">Stored vs Reflected vs DOM-Based XSS</h3>
      
      <p className="content">
      The vulnerability you experienced in the chat application is an example of stored XSS. It’s called “stored” because the malicious JavaScript is saved in the application’s chat history. Every time the chat is viewed, the harmful script runs, which could allow an attacker to steal information or perform unwanted actions.
      </p>

      <p className="content">
      There are two other types of XSS: reflected XSS and DOM-based XSS. Reflected XSS is similar to stored XSS, but the malicious script isn’t saved. Instead, it’s immediately sent back to the user, often in things like search results or error messages. DOM-based XSS is different, it happens entirely in your browser. The malicious script is injected into the webpage through JavaScript’s DOM manipulation, without involving the server.
      </p>

      <p className="content">
      Let's explore some examples in which we can prevent XSS from happening.
      </p>

      <button onClick={handleNext} className="button">XSS Prevention</button>
      <button onClick={handleBack} className="button">Back to Demo</button>

      <button style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={handleExit}>
        Exit
      </button>
    </div>
  );
};

export default XssMore;
