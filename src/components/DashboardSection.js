import React, {useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './DashboardSection.css';
import Modal from './Modal';





function DashboardSection(){
    const [mockEvents, setMockEvents] = useState([
        { id: 1, name: 'Event One', date: '2024-03-27', location: 'Venue A', ticketsSold: 100 },
        { id: 2, name: 'Event Two', date: '2024-04-05', location: 'Venue B', ticketsSold: 150 },
        // ... more events
    ]);


    // State to control the visibility of the modal
    const [showModal, setShowModal] = useState(false);

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
                    {/* ... other data cells */}
                </tr>
            ))}
        </tbody>
    </table>
</div>
    );
}

export default DashboardSection;