import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early Access to get Started</h4>
        <h1 className='gradient__text'> The possibilities are beyond your Imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, iste soluta vel tenetur doloribus consectetur blanditiis cum magni ipsam quasi laborum eius obcaecati, voluptatem cupiditate, officia dolore maiores numquam. Fugit.</p>
        <h4>Request early Access to get Started</h4>
      </div>
    </div>
  )
}

export default Possibility