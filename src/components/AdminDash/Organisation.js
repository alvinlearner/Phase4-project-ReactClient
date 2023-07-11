import React, { useState, useEffect } from 'react';
import DashSideNav from './DashSideNav'
import './Organisation.css';

const EventsComponent = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    venue: '',
    date: '',
    category: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('https://events-app-api-mu7z.onrender.com/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const createEvent = async (eventParams) => {
    try {
      const response = await fetch('https://events-app-api-mu7z.onrender.com/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventParams)
      });
      const data = await response.json();
      setEvents([...events, data]);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      await fetch(`https://events-app-api-mu7z.onrender.com/events/${eventId}`, {
        method: 'DELETE',
      });
      setEvents(events.filter((event) => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  // const updateEvent = async (eventId, setFormData) => {
  //   try {
  //     const response = await fetch(`/events/${eventId}`, {
  //       method: 'PUT',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(setFormData),
  //     });
  //     const data = await response.json();
  //     setEvents(
  //       events.map((event) => (event.id === eventId ? data : event))
  //     );
  //   } catch (error) {
  //     console.error('Error updating event:', error);
  //   }
  // };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent(formData);
    setFormData({
      name: '',
      description: '',
      image: '',
      venue: '',
      date: '',
      category: ''
    });
  };

  return (
    <div>
      <DashSideNav />
      <h1>Events</h1>
      <button onClick={fetchEvents}>Refresh</button>

      <h2>Create Event</h2>
      <div >
      <form   onSubmit={handleSubmit}  className='event-form' >
        <div>
          <input
            placeholder='Name'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          
          <textarea
            placeholder='Description'
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <input
            placeholder='Image'
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            placeholder='Venue'
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
          />
        </div>
        <div>          
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div>          
          <input
            placeholder='Category'
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
      </div>
     
       <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">

            <div className="event-card__content">
              <h3 className="event-card__title">{event.name}</h3>
              <p className="event-card__info">Date: {event.date}</p>
              <p className="event-card__description">{event.description}</p>
              <button onClick={() => deleteEvent(event.id)} >Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;
