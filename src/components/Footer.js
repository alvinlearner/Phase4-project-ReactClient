import React from 'react'
import './Footer.css'
import logo from '../../src/assets/images/logo.png';

function Footer() {
  return (
    <div className='footer' >
      <div className="top">

        <div>
        <img id="logo" src={logo} className="logo" alt="Mecha-Adventures" />
        <p>Say yes to more Adventures</p>
        </div>

        <div className='icons'>
        <a href="/">
            <i className='fa-brands fa-facebook-square'></i>
        </a>

        <a href="/">
            <i className='fa-brands fa-instagram-square'></i>
        </a>

        <a href="/">
            <i className='fa-brands fa-twitter-square'></i>
        </a>

        <a href="/">
            <i className='fa-brands fa-whatsapp-square'></i>
        </a>

        </div>
      </div>

      <div className="bottom">
        <div>
        <h4>Projects</h4>
        <a href='/' >Upcoming trips</a>
        <a href='/' >Side events</a>
        <a href='/' >Certification</a>
      </div>

      <div >
        <h4>Community</h4>
        <a href='/' >Whatsapp</a>
        <a href='/' >Twitter</a>
      </div>

      <div >
        <h4>Help</h4>
        <a href='/' >Upcoming trips</a>
        <a href='/' >Side events</a>
        <a href='/' >License</a>
      </div>

      <div >
        <h4>Terms and conditions</h4>
        <a href='/' >Policy</a>
      
      </div>
      </div>
    </div>
  )
}

export default Footer
