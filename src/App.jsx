import React, { useEffect, useState } from 'react';
import { SignUp, Login, Home, AttackOne, AttackTwo, AttackThree, SqlStart, SqlSecond, ClickjackingDemo, PreventionInfo, SqlThird, SqlFourth, SqlFifth, SqlSixth, SqlSeventh, SqlEigth, SqlNinth, SqlTenth, SqlEleventh, SqlQuiz, SqlPrevention, Malprevention, Malvertisingdemo, Malvertisinghome, Videos, Lessons, About, Malvertisinginfo } from './pages'; // Import SqlThird
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
        <Route path={'/Videos'} element={<Videos/>} />
        <Route path={'/Lessons'} element={<Lessons/>} />
        <Route path={'/About'} element={<About/>} />
      </Routes>
    </div>

    
  );
};

export default App;