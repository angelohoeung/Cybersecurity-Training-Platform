import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sql.css'; // Import the CSS file

const SqlTenth = ({ token }) => {
  let navigate = useNavigate();
  const [logsPrinted, setLogsPrinted] = useState(false);

  useEffect(() => {
    if (!logsPrinted) {
      printLogMessages();
      setLogsPrinted(true);
    }
  }, [logsPrinted, printLogMessages]);

  function handleExit() {
    navigate('/home');
  }

  function printLogMessages() {
    var logsBody = document.querySelector(".logs-body");

    // Log "Application Initialized" only if it's not already printed
    if (logsBody.innerHTML === '') {
        var initialMessage = "Starting server...";
        var p = document.createElement("p");
        p.textContent = initialMessage;
        p.style.color = "#0F0F";
        p.style.textAlign = "left";
        p.style.fontSize = "12px";
        p.style.fontFamily = "monospace";
        p.style.marginBottom = "0px";
        logsBody.appendChild(p);
        logsBody.scrollTop = logsBody.scrollHeight;

        // Print login attempts and failure message after initial message
        var loginAttempts = [
          "...done.",
          "Initializing log display.",
          "Rendering login page.",
          "Connection established.",
          "User logged in as administrator."
        ];

        loginAttempts.forEach(function (message, index) {
            setTimeout(function () {
                var p = document.createElement("p");
                p.textContent = message;
                p.style.color = "#0F0F";
                p.style.textAlign = "left";
                p.style.fontSize = "12px";
                p.style.fontFamily = "monospace";
                p.style.marginBottom = "0px";
                p.classList.add("code");
                logsBody.appendChild(p);
                logsBody.scrollTop = logsBody.scrollHeight;
            }, (index + 1) * 1000); // Increase the delay for each message
        });
    }
  }

  return (
    <div>
      <h3>SQL Injection</h3>
      <button style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={handleExit}>Exit</button>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', backgroundColor: '#f8f9fa', position: 'relative' }}>
        <div className="application" style={{ width: '400px', height: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff', top: '30px' }}>
          <div className="application-logo" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <h2 className="application-name" style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>B A N K</h2>
            <img src="bank_logo.png" alt="Application Logo" width="30" style={{ marginRight: '10px', marginTop: '-12.5px', marginLeft: '7.5px' }} />
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <p>Welcome back, user@email.com! Your current balance is $300</p>
            <button style={{ backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>Initiate a transfer</button>
            <p>"Secure Banking for a Better Tomorrow"</p>
          </div>
        </div>

        <div className="logs" style={{ width: '400px', height: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff', top: '30px' }}>
          <div className="section-title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px'}}>Logs</div>
          <div className="logs-body" style={{ height: 'calc(100% - 40px)', overflowY: 'auto', padding: '10px', backgroundColor: '#000', border: '1px solid #ccc', borderRadius: '5px' }}>
            {/* Placeholder for logs */}
          </div>
        </div>
      </div>

      <div className="footer" style={{ width: '250px', height: '250px', backgroundColor: 'white', border: '2px solid black', position: 'absolute', bottom: '162.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', left: 'calc(50% - 100px - 300px - 300px + 110px)' }}>
        <span className="footer-text" style={{ color: 'black', textAlign: 'center' }}>
          <p>
            And we are in! We successfully
            gained access to the application 
            without having to guess the 
            password, using a SQL injection.
          </p>
          <button onClick={() => navigate('/SqlEleventh')}>Next</button>
        </span>
      </div>
    </div>
  );
};

export default SqlTenth;
