import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

const AttackThree = ({ token }) => {
  let navigate = useNavigate()
  
  function handleHome(){
    sessionStorage.removeItem('token')
    navigate('/home')
  }

  return (
    <div>
      <h3>Deep Fake Manipulation</h3>
      <button onClick={handleHome}>Home</button>
    </div>
  );
};

export default AttackThree;