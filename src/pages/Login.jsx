import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';


const Login = ({ setToken }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function handleChange(event) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);
      setToken(data);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="login-container">

      <img src="../../images/cyberguard.jpg" alt="Cyberguard" className="logo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <input
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange}
        />
        <button type='submit'>
          Submit
        </button>
      </form>
      <p>Don't have an account? <Link to='/signup' className="signup-link">Sign-Up</Link></p>

    </div>
  );
}

export default Login;
