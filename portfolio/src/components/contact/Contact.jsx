import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {FaLinkedin} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j1t7iap', 'template_a0aazp9', form.current, '4qaVcmmTPbgjtWWwq')
     e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Ethandoan10@gmail.com</h5>
            <a href='mailto:ethandoan10@gmail.com' target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Ethan Doan on LinkedIn</h5>
            <a href='https://www.linkedin.com/in/ethan-d-0333b5237/' target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href='https://api.whatsapp.com/send?phone+7048584335' target="_blank">Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name="email" placeholder="Email" required/>
          <textarea name="message" rows="7" placeholder="Message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact