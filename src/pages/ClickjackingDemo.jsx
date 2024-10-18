import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClickjackingDemo.css';


const QuizComponent = ({ onQuizComplete }) => {
  
  const questions = [
    {
      question: "What is clickjacking?",
      options: ["A type of phishing attack", "Embedding a page within another page to deceive users", "A script that clicks on behalf of the user", "All of the above"],
      answer: 1,
    },
    {
      question: "How can websites prevent being embedded by clickjackers?",
      options: ["Using CAPTCHA", "Implementing strong passwords", "Setting X-Frame-Options header", "Regularly updating content"],
      answer: 2,
    },
    {
      question: "What does the 'SAMEORIGIN' value in the X-Frame-Options header do?",
      options: ["Allows the page to be framed from any source", "Prevents the page from being framed at all", "Allows the page to be framed only by the same origin", "Disables framing protections"],
      answer: 2,
    },
    {
      question: "What role does Content Security Policy (CSP) play in preventing clickjacking?",
      options: ["Blocks all JavaScript", "Restricts the origins that can embed the page", "Encrypts the website's content", "None of the above"],
      answer: 1,
    },
    {
      question: "Which of the following is a potential consequence of clickjacking?",
      options: ["Overloading the server", "Stealing user credentials", "Speeding up website performance", "Improving website security"],
      answer: 1,
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (optionIndex) => {
    if (questions[currentQuestionIndex].answer === optionIndex) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  return showResults ? (
    <div>
      <h2>You scored {score} out of {questions.length}</h2>
      {score === questions.length ? (
        <button onClick={() => onQuizComplete(1)}>Proceed to Certificate</button>
      ) : (
        <>
          <p>You must score 5/5 to proceed.</p>
          <button onClick={() => onQuizComplete(0)}>Retake Quiz</button>
        </>
      )}
    </div>
  ) : (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <button key={index} onClick={() => handleOptionClick(index)} style={{ display: 'block', margin: '10px 0' }}>
          {option}
        </button>
      ))}
    </div>
  );
};

const ClickjackingDemo = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [iframeSrc, setIframeSrc] = useState('https://spinthewheel.io/wheels/4T49XxONxses1HnLpRE6cz0xJmU9MA==');
  const [xFrameOption, setXFrameOption] = useState('SAMEORIGIN');
  const [cspEffect, setCspEffect] = useState(true);
  const [quizKey, setQuizKey] = useState(0);
  

  const handleQuizCompletion = (action) => {
    if (action === 1) {
      
      navigate('/prevention');
    } else {
      setQuizKey(prevKey => prevKey + 1); // Increment to reset quiz
      setStep(steps.length - 1); // Ensure this points to the quiz step
    }
  };

  const steps = [
    {
      title: "Introduction to Clickjacking",
      content: "This demo shows how an attacker could exploit a website using clickjacking.",
      iframe: false,
      overlay: false,
      buttonText: "Start Demo",
    },
    {
      title: "Legitimate Website",
      content: <div><p>Clickjacking attacks often begin with seemingly innocent emails. These messages contain links that lure individuals to fake websites designed to mimic legitimate ones. The danger lies not in the site itself, but in the <b>invisible layers</b> attackers have craftily embedded over the site's content.</p></div>,
      iframe: false,
      overlay: false,
      buttonText: "Next",
    },
    {
      title: "Embedding with an Iframe",
      content: "The attacker's site embeds the legitimate site in an iframe, making it appear as if the user is interacting with the real site. This is the website before the invisible layer. Interact with it and see how it works.",
      iframe: true,
      overlay: false,
      buttonText: "Next",
    },
    {
      title: "The Invisible Overlay",
      content: "An invisible div with a higher z-index is placed over the iframe. This div can be wrapped in a link, redirecting users to a malicious site when they think they're interacting with the legitimate site. In a real example, the background color would be set to transparent.",
      iframe: true,
      overlay: true,
      buttonText: "Next",
    },
    {
      title: "Clickjacking Attack",
      content: "When users click on what they think is the legitimate site, they're actually interacting with the overlay, which can lead them to a different site entirely. In this example, the user is redirected to a website that pretends to steal information. However, in a real malicious attack, the user may be redirected to a phishing site, have their personal information stolen, or inadvertently perform actions they didn't intend to.",
      iframe: true,
      buttonText: "Prevention Techniques",
    },
    {
      title: "Prevention 1: Interact with X-Frame-Options",
      content: "Toggle X-Frame-Options to simulate its effect. 'DENY' prevents the page from being framed, while 'SAMEORIGIN' allows framing by the same origin. These are the Two lines of code that can be added:",
      codeSnippet: `X-Frame-Options: DENY; \n OR \nX-Frame-Options: SAMEORIGIN;`,
      iframe: true,
      overlay: false,
      buttonText: "Next",
      interaction: 'xFrameOptions',
    },
    {
      title: "Prevention 2: Toggle Content Security Policy (CSP)",
      content: "Enable or disable CSP to see how it can prevent or allow the page from being embedded in an iframe. When CSP is enabled the page can only be displayed in a frame on the same origin. Below is the line of code for CSP to add: ",
      codeSnippet: "Content-Security-Policy: default-src 'self';",
      iframe: true,
      overlay: false,
      buttonText: "Quiz",
      interaction: 'csp',
    },
    {
      title: "Quiz: Test Your Knowledge",
      content: <QuizComponent key={quizKey} onQuizComplete={handleQuizCompletion} />,
      quiz: true,
    }
    
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      
    }
  };

  const simulateAttack = () => {
    setIframeSrc('https://pranx.com/fake-virus/');
  };

  const handleXFrameOptionChange = (event) => {
    setXFrameOption(event.target.value);
  };

  const handleCspToggle = () => {
    setCspEffect(!cspEffect);
  };

  useEffect(() => {
    setXFrameOption('SAMEORIGIN');
    setCspEffect(true);
  }, [step]);


  return (
    <div className="clickjacking-demo" style={{ textAlign: 'center', maxWidth: '960px', margin: 'auto', paddingTop: '20px' }}>
      <h2>{steps[step].title}</h2>
      <div>{typeof steps[step].content === 'string' ? steps[step].content : steps[step].content}</div>
      {steps[step].codeSnippet && (
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', margin: '20px 0' }}>
          <code>{steps[step].codeSnippet}</code>
        </pre>
      )}
      {step === 0 && (
        <img src="images/click2.png" alt="click2" className="imageFadeIn" style={{ maxWidth: '100%', height: 'auto', margin: '20px 0'}}/>
      )}
      {step === 1 && (
        <img src="images/spinwheel2.png" alt="spinwheel" className="imageFadeIn" style={{ maxWidth: '100%', height: 'auto', margin: '20px 0'}}/>
      )}
      {step === 3 && (
        <img src="images/clickjackcode.png" alt="clickhere" className="imageFadeIn" style={{ maxWidth: '100%', height: 'auto', margin: '20px 0'}}/>
      )}

    
      {steps[step].iframe && (
        <div style={{ position: 'relative', display: 'inline-block', width: '800px', height: '600px' }}> 
          {(xFrameOption !== 'DENY' && cspEffect) && (
            <iframe src={iframeSrc} title="Legitimate Site" style={{ width: '100%', height: '600px', border: '1px solid black' }}></iframe>
          )}
          {(xFrameOption === 'DENY' || !cspEffect) && (
            <div style={{ width: '100%', height: '600px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f4f4f4' }}>
              <p>Website cannot be framed due to security policies.</p>
            </div>
          )}
          {steps[step].overlay && step === 3 && (
          <div className="overlaySlideIn" onClick={simulateAttack} style={{
              position: 'absolute',
              top: '13%', 
              left: '18%',
              width: '510px', 
              height: '510px', 
              borderRadius: '50%',
              zIndex: 10,
              cursor: 'pointer',
              backgroundColor: 'rgba(0, 0, 255, 0.5)',
            }}
          ></div>
        )}
        </div>
      )}
      {steps[step].interaction === 'xFrameOptions' && (
  <select
    onChange={handleXFrameOptionChange}
    value={xFrameOption}
    className="select-below-iframe" // Using the class for styling
  >
    <option value="DENY">DENY</option>
    <option value="SAMEORIGIN">SAMEORIGIN</option>
  </select>
)}

      {steps[step].interaction === 'csp' && (
        <button onClick={handleCspToggle}>{cspEffect ? "Disable CSP" : "Enable CSP"}</button>
      )}
      {step < steps.length - 1 && (
        <button onClick={nextStep} style={{ marginTop: '20px' }}>
          {steps[step].buttonText}
        </button>
      )}
    </div>
  );
};

export default ClickjackingDemo;
