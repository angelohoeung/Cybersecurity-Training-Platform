// DoSAttackDemo.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ClickjackingDemo.css";
const dosIntro = "/images/dos_intro.png";
const dosTypes = "/images/dos_types.webp";
const dosWork = "/images/dos_work.webp";
const dosMitigation = "/images/dos_mitigation.jpg";
const dosDemoGood = "/images/dos_demo_good.png";
const dosDemoBad = "/images/dos_demo_bad.png";


const DoSAttackDemo = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [netmask, setNetmask] = useState("");
  const [result, setResult] = useState("");
  const [imageSrc, setImageSrc] = useState(dosDemoBad);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalScore, setFinalScore] = useState(null);

  const validSubnets = ["10.0.0.0/8"];

  const quizQuestions = [
    {
      question: "What does a DoS attack aim to do?",
      options: [
        "Enhance server performance",
        "Disrupt service availability",
        "Optimize network traffic",
        "Secure user authentication",
      ],
      answer: 1,
    },
    {
      question: "Which of the following is a mitigation strategy for DoS attacks?",
      options: [
        "Increase server load",
        "Deploy Web Application Firewalls (WAF)",
        "Remove firewalls",
        "Reduce bandwidth",
      ],
      answer: 1,
    },
    {
      question: "What is an example of a protocol-based DoS attack?",
      options: [
        "TCP SYN Flood",
        "SQL Injection",
        "Cross-Site Scripting",
        "Phishing",
      ],
      answer: 0,
    },
    {
      question: "Which layer does a volumetric DoS attack primarily target?",
      options: [
        "Application Layer",
        "Presentation Layer",
        "Network Layer",
        "Session Layer"
      ],
      answer: 2,
    },
    {
      question: "Why are botnets commonly used in DoS attacks?",
      options: [
        "They reduce costs",
        "They encrypt traffic",
        "They amplify traffic volume from multiple sources",
        "They protect the victim"
      ],
      answer: 2,
    },
    {
      question: "What’s a sign your system might be under a DoS attack?",
      options: [
        "Increased login success rates",
        "High availability of resources",
        "Sudden spikes in network or CPU usage",
        "Decrease in incoming connections"
      ],
      answer: 2,
    },    
  ];

  const steps = [
    {
      title: "Introduction to DoS Attacks",
      content: (
        <p>
          A Denial of Service (DoS) attack is an attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming it with a flood of internet traffic.
        </p>
      ),
      image: dosIntro,
      buttonText: "Next",
    },
    {
      title: "Types of DoS Attacks",
      content: (
        <ul>
          <li><strong>Volumetric Attacks:</strong> Use massive volumes of traffic to saturate bandwidth.</li>
          <li><strong>Protocol Attacks:</strong> Exploit weaknesses in protocols like TCP, HTTP, or DNS.</li>
          <li><strong>Application Layer Attacks:</strong> Target specific applications or services with resource-intensive requests.</li>
        </ul>
      ),
      image: dosTypes,
      buttonText: "Next",
    },
    {
      title: "How DoS Attacks Work",
      content: (
        <p>
          Attackers use various methods, including botnets, to flood servers with requests. The goal is to exhaust the target's resources, causing legitimate requests to be delayed or dropped.
        </p>
      ),
      image: dosWork,
      buttonText: "Next",
    },
    {
      title: "Mitigation Strategies",
      content: (
        <ul>
          <li>Implement traffic filtering using firewalls and access control lists.</li>
          <li>Use rate-limiting to prevent excessive requests from one IP.</li>
          <li>Deploy Web Application Firewalls (WAF) for application layer protection.</li>
          <li>Monitor traffic patterns for anomalies.</li>
        </ul>
      ),
      image: dosMitigation,
      buttonText: "Next",
    },
    {
      title: "Interactive Demo: Block Harmful Traffic",
      content: (
        <div>
          <p>
            Your company has been facing connectivity issues as employees can't access the internal portal. Upon investigation, you detect high-volume requests from <strong>10.8.0.10</strong> and <strong>10.0.8.10</strong>. Blacklist the subnet to mitigate the attack while keeping valid traffic flowing.
          </p>
          <input
            type="text"
            placeholder="Enter netmask (e.g., 10.0.0.0/8)"
            value={netmask}
            onChange={(e) => setNetmask(e.target.value)}
            style={{ padding: "10px", marginBottom: "10px", width: "80%" }}
          />
          <button
            onClick={() => {
              if (validSubnets.includes(netmask.trim())) {
                setResult("Success! Harmful traffic blocked.");
                setImageSrc(dosDemoGood);
              } else {
                setResult("Incorrect netmask. Try again.");
                setImageSrc(dosDemoBad);
              }
            }}
            style={{ padding: "10px" }}
          >
            Test Netmask
          </button>
          {result && <p>{result}</p>}
        </div>
      ),
      image: imageSrc,
      buttonText: "Proceed to Quiz",
    },
    {
      title: "Quiz: Test Your Knowledge",
      content: (
        finalScore === null ? (
          <div>
            <p>{quizQuestions[currentQuestion].question}</p>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuizAnswers([...quizAnswers, index]);
                  if (currentQuestion < quizQuestions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                  } else {
                    const score = quizAnswers.filter((answer, idx) => answer === quizQuestions[idx].answer).length + (index === quizQuestions[currentQuestion].answer ? 1 : 0);
                    setFinalScore(score);
                  }
                }}
                style={{ margin: "10px" }}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <p>Your Score: {finalScore}/{quizQuestions.length}</p>
            {finalScore === quizQuestions.length ? (
              <button onClick={() => navigate("/dosattack/certificate")} style={{ margin: "10px" }}>
                Proceed to Certificate
              </button>
            ) : (
              <button onClick={() => {
                setQuizAnswers([]);
                setCurrentQuestion(0);
                setFinalScore(null);
              }} style={{ margin: "10px" }}>
                Retake Quiz
              </button>
            )}
            <button onClick={() => navigate("/home")} style={{ margin: "10px" }}>
              Back to Home
            </button>
          </div>
        )
      ),
      buttonText: "Finish",
    },
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="clickjacking-demo" style={{ textAlign: "center", maxWidth: "960px", margin: "auto", paddingTop: "20px" }}>
      <h2>{steps[step].title}</h2>
      <div>{steps[step].content}</div>
      {steps[step].image && (
        <img
          src={steps[step].image}
          alt={steps[step].title}
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      )}
      <div>
        {step > 0 && <button onClick={prevStep} style={{ margin: "10px" }}>Previous</button>}
        {step < steps.length - 1 && <button onClick={nextStep} style={{ margin: "10px" }}>{steps[step].buttonText}</button>}
        {step === steps.length - 1 && (
          <button onClick={() => navigate("/home")} style={{ margin: "10px" }}>
            Back to Home
          </button>
        )}
      </div>
    </div>
  );
};

export default DoSAttackDemo;
