
import React, { useState, useEffect } from 'react';

function GoalsNewForm() {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const [dataJSON, setDataJSON] = useState([]);

  useEffect(() => {
    // Load existing data from localStorage when component mounts
    const storedData = window.localStorage.getItem("goals");
    if (storedData) {
      setDataJSON(JSON.parse(storedData));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert date to local time
    const localDate = new Date(date);
    const formattedDate = localDate.toLocaleString(); // This will give date and time in local format

    const formInfo = {
      date: formattedDate,
      amount: parseFloat(amount),
      notes: notes,
      id: Date.now() // Adding a unique id for each entry
    };

    // Update state and localStorage
    const newData = [...dataJSON, formInfo];
    setDataJSON(newData);
    window.localStorage.setItem("goals", JSON.stringify(newData));

    console.log('Form submitted:', formInfo);

    // Reset form fields after submission
    setDate('');
    setAmount('');
    setNotes('');
  };

  return (
    <div className="parent">
      <h2>New Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="datetime-local"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Monetary Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="0.01"
            min="0"
            placeholder="0.00"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter any additional notes here"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default GoalsNewForm;
