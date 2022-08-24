import React from 'react'
import edres from '../../assets/edres.pdf'

const CTA = () => {
  return (
    <div className='resume'>
        <a href={edres} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'> Lets Talk</a>
    </div>
  )
}

export default CTA