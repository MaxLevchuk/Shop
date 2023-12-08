import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
<div className="offers-left">
<h1>Powerful</h1>
<p>gaming setup</p>
<button>Check Now</button>
</div>
<div className="offers-right">
    <img src={exclusive_image} alt="" />
    
</div>
    </div>
    

  )
}

export default Offers