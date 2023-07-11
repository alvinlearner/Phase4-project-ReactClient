import './Trip.css'
import React from 'react'
import TripData from './TripData';
// import Trip1 from '../assets/'
// import Trip2 from '../assets/'
// import Trip3 from '../assets/'

function Trip() {
  return (
    <div className='trip'>
      <h1>Recent Adventures</h1>
      <p>What you just missed ...</p>

      <div className="tripcard">
        <TripData
        image="https://images.unsplash.com/photo-1600705992417-50ec9b8d9790?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        heading="Suswa Adventure"
        text=" This is some completely random stuff about the recent trip that i have no inforamtion about but will update it as soon as i get more details"
        />

      <TripData
        image="https://images.unsplash.com/photo-1556279661-ad3bc6cc9750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80"
        heading="Team Building"
        text=" This is some completely random stuff about the recent trip that i have no inforamtion about but will update it as soon as i get more details"
        />

      <TripData
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=821&q=80"
        heading="The third Adventure"
        text=" This is some completely random stuff about the recent trip that i have no inforamtion about but will update it as soon as i get more details"
        />
        
      </div>


    </div>
  );
}

export default Trip;
