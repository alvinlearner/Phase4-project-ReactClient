import './Trip.css'
import React from 'react'
import TripData from './TripData';


function Trip() {
  return (
    <div className='trip'>
      <h1>Recent Adventures</h1>
      <p>What you just missed ...</p>

      <div className="tripcard">
        <TripData
        heading="Suswa Adventure"
        text=" This is some completely random stuff about the recent trip that i have no inforamtion about but will update it as soon as i get more details"
        />

      <TripData
        heading="Team Building"
        text=" This is some completely random stuff about the recent trip that i have no inforamtion about but will update it as soon as i get more details"
        />

      <TripData
        heading="The third Adventure"
        text=" This is some completely random stuff about the recent trip that i have no inforamtion about but will update it as soon as i get more details"
        />
      </div>


    </div>
  );
}

export default Trip;
