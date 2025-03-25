// DoSAttackCertificate.jsx
import { useNavigate } from "react-router-dom";
import "../AttackTwo.css";

const DoSAttackCertificate = () => {
  const navigate = useNavigate();

  const handleDownloadCertificate = () => {
    const certificateUrl = "/images/certificateDoS.png";
    const link = document.createElement("a");
    link.href = certificateUrl;
    link.download = "doscertificate.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const audio = new Audio("/sounds/Sound Effects - Fireworks.mp3");
    audio.play();
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="container">
      <h3 className="title">Congratulations!</h3>
      <img
        src="/images/certificateDoS.png"
        alt="DoS Certificate"
        className="imageFadeIn"
        style={{ maxWidth: "80%", height: "auto", margin: "20px 0" }}
      />
      <button onClick={handleDownloadCertificate} className="button">Download Certificate</button>
      <p className="content">Thank you for completing the DoS Attack Demo. Stay vigilant and safeguard your networks!</p>
      <button onClick={handleBack} className="button">Back to Home</button>
    </div>
  );
};

export default DoSAttackCertificate;
