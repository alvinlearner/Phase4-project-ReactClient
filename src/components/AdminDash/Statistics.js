import React, { useState, useEffect } from 'react';
import './Statistic.css'; // Import your custom CSS file
import DashSideNav from './DashSideNav';

function Statistics() {
  const [usersCount, setUsersCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);

  useEffect(() => {
    fetchUsers();
    fetchEvents();
  }, []);

  const fetchUsers = () => {
    fetch('https://events-app-api-mu7z.onrender.com/users_statistics')
      .then(response => response.json())
      .then(data => {
        setUsersCount(data);
       
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  };

  const fetchEvents = () => {
    fetch('/events_statistics')
      .then(response => response.json())
      .then(data => {
        setEventsCount(data);
       
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  };




  return (
    <div>
      <DashSideNav />
      <div className='cards'>
        <div className='userscard'>
          <h2>Users</h2>
          <p>No of user: {usersCount}</p>
        </div>

        <div className='eventscard'>
          <h2>Events</h2>
          <p>No of events: {eventsCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;




