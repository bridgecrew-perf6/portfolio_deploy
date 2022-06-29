import React from 'react'
import './contact.css'
import {MdOutlineAttachEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'

import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0q8igkr', 'template_enzf01a', form.current, 'Q0HjPmOA3-NC7qn9D')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      return(
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className=" container contact_container">
          <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineAttachEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>wasimzaffar58@gmail.com</h5>
            <a href='mailto:wasimzaffar58@gmail.com'>Send a message</a>

          </article>
          <article className='contact_option'>
            <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>wasim zaffar</h5>
            <a href='https://www.facebook.com/arifkhan.wasim'>Send a message</a>

          </article>
          <article className='contact_option'>
            <IoLogoWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>8167608555</h5>
            <a href='https://api.whatsapp.com/send?phone+918167608555'>Send a message</a>

          </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Full Email' required/>
            <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>


        </div>
      )
    </section>
  )
}

export default Contact