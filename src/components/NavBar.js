import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); //basically making it true

  const closeMobileMenu = () => setClick(false);

  const navigate = useNavigate(); 

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleSignUp = () => {
    console.log("Redirecting to sign up page..."); 
    navigate('/signUp'); 
  } 

  useEffect (() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
            EVT <i className='fab fa-typo3' /> 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}> 
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                  Reviews
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={handleSignUp}>
                  Sign Up
                </Link>
              </li>
            </ul> 
            {button && <Button buttonStyle='btn--outline'> Sign Up</Button>}
        </div>
      </nav>

    </>
  )
}

export default NavBar
