import React, { useState } from 'react';
import validation from '../validations/signupValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    username: '',
    password: ''
  });

  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();     
    const validationErrors = validation(values);
    setError(validationErrors);

    // Check for errors
    if (!validationErrors.name && !validationErrors.username && !validationErrors.password) {
      axios.post('http://localhost:8081/signup', values)
        .then(res => {
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <p className='fw-bold justify-content-center align-center-center d-flex fs-1'>Sign-Up</p>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input type='text' placeholder='Enter Name'
              onChange={handleInput} className='form-control rounded-0' name='name' />
            {error.name && <span className='text-danger'>{error.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='username'><strong>Username</strong></label>
            <input type='text' placeholder='Enter Username'
              onChange={handleInput} className='form-control rounded-0' name='username' />
            {error.username && <span className='text-danger'>{error.username}</span>}
          </div>
          <div className='mb-5'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' placeholder='Enter password'
              onChange={handleInput} className='form-control rounded-0' name='password' />
            {error.password && <span className='text-danger'>{error.password}</span>}
          </div>

          <button className='btn btn-success w-100 rounded-0 mb-2' type='submit'><strong>Sign Up</strong></button>
          <button className="btn btn-danger w-100 rounded-0 mb-5" type='button' onClick={() => navigate('/login')}>Go to Login</button>
          <p className='justify-content-center align-items-center d-flex'>You agree to our terms and policies</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
