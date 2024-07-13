import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ConfirmationPopup from './ConfirmationPopup';
import "../BookingForm.css"

const horses = ['Thunder', 'Lightning', 'Shadow', 'Star'];

const BookingForm = () => {
  const [selectedHorse, setSelectedHorse] = useState(horses[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div>
      <h1>Book a Horse Ride</h1>
      <form onSubmit={handleSubmit} className='form-fields'>
        <label>
          Select Horse:
          <select value={selectedHorse} onChange={(e) => setSelectedHorse(e.target.value)}>
            {horses.map((horse, index) => (
              <option key={index} value={horse}>{horse}</option>
            ))}
          </select>
        </label>
        <label>
          Select Date:
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            filterDate={(date) => date.getDay() !== 0}
          />
        </label>
        <label>
          Select Time:
          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
            {['15:00 PM', '16:00 PM', '17:00 PM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM', '22:00 PM', '23:00 PM', '00:00 AM'].map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      {showPopup && <ConfirmationPopup horse={selectedHorse} name={name} />}
    </div>
  );
};

export default BookingForm;
