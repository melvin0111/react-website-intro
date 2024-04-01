import React from 'react' 
import { useNavigate } from 'react-router-dom' 
import './signUp2.css'; 
import '../../App.css';
import './Login.css'; 

function signUp2() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignUpFn = (e) => {
    e.preventDefault();
    // For now, we're assuming any login attempt is successful
    console.log("Signing up with:", email, password);
    // Redirect to a specific route on successful login
    navigate('/Dashboard'); 
  }; 

  return (
    <div className='flex-container2'>
      <form className='modal-form2' onSubmit={SignUpFn}>
        <h2>Log In</h2>
        <div className='form-group2'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Enter Email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group2'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Enter Password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group2'>
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

export default signUp2; 