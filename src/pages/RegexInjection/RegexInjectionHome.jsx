import { useNavigate } from "react-router-dom";
import "../AttackTwo.css";

const RegexInjectionHome = () => {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/regexinjection/demo");
  }

  function handleHome() {
    sessionStorage.removeItem("token");
    navigate("/home");
  } 

  return (
    <div className="container">
      <h3 className="title">Regex Injection</h3>
      <p className="content">
        Regex injection is a security vulnerability similar to SQL injection.
        It&apos;s when an attacker uses user input manipulation to take
        advantage of a system&apos;s handling of regular expressions.
      </p>
      <img
        src="../images/regex_home.gif"
        alt="regex image home"
        className="clickjacking-image"
      ></img>
      <button onClick={handleNext}>Click To Begin</button>
      <button onClick={handleHome}>Home</button>
    </div>
  );
};

export default RegexInjectionHome;
