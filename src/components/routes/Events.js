import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Events.css';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleSearch = () => {
    let filteredData = events;
    if (searchQuery !== '') {
      filteredData = events.filter(
        (event) =>
          event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredEvents(filteredData);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleAttendButtonClick = (eventId) => {
    const attendeeName = prompt('Enter your name:');
    const attendeeEmail = prompt('Enter your email:');

    // The following lines have been commented out since the corresponding state variables are not defined.
    // setAttendeeName(attendeeName);
    // setAttendeeEmail(attendeeEmail);

    fetch('http://localhost:9292/attendees/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventId,
        attendeeName,
        attendeeEmail,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Attendee ID: ${data.id}`);
      })
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    fetch('/events')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setFilteredEvents(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleEventCardClick = (id) => {
      fetch(`/events/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.error('Error:', error))
        ;
  };
  
  
  return (
    <>
    <Navbar />
    <div style={{marginTop:"100px"}}>

      
      <form onSubmit={handleFormSubmit} className="search-form">
        <input
          className="input"
          name="text"
          placeholder="Search events"
          type="search"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button id="search-button" type="submit">
          <span className="span-mother">
            <span>S</span>
            <span>e</span>
            <span>a</span>
            <span>r</span>
            <span>c</span>
            <span>h</span>
          </span>
          <span className="span-mother2">
            <span>S</span>
            <span>e</span>
            <span>a</span>
            <span>r</span>
            <span>c</span>
            <span>h</span>
          </span>
        </button>
      </form>
      <div className="event-grid">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img
              src={event.image}
              alt={event.name}
              className="event-card__image"
              onClick={() => handleEventCardClick(event.id)}
            />
            <div className="event-card__content">
              <h3 className="event-card__title">{event.name}</h3>
              <p className="event-card__info">Date: {event.date}</p>
              <p className="event-card__info">Category: {event.category}</p>
              <p className="event-card__description">{event.description}</p>
              <button
                className="event-card__button"
                onClick={() => handleAttendButtonClick(event.id)}
              >
                Attend
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    </>
  );
}
