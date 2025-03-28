import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClickjackingDemo';

const SqlQuiz = ({ onQuizComplete }) => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is SQL injection?",
      options: ["A technique to insert malicious SQL code into a query", "A method to securely authenticate users", "A way to optimize SQL queries", "A type of database management system"],
      answer: 0,
    },
    {
      question: "Which of the following statements describes a SQL injection vulnerability?",
      options: ["Using prepared statements", "Escaping user inputs", "Concatenating SQL queries with user inputs without validation", "Using strong passwords"],
      answer: 2,
    },
    {
      question: "What is the potential risk of SQL injection?",
      options: ["Data loss", "Server overload", "Improved website performance", "Enhanced user experience"],
      answer: 0,
    },
    {
      question: "How can SQL injection attacks be prevented?",
      options: ["By using weak authentication mechanisms", "By implementing parameterized queries", "By exposing database credentials", "By ignoring security best practices"],
      answer: 1,
    },
    {
      question: "Which of the following is NOT a common defense against SQL injection?",
      options: ["Input validation", "Using ORM frameworks", "Using stored procedures", "Encrypting database contents"],
      answer: 3,
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

  const handleQuizCompletion = (action) => {
    if (action === 1) {
      // Navigate to the SqlPrevention page
      navigate('/sqlPrevention');
    } else {
      // Reset quiz
      setCurrentQuestionIndex(0);
      setScore(0);
      setShowResults(false);
    }
  };

  const handlePreviousClick = () => {
    // Navigate to the AttackOne page
    navigate('/attackOne');
  };

  return showResults ? (
    <div className="clickjacking-demo">
      <h2>You scored {score} out of {questions.length}</h2>
      {score === questions.length ? (
        <>
          <button onClick={() => handleQuizCompletion(1)}>Proceed to Certificate</button>
          <button onClick={handlePreviousClick}>Previous</button>
        </>
      ) : (
        <>
          <p>You must score 5/5 to proceed.</p>
          <button onClick={() => handleQuizCompletion(0)}>Retake Quiz</button>
          <button onClick={handlePreviousClick}>Previous</button>
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

export default SqlQuiz;
