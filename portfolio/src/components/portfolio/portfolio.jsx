import React from 'react'
import './portfolio.css'
import WIKI from '../../assets/WIKI.png'

// dataset of projects

const data =[
  {
    id:1,
    image:WIKI,
    title:'Wiki Redesign Project',
    github:"https://github.com/juanhdzx/Redesign_G6",
    demo:"https://main.d2wzkwm3nb10ll.amplifyapp.com/"
  },
  {
    id:2,
    image:WIKI,
    title:'Wiki Redesign Project',
    github:"https://github.com/juanhdzx/Redesign_G6",
    demo:"https://main.d2wzkwm3nb10ll.amplifyapp.com/"
  },
  {
    id:3,
    image:WIKI,
    title:'Wiki Redesign Project',
    github:"https://github.com/juanhdzx/Redesign_G6",
    demo:"https://main.d2wzkwm3nb10ll.amplifyapp.com/"
  },
  {
    id:4,
    image:WIKI,
    title:'Wiki Redesign Project',
    github:"https://github.com/juanhdzx/Redesign_G6",
    demo:"https://main.d2wzkwm3nb10ll.amplifyapp.com/"
  },
  {
    id:5,
    image:WIKI,
    title:'Wiki Redesign Project',
    github:"https://github.com/juanhdzx/Redesign_G6",
    demo:"https://main.d2wzkwm3nb10ll.amplifyapp.com/"
  },
  {
    id:6,
    image:WIKI,
    title:'Wiki Redesign Project',
    github:"https://github.com/juanhdzx/Redesign_G6",
    demo:"https://main.d2wzkwm3nb10ll.amplifyapp.com/"
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
         data.map(({id, image, title, github, demo})=>{
           return(
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Hosted Demo</a>
          </div>
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default portfolio