import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ token }) => {
    let navigate = useNavigate();

    function handleLogout() {
        sessionStorage.removeItem('token');
        navigate('/');
    }

    function handleAttackOne() {
        navigate('/attackone');
    }

    function handleAttackTwo() {
        navigate('/attacktwo');
    }

    function handleAttackThree() {
        navigate('/Malvertisinghome');
    }

    function handleRegexAttack() {
        navigate('/regexinjection/home');
    }

    function handleAttackFive() {
        navigate('/emailspoofingHome');
    }
    
    function handleAttackSix() {
        navigate('/XssHome');
    }

    function handleVideos() {
        navigate('/videos');
    }

    function handleAbout() {
        navigate('/about');
    }

    function handleLessons() {
        navigate('/lessons');
    }

    return (
        <>
            <div className="header-section section">
                <header>
                    <nav>
                        <img src="images/cyberguard.jpg" alt="Cyberguard" className="logo" />
                        <button onClick={handleLogout}>Home</button>
                        <button onClick={handleLessons}>Lessons</button>
                        <button onClick={handleVideos}>Videos</button>
                        <button onClick={handleAbout}>About</button>
                    </nav>
                </header>
            </div>
            <div className="features-section section">
                <main>
                    <div className="welcome">
                    <img src="images/CG.png" alt="Cyberguard" className="text" style={{ width: '720px', height: 'auto' }} />
                        <h3>Welcome back, {token.user.user_metadata.first_name}</h3>
                        <h4>About Us!</h4>
                        <div className="card-large" >
                            <p className="card-content"><strong>
                                Cyber Guard is your premier destination for mastering cybersecurity, 
                                offering a rich library of resources, tutorials, and interactive 
                                lessons designed to empower users with the knowledge to protect against cyber threats. 
                                </strong>
                            </p>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card" onClick={handleAttackOne}>
                            <img src="images/sqlinjection.png" alt="SQL Injection" />
                            <button>SQL Injection</button>
                        </div>
                        <div className="card" onClick={handleAttackTwo}>
                            <img src="images/clickjacking.png" alt="click jacking" />
                            <button>Click-Jacking</button>
                        </div>
                        <div className="card" onClick={handleAttackThree}>
                            <img src="images/aipic2.png" alt="AI Attack" />
                            <button>Malvertising</button>
                        </div>
                        <div className="card" onClick={handleRegexAttack}>
                            <img src="images/regexinjection.png" alt="Regex Injection" />
                            <button>Regex Injection</button>
                        </div>
                        <div className="card" onClick={handleAttackFive}>
                            <img src="images/spoofing.png" alt="Spoofing" />
                            <button>Email Spoofing</button>
                        </div>
                         <div className="card" onClick={handleAttackSix}>
                            <img src="images/xss.jpg" alt="Spoofing" />
                            <button>Cross-Site Scripting</button>
                        </div>
                    </div>
                    <button className="logout" onClick={handleLogout}>Logout</button>
                </main>
            </div>
            <div className="footer-section">
                <footer>
                    <nav>
                        <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }} onClick={handleLogout}>Home</button>
                        <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }} onClick={handleLessons}>Lessons</button>
                        <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }} onClick={handleVideos}>Videos</button>
                        <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }} onClick={handleAbout}>About</button>
                    </nav>
                    <p className="copyright">CyberGuard © 2024</p>
                </footer>
            </div>
        </>
    );
};

export default Home;
