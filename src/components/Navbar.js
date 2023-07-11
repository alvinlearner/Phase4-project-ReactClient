import React, { useState } from 'react';
import './NavbarStyles.css';
import { Menuitems } from './Menuitems';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clicked, setClicked] = useState(false); // Added 'clicked' state
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', JSON.stringify(false));
  
    // Perform the fetch delete request to delete the user session
    fetch('/logout', {
      method: 'DELETE',
    })
      .then(response => {
        // Handle the response and perform necessary actions
        if (response.ok) {
          // User session deleted successfully, perform any required actions (e.g., redirect to login page)
          navigate('/');
  
          // Replace the current history entry with the login page
          window.history.replaceState(null, '', '/');
  
          // Clear the browser history to prevent going back to the application after logout
          window.history.go(0);

          alert('session deleted')

        } else {
          // An error occurred, handle the error (e.g., display an error message)
          alert('Failed to delete user session');
        }
      })
      .catch(error => {
        // Handle any network or fetch-related errors
        console.log('Error occurred while deleting user session', error);
      });
  };
  
  const handleClick = () => {
    setClicked(!clicked); // Toggle the 'clicked' state
  };

  return (
    <nav className="NavbarItems">
      <img id="logo" src={logo} className="logo" alt="Mecha-Adventures" />

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {Menuitems.map((item, index) => (
          <li key={index}>
            {item.title === 'Logout' ? (
              <button className={item.cName} onClick={handleLogout}>
                <i className={item.icon}></i>
                {item.title}
              </button>
            ) : (
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;