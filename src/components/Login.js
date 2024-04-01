// import React, { useState } from 'react';
// import { useNavigate  } from 'react-router-dom';
// import './Login.css'; // Ensure this is the correct path to your CSS file

// function Login() {
//   //hooks for email & password
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   //handle the input for email & password
//   const navigate = useNavigate ();

//   const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Logging in with: ", email, password);
//   navigate.push('/dashboard');

// }


//   return (
//     <div className='flex-container'>
//       <form className='modal-form'>
//         <h2>Sign In</h2>
//         <div className='form-group'>
//           <label htmlFor='email'>Email</label>
//           <input type='email' placeholder='Enter Email' id='email' />
//         </div>
//         <div className='form-group'>
//           <label htmlFor='password'>Password</label>
//           <input type='password' placeholder='Enter Password' id='password' />
//         </div>
//         <div className='form-group'>
//           <input type='checkbox' id='remember-me' />
//           <label htmlFor='remember-me'>Remember Me</label>
//         </div>
//         <button type='submit' className='btn-primary'>
//           Sign In
//         </button>
//         <p className='text-right'>
//           Forgot <a href='#'>Password?</a> <a href='#'>SignUp</a>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import './SignUp2.css'; 

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we're assuming any login attempt is successful
    console.log("Logging in with:", email, password);
    // Redirect to a specific route on successful login
    navigate('/Dashboard'); 
  }; 

  const handleSignUp = () => {
    console.log("Redirecting to sign up page..."); 
    navigate('/signUp2'); 
  } 

  return (
    <div className='flex-container'>
      <form className='modal-form' onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Enter Email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Enter Password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'>Remember Me</label>
        </div> 
        <button type='submit' className='btn-primary'>
          Sign In 
        </button>
        <button type='button' className='btn-primary' onClick={handleSignUp}>
          Sign Up 
        </button>
      </form>
    </div>
  );
};


export default Login; 

