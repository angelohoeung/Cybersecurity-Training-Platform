import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Sql.css';

const XssDemo = () => {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [explanationStep, setExplanationStep] = useState(0); // Track which step of the explanation to show
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      // Add user's message to the chat log
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { sender: 'Me', message: userInput },
      ]);
  
      let responded = false;
  
      // Check if the message includes a <script> tag and react accordingly (XSS example)
      if (userInput.includes('<script>')) {
        // Simulate Sarah's reaction to suspicious input
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { sender: 'Sarah', message: 'Hey, that looks suspicious! Please don\'t try to inject scripts.' },
        ]);
  
        // Inject the script and execute it
        const scriptTag = userInput.match(/<script.*?>(.*?)<\/script>/);
        if (scriptTag && scriptTag[1]) {
          const script = document.createElement('script');
          script.innerHTML = scriptTag[1];
          document.body.appendChild(script); // Inject and execute the script
        }
  
        responded = true; // Mark that Sarah has already responded
      }
  
      // Check if the message includes a div with a lightblue background (HTML injection example)
      if (userInput.includes('background-color: lightblue')) {
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { sender: 'Sarah', message: 'Woah! How did you change the colour of your text background?' },
        ]);
        responded = true; // Mark that Sarah has already responded
      }
  
      // Default response from Sarah if no specific cases were detected
      if (!responded) {
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { sender: 'Sarah', message: 'Hello! How can I help you?' },
        ]);
      }
  
      // Clear the input field
      setUserInput('');
    }
  };
  
  const handleExit = () => {
    navigate('/home');
  };

  const handleExplanationNext = () => {
    if (explanationStep === 13) {
      navigate('/CrossSiteScripting/XssMore');
    } else {
      setExplanationStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
        <div
          className="application-logo"
          style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
        >
          <h2
            className="application-name"
            style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}
          >
            Chat with Sarah
          </h2>
        </div>
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
              <strong>{entry.sender}:</strong>
              <span
              dangerouslySetInnerHTML={{ __html: entry.message }}
              style={{ marginLeft: '10px' }}
              />
            </div>
            ))}
          </div>
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

      {/* Explanation Box */}
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
        {explanationStep === 0 ? (
          <p>
            Imagine you’re chatting with someone online (in this case, a bot named Sarah).
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 1 ? (
          <p>
            Let's start by sending Sarah a message. Type "Hi Sarah" and hit send.
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 2 ? (
          <p>
            Sarah responds. Everything seems normal, right?
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 3 ? (
          <p>
            Now that you can chat with Sarah, let's see what happens when the app doesn’t handle special input correctly.
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 4 ? (
          <p>
            Try entering something that looks like a simple style command:
            <br />
            <code>&lt;div style="background-color: lightblue;"&gt;My favourite colour is blue!&lt;/div&gt;</code>
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 5 ? (
          <p>
            What happened? Your message appears with a light blue background.
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 6 ? (
          <p>
            The chat app isn’t just displaying your message, it’s actually applying the styling. 
            This means it’s treating your input as HTML code rather than just text. This is a severe security risk.
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 7 ? (
          <p>
            If HTML input works, what about JavaScript? Let's explore that next.
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 8 ? (
          <p>
            The goal is to enter a small piece of JavaScript code that the application might mistakenly execute.
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 9 ? (
          <p>
            Send this to Sarah and let's see what happens:
            <br />
            <code>&lt;script&gt;alert('XSS Attack!');&lt;/script&gt;</code>
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 10 ? (
          <p>
            What happened? When you send the message, an alert box pops up saying "XSS Attack!".
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 11 ? (
          <p>
            The chat app executes the script instead of displaying it as text.
            This demonstrates an actual XSS vulnerability, where an attacker could run malicious scripts on other users’ browsers.
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : explanationStep === 12 ? (
          <p>
            This could be used for stealing cookies, redirecting users, or other harmful actions.
            <br />
            <button onClick={handleExplanationNext}>Next</button>
          </p>
        ) : (
          <p>
            You've reached the end of this demo! 
            <br />
            If you'd like to learn more, click below.
            <br />
            <button onClick={() => handleExplanationNext("extra")}>Learn More</button>
          </p>
        )}
      </span>
      </div>

      <button style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={handleExit}>
        Exit
      </button>
    </div>
  );
};

export default XssDemo;
