import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClickjackingDemo.css';


const QuizComponent = ({ onQuizComplete }) => {
  
  const questions = [
    {
      question: "What is the purpose of malvertising?",
      options: [
        "To improve website performance",
        "To provide users with relevant ads",
        "To steal user information through fake ads",
        "To enhance online security"
      ],
      answer: 2,
    },
    {
      question: "True or False: Legitimate advertisements can never be used for malvertising.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      question: "How do attackers typically display malvertisements?",
      options: [
        "By sending emails to users",
        "By asking for user permission",
        "By embedding malicious code within ads on websites",
        "By enhancing website encryption"
      ],
      answer: 2,
    },
    {
      question: "What can happen when a user clicks on a malvertisement?",
      options: [
        "They are asked to complete a survey",
        "They download malware or are redirected to a harmful site",
        "They are redirected to a safe website",
        "Their browsing speed increases"
      ],
      answer: 1,
    },
    {
      question: "True or False: AI ad blockers can detect malvertisements based on known blacklists alone.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      question: "What is a requirement for implementing AI-driven ad blockers?",
      options: [
        "A small dataset of webpage elements",
        "Basic feature extraction processes",
        "Manual updates to the model",
        "A well-defined machine learning model"
      ],
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

  return showResults ? (
    <div>
      <h2>You scored {score} out of {questions.length}</h2>
      {score === questions.length ? (
        <button onClick={() => onQuizComplete(1)}>Proceed to Certificate</button>
      ) : (
        <>
          <p>You must score 6/6 to proceed.</p>
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

const Malvertisingdemo = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [quizKey, setQuizKey] = useState(0);
  const [imgSrc, setImgSrc] = useState('images/malvertisingfive.png');
  const [buttonText, setButtonText] = useState('Enable ad blocker');
  
  const handleQuizCompletion = (action) => {
    if (action === 1) {
      
      navigate('/Malprevention');
    } else {
      setQuizKey(prevKey => prevKey + 1); // Increment to reset quiz
      setStep(steps.length - 1); // Ensure this points to the quiz step
    }
  };

  const steps = [
    {
      title: "Introduction to Malvertising",
      content: "This demo shows how a person or website can use advertisements to steal your information.",
      buttonText: "Start Demo",
    },
    {
      title: "Legitimate vs Fake Advertisement",
      content: <div><p>Consider legitimate advertisements you have seen in the past , a hacker would create a <b>FAKE</b> advertisement to catch your attention and make you find out more information. Once you click on
      the fake advertisement you would be redirected to an external page where the hacker would install malware on your device and take whatever they want.</p></div>,
      buttonText: "Next",
    },
    {
      title: "Displaying the advertisment",
      content: <div><p>Attackers craftily embed malicious code within advertisements, making them appear legitimate. These malvertisements are then strategically placed on websites where unsuspecting users frequently 
        click. Unbeknownst to the user, interacting with these ads triggers the hidden code, redirecting them to harmful sites or initiating unwanted download. Notice the website below and how the advertisements are 
        from legitimate companies such as IBM, Nissan, and Jaguar</p></div>,
      buttonText: "Next",
    },
    {
      title: "The Embeded Code",
      content: <div><p>Attackers often exploit vulnerabilities in software or deceive users into downloading seemingly benign files. Once executed, these files unleash malware that can stealthily infiltrate systems, 
        wreak havoc, or pilfer sensitive data, all while masquerading as harmless applications or updates.In this example, the attackers disguise the download link as a free antivirus button, but it actually leads 
        to a malicious executable file that contains malware. When users click the button thinking they are downloading antivirus software, they unknowingly download and install malware onto their system.</p></div>,
        codeSnippet: `<a href="http://malicious-site.com/malware.exe" download> <button>BUY HERE</button> </a>`,
      buttonText: "Next",
    },
    {
      title: "Malvertising Attack",
      content: <div><p>When users interact with what they believe to be a trustworthy ad, they are unknowingly triggering the concealed malicious code. This can stealthily redirect them to harmful sites or initiate the 
        download of malware, all while giving the illusion of engaging with a legitimate advertisement.</p><p><hr></hr>In this example, each advertisement that you click will direct you to a site or download a file to your
        computer</p></div>,
      buttonText: "Prevention Techniques",
    },
    {
      title: "Prevention: Using AI driven ad blockers",
      content: <div><p>AI ad blockers use machine learning to analyze web content and behavioral patterns in real-time, identifying and blocking malvertisements based on anomalies rather than relying solely on known blacklists.
        They continuously learn from new data, improving their ability to detect even the most cleverly disguised malicious ads. </p>

        <p>This code is oversimplified and purely illustrative. A real-world implementation would require:</p>
        <ul style={{ textAlign: 'left', listStylePosition: 'inside' }}>
          <li>A large and diverse dataset of labeled webpage elements to train the model.</li>
          <li>A sophisticated feature extraction process that can analyze numerous aspects of a webpage element.</li>
          <li>A well-defined machine learning model, likely a deep learning model, that can accurately classify elements based on the extracted features.</li>
          <li>A mechanism to update the model regularly as new data is collected.</li>
        </ul>
        <p>AI ad blockers are typically not something that can be easily implemented with just a few lines of code but require a complex system with a backend that can process large amounts of data and machine learning infrastructure.</p>
      </div>,
      buttonText: "Next",
    },
    {
      title: "Prevention: Using AI driven ad blockers",
      content: <div><p>Implementing AI-based ad blockers is a straightforward and effective solution for enhancing your online security. All you need to do is download and enable the ad blocker on your 
        browser or device. Once activated, the AI-powered tool diligently works in the background, analyzing web content in real time. When you visit websites laden with malvertisements, the ad blocker 
        intelligently identifies and blocks these deceptive pop-ups, ensuring a safer browsing experience without the intrusion of harmful ads. This proactive approach not only protects your device from 
        potential malware but also enhances your overall browsing experience by eliminating unwanted distractions. AI ad blockers prevent malvertisements by analyzing web content in real-time, blocking 
        requests to suspicious URLs, disabling malicious scripts, and removing harmful ad elements from webpages, ensuring a safer browsing experience for users.</p>
      </div>,
      buttonText: "Quiz",
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
  
  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const switchImage = () => {
    if (imgSrc === 'images/malvertisingfive.png') {
      setImgSrc('images/malclean.png');
      setButtonText('Disable ad blocker');
    } else {
      setImgSrc('images/malvertisingfive.png');
      setButtonText('Enable ad blocker'); 
    }
  };

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
        <img src="images/Malvertisingtwo.svg" alt="malvertising2" className="imageFadeIn" style={{ maxWidth: '100%', height: 'auto', margin: '20px 0'}}/>
      )}
      {step === 1 && (
        <img src="images/malvertisingthree.png" alt="malvertising3" className="imageFadeIn" style={{ maxWidth: '100%', height: 'auto', margin: '20px 0'}}/>
      )}
      {step === 2 && (
        <img src="images/malvertisingfour.png" alt="malvertising4" className="imageFadeIn" style={{ maxWidth: '100%', height: 'auto', margin: '20px 0'}}/>
      )}
      {step === 3 && (
        <img src="images/malvertisingfive.png" alt="malvertising5" className="imageFadeIn" style={{ maxWidth: '100%', height: 'auto', margin: '20px 0'}}/>
      )}
      {step === 4 && (
        <img src="images/malvertisingfive.png" useMap="#adMap" alt="malvertising5" className="imageFadeIn" style={{ maxWidth: '100%', height: 'auto', margin: '20px 0'}}/>
      )}
      {step === 5 && (
        <img src="images/Aicode.png" alt="malvertising6" className="imageFadeIn" style={{ maxWidth: '100%', height: 'auto', margin: '20px 0'}}/>
      )}
      {step === 6 && (
        <img src={imgSrc} useMap="#adMap" alt="malvertising5" className="imageFadeIn" style={{ maxWidth: '100%', height: 'auto', margin: '20px 0'}}/>
      )}
      {step === 6 && (
        <button onClick={switchImage} style={{ marginTop: '20px' }}>
          {buttonText}
        </button>
      )}

      <map name="adMap">
        <area
          shape="rect"
          coords="158,21,356,317"
          href="https://www.youtube.com/watch?v=FPcsJTxnaBQ"
          target='_blank'
          alt="Fake Ad 1"
        
        />
        <area
          shape="rect"
          coords="165,322,353,480" 
          href="images/ubeenhacked.jpg" 
          download
          alt="Fake Ad 2"
        />
        <area
          shape="rect"
          coords="255,28,480,162" 
          href="https://hackertyper.net/"
          target='_blank'
          alt="Fake Ad 3"
        />
        <area
          shape="rect"
          coords="800,54,1011,229"
          href="images/ubeenhacked2.jpg" 
          download
          alt="Fake Ad 4"
        />
        <area
          shape="rect"
          coords="801,231,1008,406" 
          href="https://www.ctvnews.ca/world/behind-the-doors-of-a-chinese-hacking-company-a-sordid-culture-fuelled-by-influence-alcohol-and-sex-1.6799679"
          target='_blank'
          alt="Fake Ad 5"
        />
        <area
          shape="rect"
          coords="466,444,655,534" 
          href="https://www.uwindsor.ca/"
          target='_blank'
          alt="Fake Ad 6"
        />
      </map>


      {/* Render the Next button unless it's the last step */}
      {step < steps.length - 1 && (
        <button onClick={nextStep} style={{ marginTop: '20px' }}>
          {steps[step].buttonText}
        </button>
      )}

      {/* Render the Previous button unless it's the first step */}
      {step > 0 && (
        <button onClick={prevStep} style={{ marginTop: '20px' }}>
          Previous
        </button>
      )}
    </div>
  );
};

export default Malvertisingdemo;
