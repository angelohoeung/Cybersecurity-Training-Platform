import React, { useEffect, useState } from 'react';
import { SignUp, Login, Home, AttackOne, AttackTwo, AttackThree, SqlStart, SqlSecond, ClickjackingDemo, PreventionInfo, SqlThird, SqlFourth, SqlFifth, SqlSixth, SqlSeventh, SqlEigth, SqlNinth, SqlTenth, SqlEleventh, SqlQuiz, SqlPrevention, Malprevention, Malvertisingdemo, Malvertisinghome, Videos, Lessons, About, Malvertisinginfo } from './pages'; // Import SqlThird
import RegexInjectionHome from './pages/RegexInjection/RegexInjectionHome';
import RegexInjectionDemo from './pages/RegexInjection/RegexInjectionDemo';
import RegexInjectionCertificate from './pages/RegexInjection/RegexInjectionCertificate';
import XssHome from './pages/CrossSiteScripting/XssHome';
import XssDemo from './pages/CrossSiteScripting/XssDemo';
import XssMore from './pages/CrossSiteScripting/XssMore';
import XssPrevention from './pages/CrossSiteScripting/XssPrevention';
import XssQuiz from './pages/CrossSiteScripting/XssQuiz';
import EmailspoofHome from './pages/EmailspoofHome'; 
import EmailspoofDemo from './pages/EmailspoofDemo'; 
import EmailspoofDemo2 from './pages/EmailspoofDemo2'; 
import EmailspoofDemo3 from './pages/EmailspoofDemo3'; 
import EmailspoofDemo4 from './pages/EmailspoofDemo4'; 
import EmailspoofDemo5 from './pages/EmailspoofDemo5'; 
import EmailspoofDemo6 from './pages/EmailspoofDemo6'; 
import EmailspoofDemo7 from './pages/EmailspoofDemo7'; 
import EmailspoofQuiz from './pages/EmailspoofQuiz'; 


import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
      setToken(data);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/'} element={<Login setToken={setToken} />} />
        {token ? <Route path={'/home'} element={<Home token={token} />} /> : ""}
        <Route path={'/attackone'} element={<AttackOne token={token} />} />
        <Route path={'/attacktwo'} element={<AttackTwo token={token} />} />
        <Route path={'/attackthree'} element={<AttackThree token={token} />} />
        <Route path={'/home'} element={<Home token={token} />} />
        <Route path={'/SqlStart'} element={<SqlStart token={token} />} />
        <Route path={'/SqlSecond'} element={<SqlSecond token={token} />} />
        <Route path={'/SqlThird'} element={<SqlThird token={token} />} /> {/* Add this line */}
        <Route path={'/SqlFourth'} element={<SqlFourth token={token} />} />
        <Route path={'/SqlFifth'} element={<SqlFifth token={token} />} />
        <Route path={'/SqlSixth'} element={<SqlSixth token={token} />} />
        <Route path={'/SqlSeventh'} element={<SqlSeventh token={token} />} />
        <Route path={'/SqlEigth'} element={<SqlEigth token={token} />} />
        <Route path={'/SqlNinth'} element={<SqlNinth token={token} />} />
        <Route path={'/SqlTenth'} element={<SqlTenth token={token} />} />
        <Route path={'/SqlEleventh'} element={<SqlEleventh token={token} />} />
        <Route path={'/SqlQuiz'} element={<SqlQuiz token={token} />} />
        <Route path={'/SqlPrevention'} element={<SqlPrevention token={token} />} />        
        <Route path={'/ClickjackingDemo'} element={<ClickjackingDemo />} />
        <Route path={'/prevention'} element={<PreventionInfo />} />
        <Route path={'/Malvertisinghome'} element={<Malvertisinghome/>} />
        <Route path={'/Malvertisingdemo'} element={<Malvertisingdemo/>} />
        <Route path={'/Malvertisinginfo'} element={<Malvertisinginfo/>} />
        <Route path={'/Malprevention'} element={<Malprevention/>} />
        <Route path="/regexinjection/home" element={<RegexInjectionHome token={token} />} />
        <Route path="/regexinjection/demo" element={<RegexInjectionDemo token={token} />} />
        <Route path="/regexinjection/certificate" element={<RegexInjectionCertificate token={token} />} />
        <Route path="/CrossSiteScripting/XssHome" element={<XssHome token={token} />} />
        <Route path="/CrossSiteScripting/XssDemo" element={<XssDemo token={token} />} />
        <Route path="/CrossSiteScripting/XssPrevention" element={<XssPrevention token={token} />} />
        <Route path="/CrossSiteScripting/XssMore" element={<XssMore token={token} />} />
        <Route path="/CrossSiteScripting/XssQuiz" element={<XssQuiz token={token} />} />

        <Route path={'/EmailspoofHome'} element={<EmailspoofHome />} />  {/*added*/}
        <Route path={'/EmailspoofDemo'} element={<EmailspoofDemo />} />  {/*added*/}
        <Route path={'/EmailspoofDemo2'} element={<EmailspoofDemo2 />} />  {/*added*/}
        <Route path={'/EmailspoofDemo3'} element={<EmailspoofDemo3 />} />  {/*added*/}
        <Route path={'/EmailspoofDemo4'} element={<EmailspoofDemo4 />} />  {/*added*/}
        <Route path={'/EmailspoofDemo5'} element={<EmailspoofDemo5 />} />  {/*added*/}
        <Route path={'/EmailspoofDemo6'} element={<EmailspoofDemo6 />} />  {/*added*/}
        <Route path={'/EmailspoofDemo7'} element={<EmailspoofDemo7 />} />  {/*added*/}
        <Route path={'/EmailspoofQuiz'} element={<EmailspoofQuiz />} />  {/*added*/}
        
        <Route path={'/Videos'} element={<Videos/>} />
        <Route path={'/Lessons'} element={<Lessons/>} />
        <Route path={'/About'} element={<About/>} />
      </Routes>
    </div>

    
  );
};

export default App;
