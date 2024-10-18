import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sql.css'; // Import the CSS file

const SqlEleventh = ({ token }) => {
  let navigate = useNavigate();
  const [logsPrinted, setLogsPrinted] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(true); // Initially set to true

  useEffect(() => {
    if (!logsPrinted) {
      printLogMessages();
      setLogsPrinted(true);
    }
  }, [logsPrinted]);

  function handleExit() {
    navigate('/home');
  }

  function printLogMessages() {
    var logsBody = document.querySelector(".logs-body");
    var logMessages = [
      "Starting server...",
      "...done.",
      "Initializing log display.",
      "Rendering login page."
    ];

    logMessages.forEach(function(message, index) {
      setTimeout(function() {
        var p = document.createElement("p");
        p.textContent = message;
        p.style.color = "white";
        logsBody.appendChild(p);
        logsBody.scrollTop = logsBody.scrollHeight;
      }, index * 1000);
    });
  }

  return (
    <div style={{ marginTop: '12.5px', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h3>SQL Injection</h3>
      <button style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={handleExit}>Exit</button>
  
      <div className="footer" style={{ marginTop: 'auto', marginBottom: 'auto', backgroundColor: 'white', border: '2px solid black', width: '350px', textAlign: 'center' }}>
        <span className="footer-text" style={{ color: 'black', textAlign: 'center' }}>
          <p>
            Phew. Now we know how SQL injection works, 
            let's learn how to protect against this 
            kind of attack.
          </p>
          <button style={{ marginTop: '-10px' }} onClick={() => navigate('/SqlQuiz')}>Start Quiz</button>
        </span>
      </div>
    </div>
  );
  
};

export default SqlEleventh;