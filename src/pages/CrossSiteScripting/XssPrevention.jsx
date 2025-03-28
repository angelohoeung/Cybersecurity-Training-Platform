import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Sql.css';

const XssPrevention = () => {
  const [userInput, setUserInput] = useState(''); 
  const [chatLog, setChatLog] = useState([]); 
  const [explanationStep, setExplanationStep] = useState(0); 
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setUserInput(e.target.value); 
  };

  // Escapes HTML special characters to prevent XSS
  const escapeHTML = (str) => {
    return str
      .replace(/&/g, '&amp;') // Escape &
      .replace(/</g, '&lt;') // Escape <
      .replace(/>/g, '&gt;') // Escape >
      .replace(/"/g, '&quot;') // Escape "
      .replace(/'/g, '&#039;'); // Escape '
  };

  const handleSendMessage = () => {
    if (userInput.trim()) { 
      const safeMessage = escapeHTML(userInput); // Sanitize input by escaping HTML

      // Check for HTML injection (like <div> or <script>)
      let sarahResponse = 'You can try but it will be plain text.';

      if (userInput.includes('<script>')) {
        sarahResponse = 'You tried JavaScript injection. But nothing will happen, it’s blocked for security!';
      } else if (userInput.includes('<div') || userInput.includes('<p') || userInput.includes('<span')) {
        sarahResponse = 'You can try HTML injection but it will be plain text.';
      }

      // Add the sanitized message and Sarah's response to chat log
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { sender: 'Me', message: safeMessage },
        { sender: 'Sarah', message: sarahResponse },
      ]);

      setUserInput(''); // Clear input field
    }
  };

  const handleExit = () => {
    navigate('/home');
  };

  const handleExplanationNext = () => {
    if (explanationStep === 8) {
      navigate('/CrossSiteScripting/XssQuiz'); 
    } else {
      setExplanationStep((prevStep) => prevStep + 1); 
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Chat Container */}
      <div
        className="container"
        style={{
          width: '450px',
          height: '600px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#fff',
          position: 'relative',
        }}
      >
        <div className="application-logo" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <h2 className="application-name" style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>
            Chat with Sarah
          </h2>
        </div>

        {/* Chat Log */}
        <div className="chat-box">
          <div
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              height: '300px',
              width: '400px',
              overflowY: 'scroll',
              marginBottom: '10px',
            }}
          >
            {chatLog.map((entry, index) => (
              <div key={index} style={{ textAlign: 'left', marginBottom: '5px' }}>
                <strong>{entry.sender}:</strong> <span>{entry.message}</span>
              </div>
            ))}
          </div>

          {/* Input + Send Button */}
          <div style={{ display: 'relative' }}>
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>

      {/*Explanation Box*/}
      <div
        className="explain-box"
        style={{
          position: 'absolute',
          left: '190px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '290px',
          height: '290px',
          backgroundColor: 'white',
          border: '2px solid black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span className="explain-box-text" style={{ color: 'black', textAlign: 'center' }}>
          {/* Explanation steps */}
          {explanationStep === 0 ? (
              <p>
                Now let's see how we can prevent XSS attacks safely!
                <br />
                <button onClick={handleExplanationNext}>Next</button>
              </p>
            ) : explanationStep === 1 ? (
              <p>
                Let's try the HTML injection example again:
                <br />
                <code>&lt;div style="background-color: lightblue;"&gt;My favourite colour is blue!&lt;/div&gt;</code>
                <br />
                <button onClick={handleExplanationNext}>Next</button>
              </p>
            ) : explanationStep === 2 ? (
              <p>
                See how it appears as plain text <br /> instead of rendering as a colored box? That's because the app escaped the dangerous characters.
                <br /><br />
                This is called <b>Escaping Dynamic Content</b>, which prevents HTML from being interpreted as real code.
                <br />
                <button onClick={handleExplanationNext}>Next</button>
              </p>
            ) : explanationStep === 3 ? (
              <p>
                Now, let's try the JavaScript injection example:
                <br />
                <code>&lt;script&gt;alert('XSS Attack!');&lt;/script&gt;</code>
                <br />
                <button onClick={handleExplanationNext}>Next</button>
              </p>
            ) : explanationStep === 4 ? (
              <p>
                Notice how nothing happens? If this were vulnerable, it would pop up an alert.
                <br /><br />
                Now, it is displayed as text because we blocked it using escaping, in result prevents the browser from running this code.
                <br />
                <button onClick={handleExplanationNext}>Next</button>
              </p>
            ) : explanationStep === 5 ? (
              <p>
                This is an example of Output Encoding (Escaping) mitigation.
                <br />
                In our code, we used the function: 
                <br />
                <code>escapeHTML()</code> 
                
                to replace dangerous characters like:
                <code>&lt;</code>, <code>&gt;</code>, <code>&quot;</code>, <code>'</code>, and <code>&amp;</code> 
                <br /> with safe versions so the browser <br /> won't run them.
                <br />
                <button onClick={handleExplanationNext}>Next</button>
              </p>
            ) : explanationStep === 6 ? (
              <p>
                The function <code>escapeHTML()</code> makes sure that any input from the user is treated as text and not executable code.<br /><br />
                This stops attackers from injecting malicious scripts.
                <br />
                <button onClick={handleExplanationNext}>Next</button>
              </p>
            ) : explanationStep === 7 ? (
              <p>
                <b>Important!</b><br />
                Always sanitize and escape all user input before showing it on your page.<br />
                Never trust user input, even if it looks safe.
                <br />
                <button onClick={handleExplanationNext}>Next</button>
              </p>
            ) : (
              <p>
                You learned how to prevent XSS using Output Encoding (Escaping)!<br /><br />
                Ready for a quiz?
                <br />
                <button onClick={handleExplanationNext}>Quiz</button>
              </p>
            )}
        </span>
      </div>

      {/* Exit Button */}
      <button style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={handleExit}>
        Exit
      </button>
    </div>
  );
};

export default XssPrevention;
