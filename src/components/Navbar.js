import React, { useState } from 'react';
import './NavbarStyles.css';
import { Menuitems } from './Menuitems';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';

function Navbar({ user, setUser }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clicked, setClicked] = useState(false); // Added 'clicked' state
  const navigate = useNavigate();




  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    })
    .then((r)=>{navigate('/')})
  }

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