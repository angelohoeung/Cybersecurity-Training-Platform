import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

const SignUp = () => {

  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              first_name: formData.firstName,
            }
          }
        }
      )

      if (error) {
        throw error;
      }

      console.log("Sign up successful:", data);
      alert('An email has been sent with a verification link!')
    } catch (error) {
      console.error("Sign up error:", error);
      alert(error)
    }
  }

  return (
    <div className="login-container">
      <img src="images/cyberguard.jpg" alt="Cyberguard" className="logo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          placeholder='Name'
          name='firstName'
          onChange={handleChange}
        />
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
      <p>Already have an account? <Link to='/' className="signup-link">Login</Link></p>
    </div>
  )
}

export default SignUp