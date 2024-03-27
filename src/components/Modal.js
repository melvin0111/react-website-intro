import React from 'react';
import './Modal.css'; // Make sure to create a corresponding CSS file


/* 
A modal blocks interaction with the rest of the application, forcing the user to take action.
As such, it should be used sparingly—only when the app requires user input before it can continue.
https://mui.com/base-ui/react-modal/
We're making a popover
*/
const Modal = ({ show, onClose, children }) => {
    // If 'show' is false, don't render the modal at all
    if (!show) {
        return null;
    }

    return (
        // Modal backdrop that covers the entire screen
        <div className="modal-backdrop">
            {/* Modal content container */}
            <div className="modal-content">
                {children} 
                {/* children prop allows for any content to be placed inside the modal */}
                
                {/* Close button to hide the modal */}
                {/* Triggers the 'onClose' function passed as a prop when clicked */}
                <button onClick={onClose}>Close</button> 
            </div>
        </div>
    );
};


export default Modal;
