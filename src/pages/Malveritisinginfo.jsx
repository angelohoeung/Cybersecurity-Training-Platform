import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Malvertisinginfo = () => {
  const navigate = useNavigate();

  function handleHome(){
    sessionStorage.removeItem('token');
    navigate('/home');
  }

  return (
    <div>
      <h3>Preventing Deep Fake Manipulation</h3>
      <p>Below are some ways to prevent the misuse of deep fakes:</p>
      <ul>
        <li><b>Digital Watermarking:</b> Embedding invisible digital watermarks into authentic videos and images can help verify their integrity and authenticity.</li>
        <li><b>AI Detection Tools:</b> Developing AI algorithms that can detect the subtle inconsistencies and artifacts typical of deep fakes, such as irregular blinking patterns, unnatural facial expressions, or inconsistent lighting.</li>
        <li><b>Media Literacy Education:</b> Educating the public about deep fakes and how to critically evaluate digital content can help people become more discerning consumers of media.</li>
        <li><b>Regulation and Legislation:</b> Implementing laws and regulations that address the creation and distribution of deep fakes, especially when used for malicious purposes, can provide legal recourse and deterrence.</li>
        <li><b>Content Authentication Platforms:</b> Developing platforms that can certify the authenticity of digital content at the time of creation, using cryptographic signatures or other verification methods.</li>
        <li><b>Secure Identity Verification:</b> Implementing robust identity verification measures for sensitive applications, such as banking or accessing government services, can reduce the risk of impersonation using deep fakes.</li>
      </ul>
      <p>It's important to note that as AI technology evolves, so do the methods for creating deep fakes, making it an ongoing challenge to effectively prevent and detect them.</p>
      <button onClick={handleHome}>Home</button>
    </div>
  );
};

export default Malvertisinginfo;