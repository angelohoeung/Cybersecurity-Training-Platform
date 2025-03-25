import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ClickjackingDemo.css";

const QuizComponent = ({ onQuizComplete }) => {
  const questions = [
    {
      question: "What is Regex Injection?",
      options: [
        "A technique to enhance search efficiency",
        "A method to sanitize user input",
        "A vulnerability where unsanitized regex input is exploited",
        "A process to improve form validation",
      ],
      answer: 2,
    },
    {
      question:
        "True or False: Regex injection can cause Denial of Service (DoS) attacks.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      question:
        "Which of the following is a potential risk of regex injection?",
      options: [
        "Improved user authentication",
        "Execution of arbitrary code",
        "Increased website performance",
        "Better input validation",
      ],
      answer: 1,
    },
    {
      question: "What is the best way to prevent regex injection?",
      options: [
        "Allow user-defined regex",
        "Sanitize and validate all user inputs",
        "Avoid using regex altogether",
        "Increase server resources",
      ],
      answer: 1,
    },
    {
      question:
        "True or False: Regex injection is harmless if input length is limited.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      question: "Which function is most vulnerable to regex injection?",
      options: [
        "Input sanitization functions",
        "String comparison functions",
        "Regex-based pattern matching functions",
        "Mathematical operations",
      ],
      answer: 2,
    },
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
      <h2>
        You scored {score} out of {questions.length}
      </h2>
      {score === questions.length ? (
        <button onClick={() => onQuizComplete(1)}>
          Proceed to Certificate
        </button>
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
        <button
          key={index}
          onClick={() => handleOptionClick(index)}
          style={{ display: "block", margin: "10px 0" }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const RegexBenchmarkDemo = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState("");

  const runTest = (mode) => {
    setIsProcessing(true);
    setResult("");

    try {
      const worker = new Worker(new URL("./RegexWorker.js", import.meta.url));
      const pattern = mode === "vulnerable" ? "(a+)+$" : "a+$";
      const testString = "aaaaaaaaaaaaaaaaaaaaaaaa!"; // designed to cause backtracking

      worker.postMessage({ pattern, testString });

      worker.onmessage = (e) => {
        if (e.data.error) {
          setResult(`Error: ${e.data.error}`);
        } else {
          setResult(
            `Test completed. Execution took approximately ${e.data.duration} ms.`
          );
        }
        setIsProcessing(false);
        worker.terminate();
      };
    } catch (error) {
      setResult("Error creating worker.");
      setIsProcessing(false);
    }
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "left" }}>
      <p>
        <strong>Mitigation Tip:</strong> Only allow non-complex regex patterns
        and consider using timeouts.
      </p>
      <p>Test the regex vulnerability:</p>
      <button
        onClick={() => runTest("vulnerable")}
        disabled={isProcessing}
        style={{ marginLeft: "10px" }}
      >
        Run Vulnerable Test
      </button>
      <button
        onClick={() => runTest("safe")}
        disabled={isProcessing}
        style={{ marginLeft: "10px" }}
      >
        Run Safe Test
      </button>
      {isProcessing ? <p>Processing…</p> : result && <p>{result}</p>}
    </div>
  );
};

const InteractivePlayground = () => {
  const [pattern, setPattern] = useState("");
  const [testString, setTestString] = useState("");
  const [benchmarkResult, setBenchmarkResult] = useState("");
  const [timeoutValue, setTimeoutValue] = useState(1000); // timeout in ms

  const runBenchmark = () => {
    setBenchmarkResult("Running regex test...");
    try {
      const worker = new Worker(new URL("./RegexWorker.js", import.meta.url));
      worker.postMessage({ pattern, testString });

      let finished = false;
      const timeoutId = setTimeout(() => {
        if (!finished) {
          worker.terminate();
          setBenchmarkResult(`Execution timed out after ${timeoutValue} ms.`);
        }
      }, timeoutValue);

      worker.onmessage = (e) => {
        finished = true;
        clearTimeout(timeoutId);
        if (e.data.error) {
          setBenchmarkResult(`Error: ${e.data.error}`);
        } else {
          setBenchmarkResult(
            `Execution took approximately ${e.data.duration} ms.`
          );
        }
        worker.terminate();
      };
    } catch (error) {
      setBenchmarkResult("Invalid regex pattern");
    }
  };

  return (
    <div style={{ textAlign: "left" }}>
      <p>
        <strong>Mitigation Tip:</strong> Avoid complex regex patterns and adjust
        the timeout as needed.
      </p>
      <div>
        <label>
          Regex Pattern:
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            style={{ marginLeft: "10px", width: "300px" }}
            placeholder="Enter non-complex regex"
          />
        </label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>
          Test String:
          <input
            type="text"
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            style={{ marginLeft: "10px", width: "300px" }}
          />
        </label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>
          Timeout (ms):
          <input
            type="number"
            value={timeoutValue}
            onChange={(e) => setTimeoutValue(parseInt(e.target.value, 10))}
            style={{ marginLeft: "10px", width: "150px" }}
          />
        </label>
      </div>
      {benchmarkResult && <p>{benchmarkResult}</p>}
      <button onClick={runBenchmark} style={{ marginTop: "10px" }}>
        Test Pattern
      </button>
    </div>
  );
};

const RegexInjectionDemo = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [quizKey, setQuizKey] = useState(0);
  const [imgSrc, setImgSrc] = useState("../images/regex_vulnerable.png");
  const [buttonText, setButtonText] = useState("Enable Regex Sanitizer");

  const switchImage = () => {
    if (imgSrc === "../images/regex_vulnerable.png") {
      setImgSrc("../images/regex_sanitized.png");
      setButtonText("Disable Regex Sanitizer");
    } else {
      setImgSrc("../images/regex_vulnerable.png");
      setButtonText("Enable Regex Sanitizer");
    }
  };

  const handleQuizCompletion = (action) => {
    if (action === 1) {
      navigate("/regexinjection/certificate");
    } else {
      setQuizKey((prevKey) => prevKey + 1);
      setStep(steps.length - 1);
    }
  };

  const steps = [
    {
      title: "Introduction to Regex Injection",
      content: (
        <div>
          <p>
            Regular expressions (regex) are patterns used to match character
            combinations in strings. They are widely used for search, replace,
            and input validation.
          </p>
          <p>Here are some regex examples:</p>
          <ul style={{ textAlign: "left" }}>
            <li>
              <code>\d*</code>: Matches a string that has zero or more digits.
            </li>
            <li>
              <code>\d+</code>: Matches a string that has one or more digits.
            </li>
            <li>
              <code>\d?</code>: Matches a string that has zero or one digit.
            </li>
            <li>
              <code>\d&#123;3&#125;</code>: Matches a string that has exactly 3
              digits.
            </li>
            <li>
              <code>\d&#123;2,&#125;</code>: Matches a string that has 2 or more
              digits.
            </li>
            <li>
              <code>\d&#123;2,5&#125;</code>: Matches a string that has 2 up to
              5 digits.
            </li>
            <li>
              <code>a(\d&#123;2&#125;)*</code>: Matches a string that starts
              with &apos;a&apos; followed by zero or more occurrences of exactly
              2 digits.
            </li>
          </ul>
          <p>
            This demo explains how attackers exploit unsanitized regex inputs to
            compromise systems.
          </p>
        </div>
      ),
      buttonText: "Start Demo",
    },
    {
      title: "Understanding the Threat",
      content: (
        <div>
          <p>
            Regex injection occurs when user-controlled inputs are improperly
            handled and directly inserted into regular expression patterns. This
            can lead to performance degradation or severe security
            vulnerabilities. Because some regex patterns are highly complex,
            attackers can exploit them to trigger excessive backtracking—a
            process where the regex engine repeatedly re-evaluates the input.
            This can consume significant computational resources, slowing down
            or even crashing the web server. This type of attack is known as a
            Regular Expression Denial-of-Service (ReDoS) attack.
          </p>
        </div>
      ),
      buttonText: "Next",
    },
    {
      title: "How Regex Injection Works",
      content: (
        <div>
          <p>
            Attackers can craft malicious regex patterns that cause catastrophic
            backtracking. Consider the following vulnerable code snippet:
          </p>
        </div>
      ),
      codeSnippet: `const userInput = /(a+)+$/;
new RegExp(userInput).test("aaaaaaaaaaaaaaaaaaa");`,
      explanation: (
        <div className="code-explanation">
          <h3>What&apos;s happening in this code?</h3>
          <p>
            This seemingly innocent code demonstrates a classic regex
            denial-of-service vulnerability:
          </p>
          <ul>
            <li>
              <strong>
                The pattern <code>(a+)+$</code>
              </strong>
              : This regex looks for one or more &apos;a&apos; characters
              (that&apos;s the <code>a+</code> part), and then it repeats that
              group one or more times (the outer <code>+</code>). The{" "}
              <code>$</code> means it must match at the end of the string.
            </li>
            <li>
              <strong>The nested repetition</strong>: When a regex engine tries
              to match this against a string of many &apos;a&apos;s that
              doesn&apos;t end with an &apos;a&apos;, it creates a computational
              nightmare.
            </li>
            <li>
              <strong>Exponential backtracking</strong>: For each character in
              the input, the engine must try an exponentially increasing number
              of possible ways to split the &apos;a&apos;s between the inner and
              outer repetition.
            </li>
            <li>
              <strong>For just 19 &apos;a&apos;s</strong>: The regex engine
              might need to check millions or billions of possible combinations,
              potentially freezing the application for seconds, minutes, or even
              hours.
            </li>
          </ul>
          <p>
            An attacker who controls the regex pattern, the input string, or
            both, can craft inputs that will consume enormous CPU resources,
            potentially causing a denial-of-service condition on your server.
          </p>
        </div>
      ),
      buttonText: "Next",
    },
    {
      title: "Consequences of Regex Injection",
      content: (
        <div>
          <p>
            Exploiting regex injection can slow down or crash a system, and in
            some cases, even allow remote code execution. It’s critical to
            validate and sanitize regex inputs.
          </p>
          <RegexBenchmarkDemo />
        </div>
      ),
      codeSnippet: `// Benchmarking example for vulnerable regex
const vulnerableRegex = /(a+)+$/;
const testString = "aaaaaaaaaaaaaaaaaaaaaaaa!"; // designed to fail and cause backtracking
console.time("Vulnerable Regex Execution");
vulnerableRegex.test(testString);
console.timeEnd("Vulnerable Regex Execution");

// Benchmarking a safe regex for comparison
const safeRegex = /a+$/;
console.time("Safe Regex Execution");
safeRegex.test(testString);
console.timeEnd("Safe Regex Execution");`,
      explanation: (
        <div className="code-explanation">
          <p>
            The above benchmarks demonstrate that the vulnerable regex can take
            significantly longer to execute than the safe regex, highlighting
            the risks associated with regex injection.
          </p>
        </div>
      ),
      buttonText: "Prevention Techniques",
    },
    {
      title: "Preventing Regex Injection",
      content: (
        <div>
          <p>
            Effective prevention involves sanitizing inputs, limiting regex
            complexity, and implementing timeouts. Regularly review and optimize
            your regex patterns to mitigate these risks.
          </p>
        </div>
      ),
      codeSnippet: `// Function to escape user input for regex use
function escapeRegExp(string) {
  return string.replace(/[.*+?^$\\u007B\\u007D()|[\\]\\\\]/g, '\\\\$&');
}

// Example: creating a safe regex from user input
const userInput = "example. * user+ input?";
const safeInput = escapeRegExp(userInput);
const safeRegex = new RegExp(safeInput);

// Now safeRegex can be used safely without injection risks
console.log(safeRegex.test("example. * user+ input?"));`,
      explanation: (
        <div className="code-explanation">
          <h3>How This Works</h3>
          <p>
            In this snippet, the <code>escapeRegExp</code> function escapes
            special regex characters in the user input. Notice that in order to
            avoid interfering with template literal interpolation, we replace
            the curly braces with their Unicode escapes (<code>\\u007B</code>{" "}
            and <code>\\u007D</code>). This ensures that characters like&nbsp;
            <code>.</code>, <code>*</code>, <code>?</code>, etc., are prefixed
            with a backslash—ensuring they are treated as literal characters
            rather than regex operators. By sanitizing the input before
            constructing the regex, you prevent attackers from injecting
            malicious patterns that could otherwise lead to catastrophic
            backtracking or other vulnerabilities.
          </p>
        </div>
      ),
      buttonText: "Interactive Demo",
    },
    {
      // TODO: fix explanation, "(a+)+" should become "\(a\+\)\+"
      title: "Interactive Demo: Regex Sanitizer",
      content: (
        <div>
          <p>
            Toggle the regex sanitizer to see how input processing can change:
          </p>
        </div>
      ),
      buttonText: "Next",
    },
    {
      title: "Interactive Regex Playground",
      content: (
        <div>
          <p>
            Experiment with your own regex patterns and input strings. Enter a
            regex pattern and a test string to see how long it takes to execute.
          </p>
          <InteractivePlayground />
        </div>
      ),
      buttonText: "Quiz",
    },
    {
      title: "Quiz: Test Your Knowledge",
      content: (
        <QuizComponent key={quizKey} onQuizComplete={handleQuizCompletion} />
      ),
      quiz: true,
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
    <div
      className="clickjacking-demo"
      style={{
        textAlign: "center",
        maxWidth: "960px",
        margin: "auto",
        paddingTop: "20px",
      }}
    >
      <h2>{steps[step].title}</h2>
      <div>
        {typeof steps[step].content === "string"
          ? steps[step].content
          : steps[step].content}
      </div>
      {steps[step].codeSnippet && (
        <>
          <pre
            style={{
              background: "#f4f4f4",
              padding: "15px",
              borderRadius: "5px",
              margin: "20px 0",
              textAlign: "left",
            }}
          >
            <code>{steps[step].codeSnippet}</code>
          </pre>
          {steps[step].explanation && (
            <div
              className="code-explanation"
              style={{
                background: "#f9f9f9",
                padding: "15px",
                borderRadius: "5px",
                margin: "20px 0",
                textAlign: "left",
              }}
            >
              {steps[step].explanation}
            </div>
          )}
        </>
      )}

      {/* Render images for each step */}
      {/* {step === 0 && (
        <img
          src="../images/regex_intro.png"
          alt="Regex Injection Introduction"
          className="imageFadeIn"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      )} */}
      {step === 1 && (
        <img
          src="../images/regex_threat.png"
          alt="Understanding Regex Threat"
          className="imageFadeIn"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      )}
      {/* {step === 2 && (
        <img
          src="../images/regex_code.png"
          alt="Vulnerable Regex Code"
          className="imageFadeIn"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      )} */}
      {/* {step === 3 && (
        <img
          src="../images/regex_consequences.png"
          alt="Consequences of Regex Injection"
          className="imageFadeIn"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      )} */}
      {/* {step === 4 && (
        <img
          src="../images/regex_prevention.png"
          alt="Regex Injection Prevention Techniques"
          className="imageFadeIn"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
      )} */}
      {step === 5 && (
        <div>
          <img
            src={imgSrc}
            alt="Regex Sanitizer Demo"
            className="imageFadeIn"
            style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
          />
          <button onClick={switchImage} style={{ marginTop: "20px" }}>
            {buttonText}
          </button>
        </div>
      )}

      {/* Render navigation buttons */}
      {step < steps.length - 1 && (
        <button onClick={nextStep} style={{ marginTop: "20px" }}>
          {steps[step].buttonText}
        </button>
      )}
      {step > 0 && (
        <button onClick={prevStep} style={{ marginTop: "20px" }}>
          Previous
        </button>
      )}
    </div>
  );
};

export default RegexInjectionDemo;
