import { useNavigate } from "react-router-dom";
import "../AttackTwo.css";

const RegexInjectionCertificate = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  const handleDownloadCertificate = () => {
    const certificateUrl = "../images/regexcertificate.png";
    const link = document.createElement("a");
    link.href = certificateUrl;
    link.download = "regexcertificate.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const audio = new Audio("/sounds/Sound Effects - Fireworks.mp3");
    audio.play();
  };

  return (
    <div className="container">
      <h3 className="title">Congratulations!</h3>
      <div style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}>
        <img
          src="../images/regexcertificate.png"
          alt="certificate"
          className="imageFadeIn"
          style={{ maxWidth: "100%" }}
        />
      </div>
      <button
        onClick={handleDownloadCertificate}
        className="button"
        style={{ marginBottom: "20px" }}
      >
        Download Certificate
      </button>
      <p className="content">
        <b>
          Thank you for completing the CyberGuard Regex Injection Demo. Always
          Remember:
        </b>
      </p>
      <ul className="content">
        <li>
          Stay informed: Understand the risks and methods of regex injection.
        </li>
        <li>
          Always sanitize and validate user inputs before incorporating them
          into regex patterns.
        </li>
        <li>
          Use safe regex practices: Avoid overly complex patterns and nested
          quantifiers.
        </li>
        <li>
          Regularly review and optimize your regex patterns to ensure both
          security and performance.
        </li>
      </ul>
      <button onClick={handleBack} className="button">
        Back to home
      </button>
    </div>
  );
};

export default RegexInjectionCertificate;
