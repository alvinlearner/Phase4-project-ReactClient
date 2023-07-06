import React, { Component } from 'react';
import './NavbarStyles.css';
import { Menuitems } from './Menuitems';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <img id="logo" src={logo} className="logo" alt="Mecha-Adventures" />

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {Menuitems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}

          <button>Sign up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
