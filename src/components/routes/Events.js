import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Events.css';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Enter your details',
      html:
        '<input id="attendee-name" class="swal2-input" placeholder="Name">' +
        '<input id="attendee-email" class="swal2-input" placeholder="Email">',
      confirmButtonText: 'Submit',
      preConfirm: () => {
        const attendeeName = Swal.getPopup().querySelector('#attendee-name').value;
        const attendeeEmail = Swal.getPopup().querySelector('#attendee-email').value;
        if (!attendeeName || !attendeeEmail) {
          Swal.showValidationMessage('Please enter both name and email');
        }
        return { attendeeName, attendeeEmail };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { attendeeName, attendeeEmail } = result.value;
        fetch('https://events-app-api-mu7z.onrender.com/create', {
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
            Swal.fire({
              title: 'Attendee ID',
              text: `Attendee ID: ${data.id}`,
              icon: 'success',
            });
          })
          .catch((error) => console.error('Error:', error));
      }
    });
  };

  useEffect(() => {
    fetch('https://events-app-api-mu7z.onrender.com/events')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setFilteredEvents(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleEventCardClick = (id) => {
    fetch(`https://events-app-api-mu7z.onrender.com/events/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: '100px' }}>
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
                  id="buy-ticket"
                  onClick={() => handleAttendButtonClick(event.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    ></path>
                  </svg>
                  <span>Buy ticket</span>
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
