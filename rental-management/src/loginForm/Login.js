import React from 'react'

const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-cneter bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form action="">
            <div className='mb-3'>
             <label htmlFor='username'>Username</label>
             <input type='Username' placeholder='Enter Username' />
            </div>
            <div className='mb-3'>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter password'/>
            </div>

            <button className='btn btn-success'>Login</button>
            <p>nah i'd win</p>
            <button className='btn btn-default border'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login
