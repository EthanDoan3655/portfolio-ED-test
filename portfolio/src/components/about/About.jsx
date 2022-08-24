import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt="About Image"/>

        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
        <article className='about__card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>6 month Full-Stack Coding Apprenticeship</small>
        </article>
        <article className='about__card'>
          <FiUsers className='about_icon'/>
          <h5>Experience</h5>
          <small>other experience</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about_icon'/>
          <h5>Projects</h5>
          <small>Some Of My Work So Far</small>
        </article>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea cupiditate ab, fugit eos quis eligendi sapiente vitae nemo consequatur dolor numquam esse corporis aliquam dignissimos qui. Saepe sed asperiores at.
        </p>

        <a href='#contact' className='btn btn-primary'> Lets Connect</a>
      </div>
    </div>
    </section>
  )
}

export default About