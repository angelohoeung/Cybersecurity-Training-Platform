import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ClickjackingDemo';

const XssQuiz = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is Cross-Site Scripting (XSS)?",
      options: [
        "a) A method of encrypting data",
        "b) A method to store user data safely",
        "c) A way to improve website performance",
        "d) A vulnerability that allows attackers to inject malicious scripts into a website"
      ],
      answer: 3,
    },
    {
      question: "Why is Cross-Site Scripting (XSS) dangerous?",
      options: [
        "a) It makes websites load slower.",
        "b) It allows attackers to inject malicious scripts that can steal data, perform actions on behalf of users, or redirect them to harmful sites.",
        "c) It can crash the website’s server.",
        "d) It improves website functionality by adding animations."
      ],
      answer: 1,
    },
    {
      question: "Which of the following is a technique to protect against XSS attacks?",
      options: [
        "a) Allowing all HTML tags to be used in input fields",
        "b) Only allowing specific users to access the website",
        "c) Disabling the use of JavaScript entirely",
        "d) Escaping dynamic content and sanitizing user input"
      ],
      answer: 3,
    },
    {
      question: "What type of XSS attack occurs when malicious JavaScript is injected and stored in a website’s backend?",
      options: [
        "a) DOM-based XSS",
        "b) Reflected XSS",
        "c) Stored XSS",
        "d) None of the above"
      ],
      answer: 2,
    },
    {
      question: "What is the main purpose of the escapeHTML() function?",
      options: [
        "a) To encrypt user data.",
        "b) To store user data in a database.",
        "c) To escape special characters and prevent input from being executed as code.",
        "d) To validate form submissions"
      ],
      answer: 2,
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

  const handleDownloadCertificate = () => {
    const certificateUrl = "/images/certificate1.png";
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = 'certificate.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const audio = new Audio('/sounds/Sound Effects - Fireworks.mp3');
    audio.play();
  };

  const handleQuizCompletion = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  return showResults ? (
    <div className="clickjacking-demo">
      <h2>You scored {score} out of {questions.length}</h2>
      {score === questions.length ? (
        <>
          <img 
            src="../images/xssCertificate.png" 
            alt="Certificate of Completion" 
            className="clickjacking-image"
          />
          <button onClick={handleDownloadCertificate}>Download Certificate</button>
          <button onClick={() => navigate('/home')}>Return to Home</button>
        </>
      ) : (
        <>
          <p>You must score 5/5 to proceed.</p>
          <button onClick={handleQuizCompletion}>Retake Quiz</button>
        </>
      )}
    </div>
  ) : (
    <div className="clickjacking-demo">
      <h2>{questions[currentQuestionIndex].question}</h2>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <button key={index} onClick={() => handleOptionClick(index)} className="option-button">
          {option}
        </button>
      ))}
    </div>
  );
};

export default XssQuiz;
