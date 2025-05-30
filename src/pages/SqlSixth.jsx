import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sql.css';

const SqlSixth = ({ token }) => {
  let navigate = useNavigate();
  const [logsPrinted, setLogsPrinted] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(true); // Initially set to true
  const [passwordValue, setPasswordValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');

  useEffect(() => {
    if (!logsPrinted) {
      printLogMessages();
      setLogsPrinted(true);
    }
  }, [logsPrinted]);

  function handleExit() {
    navigate('/home');
  }

  function handleLoginSuccess() {
    navigate('/SqlSeventh');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    setUsernameValue(username); // Update usernameValue state with the entered username

    if (username === 'user@email.com' && password === "password'") {
      sessionStorage.removeItem('token');
      handleLoginSuccess();
    } else {
      setShowErrorMessage(true); // Set to true for displaying the error message
      printLogIncorrects();
    }
  }

  function printLogMessages() {
    const logsBody = document.querySelector(".logs-body");

    // Define initial messages
    const initialMessages = [
      "Application Initialized",
      "User is attempting to login...",
      "SELECT * FROM users WHERE email = 'user@email.com' AND password = 'password'",
      "Credentials did not match, login failed."
    ];

    // Log messages only if the logs body is empty
    if (logsBody.innerHTML === '') {
      initialMessages.forEach(message => printMessage(message, "white"));
      // Adding error message after initial messages
      printMessage("An error occurred: PG::SyntaxError: ERROR: unterminated quoted string at or near \"'password'' limit 1\" LINE 1: ...ers where email = 'user@email.com' and password = 'password'... ^ : select * from users where email = 'user@email.com' and password = 'password'' limit 1.", "red");
    }
  }

  function printMessage(message, color) {
    const logsBody = document.querySelector(".logs-body");
    const p = document.createElement("p");
    p.textContent = message;
    p.style.color = color;
    p.style.textAlign = "left";
    p.style.fontSize = "12px";
    p.style.fontFamily= 'monospace'; 
    p.style.marginBottom = "0px";
    p.classList.add("code");
    logsBody.appendChild(p);
    logsBody.scrollTop = logsBody.scrollHeight;
  }

  function printLogIncorrects(username, password) {
    const logsBody = document.querySelector(".logs-body");
    const logIncorrect = [
      "User is attempting to login...",
      `SELECT * FROM users WHERE email = '${username}' AND password = '${password}'`,
      "Credentials did not match, login failed."
    ];

    logIncorrect.forEach((message, index) => {
      printMessage(message, "white");
    });
    // Adding error message after login attempts
    printMessage("An error occurred: PG::SyntaxError: ERROR: unterminated quoted string at or near \"'password'' limit 1\" LINE 1: ...ers where email = 'user@email.com' and password = 'password'... ^ : select * from users where email = 'user@email.com' and password = 'password'' limit 1.", "red");
  }

  return (
    <div>
      <h3>SQL Injection</h3>
      <button style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={handleExit}>Exit</button>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', backgroundColor: '#f8f9fa', position: 'relative' }}>
        <div className="application" style={{ width: '400px', height: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff', top: '30px' }}>
          <div className="application-logo" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <h2 className="application-name" style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>B A N K</h2>
            <img src="images/bank_logo.png" alt="Application Logo" width="30" style={{ marginRight: '10px', marginTop: '-12.5px', marginLeft: '7.5px' }} />
          </div>
          <form id="login-form" action="#" method="post" onSubmit={handleSubmit} style={{ width: 'calc(100% - 20px)', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <input type="text" id="username" name="username" placeholder="example@email.com" style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} />
              {showErrorMessage && (
                <div className="error-message" id="error-message" style={{ position: 'absolute', backgroundColor: 'red', color: 'white', padding: '2px', borderRadius: '5px', zIndex: '1', top: '-30px', left: '0', width: '100%', textAlign: 'center' }}>Invalid credentials. Try again.</div>
              )}
            </div>
            <input type="password" id="password" name="password" placeholder="password" style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
            <input type="submit" value="Login" style={{ backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} disabled />
          </form>
          <div className="application-quote" style={{ textAlign: 'center', fontStyle: 'italic' }}>
            <p>"Secure Banking for a Better Tomorrow"</p>
          </div>
        </div>

        <div className="logs" style={{ width: '400px', height: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff', top: '30px' }}>
          <div className="section-title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px'}}>Logs</div>
          <div className="logs-body" style={{ height: 'calc(100% - 40px)', overflowY: 'auto', padding: '10px', backgroundColor: '#000', border: '1px solid #ccc', borderRadius: '5px' }}>
            {/* Placeholder for logs */}
          </div>
        </div>

        <div className="footer" style={{ width: '200px', height: '200px', backgroundColor: 'transparent', border: '0px solid black', position: 'absolute', bottom: '250px', display: 'flex', alignItems: 'left', justifyContent: 'center', left: 'calc(50% - 100px + 500px)' }}>
          <span className="footer-text" style={{ color: 'black', textAlign: 'left' }}>
            <div className="code" style={{ width: '100%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#000' }}>
              <div className="section-title" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>Code</div>
              <div className="code-body" style={{ height: 'calc(100% - 40px)', overflowY: 'auto', padding: '10px', backgroundColor: '#000', border: '1px solid #ccc', borderRadius: '5px', color: '#fff' }}>
                <pre style={{ margin: 0 }}>
                  <code style={{ color: '#fff' }}>
                    SELECT * <br />
                    FROM users <br />
                    WHERE email = '{usernameValue}' <br />
                    AND pass  = '{passwordValue}'
                  </code>
                </pre>
              </div>
            </div>
          </span>
        </div>
      </div>

      <div className="footer" style={{ width: '200px', height: '200px', backgroundColor: 'white', border: '2px solid black', position: 'absolute', bottom: '162.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', left: 'calc(50% - 100px - 300px - 300px + 150px)' }}>
        <span className="footer-text" style={{ color: 'black', textAlign: 'center' }}>
          <p>
            Enter the password password' and watch the code window.
          </p>
          <button onClick={() => navigate('/SqlSeventh')}>Next</button>
        </span>
      </div>
    </div>
  );
};

export default SqlSixth;
