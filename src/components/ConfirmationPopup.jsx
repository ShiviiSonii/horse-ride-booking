import React from 'react';
import "../ConfirmationPopup.css"

const ConfirmationPopup = ({ horse, name }) => {
  const downloadCalendarInvite = () => {
    // Function to generate and download a calendar invite
  };

  return (
    <div className="popup">
      <h2>Booking Confirmed!</h2>
      <p>Thank you, {name}. You have booked a ride with {horse}.</p>
      <button onClick={downloadCalendarInvite}>Download Calendar Invite</button>
    </div>
  );
};

export default ConfirmationPopup;
