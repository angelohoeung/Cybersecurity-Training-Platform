import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './xssPrevention.css'; // Ensure correct styling

const EmailspoofQuiz = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is email spoofing?",
      options: [
        "a) A technique used to encrypt email messages.",
        "b) A method where attackers forge the sender's email address to appear as a trusted source.",
        "c) A process for verifying the authenticity of email addresses.",
        "d) A tool to block malicious attachments in emails."
      ],
      answer: 1,
    },
    {
      question: "Which of the following is a technique used to detect email spoofing?",
      options: [
        "a) Ignoring all email attachments.",
        "b) Checking for lookalike domains or slight modifications in the email address.",
        "c) Trusting all emails that come from your contacts.",
        "d) Only opening emails that are marked as important."
      ],
      answer: 1,
    },
    {
      question: "What is the best way to verify the authenticity of a link in an email before clicking?",
      options: [
        "a) Hover over the link to see the actual destination",
        "b) Click on the link to see where it redirects you",
        "c) Ignore the link and close the email",
        "d) Reply to the email asking if the link is safe"
      ],
      answer: 0,
    },
    {
      question: "Which action can help reduce the risk of your email being used for spoofing?",
      options: [
        "a) Using a unique password for each account",
        "b) Enabling Multi-Factor Authentication (MFA)",
        "c) Always forwarding suspicious emails to others",
        "d) Deleting all emails from unknown senders"
      ],
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

  const handleDownloadCertificate = () => {
    const certificateUrl = "/images/EmailspoofCertificate.png";
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
            src="/images/EmailspoofCertificate.png" 
            alt="Certificate of Completion" 
            className="certificate-image"
          />
          <button onClick={handleDownloadCertificate}>Download Certificate</button>
          <button onClick={() => navigate('/home')}>Return to Home</button>
        </>
      ) : (
        <>
          <p>You must score 4/4 to proceed.</p>
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

export default EmailspoofQuiz;

