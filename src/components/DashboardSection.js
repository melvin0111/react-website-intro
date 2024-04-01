import React, {useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './DashboardSection.css';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom'; 
import { BsThreeDotsVertical } from 'react-icons/bs';





function DashboardSection(){
    const [mockEvents, setMockEvents] = useState([
        { id: 1, name: 'Event One', start_date: '2024-03-27', end_date: '2024-03-28', location: 'Venue A' },
        { id: 2, name: 'Event Two', start_date: '2024-04-05', end_date: '2024-04-06', location: 'Venue B'},
        // ... more events
    ]);
      // ... other useState hooks and functions
    const navigate = useNavigate(); // Hook to navigate programmatically

    // State to control the visibility of the modal
    const [showModal, setShowModal] = useState(false);

    const [ticketsData, setTicketsData] = useState({});

    const [currentEvent, setCurrentEvent] = useState(null); // state for the event being edited

    // Function to open the modal
    const handleOpenModal = () => setShowModal(true);

    // Function to close the modal
    const handleCloseModal = () => setShowModal(false);

    // Function to handle the creation of a new event
    const handleCreateEvent = (newEvent) => {
        // Update the mockEvents state with the new event
        setMockEvents([...mockEvents, { ...newEvent, id: mockEvents.length + 1 }]);
        // Close the modal after creating the event
        handleCloseModal();
    };

    const handleManageTicketsSubmit = (eventId, ticketInfo) => {
      const updatedTicketsData = {
          ...ticketsData,
          [eventId]: [...(ticketsData[eventId] || []), ticketInfo] // Append new ticket info to the array
      };
      setTicketsData(updatedTicketsData); // Update state
      setShowModal(false); // Close modal
  };
  
  const openManageTicketsModal = (eventId) => {
    // Additional logic (if needed)
    setShowModal(true);
};

  const handleDeleteEvent = (eventId) => {
    // Filter out the event to delete
    setMockEvents(mockEvents.filter(event => event.id !== eventId));
    // Close any open options menu
    setActiveEventOptions(null);
  };

    const handleEditEvent = (event) => {
        setCurrentEvent(event); // Set the current event to be edited
        setShowModal(true); // Open the modal for editing
    };
    //-------------------------------------------------------------------------(below is menu)
  // State to manage which event's options are being displayed
  const [activeEventOptions, setActiveEventOptions] = useState(null);

  // Toggle the options display
  const handleToggleOptions = (eventId) => {
    if (activeEventOptions === eventId) {
      // Clicking the same button should close the menu
      setActiveEventOptions(null);
    } else {
      setActiveEventOptions(eventId);
    }
  };

  // Close the options if clicked anywhere else on the page
  const handlePageClick = () => {
    setActiveEventOptions(null);
  };


const renderEventOptions = (eventId) => {
    if (eventId !== activeEventOptions) return null;
  
    return (
      <div className="event-options">
        <button onClick={() => handleEditEvent(eventId)}>Edit</button>
        <button onClick={() => handleDeleteEvent(eventId)}>Delete</button>
      </div>
    );
  };


return (
  <div className="events-table-container">
    <h1>Hello User!</h1>
    <button onClick={() => setShowModal(true)}>Create Event</button>
    <Modal show={showModal} onClose={() => setShowModal(false)}>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newEvent = {
          name: formData.get('name'),
          start_date: formData.get('start_date'), // Get start date
          end_date: formData.get('end_date'), // Get end date
          location: formData.get('location'),
        };
        handleCreateEvent(newEvent);
      }}>
        <input type="text" name="name" placeholder="Event Name" required />
        <input type="date" name="start_date" placeholder="Start Date" required />
        <input type="date" name="end_date" placeholder="End Date" required />
        <input type="text" name="location" placeholder="Location" required />
        <button type="submit">Submit</button>
      </form>
    </Modal>

    <table className="events-table">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Location</th>
          <th>Tickets</th> {/* Changed from 'Tickets Sold' to 'Tickets' */}
          {/* ... other headers */}
        </tr>
      </thead>
      <tbody>
        {mockEvents.map((event) => (
          <tr key={event.id}>
            <td>{event.name}</td>
            <td>{event.start_date}</td>
            <td>{event.end_date}</td>
            <td>{event.location}</td>
            <td>
              {/* Button to manage tickets */}
              <button onClick={() => setShowModal(true)}>Manage Tickets</button>
              {/* <Modal show={showModal} onClose={() => setShowModal(false)}>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const ticketInfo = {
                    ticketType: formData.get('ticketType'),
                    price: formData.get('price'),
                    quantity: formData.get('quantity'),
                    description: formData.get('description')
                };            
                }}>
                  <input type="text" name="ticketType" placeholder="Ticket Type" required />
                  <input type="number" name="price" placeholder="Price" required />
                  <input type="number" name="quantity" placeholder="Quantity" required />
                  <textarea name="description" placeholder="Description" />
                  <button type="submit">Submit</button>
                </form>
              </Modal> */}
              <Modal show={showModal} onClose={() => setShowModal(false)}>
            {/* Your existing form for creating events */}
            {/* New form for managing tickets */}
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const ticketInfo = {
                        ticketType: formData.get('ticketType'),
                        price: formData.get('price'),
                        quantity: formData.get('quantity'),
                        description: formData.get('description')
                    };
                    handleManageTicketsSubmit(currentEvent, ticketInfo);
                }}>
                    <input type="text" name="ticketType" placeholder="Ticket Type" required />
                    <input type="number" name="price" placeholder="Price" required />
                    <input type="number" name="quantity" placeholder="Quantity" required />
                    <textarea name="description" placeholder="Description" />
                    <button type="submit">Submit</button>
                </form>
            </Modal>
            </td>
            <td>
            <BsThreeDotsVertical onClick={() => handleToggleOptions(event.id)} />
                      {renderEventOptions(event.id)}
              {/* Three dots icon for more options */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}
export default DashboardSection;


// /*
// return (
//     <div className="events-table-container">
//     <h1>Hello User!</h1>
//             <button onClick={handleOpenModal}>Create Event</button>

//             <Modal show={showModal} onClose={handleCloseModal}>
//                 {/* The form is used to capture user input for creating a new event */}
//                 <form onSubmit={(e) => {
//                   e.preventDefault(); // Prevents the default form submission behavior

//                   // Creates a FormData object to easily extract form values
//                   const formData = new FormData(e.target);

//                   // Constructs a new event object using values from the form
//                   const newEvent = {
//                       name: formData.get('name'), // Gets the 'name' input value
//                       // date: formData.get('date'), // Gets the 'date' input value
//                       start_date: formData.get('start_date'),
//                       end_date: formData.get('start_date'),
//                       location: formData.get('location'), // Gets the 'location' input value
//                   };

//                   // Calls handleCreateEvent with the new event object
//                   handleCreateEvent(newEvent);
//               }}>
//                   <input type="text" name="name" placeholder="Event Name" required />
//                   <input type="date" name="date" placeholder="Date" required />
//                   <input type="date" name="date" placeholder="Date" required />
//                   <input type="text" name="location" placeholder="Location" required />
//                   <button type="submit">Submit</button>
//               </form>
//           </Modal>

  
//   <table className="events-table">
//       <thead>
//           <tr>
//               <th>Event Name</th>
//               <th>Date</th>
//               <th>Location</th>
//               <th>Tickets Sold</th>
//               {/* ... other headers */}
//           </tr>
//       </thead>
//       <tbody>
//           {mockEvents.map((event) => (
//               <tr key={event.id}>
//                   <td>{event.name}</td>
//                   <td>{event.date}</td>
//                   <td>{event.date}</td>
//                   <td>{event.location}</td>
//                   <td>{event.ticketsSold}</td>
//                   {/* <button onClick={() => handleEditEvent(event)}>Edit</button>
//                   <button onClick={() => handleDeleteEvent(event.id)}>Delete</button> */}
//                   <td> 
//                       <BsThreeDotsVertical onClick={() => handleToggleOptions(event.id)} />
//                       {renderEventOptions(event.id)}
//               </td>
//                           {/* You can replace these with icons or a menu */}
//                   {/* ... other data cells */}
//               </tr>
//           ))}
//       </tbody>
//   </table>
// </div>
//   );
// }
// */
