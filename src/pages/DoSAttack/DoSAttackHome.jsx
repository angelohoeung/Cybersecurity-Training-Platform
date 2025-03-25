// DoSAttackHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../AttackTwo.css";

const DoSAttackHome = () => {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/dosattack/demo");
  }

  function handleHome() {
    sessionStorage.removeItem("token");
    navigate("/home");
  }

  return (
    <div className="container">
      <h3 className="title">Denial of Service Attack</h3>
      <p className="content">
        A Denial of Service (DoS) attack is an attempt to make a machine or network resource unavailable to its intended users by overwhelming it with traffic.
      </p>
      <img
        src="../images/dos_home.gif"
        alt="dos image home"
        className="clickjacking-image"
      ></img>
      <button onClick={handleNext}>Click To Begin</button>
      <button onClick={handleHome}>Home</button>
    </div>
  );
};

export default DoSAttackHome;