import React from 'react'
import { Button } from './Button'

function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
      <div className='40-w p-5 rounded bg-white'>
        <form>
          <h2> Sign In</h2>
          <div className='mb-2'>
            <label htmlFor='email'> Email</label>
            <input type='email' placeholder='Enter Email' className='form-control'/>
            </div>
            <div className='mb-2'>
            <label htmlFor='password'> Email</label>
            <input type='password' placeholder='Enter Password' className='form-control'/>
            </div>
            <div className='mb-2'>
            <input type='checkbox' className='custom-control custom-checkbox' id='check' />
            <label htmlFor='check' className='custom-input-label'>
              Remember Me
            </label>
            </div>
            <div className='d-grid'>
              <Button className='btns' buttonStyle='btn--primary'
              buttonSize='btn--large'>
              Sign In
              </Button>
            </div>
            <p className='text-right'>
              Forgot <a href=''>Password?</a><a href=''>SignUp</a>
            </p>
        </form>
      </div>
    </div>
  )
}

export default Login
