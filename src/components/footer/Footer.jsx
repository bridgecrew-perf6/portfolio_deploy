import React from 'react'
import './footer.css'
import {BsInstagram} from'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>Wzcreation</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>

        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>
      <div className="footer_socials">
        < a href='https://facebook.com'><BsFacebook/></a>
        < a href='https://instagram.com'><BsInstagram/></a>
        < a href='https://twitter.com'><BsTwitter/></a>
      </div>

    <div className="fotter_copyright">
      <small>
        &copy;Wasim Creation .All rights Reserviced
      </small>
    </div>

    </footer>
  )
}

export default Footer