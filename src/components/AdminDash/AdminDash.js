// import React, { useState, useEffect } from 'react';

// const EventsComponent = () => {
//   const [events, setEvents] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     image: '',
//     venue: '',
//     date: '',
//     category: ''
//   });

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await fetch('/events');
//       const data = await response.json();
//       setEvents(data);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     }
//   };

//   const createEvent = async (eventParams) => {
//     try {
//       const response = await fetch('/events', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(eventParams)
//       });
//       const data = await response.json();
//       setEvents([...events, data]);
//     } catch (error) {
//       console.error('Error creating event:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createEvent(formData);
//     setFormData({
//       name: '',
//       description: '',
//       image: '',
//       venue: '',
//       date: '',
//       category: ''
//     });
//   };

//   return (
//     <div>
//       <h1>Events</h1>
//       <button onClick={fetchEvents}>Refresh</button>

//       <h2>Create Event</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <div>
//           <label>Image:</label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Venue:</label>
//           <input
//             type="text"
//             name="venue"
//             value={formData.venue}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Category:</label>
//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Create</button>
//       </form>

//       <h2>Event List</h2>
//       {events.map((event) => (
//         <div key={event.id}>
//           <h3>{event.name}</h3>
//           <p>{event.description}</p>
//           <button onClick={() => updateEvent(event.id, { name: 'Updated Event' })}>
//             Update
//           </button>
//           <button onClick={() => deleteEvent(event.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventsComponent;
