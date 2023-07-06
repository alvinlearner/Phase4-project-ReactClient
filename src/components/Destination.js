import React from 'react'
import './Destination.css'
import DestinationData from './DestinationData';

function Destination() {
  return (
    <div className='destination' >
      <h1>Popular Adventures</h1>
      <p>Take a look at what we are all about</p>
      
      <DestinationData 
      className="first-des"
      heading='Camping at Suswa'
      text='Suswa, also known as Mount Suswa, is a volcanic crater located in Kenya, East Africa. It is part of the Great Rift Valley and is situated approximately 120 kilometers northwest of Nairobi, the capital city of Kenya. Suswa is a popular destination for camping and outdoor activities due to its stunning landscapes and unique geological features'
      // img1={}
      // img2={}
      />
      
    </div>
  );
};

export default Destination