import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './videos.css';

const Videos = () => {
  const navigate = useNavigate(); 


  const handleGoHome = () => {
    navigate('/home'); 
  };

  const videoData = [
    {
      id: 'video1',
      title: 'SQL Injection Tutorial',
      embedUrl: 'https://www.youtube.com/embed/rmZreSW2Puc?si=0YGdFZsgdxEO6tKi', 
    },
    {
      id: 'video2',
      title: 'ClickJacking Tutorial',
      embedUrl: 'https://www.youtube.com/embed/ikhzEPsbwT0?si=njCrr6ERQph8Mpzc', 
    },
    {
      id: 'video3',
      title: 'Malvertising',
      embedUrl: 'https://www.youtube.com/embed/NPXAd6y8_jw?si=MvINLXwrnIO_57Z1', 
    },
    {
      id: 'video4',
      title: 'Email Spoofing',
      embedUrl: 'https://youtube.com/embed/dHQIJijyGr8', 
    },
    {
      id: 'video5',
      title: 'Cross-Site Scripting',
      embedUrl: 'https://youtube.com/embed/VyMb3KFuP9Q', 
    },
    {
      id: 'video6',
      title: 'Regex Injection Tutorial',
      embedUrl: 'https://www.youtube.com/embed/QqTsF3lrg-w',
    }
  ];

  return (
    <div className="videos-page">
      <div className="lessons-container">
        <h2 className="lessons-header">Video Tutorials</h2>
        <p className="lessons-description">Explore our collection of informative YouTube videos designed to enhance your learning experience:</p>
      </div>
      <div className="card-container">
        {videoData.map((video) => (
          <div key={video.id} className="card">
            <iframe
              src={video.embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
            <div className="card-title">{video.title}</div>
          </div>
        ))}
      </div>
      <button onClick={handleGoHome} className="button-home">Go Home</button> {/* "Home" button */}
    </div>
  );
};

export default Videos;
