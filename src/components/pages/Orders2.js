// import React, { useState } from 'react' 
// import './Orders2.css'; // Assuming you have a CSS file named Orders.css in the same directory

// const Orders = () => {
  
//   // Define variables for expenses
//   const locationExpensesA = 500; // Example location expenses
//   const ticketCostsA = 300; // Example ticket costs
//   const managerSalariesA = 1000; // Example manager salaries
  
//   const locationExpensesB = 500; // Example location expenses
//   const ticketCostsB = 300; // Example ticket costs
//   const managerSalariesB = 1000; // Example manager salaries
  
//   const [totalExpenses, setTotalExpenses] = useState(0);

//   // Function to calculate total expenses for an event
//   const calculateExpenses = (locationExpenses, ticketCosts, managerSalaries) => {
//     return locationExpenses + ticketCosts + managerSalaries;
//   };

//   // Event handler to calculate and display total expenses when an event is clicked
//     const handleEventClick = (locationExpenses, ticketCosts, managerSalaries) => {
//     const expenses = calculateExpenses(locationExpenses, ticketCosts, managerSalaries);
//     setTotalExpenses(expenses);
//   };

//     return (
//         <div className="container">
//         <h1>Orders</h1>
//         <div className="order" onClick={() => handleEventClick(locationExpensesA, ticketCostsA, managerSalariesA)}>
//           <div className="order-details">
//             <div className="event-info">
//               <div className="order-header">Event #1</div>
//               <div className="order-description">
//                 <p>Location Expenses: ${locationExpensesA}</p>
//                 <p>Ticket Costs: ${ticketCostsA}</p>
//                 <p>Manager Salaries: ${managerSalariesA}</p>
//               </div>
//             </div>
//             {/* Display total expenses for this event */}
//             <div className="total-expenses">
//               <h2>Total Expenses</h2>
//               <p>Total: ${totalExpenses}</p>
//             </div>
//           </div>
//         </div>
  
//         <div className="order" onClick={() => handleEventClick(locationExpensesB, ticketCostsB, managerSalariesB)}>
//           <div className="order-details">
//             <div className="event-info">
//               <div className="order-header">Event #2</div>
//               <div className="order-description">
//                 <p>Location Expenses: ${locationExpensesB}</p>
//                 <p>Ticket Costs: ${ticketCostsB}</p>
//                 <p>Manager Salaries: ${managerSalariesB}</p>
//               </div>
//             </div>
//             {/* Display total expenses for this event */}
//             <div className="total-expenses">
//               <h2>Total Expenses</h2>
//               <p>Total: ${totalExpenses}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

// export default Orders;

import React from 'react';
import './Orders2.css'; // Import your CSS file

const OrdersPage = () => {
  // Sample event data
  const events = [
    { name: 'Event 1', location: 'Location 1', ticketCost: 50, managerPayment: 100 },
    { name: 'Event 2', location: 'Location 2', ticketCost: 75, managerPayment: 120 },
    // Add more event data as needed
  ];

  return (
    <div className="orders-container">
    <h1>Orders</h1>
      {events.map((event, index) => (
        <div className="event-container" key={index}>
          <div className="event-details">
            <h2>{event.name}</h2>
            <div></div>
            <p>Location: {event.location}</p>
            <p>Ticket Cost: ${event.ticketCost}</p>
            <p>Manager Payment: ${event.managerPayment}</p>
          </div>
          <div className="total-expenses">
            <h2>Total Expenses</h2>
            <h4>${event.ticketCost + event.managerPayment}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
