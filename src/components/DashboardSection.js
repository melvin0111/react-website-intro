import React, {useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './DashboardSection.css';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom'; 
import { BsThreeDotsVertical } from 'react-icons/bs';





function DashboardSection(){
    const [mockEvents, setMockEvents] = useState([
        { id: 1, name: 'Event One', date: '2024-03-27', location: 'Venue A', ticketsSold: 100 },
        { id: 2, name: 'Event Two', date: '2024-04-05', location: 'Venue B', ticketsSold: 150 },
        // ... more events
    ]);
      // ... other useState hooks and functions
    const navigate = useNavigate(); // Hook to navigate programmatically

    // State to control the visibility of the modal
    const [showModal, setShowModal] = useState(false);

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

      // Function to navigate to the Manage Tickets page
  const handleManageTickets = (eventId) => {
    // Navigate to the Manage Tickets page with the event ID
    navigate(`/dashboard/tickets/${eventId}`);
  };

// old delete function
    // const handleDeleteEvent = (eventId) => {
    //     setMockEvents(mockEvents.filter(event => event.id !== eventId));
    // };
  // Function to delete an event
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

  // Render the options for a specific event OLD ONE
//   const renderEventOptions = (eventId) => {
//     if (eventId !== activeEventOptions) return null;
    
//     return (
//       <div className="event-options">
//         <button onClick={() => console.log("Manage tickets for", eventId)}>Manage Tickets</button>
//         <button onClick={() => console.log("Edit", eventId)}>Edit</button>
//         <button onClick={() => console.log("Delete", eventId)}>Delete</button>
//       </div>
//     );
//   };

const renderEventOptions = (eventId) => {
    if (eventId !== activeEventOptions) return null;
  
    return (
      <div className="event-options">
        <button onClick={() => handleManageTickets(eventId)}>Manage Tickets</button>
        <button onClick={() => handleEditEvent(eventId)}>Edit</button>
        <button onClick={() => handleDeleteEvent(eventId)}>Delete</button>
      </div>
    );
  };

return (
    <div className="events-table-container">
    <h1>Hello User!</h1>
            <button onClick={handleOpenModal}>Create Event</button>

            <Modal show={showModal} onClose={handleCloseModal}>
                {/* The form is used to capture user input for creating a new event */}
                <form onSubmit={(e) => {
                    e.preventDefault(); // Prevents the default form submission behavior

                    // Creates a FormData object to easily extract form values
                    const formData = new FormData(e.target);

                    // Constructs a new event object using values from the form
                    const newEvent = {
                        name: formData.get('name'), // Gets the 'name' input value
                        date: formData.get('date'), // Gets the 'date' input value
                        location: formData.get('location'), // Gets the 'location' input value
                        ticketsSold: formData.get('ticketsSold') // Gets the 'ticketsSold' input value
                    };

                    // Calls handleCreateEvent with the new event object
                    handleCreateEvent(newEvent);
                }}>
                    <input type="text" name="name" placeholder="Event Name" required />
                    <input type="date" name="date" placeholder="Date" required />
                    <input type="text" name="location" placeholder="Location" required />
                    <input type="number" name="ticketsSold" placeholder="Tickets Sold" required />
                    <button type="submit">Submit</button>
                </form>
            </Modal>

    
    <table className="events-table">
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Tickets Sold</th>
                {/* ... other headers */}
            </tr>
        </thead>
        <tbody>
            {mockEvents.map((event) => (
                <tr key={event.id}>
                    <td>{event.name}</td>
                    <td>{event.date}</td>
                    <td>{event.location}</td>
                    <td>{event.ticketsSold}</td>
                    {/* <button onClick={() => handleEditEvent(event)}>Edit</button>
                    <button onClick={() => handleDeleteEvent(event.id)}>Delete</button> */}
                    <td> 
                        <BsThreeDotsVertical onClick={() => handleToggleOptions(event.id)} />
                        {renderEventOptions(event.id)}
                </td>
                            {/* You can replace these with icons or a menu */}
                    {/* ... other data cells */}
                </tr>
            ))}
        </tbody>
    </table>
</div>
    );
}

export default DashboardSection;