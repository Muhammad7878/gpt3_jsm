import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into future before others?</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="Logo" />
          <p>Gehsener Straße 70 <br /> 12555 Berlin</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>        
        
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Social Media</p>
          <p>Privacy Policy</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Gehsener Straße 70 <br /> 12555 Berlin</p>
          <p>+4917612345</p>
          <p>info@fakemail.com</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer