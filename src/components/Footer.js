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
        <a href="https://www.facebook.com/login/">
            <i className='fa-brands fa-facebook-square'></i>
        </a>

        <a href="https://www.instagram.com">
            <i className='fa-brands fa-instagram-square'></i>
        </a>

        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den">
            <i className='fa-brands fa-twitter-square'></i>
        </a>

        <a href="https://www.whatsapp.com">
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
