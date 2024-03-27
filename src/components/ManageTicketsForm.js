import React from 'react'

const ManageTicketsForm = ({ onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        {/* Add your input fields for ticket management here */}
        <input type="text" name="ticketType" placeholder="Ticket Type" required />
        <input type="number" name="quantity" placeholder="Quantity" required />
        <input type="number" name="price" placeholder="Price" required />
        <textarea name="description" placeholder="Description"></textarea>
        <button type="submit">Save Tickets</button>
      </form>
    );
  };
  
  export default ManageTicketsForm;