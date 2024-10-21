import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from '../validations/loginValidation'


const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  
  const [error, setError] = useState({})


  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setError(validation(values))

  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <p className='d-flex justify-content-center align-items-center fw-bold fs-1'>Sign-In</p>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
             <label htmlFor='username'><strong>Username</strong></label>
             <input type='Username' placeholder='Enter Username' name='username'
             onChange={handleInput} className='form-control rounded-0' />
              {error.username && <span className='text-danger'>{error.username}</span>}
            </div>
            <div className='mb-5'>
                <label htmlFor='password'><strong>Password</strong></label>
                <input type='password' placeholder='Enter password' name='password'
                onChange={handleInput} className='form-control rounded-0'/>
                 {error.password && <span className='text-danger'>{error.password}</span>}
            </div>

            <button type='submit' className='btn btn-success w-100 rounded-0 mb-2'><strong>Login</strong></button>
            <p className='justify-content-center align-items-center d-flex'>You are agree to our terms and policies</p>
            <Link to="Signup" className='btn btn-default border w-100 bg-light rounded-0 mb-3'>Create Account</Link>
            <Link to="Dashboard" className='btn btn-default border w-100 bg-light rounded-0'>Go to Dashboard</Link>
            
        </form>
      </div>
    </div>
  )
}

export default Login
